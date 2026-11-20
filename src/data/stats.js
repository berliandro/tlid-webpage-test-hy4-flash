// Only values present in RESEARCH.md are included. Season labels and win-rate scopes are disputed.

export const playerStats = [
  { handle: 'Drichel', slug: 'drichel', roleListed: 'MID', games: 53, k: 2.0, d: 1.4, a: 6.9, kda: 6.39, kp: 78, source: 'MLBBHUB' },
  { handle: 'Kevin', slug: 'kevin', roleListed: 'GOLD', games: 53, k: 2.8, d: 1.3, a: 4.7, kda: 5.82, kp: 65, source: 'MLBBHUB' },
  { handle: 'Aran', slug: 'aran', roleListed: 'EXP', games: 53, k: 1.5, d: 1.8, a: 6.0, kda: 4.08, kp: 65, source: 'MLBBHUB' },
];

export const mvpLeader = {
  handle: 'Kevin', points: 151, rank: 1,
  sources: ['MLBBHUB', 'MPL_STATS'],
  note: 'Nilai 151 poin muncul di MLBBHub; klasemen MVP juga tersedia di halaman resmi MPL ID.',
};

export const teamTotals = {
  kills: 606, deaths: 499, assists: 1595, gold: 2644312,
  damage: 10852558, lord: 75, tortoise: 96, tower: 333,
  sources: ['MPL_STATS'],
  note: 'Nilai identik muncul di empat jalur statistik resmi dengan judul musim berbeda (S14–S18). Angka ini tidak diberi label musim.',
};

export const records = [
  {
    label: 'Rekor agregat pertandingan', value: '71–50',
    detail: '174–141 game · 2024-05-21 – 2026-10-2',
    sources: ['LIQ_TEAM', 'ESC'],
  },
  {
    label: 'MPL ID S18 — musim reguler', value: '12–4',
    detail: '26–11 game (+15) · posisi 1 klasemen',
    sources: ['LIQ_S18', 'DOT', 'MPL_TEAM'],
  },
  {
    label: 'MPL ID S18 — akhir', value: 'Posisi 3',
    detail: 'Kalah 3–4 dari BTR di final braket bawah, 2026-11-7',
    sources: ['LIQ_S18', 'DOT', 'ITEM'],
  },
];

export const statConflicts = [
  {
    title: 'Label musim pada statistik resmi',
    text: '/statistics bertajuk Season 17, sementara /s14, /s15, /s16 dan /id bertajuk Season 18 — namun keempatnya menampilkan angka TLID yang identik. Karena itu total tim tidak diberi label musim.',
    sources: ['MPL_STATS'],
  },
  {
    title: 'Persentase kemenangan bergantung scope',
    text: '45% (GosuGamers), 59% (Esports Charts), 68.4% (mldb.gg, S18), 68% (Polymarket). Tidak ada satu “win rate TLID” yang ditampilkan tanpa scope.',
    sources: ['ESC'],
  },
  {
    title: 'Peran Kevin',
    text: 'Pengumuman S18 menyebut Jungler; MLBBHub mencantumkan GOLD. Keduanya ditandai di halaman pemain dan tabel statistik.',
    sources: ['IG_S18', 'MLBBHUB'],
  },
];
