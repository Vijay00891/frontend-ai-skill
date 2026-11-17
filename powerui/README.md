# PowerUI

**A design skill for AI coding agents: pages that look made, not generated.**

`2.2.0` | MIT | Node 18+ | [full documentation](https://github.com/Vijay00891/frontend-ai-skill)

PowerUI installs a complete design workflow into Claude Code, Codex CLI, Cursor or OpenCode. It is a process, not a component library: ask once, read the project, choose a direction, build one clear idea, and prove the result with a report.

The npm package is named `powerui-skill`. Its installer command is `powerui`. Normal use stays one command: `/powerui <prompt>`. The skill runs project fit, build, checks, fixes and the proof report internally; you do not run a second command to test, screenshot or report.

The repository also carries original material: the Receiver theme and the Harbor Radio proof page. They sit beside the inherited Hallmark themes and examples, clearly separated in the repository. The npm package includes the Receiver theme; the proof page lives in the repository's `examples/` folder.

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

PowerUI produces plain HTML and CSS with a `tokens.css`, a `base.css`, and a PowerUI stamp at the top of the stylesheet. In a framework project, it reuses the project's tokens and appends to its stylesheet instead.

It also writes `.powerui/contract.json` after the project scan and `.powerui/proof.json` plus a readable proof summary after the sweep. The final message reports the proof verdict, which checks ran or were skipped, and any unresolved finding with its file and line. You do not need to run the sweep yourself; if something fails, ask PowerUI to fix it and it reruns the proof.

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
references/          automatic flow, layout, craft, genres, imagery, niche,
                     information forms, 21 macrostructures, 46 theme definitions
                     (45 inherited, Receiver original) and pictures, gates
scripts/             fit, theme deal/draw/scaffold/log, sloplint, proof, capture,
                     picture, installer, checks
agents/openai.yaml   Codex/agent metadata
LICENSE              MIT
```

The repository also carries four inherited static proof pages, one original proof page and the full development notes:

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

**Rendered checks are skipped:** `--render` needs Chrome or Chromium and `puppeteer-core`. Set `POWERUI_PUPPETEER` to a folder containing `node_modules/puppeteer-core` and `CHROME_PATH` to the browser if auto-detection misses. The proof report says when this happens; it never calls a skipped render a pass.

## License and attribution

MIT. See [LICENSE](LICENSE). Copyright (c) 2026 PowerUI contributors.

PowerUI began from Hallmark, the original design skill by Nutlope and contributors. Their copyright notice and the MIT permission notice are preserved in [LICENSE](LICENSE). The 45 inherited themes and the four inherited examples remain Hallmark material; the Receiver theme, the Harbor Radio proof page, the project-fit contract and the proof report are original PowerUI work. See [ATTRIBUTION.md](https://github.com/Vijay00891/frontend-ai-skill/blob/main/ATTRIBUTION.md) for the exact split.

PowerUI is powered by Together AI. The example pages load type from Google Fonts and Fontshare under those providers' terms; no font files are bundled. No analytics or backend are included.
