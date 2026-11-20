# Team Liquid ID — Reference System

An independent, unofficial concept site about Team Liquid's Indonesian Mobile Legends: Bang Bang squad. Not affiliated with, commissioned by, or endorsed by Team Liquid or Moonton.

The visual language follows a supplied reference: an inset charcoal panel, a faint one-pixel perspective grid, compact pill controls, oversized centred type and a fan of vivid character cards. Layout and content are adapted to Team Liquid ID's real roster, results and sources. Every route shares the same system.

## Run locally

```bash
npm run dev
npm run check
npm run build    # dist/
npm run preview
```

No dependencies to install. For this project, every implementation is committed and pushed, and `gh-pages` is updated with the production build.

## Routes

`/`, `/players`, `/players/:slug`, `/statistics`, `/matches`, `/discover`, `/history`, `/sources`.

## Design

`DESIGN.md` is normative. Manrope handles display and reading; IBM Plex Mono handles data and micro-labels. The 44px grid step, 28px panel radius, 22px card radius and 999px pill radius define the geometry. Body is 16px at 1.6 line-height with a 70ch measure; functional text is at least 10px; `--tap` is 44px with coarse-pointer coverage. Motion is limited to card hover and a data-bar transition, and stops under `prefers-reduced-motion`.

## Data and credits

`src/data/` holds curated research records; `src/data/sources.js` holds the source ledger with URLs, retrieval dates and confidence. Unknowns stay null or are labelled. Conflicts are shown, not silently resolved. Third-party assets and licences are recorded in `CREDITS.md` and linked in the footer.

## Validation

- `npm run check`
- `npm run build`
- `impeccable.cmd detect --json "index.html"`
- Live deployment verified after every push with a cache-busted request.
