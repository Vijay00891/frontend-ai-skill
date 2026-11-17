---
name: Tidepool
slug: tidepool
genre: playful
paper: light 95 180
display: rounded-sans Varela Round
accent: chromatic-teal 180
posture: committed
keywords: tidepool, tide, coast, shore, sea, ocean, marine, kids, family, school, classes, learn, water, safety, community, workshop, beach, nature, conservation, outdoor
material: wet slate, sea-glass green, coral signal, chalk-white rules, soft rubber corners, and a bright low-tide palette
photo: natural con=4 sat=8
pictured: Field Guide, split hero
---
# Tidepool

A shore held at arm's length: cool wet slate, sea-glass green, a coral signal, chalk-white rules and soft rubber corners. Varela Round sets the invitation; Figtree carries the reading; DM Mono holds tide times and heights. It is not a nursery room in pastel cards, not a nautical souvenir, and not a science worksheet.

## Tokens

```css
:root {
  --color-paper: oklch(95% 0.02 180); --color-paper-2: oklch(91% 0.028 178); --color-paper-3: oklch(85% 0.04 185);
  --color-ink: oklch(22% 0.035 190); --color-ink-2: oklch(32% 0.03 185); --color-muted: oklch(47% 0.03 185);
  --color-rule: oklch(78% 0.03 180); --color-rule-2: oklch(64% 0.04 180);
  --color-accent: oklch(48% 0.15 180); --color-accent-ink: oklch(98% 0.01 180); --color-focus: oklch(40% 0.14 180);
  --color-coral: oklch(66% 0.18 35); --color-coral-ink: oklch(22% 0.03 50); --color-sand: oklch(93% 0.04 85);
  --color-slot: oklch(90% 0.05 180);
  --font-display: "Varela Round", ui-sans-serif, system-ui, sans-serif; --font-body: "Figtree", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "DM Mono", ui-monospace, monospace;
  --radius-card: 18px; --radius-small: 12px; --radius-pill: 999px; --rule-hair: 2px;
  --shadow-card: 0 2px 0 oklch(30% 0.03 185 / 0.1), 0 16px 28px -22px oklch(30% 0.03 185 / 0.35);
  --tracking-display: -0.01em; --display-weight: 400;
}
```

## Type

- **Display:** Varela Round 400, `--tracking-display`, line-height 1.0 to 1.06, sentence case, roman. Set one step larger where the shared scale would make a two-line title feel crowded; never set labels or controls in it.
- **Body:** Figtree 400 and 500 at 16 to 18px, line-height 1.55, `--color-ink-2` for running prose. Figtree 600 carries labels, nav and table heads, sentence case, untracked.
- **Outlier:** DM Mono 400 and 500 for tide times, heights and measurements only, tabular; never a label, a caption or a sentence.
- **Signal:** coral is the live mark, the tide alert and the primary action; it is never running text or a large field behind prose.

## Surfaces

- Rules run 2px in `--color-rule` across section edges and 1px in `--color-rule` inside listings; a coral rule marks a live state, not every row.
- Radius: 18px on panels, 12px on inputs and keys, pill only on a tag or a status. Depth is a short matte cast and a chalk top edge, never a floating blur.
- Bands: one `--color-paper-2` band for the shore code and one `--color-sand` band for the visit; the teal accent stays a mark, a rule or a control. Two bands a page at most.
- Photographs: a low-tide shore, a hand in a pool, a bucket and a net, a bright close crop of wet rock. Natural and close, 3:2 or 4:3, 18px corners, 2px rule; type never sits on the picture.
- Texture: none, or the 3% neutral grain in `texture.md`; no wave dividers, bubbles, gradients or drawn sea creatures.

## Range

- **A tide table as a specimen:** date and place set large, times and heights in the outlier, a coral line marking the low window; it reads as a notice, not a dashboard.
- **A field guide as a list:** zone, creature and one fact, ruled by lines with a wide first column; the names do the work, without icons.
- **A route as numbered stations:** a start, three stops and a finish, joined by a visible path and a small coral marker; it is a sequence, not a floor plan.
- **A rule as a figure:** one numeral or one short rule set in the display face, with the explanation beside it; no card and no badge.

## Controls

- The pair: a coral-filled primary with `--color-coral-ink`, 48px, pill; a transparent secondary with a 2px teal border and a chalk top light. Sentence case in Figtree 600.
- A choice is a row of 48px keys on `--color-paper-2`, the selected key in `--color-accent` with `--color-accent-ink`; never a floating pill on a gradient.
- Inputs are 48px, 2px `--color-rule-2` on `--color-paper`, 12px radius, focus in `--color-focus`. Links underline and take the coral only on hover.

## Motion

The tide line moves once to its new mark in `--dur-short` with `--ease-out`; the date cross-fades once. State only, no ambient loop, no bouncing arrivals, no ticker.

## Voice

Plain, warm and exact: the hour, the height, the pool, the creature. A little air, no baby talk, no exclamation marks, no "explore the wonders".

## Do-nots

- Never a cartoon crab, starfish, wave or bubble as decoration; the material is a printed shore notice, not a children's book.
- Never coral as a large fill behind running text; it is the live mark, the alert and the one primary action.
- Never mono for labels, captions, nav or buttons; mono is only a time, a height or a measurement.
- Never a rounded card grid for the sessions; use the tide table, the route or a ruled list.
- Never a gradient sea, a glassy pill or a drop shadow with a visible blur.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Varela+Round&family=Figtree:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
h1, h2, h3 { font-family: var(--font-display); font-weight: var(--display-weight); letter-spacing: var(--tracking-display); line-height: 1.03; }
.panel { background: var(--color-paper-2); color: var(--color-ink); border: var(--rule-hair) solid var(--color-rule); border-radius: var(--radius-card); box-shadow: var(--shadow-card); }
.tide { background: var(--color-sand); color: var(--color-ink); border-radius: var(--radius-small); }
.time, .height { font-family: var(--font-outlier); font-variant-numeric: tabular-nums; }
.btn { min-height: 48px; padding: 0 var(--space-lg); border: var(--rule-hair) solid transparent; border-radius: var(--radius-pill); font: 600 var(--text-sm)/1 var(--font-body); transition: background-color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out); }
.btn--primary { background: var(--color-coral); color: var(--color-coral-ink); }
.btn--secondary { background: transparent; border-color: var(--color-accent); color: var(--color-ink); }
```
