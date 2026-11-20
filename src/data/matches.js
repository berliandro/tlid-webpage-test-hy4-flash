export const upcoming = {
  available: false,
  title: 'Tidak ada jadwal terverifikasi',
  text: 'S18 berakhir pada 8 November 2026. Tidak ada pertandingan mendatang yang dapat diverifikasi dalam paket riset, jadi halaman ini sengaja tidak menampilkan jadwal palsu.',
  sources: ['DOT', 'LIQ_S18'],
};

export const tournaments = [
  { year: 2024, name: 'MPL Indonesia S13', period: '8 /03 – 9 /06 2024', place: '5–6', final: '0–3 EVOS · 5 /06 2024', sources: ['LIQ_TEAM', 'LIQ_RES'], confidence: 'single-source' },
  { year: 2024, name: 'MPL Indonesia S14', period: '9 /08 – 27 /10 2024', place: 'Juara', final: '4–3 RRQ Hoshi · 27 /10 2024', sources: ['LIQ_TEAM', 'LIQ_RES', 'LIQ_S14', 'WIKI_MPL'], confidence: 'verified' },
  { year: 2024, name: 'Snapdragon Pro Series S6 APAC — Open Finals', period: '10 /11 2024', place: '5', final: 'Babak grup 5/2', sources: ['LIQ_TEAM', 'LIQ_RES'], confidence: 'single-source' },
  { year: 2024, name: 'M6 World Championship', period: '21 /11 – 15 /12 2024', place: 'Runner-up', final: '1–4 Fnatic ONIC PH · 15 /12 2024', sources: ['LIQ_TEAM', 'LIQ_RES', 'LIQ_M6', 'MOONTON'], confidence: 'verified' },
  { year: 2025, name: 'SPS S6 APAC — Challenge Season', period: '12 Jan 2025', place: '6', final: '2–0 AE', sources: ['LIQ_RES'], confidence: 'verified' },
  { year: 2025, name: 'SPS S6 APAC — Challenge Finals', period: '16 Feb 2025', place: '3', final: '2–3 ONIC', sources: ['LIQ_TEAM', 'LIQ_RES'], confidence: 'verified' },
  { year: 2025, name: 'ESL Snapdragon Pro Series: Mobile Masters', period: '12 /04 2025', place: '3–4', final: '1–3 RRQ', sources: ['LIQ_TEAM', 'LIQ_RES'], confidence: 'verified' },
  { year: 2025, name: 'MPL Indonesia S15', period: '7 /03 – 15 /06 2025', place: '5–6', final: '1–3 ONIC · 11 /06 2025', sources: ['LIQ_TEAM', 'LIQ_RES', 'WIKI_MPL'], confidence: 'verified' },
  { year: 2025, name: 'MPL Indonesia S16', period: '22 /08 – 2 /11 2025', place: '9', final: 'Babak grup 4/12 · tidak lolos playoff', sources: ['LIQ_TEAM', 'LIQ_RES'], confidence: 'verified' },
  { year: 2026, name: 'MPL Indonesia S17', period: '27 /03 – 14 /06 2026', place: '4', final: '0–3 BTR · 12 /06 2026', sources: ['LIQ_TEAM', 'LIQ_RES', 'DOT'], confidence: 'verified' },
  { year: 2026, name: 'MPL Indonesia S18', period: '14 /08 – 8 /11 2026', place: '3', final: '3–4 BTR · 7 /11 2026', sources: ['LIQ_TEAM', 'LIQ_RES', 'LIQ_S18', 'MPL_TEAM', 'DOT'], confidence: 'verified' },
];

export const playoffRun = [
  { date: '5 /11 2026', round: 'Round 2', result: '3–1 BTR', note: 'Menang', sources: ['DOT', 'LIQ_S18'] },
  { date: '6 /11 2026', round: 'Upper Bracket Final', result: '2–3 NAVI', note: 'Kalah', sources: ['DOT', 'LIQ_S18'] },
  { date: '7 /11 2026', round: 'Lower Bracket Final', result: '3–4 BTR', note: 'Posisi 3', sources: ['DOT', 'LIQ_S18', 'ITEM'] },
  { date: '8 /11 2026', round: 'Grand Final', result: 'BTR 4–3 NAVI', note: 'TLID tidak bertanding', sources: ['DOT'] },
];

export const matchConflicts = [
  {
    title: 'Identitas S13',
    text: 'Liquipedia mencatat hasil S13 di bawah TLID, sementara Wikipedia menyebut rebrand dari Liquid AURA baru terjadi di S14. Atribusi hasil S13 ambigu.',
    sources: ['LIQ_TEAM', 'WIKI_MPL'],
  },
  {
    title: 'Tanggal final M6',
    text: '15 Desember 2024 menurut Liquipedia dan Wikipedia; 14 Desember menurut Moonton.',
    sources: ['LIQ_M6', 'MOONTON'],
  },
];
