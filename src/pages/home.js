import { pulse } from '../data/team.js';
import { starters, substitutes } from '../data/players.js';
import { portrait, sourceNote } from '../lib/ui.js';
import { icon } from '../icons.js';

const band = starters.map((p) => `
  <a class="band-card" href="/players/${p.slug}">
    <span class="band-image">${portrait(p)}</span>
    <b>${p.handle}</b>
    <span class="band-role">${p.role}</span>
  </a>`).join('');

const gates = [
  { href: '/statistics', label: 'Statistik', note: 'KDA dan MVP', icon: 'target' },
  { href: '/matches', label: 'Pertandingan', note: 'Hasil dan turnamen', icon: 'swords' },
  { href: '/discover', label: 'Jelajah', note: 'Cerita tim', icon: 'quill' },
  { href: '/history', label: 'Sejarah', note: 'Garis waktu', icon: 'book' },
].map((g) => `<a href="${g.href}">${icon(g.icon)}<b>${g.label}</b><span>${g.note}</span></a>`).join('');

export function renderHome() {
  return {
    html: `
<div class="home-page">
  <section class="home-hero" aria-labelledby="home-title">
    <div class="home-identity">
      <h1 id="home-title" class="home-title">${icon('horse', 'icon-lg')}<span>Team Liquid <em>ID</em></span></h1>
      <p class="home-deck">Lima pemain utama. Satu musim. Rekor yang bisa diverifikasi.</p>
      <a class="home-cta" href="/players">Lihat roster ${icon('quill')}</a>
      <span class="home-thread" aria-hidden="true"></span>
    </div>
    <aside class="home-pulse" aria-label="Snapshot terakhir">
      <p class="pulse-kicker">SNAPSHOT · ${pulse.date}</p>
      <p class="pulse-big">ke-3</p>
      <p class="pulse-line">MPL ID ${pulse.lines[0]}</p>
      <p class="pulse-line">${pulse.lines[1]}</p>
      <p class="pulse-note">Arsip, bukan data langsung.</p>
      ${sourceNote(pulse.sources, 'Sumber')}
    </aside>
  </section>

  <section class="home-players" aria-labelledby="players-band-title">
    <div class="home-head">
      <div><p class="kicker">01 / Roster</p><h2 id="players-band-title">Lima pemain utama S18</h2></div>
      <p>Susunan diumumkan 2026-08-07. Potret bersumber, bukan ukiran.</p>
    </div>
    <div class="band">${band}</div>
    <details class="bench-panel"><summary>Cadangan · ${substitutes.length} pemain</summary>
      <div class="bench-list">${substitutes.map((p) => `<a href="/players/${p.slug}">${icon('quill')}<b>${p.handle}</b><span>${p.role}</span></a>`).join('')}</div>
    </details>
    ${sourceNote(['IG_S18'])}
  </section>

  <section class="home-record" aria-labelledby="record-title">
    <div><p class="kicker">02 / Rekor</p><p class="record-number">71–50</p></div>
    <div class="record-body">
      <h2 id="record-title">Rekor pertandingan</h2>
      <p>174–141 game · 2024-05-21 sampai 2026-10-02.</p>
      <p>Juara MPL ID S14. Runner-up M6. Posisi 3 di S18.</p>
      <a class="text-link" href="/matches">Lihat pertandingan →</a>
    </div>
    ${sourceNote(['LIQ_TEAM', 'ESC'])}
  </section>

  <section class="home-gates" aria-labelledby="gates-title">
    <h2 id="gates-title">Lanjut ke arsip</h2>
    <p class="archive-note">Angka bersumber. Buka catatan sumber di tiap bagian. <a href="#glossary">Glosarium →</a></p>
    <nav class="gate-row" aria-label="Bagian lain">${gates}</nav>
  </section>
</div>`,
  };
}
