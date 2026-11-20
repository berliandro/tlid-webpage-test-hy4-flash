import { stories } from '../data/discover.js';
import { sourceNote, sectionHead } from '../lib/ui.js';

export function renderDiscover() {
  return {
    html: `
<section class="page-head chapter-head">
  <h1>What makes<br><em>this team real</em></h1>
</section>

<section class="story-stack">
  ${stories.map((s, i) => s.variant === 'editorial' ? `
  <article class="story story--editorial">
    <div class="story-copy">
      <h2>${s.title}</h2>
      <p>${s.text}</p>
      <div class="story-evidence"><span class="story-figure-inline">${s.figure}</span><span class="story-kicker-inline">${s.kicker}</span></div>
      ${sourceNote(s.sources)}
    </div>
  </article>` : `
  <article class="story">
    <div class="story-figure"><span>${s.figure}</span><small>${s.kicker}</small></div>
    <div class="story-copy"><h2>${s.title}</h2><p>${s.text}</p>${sourceNote(s.sources)}</div>
  </article>`).join('')}
</section>

<section class="section">
  ${sectionHead('', 'Not covered')}
  <p>No head-to-head records or player interviews in the research pack. We left them out.</p>
</section>`,
  };
}
