import { sourceList } from '../data/sources.js';
import { esc, sectionHead } from '../lib/ui.js';

export function renderSources() {
  return {
    html: `
<section class="page-head">
  <h1>Daftar <em>sumber</em></h1>
  <p class="kicker">Provenansi</p>
  <p class="lede">Semua sumber yang dipakai dalam situs ini. Setiap angka dan peristiwa membawa catatan sumber di halaman tempatnya muncul. Retrieval date seragam: 2026-11-17.</p>
</section>
<section class="section">
  ${sectionHead('Ledger', `${sourceList.length} sumber tercatat`)}
  <div class="source-table">${sourceList.map((s) => `
    <article class="source-card">
      <h3><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.publisher)} ↗</a></h3>
      <p class="src-meta">${esc(s.type)} · ${esc(s.retrieved)} · ${esc(s.confidence)}</p>
      <p>${esc(s.note)}</p>
      <p class="src-url">${esc(s.url)}</p>
    </article>`).join('')}</div>
</section>`,
  };
}
