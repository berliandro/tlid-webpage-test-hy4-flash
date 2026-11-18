# Team Liquid ID — Lookbook Kompetitif (V1)

An independent, unofficial editorial website about **Team Liquid ID**, Team Liquid's Indonesian Mobile Legends: Bang Bang squad. This is a fan-built concept, not an official site, and it is not commissioned or endorsed by Team Liquid or Moonton.

Built from the Stage 1–4 project work: `PRODUCT.md`, the approved Stage 2 shape brief, `.impeccable/questions/mook-direction-contract.md`, `RESEARCH.md`, and `research/SOURCES.md`. Those documents are preserved unchanged.

## Requirements

- Node.js 18 or newer
- No third-party runtime or build dependencies

## Run locally

```bash
npm run dev
```

Open **http://localhost:5173**. The server supports history fallback, so routes such as `/players/aran` work on refresh and with browser back/forward.

Other commands:

```bash
npm run check     # syntax checks for the app and server scripts
npm run build     # copies the production site into dist/
npm run preview   # serves dist/ at http://localhost:5173
```

Because this is a dependency-free static app, `npm install` is not required.

## Routes

| Route | Purpose |
|---|---|
| `/` | Living-pulse landing: snapshot, team introduction, player introductions, records, previews |
| `/players` | Editorial S18 roster |
| `/players/:slug` | Individual profile (`aran`, `kevin`, `drichel`, `anaver`, `keven`, `lyoni`) |
| `/statistics` | Sourced player comparison, team totals, MVP, records and documented conflicts |
| `/matches` | Upcoming-unavailable state, tournament archive and S18 playoff path |
| `/discover` | Editorial stories drawn only from verified research |
| `/history` | Chronological milestone archive with explicit gaps |
| `/sources` | Full source ledger with URLs and confidence notes |

## Project structure

```
index.html            App entry
server.mjs            Tiny local/dev server with history fallback
scripts/build.mjs     Copy-based production build
src/
  styles.css          Full design system, layout, motion, responsive rules
  main.js             Bootstrap + visibility pause
  router.js           Client routing, shell, navigation
  lib/ui.js           Shared render helpers and source notes
  data/               Curated research data, one module per domain
  pages/              One module per route
public/
  assets/             Lace, drafting pattern, synthetic portrait symbols, mark
  assets/players/     Licensed CC BY-SA 3.0 player portraits
  fonts/              Self-hosted Bodoni Moda, DM Sans, Italianno
```

## Updating data

1. Edit the relevant file in `src/data/`. Every record carries source IDs.
2. Add or update the corresponding entry in `src/data/sources.js` with publisher, URL, retrieval date, confidence and notes.
3. Run `npm run check` and `npm run build`.

Never replace an unknown value with a guess, zero, or illustrative number. Use the existing `unknown()` helper and the documented unavailable states.

## Data and attribution

- Source of truth is `RESEARCH.md` plus `research/SOURCES.md` (retrieved 2026-11-17). Conflicts are shown, not silently resolved.
- Player portraits for Aran, Kevin, Drichel, Keven and Lyoni come from **Liquipedia Commons** under **CC BY-SA 3.0**, supplied with a provenance manifest. Attribution and licence are shown in the UI and at `/sources`. Anaver has no supplied portrait and uses an authored synthetic illustration, clearly labeled.
- No official Team Liquid logo, brand kit artwork, or unlicensed photography is used. Colours and typefaces are design cues only.
- Fonts are self-hosted under their open licences; there is no runtime Google Fonts dependency.

## Motion and performance

- Ambient motion is CSS-only and limited to a slow lace drift, two restrained plate breaths and the NOW flag pulse.
- Only `transform` and `opacity` animate. No blur filters, WebGL, particle systems, animation libraries, or JavaScript animation loops.
- `prefers-reduced-motion` removes ambient movement while preserving content and state feedback.
- A single `visibilitychange` listener pauses ambient animation when the tab is hidden.
- Images are `loading="lazy"` except the above-the-fold player profile portrait, and all have fixed dimensions to prevent layout shift.

## Language

The default language is **English**. A footer control labeled **Bahasa Indonesia** switches the entire site to Indonesian; once switched, the control reads **English**. The choice is stored in `localStorage` under `tlid-lang` and applies to every route, including deep links and refreshes.

Translations are defined in `src/i18n.js`. Authored UI copy lives in Indonesian source strings; `applyLanguage()` translates the rendered DOM to English when the stored locale is `en`. To add or correct a translation, add an exact entry to the `DICT` map. `phrases` in the same file handle dynamically composed strings. No language switcher or extra dependencies are needed.

## Workflow preference

For this project only, every implementation is committed and pushed after it is complete, and the `gh-pages` branch is updated with the production build. Do not apply this rule to other projects.

## Page-level refinement

The homepage has a V2 treatment scoped to `body.route-home` and `.home-page`: a light paper canvas, Gloock display type, Manrope body type, a single navy pulse panel, and a shorter editorial copy structure. Other routes intentionally keep the original dark system until their own passes. The repeatable process is documented in `REFINEMENT-WORKFLOW.md`.

## Validation notes

- `npm run check` passes and `npm run build` completes.
- All primary routes were opened in a real browser: no console errors, no horizontal overflow at the available 1000px viewport, fonts load, navigation/filters/source disclosure/mobile toggle work.
- Responsive layout was checked at 1440, 1280, 768, 390 and 360px using same-origin iframe viewports; no horizontal overflow was found after the final fixes.
- Screenshots of the running app could not be captured because the desktop browser window was not visible to the automation tool; visual inspection was done through DOM/layout measurements rather than rendered screenshots.
- Frame rate and low-spec hardware performance have **not** been measured in this environment. The implementation follows the low-cost technique requirements, but no FPS claim is made.

## Known limitations

- No verified post-S18 fixtures exist, so the Matches page shows an intentional unavailable state.
- Several competitive values have disputed season labels or scopes; they are presented with caveats or omitted.
- Roster identity for Kevin/Keven and some biographical fields remain unresolved in the research.
- This is V1: the data layer is ready for later API/CI synchronisation, but no external requests are made at runtime.
