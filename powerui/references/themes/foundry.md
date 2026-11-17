---
name: Foundry
slug: foundry
genre: atmospheric
paper: dark 18 60
display: grotesk-heavy Archivo Black
accent: warm 55
posture: committed
keywords: foundry, metal, iron, cast, forge, workshop, industrial, craft, sculpture, art, commission, process, heat, anvil, molten, steel, bronze, fabrication, maker, studio
material: graphite dust, chalk marks, iron grey, safety orange, a coarse matte surface, and one hot-metal accent
photo: mono con=12
pictured: Narrative Workflow, split hero
---
# Foundry

The inside of a working foundry after the pour: graphite dust, chalk marks, iron grey, safety orange and a coarse matte surface. Archivo Black hits like a stamp; IBM Plex Sans reads the instruction; IBM Plex Mono holds dimensions, heats and dates. It is not a steampunk poster, not a black-and-orange startup, and not a grunge texture pack.

## Tokens

```css
:root {
  --color-paper: oklch(18% 0.012 60); --color-paper-2: oklch(23% 0.014 60); --color-paper-3: oklch(28% 0.016 60);
  --color-ink: oklch(92% 0.012 70); --color-ink-2: oklch(78% 0.014 65); --color-muted: oklch(64% 0.014 65);
  --color-rule: oklch(36% 0.014 60); --color-rule-2: oklch(48% 0.016 60);
  --color-accent: oklch(66% 0.19 55); --color-accent-ink: oklch(16% 0.02 55); --color-focus: oklch(75% 0.16 60);
  --color-chalk: oklch(94% 0.008 80); --color-ember: oklch(54% 0.17 40); --color-slot: oklch(26% 0.016 60);
  --font-display: "Archivo Black", ui-sans-serif, system-ui, sans-serif; --font-body: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "IBM Plex Mono", ui-monospace, monospace;
  --radius-card: 0px; --radius-small: 2px; --radius-pill: 999px; --rule-hair: 1px;
  --shadow-card: 0 0 0 1px oklch(36% 0.014 60) inset, 0 2px 0 oklch(10% 0.01 55 / 0.7);
  --tracking-display: -0.035em; --display-weight: 400;
}
```

## Type

- **Display:** Archivo Black 400, `--tracking-display`, line-height 0.96 to 1.02, sentence case, roman. It is a stamped mass, so keep a head to four short lines; never use it for labels, controls or a paragraph.
- **Body:** IBM Plex Sans 400 and 500 at 16 to 18px, line-height 1.5, `--color-ink-2` for running prose. IBM Plex Sans 600 carries labels and table heads, sentence case, untracked.
- **Outlier:** IBM Plex Mono 400 and 500 for dimensions, temperatures, dates and process numbers only, tabular; never a label, a caption or a sentence.
- **Chalk:** `--color-chalk` is for a single large figure, a cited measurement or a top rule; it is not a second text colour for whole sections.

## Surfaces

- Rules are 1px `--color-rule` in lists and 2px `--color-accent` where a block needs an edge; a chalk tick marks a measured value, not every seam.
- Radius: 0 on panels and photographs, 2px on inputs and keys, pill only on a status or a tag. Depth is flat: a 1px inset edge and a short hard cast, never a blurred glow.
- Bands: `--color-paper-2` for a process run, one `--color-paper-3` band for the open studio, and no more than one accent band a page. The accent is a mark, a control or a rule, never a field behind running text.
- Photographs: the work, not the brand: a hand at the forge, a pour, a chalked pattern, a finished surface at raking light. Mono or nearly mono, 3:2, square corners, a 1px rule; type never sits on the picture.
- Texture: a single 160px tile of neutral grain at 2 to 3% under the page, or none. No soot, no sparks, no grunge, no brushed metal.

## Range

- **A process as a numbered ledger:** four steps, each with a verb, a short note and a measured detail; rules and numbers carry it, not cards.
- **A dimension as a specimen:** one length or weight set large in the display face, the unit and the tolerance in the outlier; the figure is the evidence.
- **A material as a band:** a tight table of alloys, finishes and thicknesses, ruled edge to edge; the accent marks the active row.
- **A commission as a notice:** one invitation, one address, one date, set like a workshop sheet; no testimonial and no logo wall.

## Controls

- The pair: a safety-orange primary with `--color-accent-ink`, 48px, 2px radius; a transparent secondary with a 1px chalk border. Both sentence case in IBM Plex Sans 600.
- A choice is a row of 48px keys on `--color-paper-2`, the selected key in `--color-accent` with `--color-accent-ink`; never a floating pill on a gradient.
- Inputs are 48px, 1px `--color-rule-2` on `--color-paper`, 2px radius, focus in `--color-focus`. Links underline and take the accent only on hover.

## Motion

A rule draws once from left to right in `--dur-short` with `--ease-out`; a selected key presses in one pixel. State only, no ambient flicker, no sparks, no parallax.

## Voice

Short, exact, workshop-floor: verb first, dimension second, invitation last. No "artisanal", no "passion", no "molten potential", no exclamation marks.

## Do-nots

- Never a glowing spark, radial halo or hot blur; the heat is a colour, not a light source.
- Never a soot or rust texture, a faux rivet or a stencil headline; the material is a clean industrial sheet.
- Never orange behind running text; it is the edge, the live mark and the one primary action.
- Never a rounded card grid for the process; use the ledger, the table or a ruled notice.
- Never mono for labels, nav or buttons; mono is only a measurement, a date or a process number.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
h1, h2, h3 { font-family: var(--font-display); font-weight: var(--display-weight); letter-spacing: var(--tracking-display); line-height: 1; }
.panel { background: var(--color-paper-2); color: var(--color-ink); border: var(--rule-hair) solid var(--color-rule); box-shadow: var(--shadow-card); }
.detail { font-family: var(--font-outlier); font-variant-numeric: tabular-nums; color: var(--color-chalk); }
.rule { height: var(--rule-hair); background: var(--color-accent); }
.btn { min-height: 48px; padding: 0 var(--space-lg); border: var(--rule-hair) solid transparent; border-radius: var(--radius-small); font: 600 var(--text-sm)/1 var(--font-body); transition: background-color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out); }
.btn--primary { background: var(--color-accent); color: var(--color-accent-ink); }
.btn--secondary { background: transparent; border-color: var(--color-chalk); color: var(--color-ink); }
```
