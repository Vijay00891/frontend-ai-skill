import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const cli = fileURLToPath(new URL('./proof.mjs', import.meta.url));

test('proof writes a report even when the static sweep finds failures', () => {
  const dir = mkdtempSync(join(tmpdir(), 'powerui-proof-'));
  try {
    mkdirSync(join(dir, 'out'), { recursive: true });
    writeFileSync(join(dir, 'index.html'), '<!doctype html><html><body><h1>Fixture</h1></body></html>\n');
    const result = spawnSync(process.execPath, [
      cli, join(dir, 'index.html'), '--no-render', '--out', join(dir, 'out'),
      '--contract', join(dir, 'missing-contract.json'), '--json',
    ], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const report = JSON.parse(result.stdout);
    assert.equal(report.tool, 'PowerUI Proof');
    assert.equal(report.verdict, 'failed');
    assert.ok(report.summary.fails > 0);
    assert.ok(report.findings.length > 0);
    assert.equal(report.contract.found, false);
    assert.ok(existsSync(join(dir, 'out', 'proof.json')));
    assert.match(readFileSync(join(dir, 'out', 'proof.md'), 'utf8'), /Verdict: failed/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('proof reports a clean static fixture with a contract', () => {
  const dir = mkdtempSync(join(tmpdir(), 'powerui-proof-clean-'));
  try {
    mkdirSync(join(dir, 'out'), { recursive: true });
    writeFileSync(join(dir, 'contract.json'), JSON.stringify({
      tokens: { colors: [{ name: '--color-ink' }], fonts: [], type: [], spacing: [], motion: [] },
      preserve: ['palette'],
    }));
    writeFileSync(join(dir, 'styles.css'), ':root { --color-ink: #111; }\nbody { color: var(--color-ink); }\n');
    writeFileSync(join(dir, 'index.html'), '<!doctype html><html><body><h1>Fixture</h1></body></html>\n');
    const result = spawnSync(process.execPath, [
      cli, join(dir, 'index.html'), '--no-render', '--out', join(dir, 'out'),
      '--contract', join(dir, 'contract.json'), '--json',
    ], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const report = JSON.parse(result.stdout);
    assert.equal(report.contract.found, true);
    assert.equal(report.contract.tokensAvailable, 1);
    assert.equal(report.contract.tokensUsed, 1);
    assert.equal(report.summary.render, 'off');
    assert.ok(report.screenshots.length === 0);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
