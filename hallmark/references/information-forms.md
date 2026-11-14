# Information forms

The reflex is a row of cards. Cards are a container, not a form. A card row says *these items are independent and alike*. When the content is a sequence (three steps), a hierarchy (three levels), a comparison (three plans) or a system (three parts), that sentence is false, and the reader has to reconstruct the relationship the cards hid.

Choose the form from the relationship, then build it in the theme's material. This file covers non-numeric information; `data-viz.md` covers charts and figures.

## Four questions

1. **What is the relationship?** Sequence, hierarchy, comparison, system, quantity, time, place, set, procedure, narrative, rules or roles.
2. **What does the reader need to do?** Follow, compare, locate, understand, decide or browse.
3. **What is the smallest form that shows it?** A table, a timeline, a tree, a diagram, a map, a matrix, an index.
4. **Can the theme carry it?** Its rules, type, surfaces, nodes, arrows and grid. If the theme is photographic, the diagram may be a photograph with annotations; if it is typographic, the diagram may be a table and rules.

## Content to form

| The content is | The form | Never |
| --- | --- | --- |
| A sequence, a process, steps in time | timeline, numbered run, stepper, swimlane, state machine | three equal cards labelled 01 02 03 |
| A hierarchy, containment, levels of a whole | tree, org chart, nested outline, indented table | cards at the same level |
| A comparison, a choice, two or more options | table, matrix, side-by-side spec, toggle, decision table | three pricing cards with a "most popular" badge |
| A system, a network, dependencies | node-link diagram, layer stack, dependency graph, map | a grid of feature cards |
| A quantity or a proportion | bar chart, dot plot, unit chart, figure row (real numbers only) | a row of counting marks |
| Change over time | line chart, timeline, before and after, area chart | one card per year |
| A place, a geography, a room | map, floor plan, route, section | one card per location |
| A set of independent things | index, grid, table, rail | icon tiles over headings |
| A procedure with branches | flowchart, decision tree, state machine | a straight row of cards |
| A narrative, a case, a story | annotated screenshots, storyboard, before and after, timeline | one card per chapter |
| Rules, policy, eligibility | clause table, definition list, decision table | one card per rule |
| Roles and responsibility | RACI matrix, swimlane, org chart | one card per person |

## Cards, when they are legal

Cards are legal when the items are **independent, same-kind and unordered**: projects, products, rooms, people, articles, episodes. Each card is a thing, not a step, a level or a column of a table.

- Cards may vary in size (a bento) but never pretend to be a sequence.
- A card grid is not a way to avoid designing the relationship.
- Remove the borders and read the content. If it still reads in order, it was a sequence: use a timeline. If it still reads as levels, it was a hierarchy: use a tree. If it still reads as a comparison, it was a table: use columns.
- An icon above a heading is not a form. It is a card with a decoration.

## Diagram craft

- **One relationship per diagram.** A diagram that shows everything shows nothing. Pick the edges the reader needs and leave the rest to a table or a caption.
- **Direction.** Left to right for a process, top to bottom for a hierarchy, radial only for a real centre, a map only for a real place.
- **Nodes.** Three to seven is the readable range. One shape language, labels in the body face, no icon as the only label, no node without a relationship.
- **Edges.** One line weight. Arrowheads only where direction matters. If the relationship is not obvious, label the edge.
- **Text.** Real text in the DOM, never paths. A `<figure>` with a `<figcaption>`, a visually hidden summary for screen readers, and no `aria-hidden` on the only copy.
- **Responsive.** A wide diagram scrolls inside its own frame or becomes a vertical list. It never shrinks below legibility and never makes the page scroll sideways.
- **Colour.** One accent for the path, the current node or the exception; the rest in ink and rules. Never colour as the only distinction.
- **Motion.** Only if the audience's energy allows it (`niche.md`). A line that draws itself is a reveal: once, 0.4 to 0.8s, end state under reduced motion.

## Domain examples

### Professional services: consulting, legal, finance, architecture

