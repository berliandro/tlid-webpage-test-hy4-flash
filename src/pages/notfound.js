export function renderNotFound() {
  return {
    html: `<section class="page-head not-found">
      <h1>Halaman ini<br><em>tidak ada di arsip</em></h1>
      <p class="kicker">Halaman tidak ditemukan</p>
      <p class="lede">Rute yang Anda cari tidak tersedia. Kembali ke beranda atau buka daftar sumber.</p>
      <div class="link-row"><a class="ticket" href="/">Ke beranda →</a><a class="ticket" href="/sources">Lihat sumber →</a></div>
    </section>`,
  };
}
