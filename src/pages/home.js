import { starters, substitutes } from '../data/players.js';
import { sources } from '../data/sources.js';
import { sourceNote, esc } from '../lib/ui.js';
import { translate } from '../i18n.js';

const fan = starters.map((p) => `
  <a class="fan-card" href="/players/${p.slug}" aria-label="${p.handle}, ${p.role}" aria-describedby="hook-${p.slug}" style="--card-bg:${p.cardBg};--card-ink:${p.cardInk}">
    <picture><source media="(max-width:860px)" srcset="public/assets/cards/sm/${p.handle}.webp" type="image/webp" /><img src="public/assets/cards/${p.handle}.jpg" width="504" height="784" loading="eager" decoding="async" alt="${p.handle} of Team Liquid ID" /></picture>
    <span class="card-top"><span><span class="card-name">${p.handle}</span><span class="card-sub">${p.role}</span></span><span class="score"><b>${p.index}</b></span></span>
    <span class="card-hook" id="hook-${p.slug}"><span class="card-hook-text">${p.hook}</span><span class="card-hook-src">${sources[p.sources[0]]?.publisher || ''}</span></span>
  </a>`).join('');

export function renderHome() {
  const benchLabel = `Substitutes (${substitutes.length}) · No. ${substitutes[0].index}`;
  return {
    html: `
<div class="home-page">
  <section class="hero" aria-labelledby="home-title">
    <p class="hero-badge"><span class="coin"></span> S18 · 2026 Season</p>
    <h1 id="home-title"><span>Five starters.</span><span>One season.</span></h1>
    <p class="hero-sub">Five starters named on 7 August. Series record 71–50 (174–141 games) since May 2024. S18 is the 2026 season; MLBB is Mobile Legends: Bang Bang.</p>
    <p class="hero-cta"><a class="pill" href="/players">View roster →</a></p>
  </section>

  <section class="card-fan" aria-label="Starting five">
    <div class="fan-inner">${fan}</div>
  </section>
  <p class="fan-hint"><span class="swipe-hint">SWIPE TO BROWSE · TAP A CARD FOR ITS STORY</span></p>

  <section class="section roster-notes">
    <div class="section-head"><div><span class="kicker">01</span><h2>Roster notes</h2></div><p class="section-sub">Anaver is listed with the substitutes.</p></div>
    <details class="bench"><summary>${esc(translate(benchLabel))}</summary><div class="bench-list">${substitutes.map((p) => `<a href="/players/${p.slug}">${p.handle}<span>${p.role}</span></a>`).join('')}</div><p class="bench-note">No. 04 is Anaver, a substitute. Synthetic illustration, not a real portrait.</p></details>
    ${sourceNote(['IG_S18'], 'Roster source')}
  </section>

  <section class="section season-moment">
    <div class="section-head"><div><span class="kicker">02 / Season</span><h2>The verified record</h2></div><p class="section-sub">One season, one sourced line.</p></div>
    <div class="tile season-tile">
      <span class="tile-tag">Verified record · MPL ID S18</span>
      <b>71–50</b>
      <p>174–141 games · 21 May 2024 – 2 October 2026. Third at MPL ID S18; best result S14 champion.</p>
    </div>
    ${sourceNote(['LIQ_TEAM', 'ESC'])}
  </section>

  <section class="section home-closing">
    <div class="section-head"><div><span class="kicker">Keep exploring</span><h2>The people behind the record.</h2></div><p class="section-sub">Five profiles, season numbers and the sources for both.</p></div>
    <div class="link-row"><a class="ticket" href="/players">Meet the five →</a><a class="ticket" href="/discover">Why this team</a></div>
  </section>
</div>`,
  };
}
