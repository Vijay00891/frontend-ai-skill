---
name: Receiver
slug: receiver
genre: modern-minimal
paper: light 92 65
display: display-condensed Antonio
accent: warm 25
posture: committed
keywords: radio, station, broadcast, community, music, audio, podcast, schedule, frequency, listen, fm, air, show, host, dj, sound, local, live, tune, programming, culture
material: warm putty-grey moulded plastic, a cream backlit tuning scale, oxblood ink, a red needle, fine tick marks, and one warm signal
photo: warm con=8
pictured: Receiver schedule, split hero
---

# Receiver

A radio receiver's material, held at arm's length: warm grey moulded plastic with a soft edge and a faint seam, a cream scale printed behind glass, oxblood ink, and one red needle that says where you are. Antonio sets the dial language; Karla carries the reading; IBM Plex Mono holds frequencies and times. It is not a wood-grained retro set, not a dark studio with glowing valves, and not a podcast app in a rounded card.

## Tokens

```css
:root {
  --color-paper: oklch(92% 0.012 65); --color-paper-2: oklch(88% 0.014 65); --color-paper-3: oklch(83% 0.016 65);
  --color-ink: oklch(20% 0.018 40); --color-ink-2: oklch(30% 0.018 42); --color-muted: oklch(44% 0.016 50);
  --color-rule: oklch(76% 0.014 65); --color-rule-2: oklch(64% 0.016 55);
  --color-accent: oklch(54% 0.205 27); --color-accent-ink: oklch(98% 0.008 70); --color-focus: oklch(48% 0.19 27);
  --color-scale: oklch(95.5% 0.026 88); --color-scale-ink: oklch(27% 0.018 45); --color-needle: oklch(54% 0.205 27);
  --color-panel: oklch(34% 0.02 48); --color-panel-2: oklch(28% 0.018 45); --color-panel-type: oklch(94% 0.012 75);
  --font-display: "Antonio", ui-sans-serif, system-ui, sans-serif; --font-body: "Karla", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "IBM Plex Mono", ui-monospace, monospace;
  --radius-card: 10px; --radius-small: 6px; --radius-pill: 999px; --rule-hair: 1px;
  --shadow-card: 0 1px 0 oklch(100% 0.004 75 / 0.55) inset, 0 1px 2px oklch(18% 0.02 45 / 0.16), 0 10px 24px -18px oklch(18% 0.02 45 / 0.4);
  --tracking-display: -0.015em; --display-weight: 600;
}
```

## Type

- **Display:** Antonio 600, `--tracking-display`, line-height 1.02 to 1.08, sentence case, roman. The face is narrow enough to set a place and a time on one line; a frequency may join it at the same size in the body face if the line would otherwise break badly.
- **Body:** Karla 400 and 500 at 16 to 18px, line-height 1.55, `--color-ink-2` for running prose. Karla carries the station's voice, so the page reads like a notice, not a dial.
- **Outlier:** IBM Plex Mono 400 and 500 for frequencies, times and measurements only, tabular; never a label, a caption or a sentence.
- **Labels:** Karla 500 a step smaller, sentence case, untracked, `--color-muted`; on the panel, the same in `--color-panel-type`.

## Surfaces

- Rules are 1px `--color-rule` on listings and 2px `--color-ink` where a block needs an edge; a double rule marks the top of a time column, not every seam.
- Radius: 10px on panels and cards, 6px on inputs and small keys, pill only on a live state or a tag. Depth comes from a lit top edge, a 1px dark seam and a short cast, never a floating blur.
- The panel is a plastic field with a faint inset seam: `--color-panel` or `--color-panel-2`, 10px radius, a 1px lighter top edge, and type in `--color-panel-type`. The scale is a cream inset (`--color-scale`) with an inner shadow, printed in `--color-scale-ink`, and fine tick marks rule it from end to end.
- Bands: `--color-paper-2` for a section that changes register, one `--color-panel` band for the broadcast surface, or one `--color-accent` band for the station's own line. Two bands a page at most; the accent is not a background for running text.
- Photographs: the room at arm's length: a microphone in its clip, a hand on a fader, a window onto the street, a tangle of labelled cables. Warm, close, unposed; 4:3 or 1:1, square or 10px corners, a 1px rule, and type never on the picture. A screen built from the station's own schedule is not a photograph.
- Texture: a single 180px tile of fine neutral grain at 3 to 4% under the page, or none. No wood, no brushed metal, no scan lines.

## Range

- **The day as a tuning scale:** time runs left to right in mono, programs sit as labelled intervals above or below it, and a red needle marks the selected hour. The scale is the schedule; it is not a row of equal cards.
- **A show as a listing:** time at the left in mono, title in Antonio, host and one sentence in Karla, a hairline between rows; the selected row takes the panel colour or a hairline accent, not a card lift.
- **A frequency as the figure:** the station number set large in the display face with its band in the body face beside it, the way a dial prints one number large and the rest small.
- **The control panel:** one dark plastic surface that holds the page's real choices (a day, a show, a room) in a single recessed scale. It may carry a small printed schedule beneath it, but the scale is the thing that changes.

## Controls

- The pair: a red-filled primary with cream type, 48px, 6px radius, and a transparent secondary with a 1px ink border and a plastic top light. Both sentence case in Karla 500.
- A choice is a row of cream keys on a dark track, each 44 to 48px, the selected key pressed into the panel with a red edge and ink type; never a floating pill on a gradient.
- Inputs are 48px, 1px `--color-rule-2` on `--color-paper`, 6px radius, focus ring in `--color-focus`. The red is for the needle, the live state, the primary action and one rule; links underline in ink and take the red only on hover.

## Motion

The needle travels to its new mark in `--dur-short` with `--ease-out`; the scale numbers cross-fade once. State only, no ambient loop, no arrival animation, no ticker.

## Voice

Local and exact: the hour, the frequency, the room, the show, the person. Plain sentences with a little air; no nostalgia, no "stay tuned", no exclamation marks.

## Do-nots

- Never a wood cabinet, a sunburst, a glowing valve or a dial drawn as a picture; the material is a moulded panel and a printed scale, not a prop.
- Never red as a large fill behind running text; it is the needle, the live mark and the one primary action.
- Never mono for labels, captions, nav or buttons; mono is only frequency, time and measurement.
- Never a rounded card grid for the schedule; the day is a continuous scale or a ruled list.
- Never a dark page with a luminous halo; the panel is a solid field with a lit edge.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;600;700&family=Karla:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
h1, h2, h3 { font-family: var(--font-display); font-weight: var(--display-weight); letter-spacing: var(--tracking-display); line-height: 1.04; }
.panel { background: var(--color-panel); color: var(--color-panel-type); border-radius: var(--radius-card); box-shadow: var(--shadow-card); }
.scale { background: var(--color-scale); color: var(--color-scale-ink); border-radius: var(--radius-small); box-shadow: inset 0 1px 4px var(--color-rule-2); }
.tick { width: 1px; height: var(--space-sm); background: var(--color-scale-ink); opacity: 0.55; }
.needle { width: 2px; background: var(--color-needle); transition: transform var(--dur-short) var(--ease-out); }
.btn { min-height: 48px; padding: 0 var(--space-lg); border: var(--rule-hair) solid transparent; border-radius: var(--radius-small); font: 500 var(--text-sm)/1 var(--font-body); transition: background-color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out); }
.btn--primary { background: var(--color-accent); color: var(--color-accent-ink); }
.btn--secondary { background: transparent; border-color: var(--color-ink); color: var(--color-ink); }
.time, .freq { font-family: var(--font-outlier); font-variant-numeric: tabular-nums; }
```
