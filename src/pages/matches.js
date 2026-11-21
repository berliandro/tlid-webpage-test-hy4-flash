import { upcoming, tournaments, playoffRun, matchConflicts } from '../data/matches.js';
import { sourceNote, sectionHead, esc } from '../lib/ui.js';
import { applyLanguage, translate } from '../i18n.js';
import { refreshMotion } from '../motion.js';

const years = [...new Set(tournaments.map((t) => t.year))].sort((a, b) => b - a);

// Contextual decoding, each grounded in the verified match data — no invented expansions.
const termGlosses = {
  BTR: 'BTR is the team that beat TLID in the S17 and S18 playoffs; BTR won S18 4–3 over NAVI.',
  NAVI: 'NAVI is the team TLID met in the S18 upper-bracket final (2–3); BTR beat them 4–3 in the grand final.',
  AE: 'AE was TLID’s opponent in the 2025 SPS S6 APAC Challenge, a 2–0 win.',
  'RRQ Hoshi': 'RRQ Hoshi was TLID’s opponent in the S14 final, a 4–3 win on 27 October 2024.',
};

function helpFor(text, seen) {
  return Object.keys(termGlosses)
    .filter((term) => text.includes(term) && !seen.has(term))
    .map((term) => {
      seen.add(term);
      return `<details class="term-help"><summary aria-label="What this term means">?</summary><p>${termGlosses[term]} <a href="#glossary">Full glossary</a></p></details>`;
    }).join('');
}

export function renderMatches() {
  const seenTerms = new Set();
  const title = translate('Match record').split(' ');
  return {
    html: `
<section class="page-head compact-head">
  <h1 data-no-i18n>${esc(title[0])} <br><em>${esc(title.slice(1).join(' '))}</em></h1>
  <p class="lede">No invented fixtures.</p>
</section>

<section class="section upcoming-section">
  ${sectionHead('Upcoming', 'No verified fixtures')}
  <div class="unavailable"><h3>S18 ended 8 November 2026</h3>${sourceNote(upcoming.sources)}</div>
  <div class="link-row"><a class="ticket" href="/history">Read the season timeline →</a><a class="ticket" href="/statistics">See the verified record →</a></div>
</section>

<section class="section">
  ${sectionHead('', 'Tournaments on file', 'One row is one tournament, not one match.')}
  <div class="filter-row" role="group" aria-label="Filter tournaments by year">
    <span class="year-wrap"><select id="match-year" class="filter-btn year-select" data-year aria-label="Filter tournaments by year">
      <option value="all">All</option>
      ${years.map((y) => `<option value="${y}">${y}</option>`).join('')}
    </select></span>
    <span class="filter-divider" aria-hidden="true"></span>
    <button type="button" class="filter-btn sort-btn" data-sort aria-pressed="true">Sort: Newest first</button>
  </div>
  <div class="archive" id="match-archive"></div>
</section>

<section class="section">
  ${sectionHead('S18', 'The last playoff run', 'Jatim Expo, Surabaya · 4–8 November 2026')}
  <ol class="playoff-line">${playoffRun.map((m) => `<li><span class="po-date">${m.date}</span><span class="po-round">${m.round}</span><b>${m.result}</b>${helpFor(m.result, seenTerms)}<span class="po-note">${m.note}</span>${sourceNote(m.sources, 'Source')}</li>`).join('')}</ol>
</section>

<section class="section">
  ${sectionHead('', 'Where sources disagree')}
  <div class="conflict-grid">${matchConflicts.map((c) => `<article class="conflict"><h3>${c.title}</h3><p>${c.text}</p>${sourceNote(c.sources)}</article>`).join('')}</div>
</section>`,
    mount() {
      const archive = document.getElementById('match-archive');
      const yearSelect = document.getElementById('match-year');
      const sortBtn = document.querySelector('[data-sort]');
      if (!archive || !yearSelect) return;
      let desc = new URLSearchParams(location.search).get('s') !== 'asc';
      let currentYear = 'all';
      const draw = (year) => {
        currentYear = year;
        const list = tournaments.filter((t) => year === 'all' || String(t.year) === year)
          .sort((a, b) => desc ? b.year - a.year : a.year - b.year);
        archive.innerHTML = `<p class="result-status" role="status" aria-live="polite"><span class="count">${list.length}</span> ENTRIES</p>` + (list.length ? '<div class="archive-head" aria-hidden="true"><span class="arch-place-head">Final placing</span></div>' : '') + (list.length ? '' : '<p class="result-empty">No entries for this filter. <button type="button" class="filter-btn" data-reset>All</button></p>') + list.map((t) => `
          <article class="archive-row">
            <span class="arch-year">${t.year}</span>
            <div class="arch-main"><h3>${t.name}</h3><p>${t.period}</p>${helpFor(t.final, seenTerms)}</div>
            <span class="arch-final">${t.final}</span>
            <span class="arch-place${t.place === 'Juara' ? ' gold' : ''}"><span class="sr-status">Final placing: </span>${t.place}</span>
          </article>`).join('');
        applyLanguage(archive);
        refreshMotion(archive);
        archive.querySelector('[data-reset]')?.addEventListener('click', () => {
          yearSelect.value = 'all';
          yearSelect.dispatchEvent(new Event('change', { bubbles: true }));
        });
      };
      const requested = new URLSearchParams(location.search).get('y');
      const initial = requested && requested !== 'all' ? requested : 'all';
      yearSelect.value = initial;
      if (sortBtn) {
        sortBtn.setAttribute('aria-pressed', String(desc));
        sortBtn.textContent = desc ? 'Sort: Newest first' : 'Sort: Oldest first';
      }
      draw(initial);
      yearSelect.addEventListener('change', () => {
        const year = yearSelect.value;
        const url = new URL(location.href);
        url.searchParams.set('y', year);
        history.pushState({}, '', url);
        draw(year);
      });
      sortBtn?.addEventListener('click', () => {
        desc = !desc;
        sortBtn.setAttribute('aria-pressed', String(desc));
        sortBtn.textContent = desc ? 'Sort: Newest first' : 'Sort: Oldest first';
        const url = new URL(location.href);
        url.searchParams.set('s', desc ? 'desc' : 'asc');
        history.pushState({}, '', url);
        applyLanguage(sortBtn.parentElement);
        draw(currentYear);
      });
    },
  };
}
