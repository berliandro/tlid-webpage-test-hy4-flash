import { sourceList } from '../data/sources.js';
import { esc, sectionHead } from '../lib/ui.js';
import { translate } from '../i18n.js';

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch { return url; }
}

export function renderSources() {
  const title = translate('Source list').split(' ');
  const groups = [];
  for (const s of sourceList) {
    let group = groups.find((g) => g.type === s.type);
    if (!group) { group = { type: s.type, items: [] }; groups.push(group); }
    group.items.push(s);
  }
  return {
    html: `
<section class="page-head compact-head">
  <h1 data-no-i18n>${esc(title[0])} <br><em>${esc(title.slice(1).join(' '))}</em></h1>
  <p class="lede">Retrieved 17 November 2026.</p>
</section>
<section class="section">
  ${sectionHead('Ledger', `${sourceList.length} sources`)}
  <div class="source-ledger">${groups.map((group) => `
    <section class="ledger-group">
      <h2 class="ledger-group-title"><span>${esc(translate(group.type))}</span><span class="ledger-group-count">${String(group.items.length).padStart(2, '0')}</span></h2>
      ${group.items.map((s) => {
        const host = hostOf(s.url);
        return `
      <article class="ledger-row">
        <div class="ledger-head">
          <a class="ledger-link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" title="${esc(s.url)}" aria-label="${esc(host)} — ${esc(s.url)}">${esc(host)} <span aria-hidden="true">↗</span></a>
          <span class="ledger-publisher">${esc(s.publisher)}</span>
        </div>
        <p class="src-meta"><span>${esc(translate(s.type))}</span> · ${esc(s.retrieved)} · <span>${esc(translate(s.confidence))}</span></p>
        <p class="ledger-note">${esc(translate(s.note))}</p>
      </article>`;
      }).join('')}
    </section>`).join('')}</div>
</section>`,
  };
}
