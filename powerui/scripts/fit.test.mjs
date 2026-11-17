import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const cli = fileURLToPath(new URL('./fit.mjs', import.meta.url));
const run = (args) => spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8' });

function fixture() {
  const dir = mkdtempSync(join(tmpdir(), 'powerui-fit-'));
  mkdirSync(join(dir, 'app'), { recursive: true });
  writeFileSync(join(dir, 'package.json'), JSON.stringify({
    name: 'fit-fixture',
    version: '1.0.0',
    dependencies: { next: '^15.0.0', react: '^19.0.0' },
    devDependencies: { tailwindcss: '^4.0.0' },
  }));
  writeFileSync(join(dir, 'package-lock.json'), '{"lockfileVersion":3}\n');
  writeFileSync(join(dir, 'app', 'globals.css'), `:root {
  --color-ink: #171717;
  --color-paper: #fafafa;
  --font-body: "Geist", sans-serif;
  --text-lg: 1.25rem;
  --space-4: 1rem;
  --dur-fast: 120ms;
}
body { color: var(--color-ink); font-family: "Geist", sans-serif; }
@media (prefers-reduced-motion: reduce) { * { animation: none; } }
`);
  writeFileSync(join(dir, 'index.html'), `<!doctype html>
<html><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400&display=swap" rel="stylesheet">
</head><body><h1>Fixture</h1></body></html>
`);
  writeFileSync(join(dir, 'app', 'font.ts'), `import { Geist } from "next/font/google";\nexport const geist = Geist({ subsets: ["latin"] });\n`);
  return dir;
}

test('fit scans framework, tokens, type, fonts and writes the contract', () => {
  const dir = fixture();
  try {
    const result = run(['scan', '--root', dir, '--out', join(dir, '.powerui'), '--json']);
    assert.equal(result.status, 0, result.stderr);
    const c = JSON.parse(result.stdout);
    assert.equal(c.project.name, 'fit-fixture');
    assert.ok(c.project.frameworks.includes('Next.js'));
    assert.ok(c.project.frameworks.includes('Tailwind CSS'));
    assert.equal(c.project.packageManager, 'npm');
    assert.ok(c.tokens.colors.some((x) => x.name === '--color-ink' && x.value === '#171717'));
    assert.ok(c.tokens.type.some((x) => x.name === '--text-lg'));
    assert.ok(c.tokens.spacing.some((x) => x.name === '--space-4'));
    assert.ok(c.tokens.motion.some((x) => x.name === '--dur-fast'));
    assert.ok(c.fonts.some((x) => x.family === 'Geist'));
    assert.ok(c.fonts.some((x) => x.family === 'Newsreader'));
    assert.deepEqual(c.preserve, ['palette', 'fonts', 'type scale', 'spacing', 'motion']);
    assert.ok(existsSync(join(dir, '.powerui', 'contract.json')));
    assert.match(readFileSync(join(dir, '.powerui', 'contract.md'), 'utf8'), /PowerUI design contract/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('fit records a design lock and never confuses a type token with a colour', () => {
  const dir = mkdtempSync(join(tmpdir(), 'powerui-fit-lock-'));
  try {
    writeFileSync(join(dir, 'design.md'), '# Locked\n');
    writeFileSync(join(dir, 'app.css'), ':root { --text-sm: 0.875rem; --color-ink: #111; }\n');
    const result = run(['scan', '--root', dir, '--out', join(dir, '.powerui'), '--json']);
    assert.equal(result.status, 0, result.stderr);
    const c = JSON.parse(result.stdout);
    assert.equal(c.project.designLock, 'design.md');
    assert.ok(c.tokens.type.some((x) => x.name === '--text-sm'));
    assert.ok(!c.tokens.colors.some((x) => x.name === '--text-sm'));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
