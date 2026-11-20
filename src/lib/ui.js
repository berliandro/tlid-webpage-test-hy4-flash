import { sources } from '../data/sources.js';
import { translate } from '../i18n.js';

export function esc(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export function unknown(text = 'Not available in verified data') {
  return `<span class="unknown">${esc(text)}</span>`;
}

export function sourceNote(ids = [], label = 'Sources & checks') {
  if (!ids.length) return '';
  const items = ids.map((id) => {
    const s = sources[id];
    if (!s) return '';
    return `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.publisher)}</a>
      <span class="src-meta"><span>${esc(translate(s.type))}</span> · ${translate('retrieved')} ${esc(s.retrieved)} · <span>${esc(translate(s.confidence))}</span></span>
      <span class="src-note">${esc(translate(s.note))}</span></li>`;
  }).join('');
  return `<details class="source-note"><summary>${esc(translate(label))}</summary><ul>${items}</ul></details>`;
}

export function portrait(player, extraClass = '') {
  const handle = player?.handle || 'Unknown';
  const label = `Unknown portrait: ${esc(handle)}. Synthetic illustration, not a real portrait / Potret tidak diketahui: ${esc(handle)}. Ilustrasi sintetik, bukan potret asli.`;
  return `<div class="portrait-synthetic ${extraClass}" role="img" aria-label="${label}">
    <span class="synthetic-mark">${esc(handle.slice(0, 1).toUpperCase())}</span>
    <span class="synthetic-rule" aria-hidden="true"></span>
    <span class="synthetic-label">SYNTHETIC ILLUSTRATION · NO VERIFIED PORTRAIT</span>
    <span class="synthetic-sub">NOT A REAL PORTRAIT</span>
  </div>`;
}

export function sectionHead(kicker, title, sub = '') {
  return `<header class="section-head"><div>${kicker ? `<span class="kicker">${esc(kicker)}</span>` : ''}<h2>${esc(title)}</h2></div>${sub ? `<p class="section-sub">${esc(sub)}</p>` : ''}</header>`;
}
