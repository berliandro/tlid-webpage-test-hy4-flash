import { starters, substitutes } from '../data/players.js';
import { sourceNote } from '../lib/ui.js';

const fan = starters.map((p) => `
  <a class="fan-card" href="/players/${p.slug}" aria-label="${p.handle}, ${p.role}" style="--card-bg:${p.cardBg};--card-ink:${p.cardInk}">
    <picture><source media="(max-width:860px)" srcset="public/assets/cards/sm/${p.handle}.webp" type="image/webp" /><img src="public/assets/cards/${p.handle}.jpg" width="504" height="784" loading="eager" decoding="async" alt="${p.handle} of Team Liquid ID" /></picture>
    <span class="card-top"><span><span class="card-name">${p.handle}</span><span class="card-sub">${p.role}</span></span><span class="score"><b>${p.index}</b></span></span>
  </a>`).join('');

export function renderHome() {
  return {
    html: `
<div class="home-page">
  <section class="hero" aria-labelledby="home-title">
    <p class="hero-badge"><span class="coin"></span> S18 · 2026 Season</p>
    <h1 id="home-title"><span>Five starters.</span><span>One season.</span></h1>
    <p class="hero-sub">Five starters named on 7 August. 71–50 since May 2024. S18 is the 2026 season; MLBB is Mobile Legends: Bang Bang.</p>
    <p class="hero-cta"><a class="pill" href="/players">View roster →</a></p>
  </section>

  <section class="card-fan" aria-label="Starting five">
    <div class="fan-inner">${fan}</div>
  </section>
  <p class="fan-caption"><span class="swipe-hint">SWIPE · </span>NO. 04 IS ANAVER (SUBSTITUTE)</p>

  <section class="section">
    <div class="section-head"><div><span class="kicker">01 / Roster</span><h2>Roster notes</h2></div><p class="section-sub">Anaver is listed with the substitutes.</p></div>
    <details class="bench"><summary>Substitutes (${substitutes.length}) · No. ${substitutes[0].index}</summary><div class="bench-list">${substitutes.map((p) => `<a href="/players/${p.slug}">${p.handle}<span>${p.role}</span></a>`).join('')}</div></details>
    ${sourceNote(['IG_S18'], 'Roster source')}
  </section>

  <section class="section">
    <div class="section-head"><div><span class="kicker">02 / Record</span><h2>71–50</h2></div><p class="section-sub">Third at MPL ID S18.</p></div>
    <div class="grid-cards">
      <div class="tile tile-gold"><span class="tile-tag">Matches</span><b>71–50</b><p>Verified matches</p></div>
      <div class="tile"><span class="tile-tag">Games</span><b>174–141</b><p>21 May 2024 – 2 October 2026</p></div>
      <div class="tile"><span class="tile-tag">Best result</span><b>S14</b><p>MPL Indonesia champion</p></div>
    </div>
    ${sourceNote(['LIQ_TEAM', 'ESC'])}
  </section>
</div>`,
  };
}
