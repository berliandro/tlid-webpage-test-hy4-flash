import { starters, substitutes } from '../data/players.js';
import { sourceNote } from '../lib/ui.js';

const fan = starters.map((p) => `
  <a class="fan-card" href="/players/${p.slug}" aria-label="${p.handle}, ${p.role}">
    <img src="public/assets/cards/${p.handle}.jpg" width="720" height="1120" loading="eager" decoding="async" alt="${p.handle} of Team Liquid ID" />
    <span class="card-top"><span><span class="card-name">${p.handle}</span><span class="card-sub">${p.role}</span></span><span class="score"><b>${p.index}</b></span></span>
  </a>`).join('');

const gates = [
  { href: '/statistics', label: 'Statistics', note: 'KDA / MVP', cls: 'tile-cyan' },
  { href: '/matches', label: 'Matches', note: 'Results & tournaments', cls: 'tile-purple' },
  { href: '/discover', label: 'Discover', note: 'Stories', cls: 'tile-red' },
  { href: '/history', label: 'History', note: 'Timeline', cls: 'tile-green' },
].map((g) => `<a class="tile tile-vivid ${g.cls}" href="${g.href}"><span class="tile-tag">${g.note}</span><b>${g.label}</b></a>`).join('');

export function renderHome() {
  return {
    html: `
<div class="home-page">
  <section class="hero" aria-labelledby="home-title">
    <span class="float-chip left" aria-hidden="true"><img src="public/assets/cards/Aran.jpg" alt="" /></span>
    <span class="float-chip right" aria-hidden="true"><img src="public/assets/cards/Lyoni.jpg" alt="" /></span>
    <p class="hero-badge"><span class="coin"></span> S18 · 2026 Season</p>
    <h1 id="home-title"><span>Five starters.</span><span>One season.</span></h1>
    <p class="hero-sub">Five starters named on 7 August. A 71–50 record since May 2024. Follow any result to its source.</p>
    <p class="hero-cta"><a class="pill" href="/players">View roster →</a></p>
  </section>

  <section class="card-fan" aria-label="Starting five">
    <div class="fan-inner">${fan}</div>
  </section>
  <p class="fan-caption"><span class="swipe-hint">SWIPE FOR ALL FIVE · </span>THE STARTING FIVE · SOURCED PORTRAITS · 7 AUGUST 2026</p>

  <section class="section">
    <div class="section-head"><div><span class="kicker">01 / Roster</span><h2>The five</h2></div><p class="section-sub">Named on 7 August 2026. Anaver is listed with the substitutes below.</p></div>
    <div class="grid-cards">
      ${starters.map((p) => `<a class="tile" href="/players/${p.slug}"><span class="tile-tag">${p.role}</span><b>${p.handle}</b><p>${p.tagline}</p></a>`).join('')}
    </div>
    <details class="bench"><summary>Substitutes (${substitutes.length}) · No. ${substitutes[0].index}</summary><div class="bench-list">${substitutes.map((p) => `<a href="/players/${p.slug}">${p.handle}<span>${p.role}</span></a>`).join('')}</div></details>
    ${sourceNote(['IG_S18'], 'Roster source')}
  </section>

  <section class="section">
    <div class="section-head"><div><span class="kicker">02 / Record</span><h2>71–50</h2></div><p class="section-sub">Wins and losses since May 2024. Third at MPL ID S18.</p></div>
    <div class="grid-cards">
      <div class="tile tile-gold"><span class="tile-tag">Matches</span><b>71–50</b><p>All Verified results</p></div>
      <div class="tile"><span class="tile-tag">Games</span><b>174–141</b><p>21 May 2024 – 2 October 2026</p></div>
      <div class="tile"><span class="tile-tag">Best result</span><b>S14</b><p>MPL Indonesia champion</p></div>
    </div>
    ${sourceNote(['LIQ_TEAM', 'ESC'])}
  </section>

  <section class="section">
    <div class="section-head"><div><span class="kicker">03 / Explore</span><h2>Go deeper</h2></div><p class="section-sub">Sources are listed on every page.</p></div>
    <div class="grid-cards">${gates}</div>
  </section>
</div>`,
  };
}
