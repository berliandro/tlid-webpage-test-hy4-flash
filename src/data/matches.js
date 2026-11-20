export const upcoming = {
  available: false,
  title: 'Tidak ada jadwal terverifikasi',
  text: 'S18 berakhir pada 2026-11-08. Tidak ada pertandingan mendatang yang dapat diverifikasi dalam paket riset, jadi halaman ini sengaja tidak menampilkan jadwal palsu.',
  sources: ['DOT', 'LIQ_S18'],
};

export const tournaments = [
  { year: 2024, name: 'MPL Indonesia S13', period: '2024-03-08 – 2024-06-09', place: '5–6', final: '0–3 EVOS · 2024-06-05', sources: ['LIQ_TEAM', 'LIQ_RES'], confidence: 'single-source' },
  { year: 2024, name: 'MPL Indonesia S14', period: '2024-08-09 – 2024-10-27', place: 'Juara', final: '4–3 RRQ Hoshi · 2024-10-27', sources: ['LIQ_TEAM', 'LIQ_RES', 'LIQ_S14', 'WIKI_MPL'], confidence: 'verified' },
  { year: 2024, name: 'Snapdragon Pro Series S6 APAC — Open Finals', period: '2024-11-10', place: '5', final: 'Babak grup 5/2', sources: ['LIQ_TEAM', 'LIQ_RES'], confidence: 'single-source' },
  { year: 2024, name: 'M6 World Championship', period: '2024-11-21 – 2024-12-15', place: 'Runner-up', final: '1–4 Fnatic ONIC PH · 2024-12-15', sources: ['LIQ_TEAM', 'LIQ_RES', 'LIQ_M6', 'MOONTON'], confidence: 'verified' },
  { year: 2025, name: 'SPS S6 APAC — Challenge Season', period: '2025-01-12', place: '6', final: '2–0 AE', sources: ['LIQ_RES'], confidence: 'verified' },
  { year: 2025, name: 'SPS S6 APAC — Challenge Finals', period: '2025-02-16', place: '3', final: '2–3 ONIC', sources: ['LIQ_TEAM', 'LIQ_RES'], confidence: 'verified' },
  { year: 2025, name: 'ESL Snapdragon Pro Series: Mobile Masters', period: '2025-04-12', place: '3–4', final: '1–3 RRQ', sources: ['LIQ_TEAM', 'LIQ_RES'], confidence: 'verified' },
  { year: 2025, name: 'MPL Indonesia S15', period: '2025-03-07 – 2025-06-15', place: '5–6', final: '1–3 ONIC · 2025-06-11', sources: ['LIQ_TEAM', 'LIQ_RES', 'WIKI_MPL'], confidence: 'verified' },
  { year: 2025, name: 'MPL Indonesia S16', period: '2025-08-22 – 2025-11-02', place: '9', final: 'Babak grup 4/12 · tidak lolos playoff', sources: ['LIQ_TEAM', 'LIQ_RES'], confidence: 'verified' },
  { year: 2026, name: 'MPL Indonesia S17', period: '2026-03-27 – 2026-06-14', place: '4', final: '0–3 BTR · 2026-06-12', sources: ['LIQ_TEAM', 'LIQ_RES', 'DOT'], confidence: 'verified' },
  { year: 2026, name: 'MPL Indonesia S18', period: '2026-08-14 – 2026-11-08', place: '3', final: '3–4 BTR · 2026-11-07', sources: ['LIQ_TEAM', 'LIQ_RES', 'LIQ_S18', 'MPL_TEAM', 'DOT'], confidence: 'verified' },
];

export const playoffRun = [
  { date: '2026-11-05', round: 'Round 2', result: '3–1 BTR', note: 'Menang', sources: ['DOT', 'LIQ_S18'] },
  { date: '2026-11-06', round: 'Upper Bracket Final', result: '2–3 NAVI', note: 'Kalah', sources: ['DOT', 'LIQ_S18'] },
  { date: '2026-11-07', round: 'Lower Bracket Final', result: '3–4 BTR', note: 'Posisi 3', sources: ['DOT', 'LIQ_S18', 'ITEM'] },
  { date: '2026-11-08', round: 'Grand Final', result: 'BTR 4–3 NAVI', note: 'TLID tidak bertanding', sources: ['DOT'] },
];

export const matchConflicts = [
  {
    title: 'Identitas S13',
    text: 'Liquipedia mencatat hasil S13 di bawah TLID, sementara Wikipedia menyebut rebrand dari Liquid AURA baru terjadi di S14. Atribusi hasil S13 ambigu.',
    sources: ['LIQ_TEAM', 'WIKI_MPL'],
  },
  {
    title: 'Tanggal final M6',
    text: '2024-12-15 menurut Liquipedia dan Wikipedia; 2024-12-14 menurut Moonton.',
    sources: ['LIQ_M6', 'MOONTON'],
  },
];
