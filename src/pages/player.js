import { playerBySlug } from '../data/players.js';
import { mvpLeader } from '../data/stats.js';
import { portrait, portraitCredit, sourceNote, unknown, sectionHead, ribbon } from '../lib/ui.js';
import { renderNotFound } from './notfound.js';

export function renderPlayer(slug) {
  const p = playerBySlug[slug];
  if (!p) return renderNotFound();
  const shortBio = {
    aran: 'EXP Laner TLID sejak S14. Masuk roster S18.',
    kevin: 'Jungler menurut S18. Sebelumnya bernama Joo.',
    drichel: 'Mid Laner. Bergabung 2026-03.',
    anaver: 'Mid Laner dalam roster S18. Data pribadi belum terverifikasi.',
    keven: 'Gold Laner dalam roster S18. Ejaan nama masih bertabrakan.',
    lyoni: 'Roamer. Naik dari TLID Academy ke tim utama.',
  };

  const statBlock = p.stat ? `
    <div class="stat-strip">
      <div><b>${p.stat.kda.toFixed(2)}</b><span>KDA rata-rata</span></div>
      <div><b>${p.stat.kp}%</b><span>Kill participation</span></div>
      <div><b>${p.stat.games}</b><span>Game tercatat</span></div>
      <div><b>${p.stat.k.toFixed(1)}/${p.stat.d.toFixed(1)}/${p.stat.a.toFixed(1)}</b><span>K/D/A rata-rata</span></div>
    </div>
    <p class="stat-caveat">Statistik dari MLBBHub, 2026-11-17 14:13 UTC. Peran menurut sumber: ${p.stat.listedRole}. ${p.slug === 'kevin' ? 'Nilai KDA 6.39 milik Drichel; Kevin 5.82.' : ''}</p>
    ${sourceNote(['MLBBHUB', 'MPL_STATS'])}` : `
    <div class="empty-stat"><b>${unknown('Belum dipublikasikan')}</b><p>Statistik musiman untuk ${p.handle} tidak tersedia dalam data yang dikumpulkan. Kami tidak mengisi dengan nol atau perkiraan.</p>${sourceNote(p.sources)}</div>`;

  const mvp = p.slug === 'kevin' ? `
    <div class="mvp-mark"><span>Klasemen MVP</span><b>${mvpLeader.points} poin · peringkat ${mvpLeader.rank}</b>${sourceNote(mvpLeader.sources)}</div>` : '';

  return {
    html: `
<section class="player-hero" style="--accent-rot:${p.index}deg">
  <a class="back-link" href="/players">← Kembali ke roster</a>
  <nav class="breadcrumb" aria-label="Lokasi">TEAM LIQUID ID / PEMAIN / ${p.handle}</nav>
  <div class="player-grid">
    <div class="player-portrait">
      <div class="portrait-frame">${portrait(p, '', true)}<span class="portrait-tag">${portraitCredit(p)}</span></div>
      <span class="player-no">${p.index} / 06</span>
      ${p.photo ? sourceNote(['COMMONS'], 'Lisensi potret') : ''}
    </div>
    <div class="player-intro">
      <h1>${p.handle}</h1>
      <p class="kicker">${p.role}</p>
      <p class="script">${p.tagline}</p>
      <dl class="identity-list">
        <div><dt>Nama asli</dt><dd>${p.realName ? p.realName : unknown('Tidak dipublikasikan')}</dd></div>
        <div><dt>Peran</dt><dd>${p.role}</dd></div>
        <div><dt>Kewarganegaraan</dt><dd>${p.nationality ? p.nationality : unknown()}</dd></div>
        <div><dt>Tanggal lahir</dt><dd>${p.born ? p.born : unknown()}</dd></div>
        <div><dt>Riwayat joined</dt><dd>${p.joined}</dd></div>
      </dl>
      ${sourceNote(p.sources, 'Sumber identitas')}
    </div>
  </div>
</section>

<section class="section player-bio">
  ${sectionHead('Profil', 'Catatan kompetitif')}
  <p class="bio-lead">${shortBio[p.slug]}</p>
  <ul class="fact-list">${p.facts.map((f) => `<li>${f}</li>`).join('')}</ul>
  ${p.conflict ? `<aside class="conflict"><p class="kicker">Konflik sumber</p><p>${p.conflict}</p><a class="conflict-link" href="/sources">Lihat sumber →</a></aside>` : ''}
</section>

<section class="section">
  ${sectionHead('Angka', 'Statistik yang dapat ditampilkan')}
  ${statBlock}
  ${mvp}
</section>

<section class="section">
  ${sectionHead('Rute', 'Lanjut menjelajah')}
  <div class="link-row">
    <a class="ticket" href="/statistics">Lihat statistik tim →</a>
    <a class="ticket" href="/matches">Lihat arsip pertandingan →</a>
    <a class="ticket" href="/history">Lihat garis waktu tim →</a>
  </div>
</section>`,
  };
}
