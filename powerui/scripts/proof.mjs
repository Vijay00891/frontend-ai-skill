#!/usr/bin/env node
// PowerUI Proof: turn the sweep into a durable evidence report.
// This is an internal agent tool. Users install once and run /powerui; they never
// need to run sloplint, proof.mjs or a screenshot command themselves.
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname, extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const has = (k) => args.includes('--' + k);
const flag = (k, d = null) => {
  const i = args.indexOf('--' + k);
  const v = i >= 0 ? args[i + 1] : undefined;
  return v !== undefined && !String(v).startsWith('--') ? v : d;
};
const VALUED = new Set(['genre', 'scope', 'url', 'out', 'contract', 'title']);
const paths = [];
const urls = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--help' || a === '-h') {
    console.log(`usage: node proof.mjs <file-or-dir ...> [--genre <g>] [--scope page|component|app] [--url <url>] [--out <dir>] [--contract <file>] [--no-render] [--json]

Runs the PowerUI sweep and writes .powerui/proof.json and .powerui/proof.md.
The agent runs this at the end of /powerui; it is not a user-facing command.
--render is on by default. Use --no-render only for a static-only fallback.`);
    process.exit(0);
  }
  if (a === '--url') { const u = args[++i]; if (u) urls.push(u); continue; }
  if (a === '--genre' || a === '--scope' || a === '--out' || a === '--contract' || a === '--title') { i++; continue; }
  if (a === '--json' || a === '--no-render' || a === '--render') continue;
  if (a.startsWith('--')) { console.error(`proof.mjs: unknown option ${a}`); process.exit(2); }
  paths.push(a);
}
if (!paths.length && !urls.length) {
  console.error('proof.mjs: name at least one file, folder or --url');
  process.exit(2);
}
const genre = flag('genre', '');
const scope = flag('scope', 'page');
const title = flag('title', 'PowerUI proof');
const outDir = resolve(flag('out', join(process.cwd(), '.powerui')));
const contractPath = resolve(flag('contract', join(process.cwd(), '.powerui', 'contract.json')));
const render = !has('no-render');

const lintArgs = [join(HERE, 'sloplint.mjs'), ...paths];
if (urls.length) for (const u of urls) lintArgs.push('--url', u);
if (genre) lintArgs.push('--genre', genre);
if (scope) lintArgs.push('--scope', scope);
if (render) lintArgs.push('--render');
lintArgs.push('--json');

const started = Date.now();
const result = spawnSync(process.execPath, lintArgs, {
  encoding: 'utf8',
  maxBuffer: 64 * 1024 * 1024,
  timeout: 240000,
  env: process.env,
});
const stdout = String(result.stdout || '');
const stderr = String(result.stderr || '');
let lint = null;
try {
  const first = stdout.indexOf('{');
  const last = stdout.lastIndexOf('}');
  if (first >= 0 && last > first) lint = JSON.parse(stdout.slice(first, last + 1));
} catch { /* report the raw error below */ }

function walkPng(dir, out = []) {
  if (!existsSync(dir)) return out;
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walkPng(full, out);
    else if (entry.isFile() && extname(entry.name).toLowerCase() === '.png') out.push(full);
  }
  return out;
}
const shotRoots = new Set();
for (const p of paths) {
  const abs = resolve(p);
  try {
    const st = statSync(abs);
    shotRoots.add(join(st.isDirectory() ? abs : dirname(abs), '.powerui', 'shots'));
  } catch { /* sloplint reports the missing target */ }
}
if (urls.length) shotRoots.add(join(process.cwd(), '.powerui', 'shots'));
const screenshots = [...shotRoots].flatMap((dir) => walkPng(dir))
  .filter((file, i, all) => all.indexOf(file) === i)
  .map((file) => relative(process.cwd(), file).replace(/\\/g, '/'));

let contract = { found: false, path: relative(process.cwd(), contractPath).replace(/\\/g, '/') };
if (existsSync(contractPath)) {
  try {
    const raw = JSON.parse(readFileSync(contractPath, 'utf8'));
    const tokenNames = new Set([
      ...(raw.tokens?.colors || []).map((x) => x.name),
      ...(raw.tokens?.fonts || []).map((x) => x.name),
      ...(raw.tokens?.type || []).map((x) => x.name),
      ...(raw.tokens?.spacing || []).map((x) => x.name),
      ...(raw.tokens?.motion || []).map((x) => x.name),
    ].filter(Boolean));
    const used = new Set();
    const sourceFiles = [];
    for (const p of paths) {
      const abs = resolve(p);
      const st = existsSync(abs) ? statSync(abs) : null;
      if (!st) continue;
      if (st.isDirectory()) {
        const stack = [abs];
        while (stack.length && sourceFiles.length < 300) {
          const dir = stack.pop();
          let entries = [];
          try { entries = readdirSync(dir, { withFileTypes: true }); } catch { continue; }
          for (const entry of entries) {
            if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
            const full = join(dir, entry.name);
            if (entry.isDirectory()) stack.push(full);
            else if (/\.(css|html|jsx|tsx|vue|svelte|astro)$/i.test(entry.name)) sourceFiles.push(full);
          }
        }
      } else {
        sourceFiles.push(abs);
        // A page is usually HTML plus sibling tokens/base/stylesheets. Read the
        // sibling styles so token usage is measured against the real page, not
        // just the markup file.
        try {
          for (const entry of readdirSync(dirname(abs), { withFileTypes: true })) {
            if (entry.isFile() && /\.(css|html|jsx|tsx|vue|svelte|astro)$/i.test(entry.name)) {
              sourceFiles.push(join(dirname(abs), entry.name));
            }
          }
        } catch { /* keep the target file */ }
      }
    }
    for (const file of sourceFiles.slice(0, 300)) {
      let src = '';
      try { src = readFileSync(file, 'utf8'); } catch { continue; }
      for (const m of src.matchAll(/var\((--[\w-]+)\)/g)) used.add(m[1]);
    }
    contract = {
      found: true,
      path: relative(process.cwd(), contractPath).replace(/\\/g, '/'),
      preserve: raw.preserve || [],
      tokensAvailable: tokenNames.size,
      tokensUsed: [...used].filter((name) => tokenNames.has(name)).length,
      tokensReferenced: used.size,
    };
  } catch {
    contract = { found: true, path: relative(process.cwd(), contractPath).replace(/\\/g, '/'), error: 'contract.json is not valid JSON' };
  }
}

