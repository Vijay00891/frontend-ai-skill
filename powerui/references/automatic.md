# Automatic flow

The user has one command after installation:

```text
/powerui <prompt>
```

PowerUI is a skill, not a command suite. Never ask the user to run `init`, `scan`, `verify`, `test`, a screenshot command or a report command. The agent runs every step below itself and reports the result.

## 1. Fit

Before shaping the page, run:

```sh
node <skill-dir>/scripts/fit.mjs scan
```

It writes `.powerui/contract.json` and a readable contract beside it. Read the contract before choosing a direction. It is the project's existing system, not a new theme:

- Preserve the token names, faces, type scale, spacing and motion that already exist.
- A theme still supplies shape, hero posture, composition and the Floor. It does not overwrite a working project system.
- If the project has no signals, the contract says so and the normal theme deal supplies the system.
- If `design.md` exists, it wins; the contract records it and the build respects it.

Do not read the contract aloud as a second planning document. Use it; put one short line in the Picks block when it changes a choice.

## 2. Build

Run the normal flow. The contract is part of Step 0, not a second user conversation.

## 3. Proof

At the end of the build, run:

```sh
node <skill-dir>/scripts/proof.mjs <files> [--url http://localhost:<port>/<route>] --genre <genre>
```

`proof.mjs` runs the final `sloplint` sweep, keeps the screenshots where the render tier wrote them, and writes:

```text
.powerui/proof.json
.powerui/proof.md
```

It reports four things:

- **Verdict:** clean, attention or failed.
- **Findings:** every FAIL, REFLEX, WARN and waiver from the sweep.
- **Evidence:** the screenshots and the files checked.
- **Contract:** whether the project fit contract was found and how many known tokens the target references.

Then:

1. Fix every FAIL and every unwaived REFLEX.
2. Re-run `proof.mjs` after the fixes.
3. If the render tier did not run, say that in the handoff. Never call it a rendered pass.
4. Close with the plain outcome, for example:

```text
Built: 3 files. Proof: clean, 0 FAIL, 0 REFLEX, 2 WARN. Render: ran, 6 screenshots.
Report: .powerui/proof.md
```

The proof report is evidence, not a waiver. If a check did not run, the report says so. If a warning remains, the report names it. A fabricated pass is slop.

## Failure budget

One batched inspection, one fix batch, and at most one confirming round. If a finding cannot be fixed within the budget, report it with the file, line and next action. Never hide an unresolved finding in the proof report.

## What the user never sees

- A prompt to run `fit`, `sloplint`, `capture`, `proof` or a test.
- A second command to produce a screenshot or a report.
- A claim that a check ran when the tool reported that it was skipped.

The scripts are internal agent tools. The only public installation command is the package installer; the only normal invocation is `/powerui <prompt>` (`$powerui` in Codex).
