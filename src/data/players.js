// S18 roster as announced by TLID on 7 Aug 2026 (IG_S18), corroborated by VCG and TITO.
// The official team page (TL_SITE) lists an older roster and is treated as stale.

export const rosterNote = {
  id: 'IG_S18',
  title: 'Roster S18 · 2026-08-07',
  text: 'Susunan ini berasal dari pengumuman resmi TLID untuk MPL ID Season 18 dan dua sumber pendukung. Halaman tim resmi masih menampilkan daftar lama, sehingga tidak dipakai sebagai roster saat ini.',
};

export const players = [
  {
    slug: 'aran', handle: 'Aran', realName: 'Aldhia Fahmi Aranda', starter: true,
    role: 'EXP Laner', nationality: 'Indonesia', born: '2003-02-23',
    joined: 'On the S14 roster (31 July 2024)',
    portrait: 'player-1', photo: 'Aran', index: '01',
    tagline: 'Pilar EXP yang sudah melewati lebih dari satu babak tim.',
    bio: 'Aran tercatat sebagai EXP Laner TLID dalam roster S14 dan tetap masuk susunan S18. Namanya, tanggal lahir, dan kewarganegaraannya didokumentasikan di beberapa basis data esports.',
    facts: [
      'EXP Laner dalam daftar roster S14 bersama Jeymz (2024-07-31).',
      'Salah satu dari tiga pemain dengan statistik musiman yang terverifikasi di MLBBHub.',
    ],
    stat: { games: 53, k: 1.5, d: 1.8, a: 6.0, kda: 4.08, kp: 65, listedRole: 'EXP' },
    sources: ['IG_S18', 'LIQ_PLAYER', 'MLBBHUB'],
  },
  {
    slug: 'kevin', handle: 'Kevin', realName: null, starter: true,
    role: 'Jungler', nationality: null, born: null,
    joined: 'Joined August 2025',
    portrait: 'player-2', photo: 'Kevinn', index: '02',
    tagline: 'Nama panggungnya berubah di S17; datanya ada, identitas pribadinya tidak.',
    bio: 'Pengumuman S18 menempatkan Kevin sebagai Jungler. Sumber independen mencatat bahwa ia sebelumnya menggunakan nama “Joo” dan bergabung dengan TLID pada Agustus 2025. Nama asli dan tanggal lahirnya tidak terverifikasi.',
    facts: [
      'Mengubah nama panggung dari “Joo” menjadi Kevin pada MPL ID S17.',
      'Memimpin klasemen MVP dengan 151 poin di data MLBBHub (2026-11-17).',
      'Peran diperdebatkan: pengumuman S18 menyebut Jungler, MLBBHub mencantumkan GOLD.',
    ],
    stat: { games: 53, k: 2.8, d: 1.3, a: 4.7, kda: 5.82, kp: 65, listedRole: 'GOLD' },
    sources: ['IG_S18', 'LIQ_PLAYER', 'MLBBHUB'],
    conflict: 'Sumber S18: Jungler. MLBBHub: Gold Laner. Keduanya ditampilkan apa adanya; peran final belum dikonsolidasikan.',
  },
  {
    slug: 'drichel', handle: 'Drichel', realName: 'Andric Alfayyadh', starter: true,
    role: 'Mid Laner', nationality: 'Indonesia', born: null,
    joined: 'Joined March 2026',
    portrait: 'player-3', photo: 'Drichel', index: '03',
    tagline: 'KDA 6.39 — angka yang juga muncul di papan peringkat resmi MPL.',
    bio: 'Drichel masuk TLID pada Maret 2026 sebagai Mid Laner. Andric Alfayyadh tercatat sebagai nama aslinya. KDA rata-ratanya muncul baik di MLBBHub maupun di daftar Top 5 KDA resmi MPL.',
    facts: [
      'KDA 6.39 dengan 78% kill participation pada 53 game (MLBBHub, 2026-11-17).',
      'Termasuk dalam daftar Top 5 Avg KDA di halaman statistik resmi MPL ID.',
    ],
    stat: { games: 53, k: 2.0, d: 1.4, a: 6.9, kda: 6.39, kp: 78, listedRole: 'MID' },
    sources: ['IG_S18', 'LIQ_PLAYER', 'MPL_STATS', 'MLBBHUB'],
  },
  {
    slug: 'anaver', handle: 'Anaver', realName: null, starter: false,
    role: 'Mid Laner', nationality: null, born: null,
    joined: 'Bergabung 2026-08',
    portrait: 'player-4', index: '04',
    tagline: 'Anggota gelombang S18 yang datanya belum dipublikasikan.',
    bio: 'Anaver diumumkan sebagai Mid Laner dalam roster S18. Akun Instagramnya menggunakan nama “Nain”. Nama asli, tanggal lahir, dan statistik musimannya tidak tersedia dalam data yang dikumpulkan.',
    facts: [
      'Bagian dari pengumuman roster S18 pada 7 Agustus 2026.',
      'Statistik musiman belum tersedia dalam sumber yang terverifikasi.',
    ],
    stat: null,
    sources: ['IG_S18'],
  },
  {
    slug: 'keven', handle: 'Keven', realName: null, starter: true,
    role: 'Gold Laner', nationality: null, born: null,
    joined: 'Bergabung 2026-08',
    portrait: 'player-5', photo: 'Keven', index: '05',
    tagline: 'Satu nama, beberapa ejaan di sumber yang berbeda.',
    bio: 'Keven diumumkan sebagai Gold Laner TLID untuk S18. Sumber lain menuliskan Kevin, Kevinn, atau Keven untuk entitas yang berbeda, sehingga data pribadinya sengaja tidak diisi.',
    facts: [
      'Masuk dalam susunan S18 melalui pengumuman resmi 7 Agustus 2026.',
      'Ejaan nama masih bertabrakan di beberapa basis data; tidak ada identitas pribadi yang dipakai.',
    ],
    stat: null,
    sources: ['IG_S18', 'MLBBHUB'],
    conflict: 'Kevin / Kevinn / Keven muncul sebagai entitas terpisah di MLBBHub. Halaman ini hanya memakai Keven sesuai pengumuman S18.',
  },
  {
    slug: 'lyoni', handle: 'Lyoni', realName: null, starter: true,
    role: 'Roamer', nationality: 'Indonesia', born: null,
    joined: 'Akademi → tim utama, 2026-03',
    portrait: 'player-6', photo: 'Lyoni', index: '06',
    tagline: 'Jalur akademi yang akhirnya sampai ke roster utama.',
    bio: 'Lyoni naik dari TLID Academy ke tim utama pada Maret 2026 dan tercatat pernah bermain untuk Monster Vicious. Dua sumber memberi nama lengkap yang berbeda, sehingga halaman ini tidak memilih salah satu.',
    facts: [
      'Jalur karier: Monster Vicious → TLID Academy → tim utama (2026-03).',
      'Tercatat sebagai Roamer dalam pengumuman S18.',
    ],
    stat: null,
    sources: ['IG_S18', 'LIQ_PLAYER', 'TL_SITE'],
    conflict: 'Nama lengkap: “Muhammad ‘Lyoni’ Wijaya” dan “Muhammad Rio Adi Wijaya” keduanya muncul di sumber berbeda.',
  },
];

export const starters = players.filter((p) => p.starter);
export const substitutes = players.filter((p) => !p.starter);
export const playerBySlug = Object.fromEntries(players.map((p) => [p.slug, p]));
