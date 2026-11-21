import { playerStats, teamTotals, records, mvpLeader, statConflicts } from '../data/stats.js';
import { sourceNote, sectionHead, esc } from '../lib/ui.js';
import { applyLanguage, translate } from '../i18n.js';
import { refreshMotion } from '../motion.js';

const metrics = {
  kda: {
    label: 'KDA rata-rata', max: 7, get: (p) => p.kda, fmt: (v) => v.toFixed(2),
    note: "Drichel's 6.39 KDA is also in the MPL ID Top 5.",
  },
  kp: { label: 'Kill participation', max: 100, get: (p) => p.kp, fmt: (v) => `${v}%`, note: '' },
  games: { label: 'Game tercatat', max: 60, get: (p) => p.games, fmt: (v) => String(v), note: '' },
};

const pageSources = ['MLBBHUB', 'MPL_STATS', 'LIQ_TEAM', 'ESC'];

const totalGroups = [
  {
    label: 'Combat',
    rows: [
      ['Kills', teamTotals.kills], ['Deaths', teamTotals.deaths],
      ['Assists', teamTotals.assists], ['Damage', teamTotals.damage.toLocaleString('id-ID')],
    ],
  },
  {
    label: 'Objectives & economy',
    rows: [
      ['Gold', teamTotals.gold.toLocaleString('id-ID')], ['Lord', teamTotals.lord],
      ['Tortoise', teamTotals.tortoise], ['Tower', teamTotals.tower],
    ],
  },
];

export function renderStats() {
  return {
    html: `
<section class="page-head analytics-head compact-head">
  <h1>Numbers with<br><em>the labels attached</em></h1>
  ${sourceNote(pageSources)}
</section>

<section class="section">
  ${sectionHead('Comparison', 'Three players, one season of numbers', 'MLBBHub, 17 November 2026.')}
  <div class="metric-controls" role="group" aria-label="Pilih metrik perbandingan">
    ${Object.entries(metrics).map(([key, m]) => `<button type="button" class="metric-btn${key === 'kda' ? ' active' : ''}" data-metric="${key}" aria-pressed="${key === 'kda'}">${m.label}</button>`).join('')}
  </div>
  <div class="bar-chart" id="bar-chart"></div>
  <p class="chart-note" id="chart-note" role="status" aria-live="polite">Drichel's 6.39 KDA is also in the MPL ID Top 5.</p>
  ${sourceNote(['MLBBHUB', 'MPL_STATS', 'IG_S18'])}
</section>

<section class="section">
  ${sectionHead('Team', 'Totals without a season label', 'Four official feeds show the same totals under different season titles.')}
  ${totalGroups.map((g) => `<div class="total-group"><h3 class="total-group-title">${g.label}</h3><div class="totals-grid">${g.rows.map(([label, value]) => `<div class="total-cell"><span>${label}</span><b>${value}</b></div>`).join('')}</div></div>`).join('')}
  ${sourceNote(teamTotals.sources, 'Team totals')}
</section>

<section class="section">
  <h3 class="subhead">Rekor</h3>
  <div class="record-stack">
    <div><span class="record-kicker">MVP</span><b>${mvpLeader.points}</b><span>${mvpLeader.handle}</span><small>points · rank ${mvpLeader.rank}</small>${sourceNote(mvpLeader.sources, 'Source')}</div>
    ${records.map((r) => `<div><b>${r.value}</b><span>${r.label}</span><small>${r.detail}</small>${sourceNote(r.sources, 'Source')}</div>`).join('')}
  </div>
</section>

<section class="section">
  ${sectionHead('', 'Where sources disagree')}
  <div class="conflict-grid">${statConflicts.map((c) => `<article class="conflict"><h3>${c.title}</h3><p>${c.text}</p>${sourceNote(c.sources)}</article>`).join('')}</div>
</section>

<section class="section unavailable-block">
  ${sectionHead('Not available', 'GPM, DPM, CS and objective splits are missing')}
  <div class="unavailable">
    <p>GPM, DPM, CS and objective details are not in the collected sources.</p>
    ${sourceNote(pageSources)}
  </div>
</section>`,
    mount() {
      const chart = document.getElementById('bar-chart');
      const buttons = [...document.querySelectorAll('.metric-btn')];
      if (!chart || !buttons.length) return;
      const requested = new URLSearchParams(location.search).get('m');
      const invalid = requested && !metrics[requested];
      const draw = (key) => {
        const m = metrics[key];
        chart.innerHTML = (invalid ? '<p class="result-status" role="status" aria-live="polite">INVALID METRIC</p>' : `<p class="result-status" role="status" aria-live="polite"><span class="count">${playerStats.length}</span> PLAYERS</p>`) + playerStats.map((p) => {
          const value = m.get(p);
          const pct = Math.min(100, (value / m.max) * 100);
          return `<div class="bar-row">
            <div class="bar-label"><a href="/players/${p.slug}">${esc(p.handle)}</a><small>${esc(p.roleListed)}</small></div>
            <div class="bar-track"><span style="width:${pct.toFixed(1)}%"></span></div>
            <b>${m.fmt(value)}</b>
          </div>`;
        }).join('');
        const note = document.getElementById('chart-note');
        if (note) {
          note.textContent = m.note ? translate(m.note) : '';
          note.hidden = !m.note;
        }
        applyLanguage(chart);
        refreshMotion(chart);
      };
      const initial = metrics[requested] ? requested : 'kda';
      buttons.forEach((b) => {
        const on = b.dataset.metric === initial;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      draw(initial);
      buttons.forEach((btn) => btn.addEventListener('click', () => {
        buttons.forEach((b) => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        const url = new URL(location.href);
        url.searchParams.set('m', btn.dataset.metric);
        history.pushState({}, '', url);
        draw(btn.dataset.metric);
      }));
    },
  };
}
