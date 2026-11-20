import { upcoming, tournaments, playoffRun, matchConflicts } from '../data/matches.js';
import { sourceNote, sectionHead } from '../lib/ui.js';
import { applyLanguage } from '../i18n.js';

const years = [...new Set(tournaments.map((t) => t.year))].sort((a, b) => b - a);

export function renderMatches() {
  return {
    html: `
<section class="page-head">
  <h1>Arsip <em>cutting lines</em></h1>
  <p class="kicker">Pertandingan</p>
  <p class="lede">Perjalanan kompetitif TLID dalam bentuk garis potong: turnamen, tanggal, lawan, dan hasil. Tidak ada jadwal masa depan yang mengarang.</p>
</section>

<section class="section upcoming-section">
  ${sectionHead('Mendatang', 'Keadaan kosong yang disengaja')}
  <div class="unavailable">
    <span class="unavailable-seal">NO VERIFIED FIXTURE</span>
    <h3>${upcoming.title}</h3>
    <p>${upcoming.text}</p>
    ${sourceNote(upcoming.sources)}
  </div>
</section>

<section class="section">
  ${sectionHead('Arsip', 'Turnamen yang tercatat', 'Satu baris adalah satu turnamen, bukan satu pertandingan.')}
  <div class="filter-row" role="group" aria-label="Filter tahun turnamen">
    <button type="button" class="filter-btn active" data-year="all" aria-pressed="true">Semua</button>
    ${years.map((y) => `<button type="button" class="filter-btn" data-year="${y}" aria-pressed="false">${y}</button>`).join('')}
  </div>
  <div class="archive" id="match-archive" aria-live="polite"></div>
</section>

<section class="section">
  ${sectionHead('S18', 'Jalur playoff terakhir', 'Jatim Expo, Surabaya · 4–8 November 2026')}
  <ol class="playoff-line">${playoffRun.map((m) => `<li><span class="po-date">${m.date}</span><span class="po-round">${m.round}</span><b>${m.result}</b><span class="po-note">${m.note}</span>${sourceNote(m.sources, 'Sumber')}</li>`).join('')}</ol>
</section>

<section class="section">
  ${sectionHead('Konflik', 'Catatan arsip')}
  <div class="conflict-grid">${matchConflicts.map((c) => `<article class="conflict"><h3>${c.title}</h3><p>${c.text}</p>${sourceNote(c.sources)}</article>`).join('')}</div>
</section>`,
    mount() {
      const archive = document.getElementById('match-archive');
      const buttons = [...document.querySelectorAll('.filter-btn')];
      if (!archive || !buttons.length) return;
      const draw = (year) => {
        const list = tournaments.filter((t) => year === 'all' || String(t.year) === year);
        archive.innerHTML = list.map((t) => `
          <article class="archive-row">
            <span class="arch-year">${t.year}</span>
            <div class="arch-main"><h3>${t.name}</h3><p>${t.period}</p></div>
            <span class="arch-final">${t.final}</span>
            <span class="arch-place${t.place === 'Juara' ? ' gold' : ''}">${t.place}</span>
          </article>`).join('');
        applyLanguage(archive);
      };
      const requested = new URLSearchParams(location.search).get('y');
      const initial = years.some((y) => String(y) === requested) ? requested : 'all';
      buttons.forEach((b) => {
        const on = b.dataset.year === initial;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      draw(initial);
      buttons.forEach((btn) => btn.addEventListener('click', () => {
        buttons.forEach((b) => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true');
        const url = new URL(location.href);
        url.searchParams.set('y', btn.dataset.year);
        history.replaceState({}, '', url);
        draw(btn.dataset.year);
      }));
    },
  };
}
