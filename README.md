# Team Liquid ID — The Liquid Ledger

An independent, unofficial concept site about Team Liquid's Indonesian Mobile Legends: Bang Bang squad. Not affiliated with, commissioned by, or endorsed by Team Liquid or Moonton.

The site is a natural-history field ledger of a competitive horse: engraved horse plate, hatched ink ground, bone specimen slips, brass rules, oxblood status seals, and tabular competitive records. Every route uses the same world and the same tokens.

## Run locally

```bash
npm run dev      # http://localhost:5173
npm run check
npm run build    # dist/
npm run preview
```

No dependencies to install. For this project, every implementation is committed and pushed, and `gh-pages` is updated with the production build.

## Routes

`/`, `/players`, `/players/:slug`, `/statistics`, `/matches`, `/discover`, `/history`, `/sources`.

## Data and attribution

`src/data/` holds curated research records; `src/data/sources.js` holds the 24-source ledger with URLs, retrieval dates and confidence. Unknown values stay null or are rendered by `unknown()`. Conflicts are displayed, not silently resolved. Player portraits are CC BY-SA 3.0 from Liquipedia Commons; Anaver uses a labeled synthetic illustration. The browser icon is the user-supplied TLID crest.

## Design

`DESIGN.md` is normative for the current world. Type roles (`--type-display`, `--type-note`, `--type-body`, `--type-label`, `--type-meta`) and size steps (`--fs-*`) are tokens. Body is 16px/1.55 with a 38rem measure, numerals are tabular, `font-synthesis: none`, functional text is at least 11px, and `--tap` is 44px with coarse-pointer coverage. A skip link is first in the DOM; focus rings contrast on dark and paper surfaces; reduced-motion keeps the static composition; ambient motion pauses when the tab is hidden.

## Validation

`npm run check`, `node --check`, `impeccable detect --json index.html`, an asset-reference check, clean install/build, and live URL 200 with cache-busted assets are run each iteration. See `RESEARCH.md` and `research/SOURCES.md` for the source material.
