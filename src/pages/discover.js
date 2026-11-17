import { stories, editorialNote } from '../data/discover.js';
import { sourceNote, sectionHead } from '../lib/ui.js';

export function renderDiscover() {
  return {
    html: `
<section class="page-head">
  <h1>Hal yang bikin<br><em>arsip ini hidup</em></h1>
  <p class="kicker">Jelajah</p>
  <p class="lede">${editorialNote}</p>
</section>

<section class="story-stack">
  ${stories.map((s, i) => `
  <article class="story${i % 2 ? ' flip' : ''}">
    <div class="story-figure"><span>${s.figure}</span><small>${s.kicker}</small></div>
    <div class="story-copy"><h2>${s.title}</h2><p>${s.text}</p>${sourceNote(s.sources)}</div>
  </article>`).join('')}
</section>

<section class="section">
  ${sectionHead('Ruang kosong', 'Cerita yang belum kami tulis')}
  <p>Rivalitas jangka panjang, rekor head-to-head, dan wawancara pemain tidak masuk dalam paket riset. Halaman ini tidak mengisinya dengan spekulasi.</p>
</section>`,
  };
}
