import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const cli = fileURLToPath(new URL('./theme.mjs', import.meta.url));
const run = (args, env = {}) => spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8', env: { ...process.env, ...env } });
const entry = (extra = {}) => ({
  shape: 'Workbench', theme: 'Coral', axes: 'light/grotesk-sans/warm', hero: 'Stage',
  nav: 'edge-aligned', footer: 'mast', imagery: 'product', entry: 'sign up',
  fingerprint: 'Left-margin|Single column|Hairline|Solid|Margin-aligned|None',
  sections: ['Hero', 'Pinned', 'Table'], signature: 'the invoice chasing', prompt: 'test',
  audience: 'professional', energy: 1, density: 2, forms: ['table'], mechanism: 'transformation',
  rejected: ['artifact', 'simulation'], idea: 'transformation/table/1/2', ...extra,
});

test('validate accepts a theme with either LF or CRLF line endings', () => {
  const source = readFileSync(new URL('../references/themes/hum.md', import.meta.url), 'utf8').replace(/\r\n/g, '\n');
  const cli = fileURLToPath(new URL('./theme.mjs', import.meta.url));
  const dir = mkdtempSync(join(tmpdir(), 'hallmark-theme-'));
  try {
    for (const [name, text] of [['lf', source], ['crlf', source.replace(/\n/g, '\r\n')]]) {
      assert.ok(Buffer.byteLength(text) < 8000, 'fixture must stay below the independent size limit');
      const file = join(dir, `${name}.md`);
      writeFileSync(file, text);
      const result = spawnSync(process.execPath, [cli, 'validate', file], { encoding: 'utf8' });
      assert.equal(result.status, 0, `${name}: ${result.stdout}${result.stderr}`);
      assert.match(result.stdout, /: ok \(Hum,/);
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('validate rejects an invalid Build hint in a CRLF file, like it does in LF', () => {
  const source = readFileSync(new URL('../references/themes/hum.md', import.meta.url), 'utf8').replace(/\r\n/g, '\n');
  const at = source.indexOf('```css', source.indexOf('## Build hint')) + '```css\n'.length;
  const bad = `${source.slice(0, at)}  color: black;\n${source.slice(at)}`;
  const dir = mkdtempSync(join(tmpdir(), 'hallmark-theme-crlf-'));
  try {
    for (const [name, text] of [['lf', bad], ['crlf', bad.replace(/\n/g, '\r\n')]]) {
      const file = join(dir, `${name}.md`);
      writeFileSync(file, text);
      const result = spawnSync(process.execPath, [cli, 'validate', file], { encoding: 'utf8' });
      assert.equal(result.status, 1, `${name}: ${result.stdout}${result.stderr}`);
      assert.match(result.stdout, /named colour black in the build hint/, `${name}: ${result.stdout}`);
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('profile takes the energy ceiling and raises density for reference content', () => {
  const pro = run(['profile', '--niche', 'professional', '--brand', '3', '--task', '2', '--content', 'comparison', '--json']);
  assert.equal(pro.status, 0, pro.stderr);
  const p = JSON.parse(pro.stdout);
  assert.equal(p.energy, 1, 'brand 3 cannot raise a professional ceiling above 1');
  assert.equal(p.density, 2, 'a comparison table keeps a professional page at Working');

  const kids = run(['profile', '--niche', 'kids', '--json']);
  const k = JSON.parse(kids.stdout);
  assert.equal(k.energy, 3, 'kids can spend the full ceiling');
  assert.equal(k.density, 1, 'kids defaults to Edited');

  const ops = run(['profile', '--niche', 'ops', '--brand', '3', '--task', '3', '--json']);
  assert.equal(JSON.parse(ops.stdout).energy, 0, 'ops stays sober whatever the brand or task asks for');
});

test('draw deals an audience, a content form and three mechanism sketches, clearing recent ones', () => {
  const dir = mkdtempSync(join(tmpdir(), 'hallmark-draw-'));
  const log = join(dir, 'log.json');
  writeFileSync(log, JSON.stringify([{ forms: ['timeline'], mechanism: 'transformation', shape: 'Letter', date: '2026-01-01' }]));
  try {
    const r = run(['draw', '--material', 'product', '--job', 'sign up', '--theme', 'coral', '--niche', 'professional', '--content', 'sequence', '--seed', 'abc123', '--json', '--log', log, '--no-global']);
    assert.equal(r.status, 0, r.stderr);
    const d = JSON.parse(r.stdout);
    assert.equal(d.niche, 'professional');
    assert.equal(d.energy, 1);
    assert.equal(d.density, 2);
    assert.equal(d.content, 'sequence');
    assert.notEqual(d.form, 'timeline', 'the recent form is cleared');
    assert.ok(d.sketches.length === 3, 'three mechanisms are sketched');
    assert.ok(!d.sketches.includes('transformation'), 'the recent mechanism is cleared');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('log records the audience, idea and form fields, and derives the idea fingerprint when it is absent', () => {
  const dir = mkdtempSync(join(tmpdir(), 'hallmark-log-'));
  const log = join(dir, 'log.json');
  try {
    const e = entry({ idea: undefined });
    const r = run(['log', '--entry', JSON.stringify(e), '--log', log, '--no-global']);
    assert.equal(r.status, 0, r.stderr);
    const saved = JSON.parse(readFileSync(log, 'utf8'))[0];
    assert.equal(saved.audience, 'professional');
    assert.equal(saved.energy, 1);
    assert.equal(saved.density, 2);
    assert.deepEqual(saved.forms, ['table']);
    assert.equal(saved.mechanism, 'transformation');
    assert.deepEqual(saved.rejected, ['artifact', 'simulation']);
    assert.equal(saved.idea, 'transformation/table/1/2');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('the global ledger is written with --global and read alongside the project ledger', () => {
  const home = mkdtempSync(join(tmpdir(), 'hallmark-home-'));
  const dir = mkdtempSync(join(tmpdir(), 'hallmark-local-'));
  const env = { USERPROFILE: home, HOME: home };
  try {
    const g = run(['log', '--entry', JSON.stringify(entry({ prompt: 'global build' })), '--global'], env);
    assert.equal(g.status, 0, g.stderr);
    const globalPath = join(home, '.hallmark', 'log.json');
    assert.equal(JSON.parse(readFileSync(globalPath, 'utf8'))[0].prompt, 'global build');

    const log = join(dir, 'log.json');
    writeFileSync(log, '[]');
    const d = run(['draw', '--material', 'product', '--job', 'sign up', '--theme', 'coral', '--niche', 'professional', '--seed', 'abc123', '--json', '--log', log], env);
    assert.equal(d.status, 0, d.stderr);
    assert.ok(!JSON.parse(d.stdout).sketches.includes('transformation'), 'the global ledger clears its recent mechanism');
  } finally {
    rmSync(home, { recursive: true, force: true });
    rmSync(dir, { recursive: true, force: true });
  }
});
