import { sources } from '../data/sources.js';

export function esc(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export function unknown(text = 'Tidak tersedia dalam data terverifikasi') {
  return `<span class="unknown">${esc(text)}</span>`;
}

export function sourceNote(ids = [], label = 'Sumber &amp; verifikasi') {
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

export function portrait(player, extraClass = '', eager = false) {
  if (player && typeof player === 'object') {
    if (player.photo) {
      return `<img class="portrait photo ${extraClass}" src="public/assets/players/${esc(player.photo)}.png" width="500" height="500" loading="${eager ? 'eager' : 'lazy'}" decoding="async" alt="Portrait / Potret ${esc(player.handle)} · Liquipedia Commons, CC BY-SA 3.0" />`;
    }
    return `<svg class="portrait ${extraClass}" viewBox="0 0 200 240" role="img" aria-label="Synthetic illustration / Ilustrasi sintetik ${esc(player.handle)}, not a real portrait / bukan potret asli"><use href="public/assets/portraits.svg#${esc(player.portrait)}"></use></svg>`;
  }
  return `<svg class="portrait ${extraClass}" viewBox="0 0 200 240" aria-hidden="true"><use href="public/assets/portraits.svg#player-4"></use></svg>`;
}

export function portraitCredit(player) {
  return player.photo
    ? 'PORTRAIT · LIQUIPEDIA COMMONS / CC BY-SA 3.0'
    : 'ILUSTRASI SINTETIK / BUKAN POTRET';
}

export function ribbon(text, tag = 'span', cls = '') {
  return `<${tag} class="ribbon ${cls}">${esc(text)}</${tag}>`;
}

export function laceTop() {
  return `<div class="lace-frame" aria-hidden="true"><div class="lace-band top"></div><div class="lace-band bottom"></div><div class="lace-side left"></div><div class="lace-side right"></div><div class="ambient-layer"></div></div>`;
}

export function sectionHead(kicker, title, sub = '') {
  return `<header class="section-head"><h2>${esc(title)}</h2><p class="kicker">${esc(kicker)}</p>${sub ? `<p class="section-sub">${esc(sub)}</p>` : ''}</header>`;
}
