import { startRouter } from './router.js';

startRouter();

document.addEventListener('visibilitychange', () => {
  document.body.classList.toggle('is-hidden', document.hidden);
});
