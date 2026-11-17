import { pulse, team } from '../data/team.js';
import { players } from '../data/players.js';
import { records } from '../data/stats.js';
import { tournaments } from '../data/matches.js';
import { portrait, portraitCredit, sourceNote, ribbon } from '../lib/ui.js';

const plates = players.map((p, i) => `
  <a class="plate p${i + 1}${i % 2 ? ' dark' : ''}" href="/players/${p.slug}" style="--r:${['-8deg','4deg','-4deg','7deg','-6deg','3deg'][i]};--z:${i + 4}">
    <span class="plate-field"></span>
    ${portrait(p)}
    <span class="plate-ribbon">${p.handle}</span>
    <span class="plate-credit">${portraitCredit(p)}</span>
  </a>`).join('');

const recordLine = records.slice(0, 3).map((r) => `
  <div class="record"><b>${r.value}</b><span>${r.label}</span></div>`).join('');

const latest = tournaments.slice(-3).reverse().map((t) => `
  <li><span class="yr">${t.year}</span><span class="nm">${t.name}</span><span class="pl">${t.place}</span></li>`).join('');

export function renderHome() {
  return {
    html: `
<section class="hero" aria-labelledby="home-title">
  <div class="hero-copy">
    <h1 class="mast"><span class="mast-a">TEAM LIQUID</span><span class="mast-b">ID <em>lookbook</em></span></h1>
    <div class="hairline"></div>
    <p class="lede">Satu tim, enam individu, dan sebuah perjalanan kompetitif yang dipotong menjadi pola. Jelajahi Team Liquid ID bukan hanya lewat hasil pertandingan.</p>
    <span class="script">arsip yang bernapas</span>
    ${ribbon('BUKA LOOKBOOK →', 'a', 'hero-cta')}
    <div class="pulse-card">
      <p class="pulse-label">${pulse.label} · ${pulse.date}</p>
      ${pulse.lines.map((l) => `<p class="pulse-line">${l}</p>`).join('')}
      <p class="pulse-disclaimer">${pulse.note}</p>
      ${sourceNote(pulse.sources, 'Sumber snapshot')}
    </div>
    <p class="discreet">${team.game} · ${team.league} · proyek independen</p>
  </div>
  <div class="hero-stage" aria-label="Ilustrasi enam pemain S18">
    <div class="now-flag"><b>NOW</b> SNAPSHOT S18 · 8 NOV 2026</div>
    <svg class="stitch" viewBox="0 0 900 400" aria-hidden="true"><path d="M30 250 C180 210 250 160 400 150 C560 140 660 180 850 130" fill="none" stroke="#F7C95E" stroke-width="2" stroke-dasharray="3 7" opacity=".7"/><circle cx="400" cy="150" r="6" fill="#F7C95E"/></svg>
    <div class="pattern-sheet" aria-hidden="true"><span class="sheet-label">POLA MUSIM / CUT 01</span></div>
    <span class="stage-note">potong sepanjang musim</span>
    ${plates}
  </div>
</section>

<section class="section intro-section" aria-labelledby="intro-title">
  <header class="section-head"><p class="kicker">01 / Tim</p><h2 id="intro-title">Identitas yang dirakit dari hasil, bukan sebaliknya</h2></header>
  <div class="intro-grid">
    <p>Team Liquid ID adalah skuad Mobile Legends: Bang Bang milik Team Liquid di Indonesia. Tim dibentuk setelah akuisisi STUN.GG beserta AURA Esports dan ECHO pada 21 Mei 2024, tampil sebagai Liquid AURA di S13, lalu memakai nama TLID sejak S14.</p>
    <div class="intro-facts">
      <div><span>Liga</span><b>${team.league}</b></div>
      <div><span>Induk</span><b>${team.parent}</b></div>
      <div><span>Bentuk</span><b>${team.formed}</b></div>
    </div>
  </div>
  ${sourceNote(team.sources)}
</section>

<section class="section players-section" aria-labelledby="players-title">
  <header class="section-head"><p class="kicker">02 / Pemain</p><h2 id="players-title">Enam jalur dalam satu pola</h2><p class="section-sub">Susunan S18 menurut pengumuman resmi 7 Agustus 2026. Ilustrasi di bawah bukan potret asli.</p></header>
  <div class="roster-strip">${players.map((p, i) => `
    <a href="/players/${p.slug}" class="roster-chip" style="--i:${i}">
      <span class="chip-no">${p.index}</span><b>${p.handle}</b><span>${p.role}</span>
    </a>`).join('')}</div>
</section>

<section class="section records-section" aria-labelledby="records-title">
  <header class="section-head"><p class="kicker">03 / Rekam jejak</p><h2 id="records-title">Angka yang bisa dipertanggungjawabkan</h2></header>
  <div class="record-row">${recordLine}</div>
  ${sourceNote(['LIQ_TEAM', 'ESC', 'LIQ_S18', 'DOT'])}
</section>

<section class="section preview-section" aria-labelledby="preview-title">
  <header class="section-head"><p class="kicker">04 / Lanjutkan perjalanan</p><h2 id="preview-title">Empat cara masuk lebih dalam</h2></header>
  <div class="ticket-grid">
    <a class="ticket" href="/statistics"><b>Statistik</b><span>KDA, MVP, dan batas datanya</span></a>
    <a class="ticket" href="/matches"><b>Pertandingan</b><span>Arsip turnamen dan hasil</span></a>
    <a class="ticket" href="/discover"><b>Jelajah</b><span>Cerita di balik angka</span></a>
    <a class="ticket" href="/history"><b>Sejarah</b><span>Garis waktu kompetitif</span></a>
  </div>
  <div class="latest-box"><p class="kicker">Arsip terbaru</p><ul>${latest}</ul>${sourceNote(['LIQ_RES', 'LIQ_S18', 'DOT'])}</div>
</section>`,
  };
}
