import { playerStats, teamTotals, records, mvpLeader, statConflicts } from '../data/stats.js';
import { sourceNote, sectionHead, esc } from '../lib/ui.js';
import { applyLanguage } from '../i18n.js';

const metrics = {
  kda: { label: 'KDA rata-rata', max: 7, get: (p) => p.kda, fmt: (v) => v.toFixed(2) },
  kp: { label: 'Kill participation', max: 100, get: (p) => p.kp, fmt: (v) => `${v}%` },
  games: { label: 'Game tercatat', max: 60, get: (p) => p.games, fmt: (v) => String(v) },
};

const totalRows = [
  ['Kills', teamTotals.kills], ['Deaths', teamTotals.deaths], ['Assists', teamTotals.assists],
  ['Gold', teamTotals.gold.toLocaleString('id-ID')], ['Damage', teamTotals.damage.toLocaleString('id-ID')],
  ['Lord', teamTotals.lord], ['Tortoise', teamTotals.tortoise], ['Tower', teamTotals.tower],
];

export function renderStats() {
  return {
    html: `
<section class="page-head analytics-head">
  <h1>Angka dengan<br><em>label yang jujur</em></h1>
  <p class="kicker">Statistik</p>
  <p class="lede">Hanya nilai yang tercatat dalam riset yang ditampilkan. Jika musim, scope, atau sumbernya diperdebatkan, kami katakan — bukan memilih angka yang paling rapi.</p>
  ${sourceNote(['MLBBHUB', 'MPL_STATS', 'LIQ_TEAM', 'ESC'])}
</section>

<section class="section">
  ${sectionHead('Perbandingan', 'Tiga pemain dengan data musiman', 'Data MLBBHub · 2026-11-17, 14:13 UTC. Klik metrik untuk mengubah perbandingan.')}
  <div class="metric-controls" role="group" aria-label="Pilih metrik perbandingan">
    ${Object.entries(metrics).map(([key, m]) => `<button type="button" class="metric-btn${key === 'kda' ? ' active' : ''}" data-metric="${key}" aria-pressed="${key === 'kda'}">${m.label}</button>`).join('')}
  </div>
  <div class="bar-chart" id="bar-chart" aria-live="polite"></div>
  <p class="chart-note">Nilai KDA 6.39 Drichel juga muncul di daftar Top 5 resmi MPL ID. Peran Kevin mengikuti MLBBHub (GOLD) dan berbeda dengan pengumuman S18 (Jungler).</p>
  ${sourceNote(['MLBBHUB', 'MPL_STATS', 'IG_S18'])}
</section>

<section class="section">
  ${sectionHead('Tim', 'Total yang tidak diberi label musim', 'Angka identik muncul di empat jalur statistik resmi dengan judul musim berbeda.')}
  <div class="totals-grid">${totalRows.map(([label, value]) => `<div class="total-cell"><span>${label}</span><b>${value}</b></div>`).join('')}</div>
  ${sourceNote(teamTotals.sources, 'Sumber total tim')}
</section>

<section class="section split-section">
  <div><h3 class="subhead">MVP</h3><div class="mvp-card"><span>${mvpLeader.handle}</span><b>${mvpLeader.points}</b><small>poin · peringkat ${mvpLeader.rank}</small></div>${sourceNote(mvpLeader.sources)}</div>
  <div><h3 class="subhead">Rekor</h3><div class="record-stack">${records.map((r) => `<div><b>${r.value}</b><span>${r.label}</span><small>${r.detail}</small>${sourceNote(r.sources, 'Sumber')}</div>`).join('')}</div></div>
</section>

<section class="section">
  ${sectionHead('Batas data', 'Konflik yang tidak kami sembunyikan')}
  <div class="conflict-grid">${statConflicts.map((c) => `<article class="conflict"><h3>${c.title}</h3><p>${c.text}</p><a class="conflict-link" href="/sources">Lihat sumber →</a>${sourceNote(c.sources)}</article>`).join('')}</div>
</section>

<section class="section unavailable-block">
  ${sectionHead('Belum tersedia', 'Data yang tidak kami punya')}
  <p>GPM, DPM, CS, objektif Tambak/Tortoise per pemain, dan pemisahan musim reguler versus playoff tidak tersedia di sumber yang dikumpulkan. Kolom tersebut sengaja tidak dibuat.</p>
</section>`,
    mount() {
      const chart = document.getElementById('bar-chart');
      const buttons = [...document.querySelectorAll('.metric-btn')];
      if (!chart || !buttons.length) return;
      const draw = (key) => {
        const m = metrics[key];
        chart.innerHTML = `<p class="result-status"><span class="count">${playerStats.length}</span> PEMAIN</p>` + playerStats.map((p) => {
          const value = m.get(p);
          const pct = Math.min(100, (value / m.max) * 100);
          return `<div class="bar-row">
            <div class="bar-label"><a href="/players/${p.slug}">${esc(p.handle)}</a><small>${esc(p.roleListed)}</small></div>
            <div class="bar-track"><span style="width:${pct.toFixed(1)}%"></span></div>
            <b>${m.fmt(value)}</b>
          </div>`;
        }).join('');
        applyLanguage(chart);
      };
      const requested = new URLSearchParams(location.search).get('m');
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
