# Hallmark

**A design skill for AI coding agents: pages that look made, not generated.**

Hallmark installs a complete design workflow into Claude Code, Codex CLI, Cursor or OpenCode. It is a process, not a component library: ask once, read the material, deal a direction, choose one idea from the content, build, and sweep the result against a measurable floor.

Version **2.1.0** · MIT · Node 18+ · [full documentation](https://github.com/Vijay00891/frontend-ai-skill)

## Install

No repository clone is needed. The package carries the full skill and validates it before copying anything.

```sh
npx hallmark-skill --dry-run
npx hallmark-skill
```

The dry run prints the destination and changes nothing. The real run writes the skill to every supported harness it detects:

| Harness | Install path |
| --- | --- |
| Claude Code | `~/.claude/skills/hallmark` |
| Codex CLI / Cursor | `~/.agents/skills/hallmark` |
| OpenCode | `~/.config/opencode/skills/hallmark` (or the Claude/Codex compatibility path) |

If no harness is detected, name one explicitly:

```sh
npx hallmark-skill --claude
npx hallmark-skill --codex
npx hallmark-skill --cursor
npx hallmark-skill --opencode
```

OpenCode auto-discovers the Claude Code or Codex copy when one exists. To force an explicit OpenCode copy:

```sh
npx hallmark-skill --opencode --copy
```

For a permanent command:

```sh
npm install -g hallmark-skill
hallmark --dry-run
hallmark
```

`--remove` deletes every installed copy. `--force` installs despite failed checks; only use it after reading the findings.

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

Hallmark asks once for **material, audience, use and tone**, then shows a compact Picks block and builds. Say **go ahead** to let it infer those fields; it will state the inferences rather than silently guessing.

## What gets installed

The package installs the skill, not a project:

```text
SKILL.md             the flow, the Floor, the gates and the hand-off
references/          layout, craft, genres, imagery, niche, information forms,
                     21 macrostructures, 45 theme definitions and pictures, gates
scripts/             theme deal/draw/scaffold/log, sloplint, capture, picture,
                     installer, checks
agents/openai.yaml   Codex/agent metadata
LICENSE              MIT
```

The `hallmark` command is the installer; it never adds dependencies to your project. The repository also carries four static proof pages and the full development notes:

<https://github.com/Vijay00891/frontend-ai-skill>

## Requirements

- **Node 18+** for the installer, theme tools, sloplint and checks.
- **A skills-capable harness**: Claude Code, Codex CLI, Cursor or OpenCode.
- **Optional:** Chrome/Chromium and `puppeteer-core` for rendered screenshots and `--render`; `TOGETHER_API_KEY` for the optional comp/image step. The core design flow works without either.

## License and attribution

MIT. See [LICENSE](LICENSE). The skill and the example pages are covered by the same license. Copyright (c) 2026 Hallmark contributors.

Hallmark is powered by Together AI. The example pages load type from Google Fonts and Fontshare under those providers' terms; no font files are bundled. No analytics or backend are included.
