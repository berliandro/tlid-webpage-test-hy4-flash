export const historyIntro = {
  title: 'Sejarah yang belum selesai ditulis',
  text: 'Arsip ini hanya memuat peristiwa yang dapat ditelusuri dalam paket riset. Tanggal pendirian AURA, struktur hukum, dan sebagian detail awal tim sengaja dibiarkan kosong.',
};

export const milestones = [
  {
    year: '2000', kicker: 'Organisasi induk',
    title: 'Team Liquid didirikan',
    text: 'Organisasi esports Team Liquid didirikan di Belanda pada 2000. Ini adalah konteks induk, bukan tanggal berdirinya TLID.',
    sources: ['WIKI_TL'],
    confidence: 'secondary',
  },
  {
    year: '2024-05-21', kicker: 'Akuisisi',
    title: 'STUN.GG, AURA Esports, ECHO',
    text: 'Team Liquid mengumumkan akuisisi STUN.GG beserta propertinya, AURA Esports di Indonesia dan ECHO Esports di Filipina. Nilai transaksi tidak diungkapkan.',
    sources: ['ESI', 'ESA', 'ESPN_G', 'WIKI_TL'],
    confidence: 'verified',
  },
  {
    year: 'S13 · 2024', kicker: 'Identitas awal',
    title: 'Liquid AURA',
    text: 'Tim berkompetisi sebagai Liquid AURA pada MPL Indonesia Season 13 dan menempati posisi 5–6. Atribusi hasil ini masih diperdebatkan karena sumber berbeda soal waktu rebrand.',
    sources: ['LIQ_TEAM', 'WIKI_MPL', 'ESPN_G'],
    confidence: 'conflict recorded',
  },
  {
    year: '2024-10-27', kicker: 'Gelar pertama',
    title: 'Juara MPL Indonesia S14',
    text: 'TLID mengalahkan RRQ Hoshi 4–3 di grand final dan mengamankan gelar MPL Indonesia Season 14 sekaligus tiket M6.',
    sources: ['LIQ_S14', 'LIQ_RES', 'WIKI_MPL'],
    confidence: 'verified',
  },
  {
    year: '2024-12-15', kicker: 'Panggung dunia',
    title: 'Runner-up M6 World Championship',
    text: 'TLID kalah 1–4 dari Fnatic ONIC PH di final M6. Sumber Moonton mencantumkan tanggal 14 /12; perbedaan satu hari ini dicatat, bukan disembunyikan.',
    sources: ['LIQ_M6', 'LIQ_TEAM', 'MOONTON'],
    confidence: 'verified with date conflict',
  },
  {
    year: '2025', kicker: 'Fluktuasi',
    title: 'S15 ke-5–6, S16 ke-9',
    text: 'Dua musim berikutnya berakhir di posisi 5–6 dan 9. TLID tidak lolos playoff pada MPL Indonesia Season 16.',
    sources: ['LIQ_TEAM', 'LIQ_RES', 'WIKI_MPL'],
    confidence: 'verified',
  },
  {
    year: '2026-08-7', kicker: 'Roster baru',
    title: 'The Wave Rises Again',
    text: 'TLID mengumumkan susunan S18: Aran, Kevin, Drichel, Anaver, Keven, Lyoni, dengan Honjaw dan Facehugger di staf pelatih.',
    sources: ['IG_S18', 'VCG', 'TITO'],
    confidence: 'verified with corroboration',
  },
  {
    year: '2026-11-8', kicker: 'S18',
    title: 'Puncak klasemen, posisi 3',
    text: 'TLID finis pertama di musim reguler S18 dengan rekor 12–4, lalu ditutup di posisi 3 setelah kalah 3–4 dari BTR di final braket bawah. Dua tim teratas lolos ke M8.',
    sources: ['LIQ_S18', 'DOT', 'ITEM', 'MPL_TEAM'],
    confidence: 'verified',
  },
];

export const historyUnknowns = [
  'Tahun pendirian AURA Esports: 2017, 2018, atau 2024 (sebagai tanggal rebrand) — ketiganya muncul di sumber berbeda.',
  'Tanggal pasti pertama kali tim menggunakan nama Team Liquid ID.',
  'Nilai akuisisi dan struktur kepemilikan hukum saat ini.',
];