const summary = lint?.summary || {};
const findings = Array.isArray(lint?.findings) ? lint.findings : [];
const fails = Number(summary.fails || 0);
const reflex = Number(summary.reflex || 0);
const warns = Number(summary.warns || 0);
const waived = Number(summary.waived || 0);
const renderState = summary.render || (render ? 'unknown' : 'off');
const verdict = !lint ? 'error' : fails > 0 || reflex > 0 ? 'failed' : warns > 0 ? 'attention' : 'clean';
const notes = [];
if (!lint) notes.push(`sloplint produced no readable JSON${result.error ? `: ${result.error.message}` : ''}.`);
if (renderState !== 'ran' && renderState !== 'off') notes.push(`Render tier: ${renderState}. Do not claim a rendered pass.`);
if (contract.found && contract.tokensAvailable) notes.push(`Contract: ${contract.tokensUsed}/${contract.tokensAvailable} known tokens are referenced by the target.`);
if (!contract.found) notes.push('No .powerui/contract.json; the build ran without a project fit contract.');

const report = {
  tool: 'PowerUI Proof',
  version: 1,
  at: new Date().toISOString(),
  elapsedMs: Date.now() - started,
  title,
  targets: [...paths, ...urls],
  command: ['node', 'sloplint.mjs', ...lintArgs.slice(1)].join(' '),
  verdict,
  summary: {
    fails,
    reflex,
    warns,
    waived,
    render: renderState,
    files: Number(summary.files || 0),
    screenshots: screenshots.length,
    contract: contract.found ? 'found' : 'missing',
  },
  contract,
  findings,
  screenshots,
  notes,
  ...(lint ? {} : { error: stderr.trim().slice(0, 4000) || stdout.trim().slice(0, 4000) || 'no output' }),
};

const escapeCell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ').slice(0, 220);
const findingRows = findings.slice(0, 80).map((f) =>
  `| ${escapeCell(f.grade)} | ${escapeCell(f.gate)} | \`${escapeCell(f.file)}:${escapeCell(f.line)}\` | ${escapeCell(f.evidence)} | ${escapeCell(f.fix)} |`).join('\n');
const md = `# ${title}

**Verdict: ${verdict}** - ${fails} FAIL, ${reflex} REFLEX, ${warns} WARN, ${waived} waived.

- Generated: ${report.at}
- Targets: ${report.targets.map((x) => `\`${x}\``).join(', ')}
- Render: ${renderState}
- Files checked: ${report.summary.files}
- Screenshots: ${screenshots.length ? screenshots.map((x) => `\`${x}\``).join(', ') : 'none'}
- Contract: ${contract.found ? `\`${contract.path}\` (${contract.tokensUsed || 0}/${contract.tokensAvailable || 0} known tokens referenced)` : 'not found'}

## Findings

${findings.length ? `| Grade | Gate | Location | Evidence | Fix |
| --- | --- | --- | --- | --- |
${findingRows}` : 'No findings. The mechanical sweep is clean.'}

## Read this

${notes.length ? notes.map((x) => `- ${x}`).join('\n') : '- None.'}

The report is evidence, not a waiver. A missing render, a skipped check or a warning is reported as missing or warned; it is never called clean.
`;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'proof.json'), JSON.stringify(report, null, 2) + '\n');
writeFileSync(join(outDir, 'proof.md'), md);

if (has('json')) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(`PowerUI Proof - ${verdict} - ${fails} FAIL, ${reflex} REFLEX, ${warns} WARN - render ${renderState}`);
  console.log(`Report: ${relative(process.cwd(), join(outDir, 'proof.md')).replace(/\\/g, '/')}${screenshots.length ? ` - ${screenshots.length} screenshot(s)` : ''}`);
  if (notes.length) for (const note of notes) console.log(`  ${note}`);
}
// A proof report is useful even when the page fails; the agent reads the verdict.
// Exit 2 only when the report could not be produced at all.
process.exit(lint || result.status === 1 ? 0 : 2);
