import { starters, substitutes, rosterNote } from '../data/players.js';
import { icon } from '../icons.js';
import { portrait, portraitCredit, sourceNote, sectionHead } from '../lib/ui.js';

export function renderPlayers() {
  return {
    html: `
<section class="page-head">
  <h1 class="mast compact"><span class="mast-a">DAFTAR</span><span class="mast-b">PEMAIN <em>S18</em></span></h1>
  <p class="lede">Roster S18 menurut pengumuman resmi 2026-08-07.</p>
  ${sourceNote([rosterNote.id], 'Mengapa roster ini dipakai')}
</section>

<section class="roster-editorial">
  ${starters.map((p, i) => `
  <a class="roster-row${i % 2 ? ' reverse' : ''}" href="/players/${p.slug}">
    <div class="row-portrait" style="--tilt:${i % 2 ? '3deg' : '-3deg'}">
      <span class="row-index">${p.index}</span>
      ${portrait(p)}
      <span class="paper-tag">${portraitCredit(p)}</span>
    </div>
    <div class="row-copy">
      <h2>${p.handle}</h2>
      <p class="kicker">${p.role}</p>
      <p class="row-tagline">${p.tagline}</p>
      <p class="row-meta">${p.joined}${p.nationality ? ` · ${p.nationality}` : ''}</p>
      <span class="row-link">Buka profil →</span>
    </div>
  </a>`).join('')}
  <details class="bench-panel"><summary>Cadangan · ${substitutes.length} pemain</summary>
    <div class="bench-list">${substitutes.map((p) => `<a href="/players/${p.slug}">${icon('quill')}<b>${p.handle}</b><span>${p.role}</span></a>`).join('')}</div>
  </details>
</section>

<section class="section note-section">
  ${sectionHead('Catatan', 'Apa yang sengaja tidak kami isi', 'Nama asli, tanggal lahir, dan statistik tidak ditambahkan jika tidak ada sumber terverifikasi.')}
  <div class="note-grid">
    <p><b>Kevin, Keven, Anaver</b> — identitas pribadi belum terverifikasi.</p>
    <p><b>Peran Kevin</b> — Jungler menurut S18, GOLD menurut MLBBHub. Keduanya ditandai.</p>
    <p><b>Potret</b> — bersumber dari Liquipedia Commons (CC BY-SA 3.0). Anaver memakai ilustrasi sintetik.</p>
  </div>
  ${sourceNote(['IG_S18', 'MLBBHUB', 'LIQ_PLAYER'])}
</section>`,
  };
}
