import { sources } from '../data/sources.js';

export function esc(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export function unknown(text = 'Not available in verified data') {
  return `<span class="unknown">${esc(text)}</span>`;
}

export function sourceNote(ids = [], label = 'Sources &amp; checks') {
  if (!ids.length) return '';
  const items = ids.map((id) => {
    const s = sources[id];
    if (!s) return '';
    return `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.publisher)}</a>
      <span class="src-meta">${esc(s.type)} · diambil ${esc(s.retrieved)} · ${esc(s.confidence)}</span>
      <span class="src-note">${esc(s.note)}</span></li>`;
  }).join('');
  return `<details class="source-note"><summary>${label}</summary><ul>${items}</ul></details>`;
}

export function portrait(player, extraClass = '') {
  const id = player?.portrait || 'player-4';
  const label = player?.handle
    ? ` role="img" aria-label="Synthetic illustration / Ilustrasi sintetik ${esc(player.handle)}, not a real portrait / bukan potret asli"`
    : ' aria-hidden="true"';
  return `<svg class="portrait ${extraClass}" viewBox="0 0 200 240"${label}><use href="public/assets/portraits.svg#${esc(id)}"></use></svg>`;
}

export function sectionHead(kicker, title, sub = '') {
  return `<header class="section-head"><div><span class="kicker">${esc(kicker)}</span><h2>${esc(title)}</h2></div>${sub ? `<p class="section-sub">${esc(sub)}</p>` : ''}</header>`;
}
