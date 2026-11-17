# Niche and audience

A page is made for someone. The audience is not a note in the prompt; it is a contract about how much energy the page may spend and how much information it must carry. Read it before the draw, record it in the Picks block, the stamp and the log, and build inside it.

`information-forms.md` decides what shape the content takes. This file decides how loud the page may be and how dense it may get. Neither one is a stereotype.

## Two scales

**Energy** is how much the page moves, surprises or plays.

| Level | Name | What it means |
| --- | --- | --- |
| 0 | **Sober** | The page is already settled. State feedback only. |
| 1 | **Considered** | One arrival, then stillness. Motion explains state. |
| 2 | **Warm** | One arrival, responsive surfaces, one ambient moment if the theme declares it. |
| 3 | **Playful** | One arrival, feedback with character, one ambient or character moment. |

**Density** is how much structure a screen carries, not how small the type gets.

| Level | Name | What it means |
| --- | --- | --- |
| 0 | **Spare** | One idea a screen. A poster, a launch, a manifesto. |
| 1 | **Edited** | The default landing page: six to nine sections, one strong thing each. |
| 2 | **Working** | Product, professional and service pages: tables, rows, indexes, a visible system. |
| 3 | **Reference** | Docs, dashboards and operations: compact rows, filters, side-by-side facts. |

Density never means a smaller body, tighter gaps or more prose. It means more structure per screen: a table instead of a paragraph, a timeline instead of a card row, an index instead of a teaser grid.

## Profiles

The niche sets the ceiling. The brand and the task can lower it. Nothing can raise it.

| Niche | Signals | Energy ceiling | Density | Motion budget | Forms that usually fit |
| --- | --- | --- | --- | --- | --- |
| **professional** | B2B, consulting, legal, finance, real estate, agency, enterprise, architecture practice | 1 Considered | 2 Working | one reveal at most; state feedback; no ambient loop, no bounce | comparison, hierarchy, system, quantity, rules, roles |
| **technical** | developer tool, API, SDK, infra, observability, docs, engineering | 1 Considered | 3 Reference | state feedback; one reveal; no ambient loop | system, hierarchy, comparison, procedure, rules |
| **general** | consumer, retail, hospitality, culture, editorial, community | 2 Warm | 1 Edited | one reveal; hover and state feedback; one ambient loop only where the theme declares it | narrative, set, place, time, comparison |
| **kids** | children, family, classroom, play, learning, museum for children | 3 Playful | 1 Edited | one reveal; playful feedback; one character or ambient moment; none of it on the reading path | sequence, narrative, place, comparison |
| **care** | health, safety, civic service, crisis, insurance, accessibility | 0 Sober | 2 Working | no entrance; state feedback only; no ambient, no bounce | procedure, hierarchy, comparison, rules, place |
| **ops** | logistics, operations, dispatch, scheduling, field work, dashboards | 0 Sober | 3 Reference | no entrance; state feedback only; no ambient, no bounce | system, comparison, time, quantity, sequence |

Two niches can fire at once. Take the lower energy ceiling and the higher density. Care beats playful; ops beats editorial; a hospital's recruiting page is still care, not a lifestyle brand.

## Inferring the niche

Read the prompt in this order:

1. **The nouns.** *Patient, triage, first visit* is care. *Dispatch, lane, warehouse* is ops. *Student, lesson, parent* is kids or education. *Portfolio, engagement, matter* is professional. *SDK, endpoint, latency* is technical.
2. **The use.** The one action the page drives. A checkout, a crisis page or a compliance page caps energy at 0 or 1. A lesson, a game or a launch can spend 2 or 3.
3. **The tone.** The tone is the brand's energy, not the audience's tolerance. A playful brand writing for a hospital still has a care ceiling. An austere brand writing for children still has a kids ceiling, but it may choose to be calm inside it.

