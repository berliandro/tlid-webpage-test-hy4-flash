import { starters, substitutes, rosterNote } from '../data/players.js';
import { sourceNote, sectionHead } from '../lib/ui.js';

export function renderPlayers() {
  return {
    html: `
<section class="page-head">
  <p class="hero-badge"><span class="coin"></span> S18 · 2026 Season</p>
  <h1><span>The five</span></h1>
  <p class="lede">Announced 7 August 2026.</p>
  ${sourceNote([rosterNote.id], 'Why this roster')}
</section>

<section class="roster-editorial">
  <div class="roster-cards">
    ${starters.map((p) => `
    <a class="player-card" href="/players/${p.slug}" style="--card-bg:${p.cardBg};--card-ink:${p.cardInk}">
      <picture><source media="(max-width:860px)" srcset="public/assets/cards/sm/${p.handle}.webp" type="image/webp" /><img src="public/assets/cards/${p.handle}.jpg" width="504" height="784" loading="lazy" decoding="async" alt="${p.handle}, Team Liquid ID" /></picture>
      <span class="card-top"><span><span class="card-name">${p.handle}</span><span class="card-sub">${p.role}</span></span><span class="score"><b>${p.index}</b></span></span>
    </a>`).join('')}
  </div>
  <details class="bench"><summary>Substitutes (${substitutes.length}) · No. ${substitutes[0].index}</summary>
    <div class="bench-list">${substitutes.map((p) => `<a href="/players/${p.slug}"><b>${p.handle}</b><span>${p.role}</span></a>`).join('')}</div>
  </details>
</section>

<section class="section note-section">
  ${sectionHead('Notes', 'What we left blank')}
  <div class="note-grid">
    <p><b>Kevin, Keven, Anaver</b> — personal identities are not verified.</p>
    <p><b>Kevin's role</b> — Jungler per S18, GOLD per MLBBHub. Both are labelled.</p>
    <p><b>Portraits</b> — Liquipedia Commons, CC BY-SA 3.0. Anaver uses a synthetic illustration.</p>
  </div>
  ${sourceNote(['IG_S18', 'MLBBHUB', 'LIQ_PLAYER'])}
</section>`,
  };
}
