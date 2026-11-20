export const milestones = [
  {
    year: '2000', kicker: 'Parent org',
    title: 'Team Liquid founded',
    text: 'Team Liquid was founded in the Netherlands in 2000. This is parent context, not TLID’s founding date.',
    sources: ['WIKI_TL'],
    confidence: 'secondary',
  },
  {
    year: '2024-05-21', kicker: 'Acquisition',
    title: 'STUN.GG, AURA, ECHO',
    text: 'Team Liquid announced it acquired STUN.GG with AURA Esports in Indonesia and ECHO Esports in the Philippines. The price was not disclosed.',
    sources: ['ESI', 'ESA', 'ESPN_G', 'WIKI_TL'],
    confidence: 'verified',
  },
  {
    year: 'S13 · 2024', kicker: 'First identity',
    title: 'Liquid AURA',
    text: 'The team played as Liquid AURA in MPL ID S13 and finished 5–6. Sources disagree on when the rebrand happened, so the result is labelled.',
    sources: ['LIQ_TEAM', 'WIKI_MPL', 'ESPN_G'],
    confidence: 'conflict recorded',
  },
  {
    year: '2024-10-27', kicker: 'First title',
    title: 'MPL ID S14 champion',
    text: 'TLID beat RRQ Hoshi 4–3 in the final and took the S14 title with an M6 berth.',
    sources: ['LIQ_S14', 'LIQ_RES', 'WIKI_MPL'],
    confidence: 'verified',
  },
  {
    year: '2024-12-15', kicker: 'Worlds',
    title: 'M6 runner-up',
    text: 'TLID lost the M6 final 1–4 to Fnatic ONIC PH. Moonton lists 14 December; the one-day difference is kept, not hidden.',
    sources: ['LIQ_M6', 'LIQ_TEAM', 'MOONTON'],
    confidence: 'verified with date conflict',
  },
  {
    year: '2025', kicker: 'Lean years',
    title: 'S15 5–6, S16 9th',
    text: 'The next two seasons ended 5–6 and 9th. TLID missed the MPL ID S16 playoffs.',
    sources: ['LIQ_TEAM', 'LIQ_RES', 'WIKI_MPL'],
    confidence: 'verified',
  },
  {
    year: '2026-08-07', kicker: 'New roster',
    title: 'S18 lineup announced',
    text: 'TLID named Aran, Kevin, Drichel, Anaver, Keven and Lyoni, with Honjaw and Facehugger on staff.',
    sources: ['IG_S18', 'VCG', 'TITO'],
    confidence: 'verified with corroboration',
  },
  {
    year: '2026-11-08', kicker: 'S18',
    title: 'First in regular season, third overall',
    text: 'TLID led the S18 regular season at 12–4, then placed third after a 3–4 lower-bracket loss to BTR. The top two went to M8.',
    sources: ['LIQ_S18', 'DOT', 'ITEM', 'MPL_TEAM'],
    confidence: 'verified',
  },
];

export const historyUnknowns = [
  'AURA Esports was founded in 2017, 2018 or 2024, depending on the source.',
  'The exact date TLID first used its current name.',
  'Acquisition price and current legal ownership.',
];
