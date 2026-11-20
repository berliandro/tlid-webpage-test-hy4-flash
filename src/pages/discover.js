import { stories, editorialNote } from '../data/discover.js';
import { sourceNote, sectionHead } from '../lib/ui.js';

export function renderDiscover() {
  return {
    html: `
<section class="page-head">
  <h1>What makes<br><em>this team real</em></h1>
  <p class="kicker">Discover</p>
  <p class="lede">Facts from public research. Every claim has a source note.</p>
</section>

<section class="story-stack">
  ${stories.map((s, i) => `
  <article class="story${i % 2 ? ' flip' : ''}">
    <div class="story-figure"><span>${s.figure}</span><small>${s.kicker}</small></div>
    <div class="story-copy"><h2>${s.title}</h2><p>${s.text}</p>${sourceNote(s.sources)}</div>
  </article>`).join('')}
</section>

<section class="section">
  ${sectionHead('Blank space', 'Stories we have not written')}
  <p>Long rivalries, head-to-head records and player interviews were outside the research pack. We do not fill them with guesses.</p>
</section>`,
  };
}
