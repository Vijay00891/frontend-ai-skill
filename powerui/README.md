# PowerUI

**A design skill for AI coding agents: pages that look made, not generated.**

`2.1.0` | MIT | Node 18+ | [full documentation](https://github.com/Vijay00891/frontend-ai-skill)

PowerUI installs a complete design workflow into Claude Code, Codex CLI, Cursor or OpenCode. It is a process, not a component library: ask once, read the material, choose a direction, build one clear idea, and sweep the result against a measurable floor.

The npm package is named `powerui-skill`. The installed command is `powerui`.

## Install

No repository clone is needed. The package carries the full skill and validates it before copying anything.

```sh
npx powerui-skill --dry-run
npx powerui-skill
```

The dry run prints the destinations and changes nothing. The real run writes the skill to every supported harness it detects:

| Harness | Install path |
| --- | --- |
| Claude Code | `~/.claude/skills/powerui` |
| Codex CLI / Cursor | `~/.agents/skills/powerui` |
| OpenCode | `~/.config/opencode/skills/powerui` or the Claude/Codex compatibility path |

If no harness is detected, name one explicitly:

```sh
npx powerui-skill --claude
npx powerui-skill --codex
npx powerui-skill --cursor
npx powerui-skill --opencode
```

OpenCode normally reads the Claude Code or Codex copy. To give it a separate copy:

```sh
npx powerui-skill --opencode --copy
```

For a permanent command:

```sh
npm install -g powerui-skill
powerui --dry-run
powerui
```

Useful installer options:

```text
--dry-run   Print the destinations and change nothing
--copy      Give OpenCode its own copy
--force     Install even if validation finds a problem
--remove    Remove every installed copy
--version   Print the PowerUI version
--help      Show the installer help
```

`--force` is only for cases where you have read the validation findings and still want to proceed.

## User guide

### Start a design

In Claude Code, Cursor or OpenCode:

```text
/powerui a booking page for a neighborhood print studio
```

In Codex:

```text
$powerui a booking page for a neighborhood print studio
```

Natural language works too: *"Use the PowerUI skill to design a booking page for a neighborhood print studio."*

For an existing design, name PowerUI explicitly:

```text
/powerui redesign path/to/page.html
/powerui audit path/to/page.html
```

`redesign` keeps the page's content and wiring while replacing the design. `audit` returns a report. Do not use PowerUI on an existing design unless you explicitly ask for one of these modes.

### Answer one ask

PowerUI asks once for four things:

- **Material:** what the page is about and what content it has.
- **Audience:** who it is for.
- **Use:** what the visitor should do.
- **Tone:** how it should feel.

It then shows a compact **Picks** block and builds. If you say **go ahead**, it infers those fields and states what it picked instead of silently guessing. It does not invent metrics, testimonials, logos, prices or case-study counts.

### Review the result

The skill checks the page with `sloplint`, walks the gates, and reports the outcome. If the page is not clean, ask PowerUI to fix the findings.

PowerUI produces plain HTML and CSS with a `tokens.css`, a `base.css`, and a PowerUI stamp at the top of the stylesheet. In a framework project, it reuses the project's tokens and appends to its stylesheet instead.

### Update or remove

Re-run the installer to replace an installed copy with the current package:

```sh
npx powerui-skill
```

If you use the global command:

```sh
npm install -g powerui-skill@latest
powerui
```

Remove every installed copy with:

```sh
npx powerui-skill --remove
```

or:

```sh
powerui --remove
```

## What gets installed

The package installs the skill, not a project. It never adds dependencies to your project.

```text
SKILL.md             the flow, the Floor, the gates and the hand-off
references/          layout, craft, genres, imagery, niche, information forms,
                     21 macrostructures, 45 theme definitions and pictures, gates
scripts/             theme deal/draw/scaffold/log, sloplint, capture, picture,
                     installer, checks
agents/openai.yaml   Codex/agent metadata
LICENSE              MIT
```

The repository also carries four static proof pages and the full development notes:

<https://github.com/Vijay00891/frontend-ai-skill>

## Requirements

- **Node 18+** for the installer, theme tools, sloplint and checks.
- **A skills-capable harness:** Claude Code, Codex CLI, Cursor or OpenCode.
- **Optional:** Chrome or Chromium and `puppeteer-core` for rendered screenshots and `--render`.
- **Optional:** `TOGETHER_API_KEY` for the optional comp/image step.

The core design flow works without the optional items.

## Troubleshooting

**No harness detected:** the installer could not find a supported harness in your home folder. Run it with `--claude`, `--codex`, `--cursor` or `--opencode`.

**PowerUI appears twice in Codex:** an older copy may still exist at `~/.codex/skills/powerui`. Run `powerui --remove`, then install again.

**Command not found:** if you did not install globally, use `npx powerui-skill` instead of `powerui`.

**Rendered checks are skipped:** `--render` needs Chrome or Chromium and `puppeteer-core`. Set `POWERUI_PUPPETEER` to a folder containing `node_modules/puppeteer-core` and `CHROME_PATH` to the browser if auto-detection misses.

## License and attribution

MIT. See [LICENSE](LICENSE). Copyright (c) 2026 PowerUI contributors.

PowerUI is a tribute to Hallmark, the original design skill by Nutlope and contributors. Their copyright notice and the MIT permission notice are preserved in [LICENSE](LICENSE); the rebrand and subsequent changes are by PowerUI contributors.

PowerUI is powered by Together AI. The example pages load type from Google Fonts and Fontshare under those providers' terms; no font files are bundled. No analytics or backend are included.
