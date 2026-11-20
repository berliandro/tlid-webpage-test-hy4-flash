import { starters, substitutes, rosterNote } from '../data/players.js';
import { sourceNote, sectionHead } from '../lib/ui.js';

export function renderPlayers() {
  return {
    html: `
<section class="page-head">
  <p class="hero-badge"><span class="coin"></span> S18 · 2026 Season</p>
  <h1><span>The five</span></h1>
  <p class="lede">The S18 lineup, announced 7 August 2026.</p>
  ${sourceNote([rosterNote.id], 'Why this roster')}
</section>

<section class="roster-editorial">
  ${starters.map((p, i) => `
  <a class="roster-row${i % 2 ? ' reverse' : ''}" href="/players/${p.slug}">
    <div class="player-shot">
      <img src="public/assets/cards/${p.handle === 'Kevin' ? 'Kevinn' : p.handle}.jpg" width="720" height="1120" loading="lazy" decoding="async" alt="${p.handle}, Team Liquid ID" />
      <span class="player-no">${p.index}</span>
    </div>
    <div class="row-copy">
      <h2>${p.handle}</h2>
      <p class="kicker">${p.role}</p>
      <p class="row-tagline">${p.tagline}</p>
      <p class="row-meta">${p.joined}${p.nationality ? ` · ${p.nationality}` : ''}</p>
      <span class="row-link">Open profile</span>
    </div>
  </a>`).join('')}
  <details class="bench"><summary>Substitutes (${substitutes.length})</summary>
    <div class="bench-list">${substitutes.map((p) => `<a href="/players/${p.slug}"><b>${p.handle}</b><span>${p.role}</span></a>`).join('')}</div>
  </details>
</section>

<section class="section note-section">
  ${sectionHead('Notes', 'What we left blank', 'No real names, birth dates or statistics without a verified source.')}
  <div class="note-grid">
    <p><b>Kevin, Keven, Anaver</b> — personal identities are not verified.</p>
    <p><b>Kevin's role</b> — Jungler per S18, GOLD per MLBBHub. Both are labelled.</p>
    <p><b>Portraits</b> — Liquipedia Commons, CC BY-SA 3.0. Anaver uses a synthetic illustration.</p>
  </div>
  ${sourceNote(['IG_S18', 'MLBBHUB', 'LIQ_PLAYER'])}
</section>`,
  };
}
