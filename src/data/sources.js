// Source ledger. Every competitive record in this app references one or more of these.
// Retrieved 2026-11-17. Types: primary | social | database | secondary | community.
export const sources = {
  TL_SITE: {
    id: 'TL_SITE', publisher: 'Team Liquid', type: 'primary',
    url: 'https://www.teamliquid.com/games/mlbb/tlid', retrieved: '2026-11-17',
    confidence: 'verified page, stale roster',
    note: 'Official team page. Confirms TLID is the Indonesian MLBB squad. Its roster list is likely outdated; use IG_S18 for the current roster.',
  },
  TL_BRAND: {
    id: 'TL_BRAND', publisher: 'Team Liquid', type: 'primary',
    url: 'https://www.teamliquid.com/brand-kit', retrieved: '2026-11-17',
    confidence: 'verified',
    note: 'Published brand colours and typefaces. Reference only — not a license or endorsement.',
  },
  IG_S18: {
    id: 'IG_S18', publisher: 'Team Liquid ID (Instagram)', type: 'social',
    url: 'https://www.instagram.com/p/DbvI2W-T65y/', retrieved: '2026-11-17',
    confidence: 'single-source, corroborated',
    note: 'Dated 7 Aug 2026. S18 roster announcement with roles. Corroborated by VCG and TITO.',
  },
  VCG: {
    id: 'VCG', publisher: 'VCGamers', type: 'secondary',
    url: 'https://vcgamers.com/', retrieved: '2026-11-17',
    confidence: 'corroborating',
    note: '19 Aug 2026 article listing the S18 roster.',
  },
  TITO: {
    id: 'TITO', publisher: 'titosenpai', type: 'database',
    url: 'https://titosenpai.com/teams/TLID', retrieved: '2026-11-17',
    confidence: 'single-source',
    note: 'Database listing the S18 roster and staff.',
  },
  LIQ_TEAM: {
    id: 'LIQ_TEAM', publisher: 'Liquipedia', type: 'database',
    url: 'https://liquipedia.net/mobilelegends/Team_Liquid_ID', retrieved: '2026-11-17',
    confidence: 'single-source',
    note: 'Team overview, placements, aggregate winnings.',
  },
  LIQ_RES: {
    id: 'LIQ_RES', publisher: 'Liquipedia', type: 'database',
    url: 'https://liquipedia.net/mobilelegends/Team_Liquid_ID/Results', retrieved: '2026-11-17',
    confidence: 'single-source',
    note: 'Results list used with cross-checks for major placements.',
  },
  LIQ_S14: {
    id: 'LIQ_S14', publisher: 'Liquipedia', type: 'database',
    url: 'https://liquipedia.net/mobilelegends/MPL/Indonesia/Season_14', retrieved: '2026-11-17',
    confidence: 'verified with other sources',
    note: 'MPL ID S14 champion series.',
  },
  LIQ_S18: {
    id: 'LIQ_S18', publisher: 'Liquipedia', type: 'database',
    url: 'https://liquipedia.net/mobilelegends/MPL/Indonesia/Season_18', retrieved: '2026-11-17',
    confidence: 'verified with official/secondary',
    note: 'S18 standings and playoff path. One page shows 0–0, conflicting with 12–4.',
  },
  LIQ_M6: {
    id: 'LIQ_M6', publisher: 'Liquipedia', type: 'database',
    url: 'https://liquipedia.net/mobilelegends/M6_World_Championship', retrieved: '2026-11-17',
    confidence: 'verified with other sources',
    note: 'M6 grand final result.',
  },
  MPL_TEAM: {
    id: 'MPL_TEAM', publisher: 'MPL Indonesia', type: 'primary',
    url: 'https://id-mpl.com/en/team/tlid', retrieved: '2026-11-17',
    confidence: 'verified',
    note: 'Official league team page, current-season coverage only.',
  },
  MPL_STATS: {
    id: 'MPL_STATS', publisher: 'MPL Indonesia', type: 'primary',
    url: 'https://id-mpl.com/statistics', retrieved: '2026-11-17',
    confidence: 'values verified, season label disputed',
    note: 'Identical team totals appear under four season titles. Do not label these values by season.',
  },
  MLBBHUB: {
    id: 'MLBBHUB', publisher: 'MLBBHub', type: 'secondary',
    url: 'https://mlbbhub.com/mpl/id/stats', retrieved: '2026-11-17',
    confidence: 'single-source, timestamped',
    note: 'Data as of 2026-11-17, 14:13 UTC. Player averages, hero pools, MVP standings. Lists KEVIN as Gold Laner, conflicting with the S18 announcement.',
  },
  DOT: {
    id: 'DOT', publisher: 'Dot Esports', type: 'secondary',
    url: 'https://dotesports.com/mobile-legends/news/mpl-id-season-18-schedule-results-standings', retrieved: '2026-11-17',
    confidence: 'verified',
    note: 'S18 schedule, results and standings, updated --0.',
  },
  ITEM: {
    id: 'ITEM', publisher: 'itemgame', type: 'secondary',
    url: 'https://itemgame.com/en-id/blog/mpl-id-s18-final-standings-playoff-bracket-schedule', retrieved: '2026-11-17',
    confidence: 'verified',
    note: 'S18 final standings and playoff bracket, 19 Oct 2026.',
  },
  ESC: {
    id: 'ESC', publisher: 'Esports Charts', type: 'database',
    url: 'https://escharts.com/teams/mobile-legends/tlid', retrieved: '2026-11-17',
    confidence: 'single-source, some stale panels',
    note: 'Aggregate 121 matches / 71–50. "Upcoming" panel was stale at retrieval.',
  },
  WIKI_MPL: {
    id: 'WIKI_MPL', publisher: 'Wikipedia', type: 'secondary',
    url: 'https://en.wikipedia.org/wiki/MPL_Indonesia', retrieved: '2026-11-17',
    confidence: 'single-source',
    note: 'MPL background and rebrand timing.',
  },
  WIKI_TL: {
    id: 'WIKI_TL', publisher: 'Wikipedia', type: 'secondary',
    url: 'https://en.wikipedia.org/wiki/Team_Liquid', retrieved: '2026-11-17',
    confidence: 'single-source',
    note: 'Acquisition background and brand facts.',
  },
  ESI: {
    id: 'ESI', publisher: 'Esports Insider', type: 'secondary',
    url: 'https://esportsinsider.com/2024/05/team-liquid-mobile-legends-bang-bang-echo-aura', retrieved: '2026-11-17',
    confidence: 'verified with other outlets',
    note: '21 May 2024 STUN.GG / AURA / ECHO acquisition.',
  },
  ESA: {
    id: 'ESA', publisher: 'Esports Advocate', type: 'secondary',
    url: 'https://esportsadvocate.net/2024/05/team-liquid-acquires-stun-gg/', retrieved: '2026-11-17',
    confidence: 'verified with other outlets',
    note: 'Acquisition reporting.',
  },
  ESPN_G: {
    id: 'ESPN_G', publisher: 'esports.gg', type: 'secondary',
    url: 'https://esports.gg/news/mobile/mlbb-aura-echo-co-founder-talks-team-liquid-acquisition', retrieved: '2026-11-17',
    confidence: 'verified interview',
    note: 'Acquisition and Liquid AURA → TLID rebrand.',
  },
  LIQ_PLAYER: {
    id: 'LIQ_PLAYER', publisher: 'Liquipedia player pages', type: 'database',
    url: 'https://liquipedia.net/mobilelegends/Aran', retrieved: '2026-11-17',
    confidence: 'single-source snippets',
    note: 'Player profiles. Direct fetch was CAPTCHA-blocked; details marked uncertain where only a snippet existed.',
  },
  IDN: {
    id: 'IDN', publisher: 'IDN Times', type: 'secondary',
    url: 'https://idntimes.com/', retrieved: '2026-11-17',
    confidence: 'single-source',
    note: 'AeronnShikii contract termination, Aug 2026.',
  },
  MOONTON: {
    id: 'MOONTON', publisher: 'Moonton', type: 'primary',
    url: 'https://en.moonton.com/news/159.html', retrieved: '2026-11-17',
    confidence: 'single-source',
    note: 'M6 final date differs by one day from other sources.',
  },
  COMMONS: {
    id: 'COMMONS', publisher: 'Liquipedia Commons', type: 'database',
    url: 'https://liquipedia.net/commons/', retrieved: '2026-11-16',
    confidence: 'verified provenance supplied by user',
    note: 'Player portraits (500×500 transparent PNG) under CC BY-SA 3.0. Used with attribution; original URLs and licence recorded in the supplied provenance.json. Anaver has no supplied portrait and uses a synthetic illustration.',
  },
  LIQ_API: {
    id: 'LIQ_API', publisher: 'Liquipedia', type: 'primary',
    url: 'https://liquipedia.net/api-terms-of-use', retrieved: '2026-11-17',
    confidence: 'verified',
    note: 'API terms: HTML scraping forbidden, rate limits apply.',
  },
};

export const sourceList = Object.values(sources);
