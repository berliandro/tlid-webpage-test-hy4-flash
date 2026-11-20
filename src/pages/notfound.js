export function renderNotFound() {
  return {
    html: `<section class="page-head not-found">
      <h1>This page <br><em>is not here</em></h1>
      <p class="kicker">Page not found</p>
      <p class="lede">That route is not available. Go home or open the source list.</p>
      <div class="link-row"><a class="ticket" href="/">Go home</a><a class="ticket" href="/sources">View sources</a></div>
    </section>`,
  };
}
