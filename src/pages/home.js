import { pulse } from '../data/team.js';
import { players } from '../data/players.js';
import { portrait, sourceNote } from '../lib/ui.js';

const band = players.map((p) => `
  <a class="band-card" href="/players/${p.slug}">
    <span class="band-image">${portrait(p)}</span>
    <b>${p.handle}</b>
    <span class="band-role">${p.role}</span>
  </a>`).join('');

export function renderHome() {
  return {
    html: `
<div class="home-page">
  <section class="home-hero" aria-labelledby="home-title">
    <div class="home-identity">
      <h1 id="home-title" class="home-title">Team Liquid <span class="home-title-accent">ID</span></h1>
      <p class="home-deck">Enam pemain. Satu tim MLBB Indonesia. Setiap musim dipotong menjadi pola.</p>
      <a class="home-cta" href="/players">Temui roster <span aria-hidden="true">→</span></a>
      <span class="home-thread" aria-hidden="true"></span>
    </div>
    <aside class="home-pulse" aria-label="Snapshot terakhir">
      <p class="pulse-kicker">SNAPSHOT · ${pulse.date}</p>
      <p class="pulse-big">ke-3</p>
      ${pulse.lines.map((line) => `<p class="pulse-line">${line}</p>`).join('')}
      <p class="pulse-note">${pulse.note}</p>
      ${sourceNote(pulse.sources, 'Sumber snapshot')}
    </aside>
  </section>

  <section class="home-players" aria-labelledby="players-band-title">
    <div class="home-head">
      <h2 id="players-band-title">Enam individu</h2>
      <p>Susunan S18 menurut pengumuman resmi 7 Agustus 2026. Ilustrasi, bukan potret.</p>
    </div>
    <div class="band">${band}</div>
    ${sourceNote(['IG_S18'])}
  </section>

  <section class="home-record" aria-labelledby="record-title">
    <p class="record-number">71–50</p>
    <div class="record-body">
      <h2 id="record-title">Rekor agregat</h2>
      <p>174–141 game · 21 Mei 2024 – 2 Okt 2026.</p>
      <p>Juara MPL ID S14 · runner-up M6 · ke-3 S18.</p>
      <a class="text-link" href="/matches">Lihat arsip pertandingan →</a>
    </div>
    ${sourceNote(['LIQ_TEAM', 'ESC'])}
  </section>

  <section class="home-gates" aria-labelledby="gates-title">
    <h2 id="gates-title">Masuk lebih dalam</h2>
    <nav class="gate-row" aria-label="Bagian lain">
      <a href="/statistics"><b>Statistik</b><span>KDA, MVP, batas data</span></a>
      <a href="/matches"><b>Pertandingan</b><span>Turnamen dan hasil</span></a>
      <a href="/discover"><b>Jelajah</b><span>Cerita di balik angka</span></a>
      <a href="/history"><b>Sejarah</b><span>Garis waktu kompetitif</span></a>
    </nav>
  </section>
</div>`,
  };
}