Never infer a niche from age, gender, income or location alone. **Kids** means the audience is children; it does not mean primary colours, a cartoon mascot or six identical cards with emoji. **Professional** means the context is professional; it does not mean grey, stock handshakes and a serif. **Care** means the reader may be worried, in a hurry or unwell; it does not mean condescending copy.

If the user names an audience that contradicts the inference, the user wins. State the ceiling you are building inside and why.

## The formula

```
energy  = min(brand energy, audience ceiling, task energy)
density = max(audience density, content density), capped at 3
```

Brand energy, read from the tone:

| Tone | Brand energy |
| --- | --- |
| austere, utilitarian, clinical, technical | 0 to 1 |
| editorial, luxury, considered, quiet | 1 |
| warm, soft, friendly, human | 2 |
| playful, joyful, mischievous, loud | 3 |

Task energy, read from the one action:

| Task | Task energy |
| --- | --- |
| crisis, safety, checkout, compliance, payment | 0 |
| book, sign up, buy, apply, renew | 1 |
| browse, learn, compare, explore | 2 |
| play, celebrate, discover, try | 3 |

Content density: add one level for a reference table, an index, a dashboard or a spec sheet; subtract one for a poster, a manifesto or a single-object page. Never go below 0 or above 3.

Worked examples:

- A consultancy's method page: brand 1, professional ceiling 1, task 2 (browse) → energy 1. Content is a five-stage method and a case table → density 2. The page gets one reveal, a stage bar, a comparison table, no ambient loop.
- A children's museum ticket page: brand 3, kids ceiling 3, task 1 (book) → energy 1. Content is a map, a schedule and a ticket comparison → density 2. The page is warm and clear, not a carnival; the play happens in the map, not in a looping background.
- A freight network page: brand 1, ops ceiling 0, task 2 (compare) → energy 0. Content is a network map and a service table → density 3. The page is still, dense and exact.
- A clinic's first-visit page: brand 2, care ceiling 0, task 2 (learn) → energy 0. Content is a four-step procedure and a floor plan → density 2. No entrance animation, no bounce, no "fun" icons.

## Motion budget

| Energy | Entrance | State feedback | Ambient or character | Allowed examples |
| --- | --- | --- | --- | --- |
| 0 Sober | none | colour, 1px lift, 120ms | none | a focus ring, a row highlight, a quiet accordion |
| 1 Considered | one settle, 0.4 to 0.6s, once | colour, 1px lift, 120 to 220ms | none | a hero settle, a tab crossfade, a disclosure |
| 2 Warm | one settle, 0.4 to 0.8s | colour, lift, small scale, 220ms | one, only where the theme declares it | a hover on a card container, one slow field |
| 3 Playful | one settle, 0.4 to 0.8s | colour, lift, a small character response | one, 8s or slower, with a pause control past 5s | a sticker press, a path that fills, one mascot blink |

Every level keeps the Floor: `prefers-reduced-motion` shows the end state, content is visible with scripting off, no loop past five seconds without a pause control, and no motion on running text. State feedback under 220ms is always legal at any energy.

The ceiling is a limit, not a quota. A kids page can be calm. A professional page can have one delightful state change. A care page with a playful loop is over budget; a kids page with no feedback at all is not a gate finding, only a missed opportunity.

## Recording it

- **Picks block:** one Audience row: `professional, energy 1/3 Considered, density 2/3 Working, motion: one reveal, state feedback only`.
- **Stamp:** `audience: professional · energy: 1 Considered · density: 2 Working` beside the shape and theme.
- **Log:** `audience`, `energy`, `density` on every composed build. The draw reads them back and avoids repeating the same combination.
- **Review:** the finish review asks whether the page's motion and density fit the audience it claims (`review-finish.md`). A mismatch is a Finish finding, not a style preference.

## The honesty rule

The niche is a constraint, never an excuse. "Professional" does not license a grey template; "kids" does not license clutter; "care" does not license condescension; "technical" does not license a wall of unlabelled boxes. The page still needs a real idea, real material and words only this client could say. The niche decides how loud the idea may be, not whether there is one.
