---
name: Sundial
slug: sundial
genre: editorial
paper: mid 78 75
display: high-contrast-serif Gloock
accent: chromatic-ochre 70
posture: full-palette
keywords: residency, artists, studio, arts, gallery, exhibition, open call, summer, garden, landscape, sculpture, print, ceramics, retreat, fellowship, application, deadline, rural, heritage
material: limestone paper, ochre ink, long shadows, burnt sienna, engraved rules, and a sun-bleached serif
photo: warm con=5 sat=4
pictured: Letter, split hero
---
# Sundial

A wall at four in the afternoon: limestone paper, ochre ink, a long shadow, burnt sienna and a sun-bleached serif. Gloock sets the season; Newsreader carries the letter; DM Mono holds dates and deadlines. It is not a cream wedding invitation, not a rustic retreat, and not a gallery-white page.

## Tokens

```css
:root {
  --color-paper: oklch(78% 0.035 75); --color-paper-2: oklch(74% 0.04 75); --color-paper-3: oklch(68% 0.045 70);
  --color-ink: oklch(24% 0.025 65); --color-ink-2: oklch(32% 0.025 65); --color-muted: oklch(36% 0.025 68);
  --color-rule: oklch(62% 0.03 70); --color-rule-2: oklch(52% 0.035 68);
  --color-accent: oklch(54% 0.14 70); --color-accent-ink: oklch(98% 0.01 80); --color-focus: oklch(46% 0.13 70);
  --color-sand: oklch(86% 0.04 80); --color-sienna: oklch(48% 0.12 45); --color-slot: oklch(82% 0.04 75);
  --font-display: "Gloock", ui-serif, Georgia, serif; --font-body: "Newsreader", ui-serif, Georgia, serif;
  --font-outlier: "DM Mono", ui-monospace, monospace;
  --radius-card: 0px; --radius-small: 2px; --radius-pill: 999px; --rule-hair: 1px;
  --shadow-card: 0 0 0 1px oklch(62% 0.03 70) inset, 0 1px 0 oklch(100% 0.01 80 / 0.35) inset;
  --tracking-display: -0.02em; --display-weight: 400;
}
```

## Type

- **Display:** Gloock 400, `--tracking-display`, line-height 1.0 to 1.06, sentence case, roman. It is an engraved invitation, so give a head room and never set a label, a caption or a control in it.
- **Body:** Newsreader 400 and 500 at 17 to 19px, line-height 1.55, `--color-ink-2` for running prose. Newsreader 600 carries labels, table heads and nav, sentence case, untracked.
- **Outlier:** DM Mono 400 and 500 for dates, deadlines, dimensions and times only, tabular; never a label, a caption or a sentence.
- **Shadow:** burnt sienna is a date, a season marker and one rule; it is not a second accent for running text or a filled band.

## Surfaces

- Rules are 1px `--color-rule` in tables and 2px `--color-ink` where a section needs a line; a sienna tick marks a live season, not every row.
- Radius: 0 on panels, photographs and tables, 2px on inputs and keys, pill only on a status or a tag. Depth is flat: an engraved inset edge and a chalk top light, never a floating blur.
- Bands: `--color-paper-2` for the season table, one `--color-sand` band for the open call, and one `--color-paper-3` band at most. Ochre is a mark, a control or a rule, never a field behind prose.
- Photographs: the garden, the studio window, a work in raking light, a path at the edge of the day. Warm and sun-bleached, 3:2 or 4:3, square corners, 1px rule; type never sits on the picture.
- Texture: none, or the 3% neutral grain in `texture.md`; no sun symbols, no lens flare, no paper tear, no terracotta wash.

## Range

- **A season as a table:** season, dates, what opens, what closes; dates in the outlier and the active season marked in sienna.
- **A letter as the page:** a salutation, three short paragraphs and a signature, set on the measure with generous leading; the body is the composition.
- **A date as a figure:** one deadline set large in the display face, the month and the action beside it; a date drawn as type, not a badge.
- **A poster head:** a short statement in Gloock over a wide rule, with the facts in a ruled table below; it is an editorial opening, not a hero card.

## Controls

- The pair: an ochre primary with `--color-accent-ink`, 48px, 2px radius; a transparent secondary with a 1px ink border. Both sentence case in Newsreader 600.
- A choice is a row of 48px keys on `--color-paper-2`, the selected key in `--color-accent` with `--color-accent-ink`; never a floating pill on a gradient.
- Inputs are 48px, 1px `--color-rule-2` on `--color-paper`, 2px radius, focus in `--color-focus`. Links underline and take sienna only on hover.

## Motion

A rule draws once from left to right in `--dur-short` with `--ease-out`; the selected season takes a sienna tick. State only, no parallax, no slow fade, no drifting light.

## Voice

Measured, sensory and specific: the season, the room, the light, the date. No "journey", no "vibrant", no "unforgettable", no exclamation marks.

## Do-nots

- Never a cream-and-terracotta wedding palette; the paper is mid limestone and the accent is ochre, not peach.
- Never a sun icon, a lens flare or a gradient sky; the light is a colour and a long rule, not a picture.
- Never italic display as a flourish; Gloock is roman and the emphasis is scale.
- Never ochre behind running text; it is the live season, the control and the one primary action.
- Never a rounded card grid for the seasons; use the table, the letter or a ruled poster.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Gloock&family=Newsreader:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
h1, h2, h3 { font-family: var(--font-display); font-weight: var(--display-weight); letter-spacing: var(--tracking-display); line-height: 1.02; }
.panel { background: var(--color-paper-2); color: var(--color-ink); border: var(--rule-hair) solid var(--color-rule); box-shadow: var(--shadow-card); }
.open { background: var(--color-sand); color: var(--color-ink); border-top: var(--rule-hair) solid var(--color-sienna); }
.date, .deadline { font-family: var(--font-outlier); font-variant-numeric: tabular-nums; }
.btn { min-height: 48px; padding: 0 var(--space-lg); border: var(--rule-hair) solid transparent; border-radius: var(--radius-small); font: 600 var(--text-sm)/1 var(--font-body); transition: background-color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out); }
.btn--primary { background: var(--color-accent); color: var(--color-accent-ink); }
.btn--secondary { background: transparent; border-color: var(--color-ink); color: var(--color-ink); }
```
