---
name: Parcel
slug: parcel
genre: modern-minimal
paper: light 92 75
display: slab-serif Arvo
accent: warm 28
posture: restrained
keywords: library, tools, borrow, share, community, repair, workshop, shed, equipment, lend, membership, volunteer, neighbourhood, maker, garden, home, diy, circular, reuse
material: kraft board, a corrugated edge, stamp red, chalk-white labels, grey twine, and a plain utility type
photo: muted con=6
pictured: Catalogue, split hero
---
# Parcel

A parcel before it is sealed: kraft board, a corrugated edge, stamp red, chalk-white labels and a plain utility type. Arvo sets the address; Public Sans reads the list; DM Mono holds shelf marks and loan periods. It is not a craft-fair kraft aesthetic, not a shipping startup, and not a beige card grid.

## Tokens

```css
:root {
  --color-paper: oklch(92% 0.014 75); --color-paper-2: oklch(88% 0.018 75); --color-paper-3: oklch(83% 0.02 75);
  --color-ink: oklch(24% 0.018 55); --color-ink-2: oklch(34% 0.018 55); --color-muted: oklch(48% 0.016 60);
  --color-rule: oklch(78% 0.014 70); --color-rule-2: oklch(64% 0.016 65);
  --color-accent: oklch(50% 0.19 28); --color-accent-ink: oklch(98% 0.008 70); --color-focus: oklch(46% 0.18 28);
  --color-kraft: oklch(82% 0.045 75); --color-label: oklch(96% 0.01 75); --color-slot: oklch(88% 0.03 75);
  --font-display: "Arvo", ui-serif, Georgia, serif; --font-body: "Public Sans", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "DM Mono", ui-monospace, monospace;
  --radius-card: 2px; --radius-small: 2px; --radius-pill: 999px; --rule-hair: 1px;
  --shadow-card: 0 0 0 1px oklch(72% 0.02 70) inset, 0 1px 0 oklch(100% 0.004 75 / 0.55) inset;
  --tracking-display: -0.025em; --display-weight: 700;
}
```

## Type

- **Display:** Arvo 700, `--tracking-display`, line-height 1.0 to 1.06, sentence case, roman. It is a printed address, not a poster; keep a head to four lines and never set a label or control in it.
- **Body:** Public Sans 400 and 500 at 16 to 18px, line-height 1.55, `--color-ink-2` for running prose. Public Sans 600 carries labels, table heads and nav, sentence case, untracked.
- **Outlier:** DM Mono 400 and 500 for shelf marks, loan periods and measurements only, tabular; never a label, a caption or a sentence.
- **Stamp:** stamp red is the primary action, the active row and the one section rule; it is never running text or a large field behind prose.

## Surfaces

- Rules are 1px `--color-rule` in listings and 2px `--color-accent` at the top of a section that needs an edge; a label line is 1px `--color-rule-2` and a short red tick, not a full badge.
- Radius: 2px on panels, cards and inputs, pill only on a tag or a status. Depth is a flat inset edge and a chalk top light, never a floating blur.
- Bands: one `--color-paper-2` band for the index and one `--color-kraft` band for the open hours; the red stays a stamp-sized mark, a rule or a control. Two bands a page at most.
- Photographs: a tool wall, a repair bench, a hand on a handle, a shelf of borrowed things. Muted, 3:2, 2px corners, 1px rule; type never sits on the picture.
- Texture: none, or the 3% neutral grain in `texture.md`; no corrugated cardboard photography, no string, no tape, no kraft collage.

## Range

- **An index as a list:** shelf mark, tool, one use, loan period, ruled edge to edge; the table is the page's signature, not a row of cards.
- **A shelf mark as a figure:** one short mark set large in the outlier, with the section name beside it; a number drawn as type, not a sticker.
- **A process as a numbered strip:** join, choose, borrow, return; four steps on one line with a red rule and no icons.
- **A label as a text block:** a name, a use and a period on a chalk-white field, read like a printed label; never a fake barcode or shipping sticker.

## Controls

- The pair: a stamp-red primary with `--color-accent-ink`, 48px, 2px radius; a transparent secondary with a 1px ink border. Both sentence case in Public Sans 600.
- A choice is a row of 48px keys on `--color-paper-2`, the selected key in `--color-accent` with `--color-accent-ink`; never a floating pill on a gradient.
- Inputs are 48px, 1px `--color-rule-2` on `--color-paper`, 2px radius, focus in `--color-focus`. Links underline and take the red only on hover.

## Motion

The selected row takes a 2px red left edge in `--dur-micro` with `--ease-out`; a rule draws once. State only, no slide-in cards, no hover lift, no marquee.

## Voice

Plain, useful, neighbourly: the tool, the job, the period, the place. Short nouns and verbs; no "community" slogans, no "share economy", no exclamation marks.

## Do-nots

- Never a fake shipping label, barcode, tape strip or string bow; the material is a plain index, not a parcel costume.
- Never red behind running text; it is the stamp, the active row and the one primary action.
- Never a rounded card grid for the tools; use the index, the label or the numbered strip.
- Never mono for labels, nav or buttons; mono is only a shelf mark, a period or a measurement.
- Never a kraft-paper photograph as the background; the paper is a colour, not a texture.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Public+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
h1, h2, h3 { font-family: var(--font-display); font-weight: var(--display-weight); letter-spacing: var(--tracking-display); line-height: 1.02; }
.panel { background: var(--color-paper-2); color: var(--color-ink); border: var(--rule-hair) solid var(--color-rule); box-shadow: var(--shadow-card); }
.label { background: var(--color-label); color: var(--color-ink); border-left: var(--rule-hair) solid var(--color-accent); }
.shelf, .period { font-family: var(--font-outlier); font-variant-numeric: tabular-nums; }
.btn { min-height: 48px; padding: 0 var(--space-lg); border: var(--rule-hair) solid transparent; border-radius: var(--radius-small); font: 600 var(--text-sm)/1 var(--font-body); transition: background-color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out); }
.btn--primary { background: var(--color-accent); color: var(--color-accent-ink); }
.btn--secondary { background: transparent; border-color: var(--color-ink); color: var(--color-ink); }
```
