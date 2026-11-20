import { sourceList } from '../data/sources.js';
import { esc, sectionHead } from '../lib/ui.js';
import { translate } from '../i18n.js';

export function renderSources() {
  return {
    html: `
<section class="page-head compact-head">
  <h1>Source<br><em>list</em></h1>
  <p class="lede">Retrieved 17 November 2026.</p>
</section>
<section class="section">
  ${sectionHead('Ledger', `${sourceList.length} sources`)}
  <div class="source-table">${sourceList.map((s) => `
    <article class="source-card">
      <h3><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.publisher)} ↗</a></h3>
      <p class="src-meta"><span>${esc(translate(s.type))}</span> · ${esc(s.retrieved)} · <span>${esc(translate(s.confidence))}</span></p>
      <p>${esc(translate(s.note))}</p>
      <p class="src-url">${esc(s.url)}</p>
    </article>`).join('')}</div>
</section>`,
  };
}
