# PowerUI proof pages

PowerUI carries five finished static proof pages: one original PowerUI page and four inherited from Hallmark. They show that the process can produce different content forms for different audiences without falling back on the same layout.

## Original PowerUI: Harbor Radio

[Open Harbor Radio](radio/index.html)

![Harbor Radio, the original PowerUI proof page](receiver.png)

Harbor Radio is a fictional volunteer station on Pier 9. The page is built around one tuning scale: the day's schedule is a continuous band from 06:00 to midnight, the receiver panel and the selected show share the same dial language, and the open-day table is the visit route. It is set in the original Receiver theme, not a renamed Hallmark theme.

| Field | Value |
| --- | --- |
| Audience | general |
| Content form | time |
| Idea | tuning-scale schedule |
| Job | visit the open day |
| Theme | Receiver (original) |
| Proof | 0 FAIL, 0 REFLEX, 0 WARN with rendered screenshots at 1280, 1440, 1920 and 375 |

Photographs: [The Midnite Wolf](https://commons.wikimedia.org/wiki/File:Shure_SM7.jpg) (CC0) and [ArildV](https://commons.wikimedia.org/wiki/File:Newlyn_old_harbour_pier_July_2026_01.jpg) (CC BY-SA 4.0), both from Wikimedia Commons. The page carries both credits.

## Inherited from Hallmark

Four static pages inherited from Hallmark and included with PowerUI v2.2.0. They remain proof that the underlying process can produce different content forms for different audiences without falling back on the same layout.

![Four inherited Hallmark proof pages](proofs-grid.png)

| Page | Audience | Content form | Idea | Theme |
| --- | --- | --- | --- | --- |
| [Fieldnote](professional/index.html) | professional | comparison | decision table | Cobalt |
| [Wonder Lab](kids/index.html) | kids | spatial | floor plan | Hum |
| [Wayfind](b2b/index.html) | B2B ops | narrative | state machine | Wayfind |
| [Two Drums](studio/index.html) | general | transformation | layer stack | Riso |

## Open them

There is no build step. Open any `index.html` directly, or serve the folder with any static file server:

```sh
cd frontend-ai-skill/examples
npx serve .
```

The inherited pages load fonts from Google Fonts and Fontshare; Harbor Radio loads Google Fonts. They fall back to local faces offline. There is no backend. The inherited forms are demonstrations and submit nowhere; the station's mail link on Harbor Radio uses the reserved `.example` domain.

## What each inherited page shows

- **Fieldnote**: a consulting decision ledger. The page is built around a comparison of Day 0 and Day 90, not a row of service cards. The signature is the ledger's second column.
- **Wonder Lab**: a science club for ages 7-11. The page is a floor plan with a numbered route through the lab; the map's path fills as experiments are tried. The motion stays within the kids' ceiling.
- **Wayfind**: a shipment board for ops. The page is a state machine: a sample shipment moves through network, journey, board and delivery, with the same route driving the map and the board.
- **Two Drums**: a community print studio. The page is a layer stack: the proof separates into its blue and pink drums, and the layer control changes what the visitor sees. The print marks are made in CSS, not a decorative illustration.

All five brands, their copy and sample data are fictional; the station, its shows and its people are invented. No real client metrics, testimonials, logos or case studies appear in these pages.

## Not a component library

These are finished compositions, not a kit to copy section by section. The skill's process and the `powerui/references/` library are the reusable part; the pages are the evidence that the process produces more than one kind of result.

See [`../powerui/SKILL.md`](../powerui/SKILL.md) for the flow, the Floor and the gates.

## License

MIT for PowerUI and the inherited Hallmark material. The Harbor Radio photographs keep their own licenses, named above and on the page. See [`../LICENSE`](../LICENSE).
