# Team Liquid ID — Aged Print Archive

An independent, unofficial concept site about Team Liquid's Indonesian Mobile Legends: Bang Bang squad. Not affiliated with, commissioned by, or endorsed by Team Liquid or Moonton.

The site is an aged printed archive: warm paper fibre, heavy ink rules, oxblood wax seals, small inlined game icons, short factual copy, and one focal point per viewport. Every route shares the same system and tokens.

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

`DESIGN.md` is normative. Type roles are `--type-display`, `--type-headline`, `--type-title`, `--type-body`, `--type-label`, `--type-meta`, with `--fs-*` steps. Body is 16px at 1.6 line-height with a 38rem measure. Functional text is at least 11px, numerals are tabular, `font-synthesis: none`, and `--tap` is 44px with coarse-pointer coverage. Grain is a 256px CC0 tile blended into the background; no animated filters or large images.

## Data and credits

`src/data/` holds curated research records; `src/data/sources.js` holds the source ledger with URLs, retrieval dates and confidence. Unknowns stay null or are labeled. Conflicts are shown, not silently resolved. Icons and textures are credited in `CREDITS.md` and in the site footer.

## Validation

`npm run check`, `node --check`, `impeccable detect --json index.html`, an asset-reference check, clean build, and live URL 200 with cache-busted assets are run each iteration.
