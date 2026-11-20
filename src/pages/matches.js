import { upcoming, tournaments, playoffRun, matchConflicts } from '../data/matches.js';
import { sourceNote, sectionHead } from '../lib/ui.js';
import { applyLanguage } from '../i18n.js';

const years = [...new Set(tournaments.map((t) => t.year))].sort((a, b) => b - a);

export function renderMatches() {
  return {
    html: `
<section class="page-head">
  <h1>Match<br><em>record</em></h1>
  <p class="lede">No invented fixtures.</p>
</section>

<section class="section upcoming-section">
  ${sectionHead('Upcoming', 'No verified fixtures')}
  <div class="unavailable"><h3>S18 ended 8 November 2026</h3>${sourceNote(upcoming.sources)}</div>
</section>

<section class="section">
  ${sectionHead('Recorded', 'Tournaments on file', 'One row is one tournament, not one match.')}
  <div class="filter-row" role="group" aria-label="Filter tournaments by year">
    <button type="button" class="filter-btn active" data-year="all" aria-pressed="true">All</button>
    ${years.map((y) => `<button type="button" class="filter-btn" data-year="${y}" aria-pressed="false">${y}</button>`).join('')}
    <button type="button" class="filter-btn sort-btn" data-sort aria-pressed="true">Order: newest ↓</button>
  </div>
  <div class="archive" id="match-archive"></div>
</section>

<section class="section">
  ${sectionHead('S18', 'The last playoff run', 'Jatim Expo, Surabaya · 4–8 November 2026')}
  <ol class="playoff-line">${playoffRun.map((m) => `<li><span class="po-date">${m.date}</span><span class="po-round">${m.round}</span><b>${m.result}</b><span class="po-note">${m.note}</span>${sourceNote(m.sources, 'Source')}</li>`).join('')}</ol>
</section>

<section class="section">
  ${sectionHead('Conflicts', 'Where sources disagree')}
  <div class="conflict-grid">${matchConflicts.map((c) => `<article class="conflict"><h3>${c.title}</h3><p>${c.text}</p>${sourceNote(c.sources)}</article>`).join('')}</div>
</section>`,
    mount() {
      const archive = document.getElementById('match-archive');
      const buttons = [...document.querySelectorAll('.filter-btn[data-year]')];
      const sortBtn = document.querySelector('[data-sort]');
      if (!archive || !buttons.length) return;
      let desc = new URLSearchParams(location.search).get('s') !== 'asc';
      let currentYear = 'all';
      const draw = (year) => {
        currentYear = year;
        const list = tournaments.filter((t) => year === 'all' || String(t.year) === year)
          .sort((a, b) => desc ? b.year - a.year : a.year - b.year);
        archive.innerHTML = `<p class="result-status" role="status" aria-live="polite"><span class="count">${list.length}</span> ENTRIES</p>` + (list.length ? '' : '<p class="result-empty">No entries for this filter. <button type="button" class="filter-btn" data-reset>All</button></p>') + list.map((t) => `
          <article class="archive-row">
            <span class="arch-year">${t.year}</span>
            <div class="arch-main"><h3>${t.name}</h3><p>${t.period}</p></div>
            <span class="arch-final">${t.final}</span>
            <span class="arch-place${t.place === 'Juara' ? ' gold' : ''}">${t.place}</span>
          </article>`).join('');
        applyLanguage(archive);
        archive.querySelector('[data-reset]')?.addEventListener('click', () => {
          buttons.find((b) => b.dataset.year === 'all')?.click();
        });
      };
      const requested = new URLSearchParams(location.search).get('y');
      const initial = requested && requested !== 'all' ? requested : 'all';
      buttons.forEach((b) => {
        const on = b.dataset.year === initial;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      if (sortBtn) {
        sortBtn.setAttribute('aria-pressed', String(desc));
        sortBtn.textContent = desc ? 'Order: newest ↓' : 'Order: oldest ↑';
      }
      draw(initial);
      buttons.forEach((btn) => btn.addEventListener('click', () => {
        buttons.forEach((b) => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true');
        const url = new URL(location.href);
        url.searchParams.set('y', btn.dataset.year);
        history.pushState({}, '', url);
        draw(btn.dataset.year);
      }));
      sortBtn?.addEventListener('click', () => {
        desc = !desc;
        sortBtn.setAttribute('aria-pressed', String(desc));
        sortBtn.textContent = desc ? 'Order: newest ↓' : 'Order: oldest ↑';
        const url = new URL(location.href);
        url.searchParams.set('s', desc ? 'desc' : 'asc');
        history.pushState({}, '', url);
        applyLanguage(sortBtn.parentElement);
        draw(currentYear);
      });
    },
  };
}
