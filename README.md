# Hallmark

**A design skill for AI coding agents: pages that look made, not generated.**

![Four Hallmark proof pages](examples/proofs-grid.png)

<sub>Four proof pages built with Hallmark v2.1.0. All brands, copy and data are fictional.</sub>

Hallmark is a skill for Claude Code, Codex, Cursor and OpenCode. It is a process, not a component library: ask once, read the material, deal a direction, choose one idea from the content, build, and sweep the result against a measurable floor.

Version **2.1.0** · MIT · Node 18+ · [examples](examples/) · [the skill](hallmark/SKILL.md)

[![verify](https://github.com/Vijay00891/frontend-ai-skill/actions/workflows/verify.yml/badge.svg)](https://github.com/Vijay00891/frontend-ai-skill/actions/workflows/verify.yml)

## What it does

Most generated frontends converge: the same purple gradient, three floating cards, a testimonial nobody gave. Hallmark exists to break that convergence without making the page dishonest.

- **A hard Floor.** Sixteen non-waivable rules cover tokens, motion, focus, overflow, fold, labels, honesty and the page stamp. A page that fails the Floor is not Hallmark.
- **One ask.** Material, audience, use and tone arrive in one message. If you say "go ahead", the skill infers and states what it picked; it never invents a fact.
- **A dealt direction.** Forty-five material themes (paper, ink, faces, surfaces, motion, voice) are dealt against a log so consecutive builds do not repeat. The theme sets the material; it never sets the page's content or order.
- **An idea from the content.** The skill names the content's shape, sketches three mechanisms from six options — comparison, spatial, narrative, transformation, artifact, simulation — and builds the one that fits and is furthest from the last three runs.
- **A sweep, not a vibe.** `sloplint` checks the page, the gates are walked, a fresh-context finish review asks whether the page actually shows the idea it claims, and the Picks block reports the outcome.
- **Honest proof.** No invented metrics, quotes, logos or case-study counts. Missing material is named as absent, or replaced with a library stand-in that the user can swap.

The full operating manual is [`hallmark/SKILL.md`](hallmark/SKILL.md). The references hold the layout, craft, genre, imagery, niche, information-form, gate and theme material.

## Install

The installer validates the skill first, then writes it to the harnesses it finds. It does not add dependencies to your project or modify your project files.

### From npm (no clone)

The skill is packaged as [`hallmark-skill`](https://www.npmjs.com/package/hallmark-skill). Once the package is published, direct installation is:

```sh
npx hallmark-skill --dry-run
npx hallmark-skill
```

For a permanent command:

```sh
npm install -g hallmark-skill
hallmark --dry-run
hallmark
```

`--dry-run` prints the destination and changes nothing. The real run writes:

| Harness | Install path |
| --- | --- |
| Claude Code | `~/.claude/skills/hallmark` |
| Codex CLI / Cursor | `~/.agents/skills/hallmark` |
| OpenCode | `~/.config/opencode/skills/hallmark` (or the Claude/Codex compatibility path) |

OpenCode auto-discovers the Claude Code or Codex copy when one exists. To force an explicit OpenCode copy:

```sh
npx hallmark-skill --opencode --copy
```

Pick targets explicitly with `--claude`, `--codex`, `--cursor` or `--opencode`. Use `--remove` to remove every installed copy. `--force` installs despite failed checks; only use it after reading the findings.

### From source

Use this when you want the examples or are working on the skill:

```sh
git clone https://github.com/Vijay00891/frontend-ai-skill.git
cd frontend-ai-skill/hallmark
node scripts/install.mjs --dry-run
node scripts/install.mjs
```

If no harness is detected, name one explicitly. A manual install also works: copy the whole `hallmark/` folder into your harness's skills directory, keeping `SKILL.md` at its root.

## Use

In Claude Code, Cursor or OpenCode:

```text
/hallmark a booking page for a neighborhood print studio
```

In Codex:

```text
$hallmark a booking page for a neighborhood print studio
```

Natural language works too: *"Use the Hallmark skill to design a booking page for a neighborhood print studio."*

The skill asks once for **material, audience, use and tone**, then shows a compact Picks block and builds. Say **go ahead** to let it infer those fields; it will state the inferences rather than silently guessing. Hallmark is for new pages and designs, or for an existing design only when you explicitly name it for `redesign` or `audit`.

The examples output plain HTML/CSS with a `tokens.css`, a `base.css`, a stamp in the first lines of the stylesheet, and a page that can be swept with the scripts below. In a framework project Hallmark appends to the project's stylesheet and reuses its tokens instead. No application build is required to use the examples in this repository.

## What is inside

```text
hallmark/
  SKILL.md             the flow, the Floor, the gates and the hand-off
  package.json         npm metadata and the `hallmark` command
  README.md            npm install and use instructions
  references/          layout, craft, genres, imagery, niche, information forms,
                       21 macrostructures, 45 theme definitions and pictures, gates
  scripts/             theme deal/draw/scaffold/log, sloplint, capture, picture,
                       installer, checks and tests
  agents/openai.yaml   Codex/agent metadata
  LICENSE              MIT
examples/               four static proof pages and the proof grid
```

The 45 themes are materials, not templates: Cobalt, Riso, Hum, Wayfind, Coral, Grid, Almanac, Terminal and the rest. Each theme has a `.md` contract and a `.jpg` picture. `node scripts/theme.mjs list` prints them; `node scripts/theme.mjs deal` deals a fitting set.

## Proof pages

| Page | Audience | Content form | Idea | Theme |
| --- | --- | --- | --- | --- |
| [Fieldnote](examples/professional/index.html) | professional | comparison | decision table | Cobalt |
| [Wonder Lab](examples/kids/index.html) | kids | spatial | floor plan | Hum |
| [Wayfind](examples/b2b/index.html) | B2B ops | narrative | state machine | Wayfind |
| [Two Drums](examples/studio/index.html) | general | transformation | layer stack | Riso |

The four pages deliberately use four different content forms, audiences and mechanisms. They show the range the skill is trying to protect: a comparison page should not become a floor plan, a kids' page should not become an ops console, and a print studio should not become a SaaS landing page.

Open any `index.html` directly in a browser; the pages are static and need no build. They load fonts from Google Fonts and Fontshare, so an offline browser falls back to local faces. GitHub's file view shows the source of an HTML file rather than rendering it; clone the repository or serve the folder to see the pages live.

All four brands, names, copy and data are **fictional**. There are no real client metrics, testimonials, logos or case studies in these pages. The forms submit nowhere.

The latest proof, Two Drums, ends its page sweep at **0 FAIL, 0 REFLEX, 0 WARN** and passes its 16 browser assertions. The pages are the output of the skill's gates, not hand-built showcase pages added after the fact.

## Checks

From the `hallmark/` folder:

```sh
node scripts/refcheck.mjs
node scripts/install.mjs --dry-run
node --test scripts/*.test.mjs
npm pack --dry-run
```

The install dry run runs the same reference and theme checks as a real install. At publication the suite reports 10 passing tests, 0 failing and 11 optional browser regressions skipped. The browser tests activate when `HALLMARK_PUPPETEER` and `CHROME_PATH` (capture) or `HALLMARK_TEST_PUPPETEER` and `HALLMARK_TEST_CHROME` (render regressions) are set.

For a page sweep, point `sloplint` at the page:

```sh
node scripts/sloplint.mjs path/to/index.html --genre editorial --render
```

The static lint is dependency-free. `--render` needs Chrome or Chromium and `puppeteer-core`; set `HALLMARK_PUPPETEER` to a folder containing `node_modules/puppeteer-core` and `CHROME_PATH` to the browser if auto-detection misses. The render tier writes screenshots beside the page under `.hallmark/`, which is ignored by this repository.

## Requirements

- **Node 18+** for the installer, theme tools, sloplint and checks. The npm package needs no dependencies; the static checks need no project install either.
- **A skills-capable harness**: Claude Code, Codex CLI, Cursor or OpenCode.
- **Optional:** Chrome/Chromium and `puppeteer-core` for rendered screenshots and `--render`; `TOGETHER_API_KEY` for the optional comp/image step. The core design flow works without either.

## License and attribution

MIT. See [LICENSE](LICENSE). The skill and the example pages are covered by the same license. Copyright (c) 2026 Hallmark contributors.

Hallmark is powered by Together AI. The example pages load type from Google Fonts and Fontshare under those providers' terms; no font files are bundled. No analytics or backend are included.

## Contributing

Issues and pull requests are welcome. Keep the Floor, the gates, the honesty rules and the one-ask flow intact. Do not add invented proof to the examples. Run the checks above before opening a pull request.
