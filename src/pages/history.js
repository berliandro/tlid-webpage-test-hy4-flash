import { milestones, historyUnknowns } from '../data/history.js';
import { sourceNote, sectionHead } from '../lib/ui.js';

export function renderHistory() {
  return {
    html: `
<section class="page-head">
  <h1>A timeline<br><em>still unfinished</em></h1>
</section>

<section class="timeline">
  ${milestones.map((m, i) => `
  <article class="timeline-item${i % 2 ? ' right' : ''}">
    <div class="timeline-year">${m.year}</div>
    <div class="timeline-card">
      <h2>${m.title}</h2>
      <p class="kicker">${m.kicker} · ${m.confidence}</p>
      <p>${m.text}</p>
      ${sourceNote(m.sources)}
    </div>
  </article>`).join('')}
</section>

<section class="section">
  ${sectionHead('Deliberately blank', 'What cannot be confirmed')}
  <ul class="unknown-list">${historyUnknowns.map((u) => `<li>${u}</li>`).join('')}</ul>
</section>`,
  };
}
