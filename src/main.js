import { startRouter, render } from './router.js';
import { getLang, setLang } from './i18n.js';

startRouter();

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-lang-toggle]')) {
    const y = window.scrollY;
    setLang(getLang() === 'en' ? 'id' : 'en');
    render();
    window.scrollTo({ top: y, behavior: 'instant' });
  }
});

document.addEventListener('visibilitychange', () => {
  document.body.classList.toggle('is-hidden', document.hidden);
});
