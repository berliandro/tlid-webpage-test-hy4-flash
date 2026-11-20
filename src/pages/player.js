import { playerBySlug } from '../data/players.js';
import { mvpLeader } from '../data/stats.js';
import { portrait, portraitCredit, sourceNote, unknown, sectionHead, ribbon } from '../lib/ui.js';
import { renderNotFound } from './notfound.js';

export function renderPlayer(slug) {
  const p = playerBySlug[slug];
  if (!p) return renderNotFound();
  const shortBio = {
    aran: 'EXP laner since S14. In the S18 roster.',
    kevin: 'Jungler per S18. Previously named Joo.',
    drichel: 'Mid laner. Joined in March 2026.',
    anaver: 'Mid laner in the S18 roster. Personal data unverified.',
    keven: 'Gold laner in S18. The spelling of the name is disputed.',
    lyoni: 'Roamer. Came up from TLID Academy.',
  };

  const statBlock = p.stat ? `
    <div class="stat-strip">
      <div><b>${p.stat.kda.toFixed(2)}</b><span>Average KDA</span></div>
      <div><b>${p.stat.kp}%</b><span>Kill participation</span></div>
      <div><b>${p.stat.games}</b><span>Games recorded</span></div>
      <div><b>${p.stat.k.toFixed(1)}/${p.stat.d.toFixed(1)}/${p.stat.a.toFixed(1)}</b><span>Average K/D/A</span></div>
    </div>
    <p class="stat-caveat">MLBBHub, 17 November 2026, 14:13 UTC. Role per source: ${p.stat.listedRole}.</p>
    ${sourceNote(['MLBBHUB', 'MPL_STATS'])}` : `
    <div class="empty-stat"><b>${unknown('Not published')}</b><p>Season statistics for ${p.handle} are not in the collected data. We do not fill the gap with zeroes or guesses.</p>${sourceNote(p.sources)}</div>`;

  const mvp = p.slug === 'kevin' ? `
    <div class="mvp-mark"><span>MVP standings</span><b>${mvpLeader.points} points · rank ${mvpLeader.rank}</b>${sourceNote(mvpLeader.sources)}</div>` : '';

  const heroPortrait = p.photo
    ? `<img src="public/assets/cards/${p.handle}.jpg" width="720" height="1120" loading="eager" decoding="async" alt="${p.handle}, Team Liquid ID" />`
    : portrait(p, '', true);

  return {
    html: `
<section class="player-hero" style="--accent-rot:${p.index}deg;--card-bg:${p.cardBg}">
  <a class="back-link" href="/players">← Back to roster</a>
  <div class="player-grid">
    <div class="player-portrait">
      <div class="portrait-frame">${heroPortrait}</div>
      <span class="player-no">${p.index} / 06</span>
      ${p.photo ? sourceNote(['COMMONS'], 'Portrait licence') : ''}
    </div>
    <div class="player-intro">
      <h1>${p.handle}</h1>
      <p class="kicker">${p.role}</p>
      <p class="script">${p.tagline}</p>
      <dl class="identity-list">
        <div><dt>Real name</dt><dd>${p.realName ? p.realName : unknown('Not published')}</dd></div>
        <div><dt>Nationality</dt><dd>${p.nationality ? p.nationality : unknown()}</dd></div>
        <div><dt>Date of birth</dt><dd>${p.born ? p.born : unknown()}</dd></div>
        <div><dt>Joined</dt><dd>${p.joined}</dd></div>
      </dl>
      ${sourceNote(p.sources, 'Identity sources')}
    </div>
  </div>
</section>

<section class="section player-bio">
  ${sectionHead('Profile', 'Competitive notes')}
  <p class="bio-lead">${shortBio[p.slug]}</p>
  <ul class="fact-list">${p.facts.map((f) => `<li>${f}</li>`).join('')}</ul>
  ${p.conflict ? `<aside class="conflict"><p class="kicker">Source conflict</p><p>${p.conflict}</p></aside>` : ''}
</section>

<section class="section">
  ${sectionHead('Numbers', 'Statistics we can show')}
  ${statBlock}
  ${mvp}
</section>
`,
  };
}