| Content | Form | Avoid |
| --- | --- | --- |
| The method, five stages | a horizontal stage bar with the client decision each stage unlocks | three cards: Discover, Design, Deliver |
| The team | an org chart with real roles and reporting lines | one card per person |
| Engagements or fee options | a comparison table with the real scope, fee and one difference | three pricing cards |
| A project's phases | a Gantt-like timeline with milestones | a card per phase |
| A building or a site | a plan, a section, a site diagram with annotations | a card per room |

A consultancy's method page: the stage bar runs across ten columns, each stage one decision and one deliverable; beneath it, a case table with the client's own numbers. The page reads as a practice, not a service menu.

### Kids and education

| Content | Form | Avoid |
| --- | --- | --- |
| A lesson sequence | a path with stops, each a real skill and a short try-it | six identical cards with emoji |
| A branching story | a story map with two or three choices | a card per chapter |
| A classroom or a museum | a floor plan with the entrance, the desk and the toilets | a card per room |
| Two experiments | a two-column log with the question, the method and the result | a card per step |
| Progress | a track with real completed steps | a badge row with no meaning |

A learning page: the lesson is a winding path with five stops; the child's progress fills the path, and each stop opens a real two-minute task. The play is in the task, not in a looping background.

### Health and care

| Content | Form | Avoid |
| --- | --- | --- |
| A first visit | a numbered procedure with times and what to bring | a card per stage |
| Triage or eligibility | a decision tree with plain-language questions | a quiz that pretends to diagnose |
| Treatment options | a comparison table with the trade-offs | a card per option |
| A clinic | a floor plan with the entrance, the desk and the waiting area | a card per department |
| Rules | a plain-language rule list with the source | a card per rule |

A clinic page: four numbered steps, each with a time, a map and one line on what to bring. No entrance animation, no bounce, no "fun" icon. Calm is the design.

### Logistics and operations

| Content | Form | Avoid |
| --- | --- | --- |
| A network | a map with the lanes and real transit times | a card per warehouse |
| A schedule | a schedule grid with the current or next slot marked | a card per shift |
| Service levels | a comparison table with the real limits | three cards |
| Exceptions | a decision table with the condition and the action | a card per exception |
| A route | a map with the stops in order | a card per stop |

A freight page: the network is a map with three lanes and real transit times; the service levels are a table; the exceptions are a decision table. The page is still, dense and exact.

### Finance

| Content | Form | Avoid |
| --- | --- | --- |
| Accounts | a comparison table with the monthly fee, the rate and the one difference | three account cards with a "most popular" badge |
| Fees | a fee schedule | a card per fee |
| Opening an account | a numbered process with the time each step takes | a card per step |
| Approvals | an approval chain with the real roles | a card per approver |
| A transfer | a timeline with the time each stage takes | a card per stage |

A bank page: the account comparison is a table, the transfer is a three-step timeline with the time each step takes, and the fee schedule is a table. No card row.

### Architecture and built work

| Content | Form | Avoid |
| --- | --- | --- |
| A site | a site plan with north, access and context | a card per view |
| A building | a floor plan and a section, annotated | a card per room |
| Materials | a materials table with the real finish and supplier | a card per material |
| Phases | a phase timeline with milestones | a card per phase |
| Schemes | a comparison matrix of the schemes | a card per scheme |

A studio page: the project is a plan, a section and a materials table; the brief is a caption, not a card. The process is a five-stage timeline. The drawings are the proof, not decoration.

### Software and technical

| Content | Form | Avoid |
| --- | --- | --- |
| Architecture | a layer stack or a dependency graph | a card per service |
| States | a state machine with the real transitions | a card per state |
| API surface | a spec table with the method, path and response | a card per endpoint |
| A workflow | a swimlane with the actor and the handoff | a card per step |
| Limits | a table with the real numbers and units | a card per limit |

## Section scale

A diagram is a composition, not an ornament. At section scale it fills eight to twelve columns and 360px or more, with a head block above or beside it. Below 60rem it becomes a vertical list or scrolls inside its own frame. It never sits in a half-column beside an empty half.

`layout.md` § 5 has the Diagram composition. `macrostructures.md` § Domain to form has the shape-level view.

## The test

Replace the cards with the content's own shape. If the page loses nothing, the cards were filler. If the content resists the new form, the form is wrong, not the content. Then read the section aloud: a reader should be able to say what the relationship is in one sentence. If they say "three things", the form has not done its job.
