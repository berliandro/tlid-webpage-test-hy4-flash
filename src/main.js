import { startRouter, render } from './router.js';
import { getLang, setLang, applyLanguage } from './i18n.js';

startRouter();

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-lang-toggle]')) {
    const y = window.scrollY;
    const disclosure = [...document.querySelectorAll('.source-note, .glossary')].map((n) => n.open);
    setLang(getLang() === 'en' ? 'id' : 'en');
    render();
    [...document.querySelectorAll('.source-note, .glossary')].forEach((n, i) => { n.open = disclosure[i] !== false; });
    document.querySelector('[data-lang-toggle]')?.focus({ preventScroll: true });
    window.scrollTo({ top: y, behavior: 'instant' });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
    e.preventDefault();
    document.getElementById('site-search')?.focus();
  }
});

function runSearch(q) {
  const links = [...document.querySelectorAll('.site-footer .footer-grid a')];
  let shown = 0;
  links.forEach((a) => {
    a.hidden = !!q && !a.textContent.toLowerCase().includes(q);
    if (!a.hidden) shown += 1;
  });
  const status = document.getElementById('search-status');
  if (status) status.textContent = q ? `${shown} bagian cocok` : 'Cari berdasarkan nama bagian di navigasi.';
}

document.addEventListener('input', (e) => {
  if (e.target.id === 'site-search') runSearch(e.target.value.toLowerCase().trim());
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('[data-search-reset]')) return;
  const input = document.getElementById('site-search');
  if (input) { input.value = ''; runSearch(''); input.focus(); }
});

document.addEventListener('visibilitychange', () => {
  document.body.classList.toggle('is-hidden', document.hidden);
});

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-expand-sources]');
  if (!btn) return;
  const notes = [...document.querySelectorAll('.source-note')];
  const open = btn.getAttribute('aria-expanded') !== 'true';
  notes.forEach((note) => { note.open = open; });
  btn.setAttribute('aria-expanded', String(open));
  btn.textContent = open ? 'Sembunyikan sumber' : 'Tampilkan semua sumber';
  applyLanguage(btn);
});
