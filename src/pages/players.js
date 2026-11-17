import { players, rosterNote } from '../data/players.js';
import { portrait, portraitCredit, sourceNote, sectionHead } from '../lib/ui.js';

export function renderPlayers() {
  return {
    html: `
<section class="page-head">
  <h1 class="mast compact"><span class="mast-a">DAFTAR</span><span class="mast-b">PEMAIN <em>S18</em></span></h1>
  <p class="lede">Enam identitas, enam jalur. Halaman ini memakai roster yang diumumkan TLID pada 7 Agustus 2026, bukan daftar lama di situs resmi.</p>
  ${sourceNote([rosterNote.id], 'Mengapa roster ini dipakai')}
</section>

<section class="roster-editorial">
  ${players.map((p, i) => `
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
</section>

<section class="section note-section">
  ${sectionHead('Catatan', 'Apa yang sengaja tidak kami isi', 'Nama asli, tanggal lahir, dan statistik tidak ditambahkan jika tidak ada sumber terverifikasi.')}
  <div class="note-grid">
    <p><b>Kevin, Keven, Anaver</b> — identitas pribadi belum terverifikasi. Halaman mereka hanya memuat peran dan informasi dari pengumuman resmi.</p>
    <p><b>Peran Kevin</b> — pengumuman S18 menyebut Jungler, MLBBHub menyebut GOLD. Keduanya ditandai, bukan dipilih diam-diam.</p>
    <p><b>Potret</b> — Aran, Kevin, Drichel, Keven, dan Lyoni memakai potret dari Liquipedia Commons (CC BY-SA 3.0) dengan atribusi. Anaver tetap memakai ilustrasi sintetik karena tidak ada potret yang disediakan.</p>
  </div>
  ${sourceNote(['IG_S18', 'MLBBHUB', 'LIQ_PLAYER'])}
</section>`,
  };
}
