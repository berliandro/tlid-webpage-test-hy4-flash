// Language state: 'en' is the default. The stored boolean is simply the locale choice.
const STORAGE_KEY = 'tlid-lang';
const DEFAULT_LANG = 'en';

export function getLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'id' || stored === 'en' ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

export function setLang(lang) {
  const next = lang === 'id' ? 'id': 'en';
  try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage disabled */ }
  document.documentElement.lang = next;
  return next;
}

// Exact sentence and label translations. Indonesian is the authored source language;
// English is produced by this dictionary.
const DICT = {
  // shell + navigation
  'Tim': 'Team', 'Pemain': 'Players', 'Statistik': 'Statistics',
  'Pertandingan': 'Matches', 'Jelajah': 'Discover', 'Sejarah': 'History',
  'Beranda': 'Home', 'Profil Pemain': 'Player Profile',
  'Halaman tidak ditemukan': 'Page not found',
  'Team Liquid ID — beranda': 'Team Liquid ID — home',
  'Buka navigasi': 'Open navigation', 'Tutup navigasi': 'Close navigation',
  'Navigasi utama': 'Main navigation', 'Navigasi': 'Navigation',
  'Daftar sumber': 'Sources', 'Catatan verifikasi': 'Verification notes',
  'Roster S18': 'S18 roster', 'Data': 'Data',
  'Proyek independen. Tidak afiliasi, tidak commission, dan tidak disetujui oleh Team Liquid atau Moonton. Potret pemain bersumber dari Liquipedia Commons (CC BY-SA 3.0); Anaver memakai ilustrasi sintetik.': 'Independent project. Not affiliated with, commissioned by, or endorsed by Team Liquid or Moonton. Player portraits are sourced from Liquipedia Commons (CC BY-SA 3.0); Anaver uses a synthetic illustration.',
  'Dibangun sebagai arsip editorial · data dari riset publik 2026-11-17 · status tidak diketahui sengaja dibiarkan kosong.': 'Built as an editorial archive · data from public research, 17 November 2026 · unknown states are intentionally left blank.',

  // shared helpers
  'Tidak tersedia dalam data terverifikasi': 'Not available in verified data',
  'Belum dipublikasikan': 'Not published', 'Tidak dipublikasikan': 'Not published',
  'Sumber & verifikasi': 'Sources & verification', 'Sumber': 'Source',
  'Sumber snapshot': 'Snapshot sources', 'Sumber identitas': 'Identity sources',
  'Sumber total tim': 'Team totals source', 'Lisensi potret': 'Portrait licence',
  'Mengapa roster ini dipakai': 'Why this roster is used',
  'diambil': 'retrieved',
  'ILUSTRASI SINTETIK / BUKAN POTRET': 'SYNTHETIC ILLUSTRATION / NOT A PORTRAIT',
  'Potret': 'Portrait of ', ', bukan potret asli': ', not a real portrait',
  'Ilustrasi sintetik': 'Synthetic illustration of ',

  // home
  'Satu tim, enam individu, dan sebuah perjalanan kompetitif yang dipotong menjadi pola. Jelajahi Team Liquid ID bukan hanya lewat hasil pertandingan.': 'One team, six individuals, and a competitive journey cut into a pattern. Explore Team Liquid ID beyond match results.',
  'arsip yang bernapas': 'an archive that breathes',
  'BUKA LOOKBOOK →': 'OPEN THE LOOKBOOK →',
  'SNAPSHOT TERAKHIR': 'LATEST SNAPSHOT',
  'MPL ID S18 selesai · posisi 3': 'MPL ID S18 complete · 3rd place',
  'Musim reguler: 12–4 · posisi 1': 'Regular season: 12–4 · 1st place',
  'Tidak ada jadwal terverifikasi setelah S18': 'No verified fixtures after S18',
  'Ini adalah ringkasan arsip, bukan umpan langsung. Gerakan di latar belakang adalah elemen atmosfer, bukan indikasi data real-time.': 'This is an archive summary, not a live feed. Background movement is atmospheric, not an indicator of real-time data.',
  'MPL Indonesia': 'MPL Indonesia', 'proyek independen': 'independent project',
  'Ilustrasi enam pemain S18': 'Illustration of six S18 players',
  'POLA MUSIM / CUT 01': 'SEASON PATTERN / CUT 01',
  'potong sepanjang musim': 'cut along the season',
  '01 / Tim': '01 / Team', '02 / Pemain': '02 / Players',
  '03 / Rekam jejak': '03 / Track record', '04 / Lanjutkan perjalanan': '04 / Continue the journey',
  'Identitas yang dirakit dari hasil, bukan sebaliknya': 'Identity assembled from results, not the other way around',
  'Team Liquid ID adalah skuad Mobile Legends: Bang Bang milik Team Liquid di Indonesia. Tim dibentuk setelah akuisisi STUN.GG beserta AURA Esports dan ECHO pada 2024-05-21, tampil sebagai Liquid AURA di S13, lalu memakai nama TLID sejak S14.': 'Team Liquid ID is Team Liquid’s Indonesian Mobile Legends: Bang Bang squad. The team was formed after the 21 May 2024 acquisition of STUN.GG along with AURA Esports and ECHO, competed as Liquid AURA in S13, and has used the TLID name since S14.',
  'Liga': 'League', 'Induk': 'Parent', 'Bentuk': 'Formed',
  '2024-05-21 · akuisisi STUN.GG / AURA Esports / ECHO': '21 May 2024 · acquisition of STUN.GG / AURA Esports / ECHO',
  'Enam jalur dalam satu pola': 'Six threads in one pattern',
  'Susunan S18 menurut pengumuman resmi 7 Agustus 2026. Ilustrasi di bawah bukan potret asli.': 'S18 lineup according to the official 7 August 2026 announcement. The illustrations below are not real portraits.',
  'Angka yang bisa dipertanggungjawabkan': 'Numbers that can be accounted for',
  'Rekor agregat pertandingan': 'Aggregate match record',
  'MPL ID S18 — musim reguler': 'MPL ID S18 — regular season',
  'MPL ID S18 — akhir': 'MPL ID S18 — final result',
  'Empat cara masuk lebih dalam': 'Four ways to go deeper',
  'KDA, MVP, dan batas datanya': 'KDA, MVP, and data limits',
  'Arsip turnamen dan hasil': 'Tournament archive and results',
  'Cerita di balik angka': 'Stories behind the numbers',
  'Garis waktu kompetitif': 'Competitive timeline',
  'Arsip terbaru': 'Latest archive',

  // players list
  'DAFTAR': 'ROSTER', 'PEMAIN': 'PLAYERS',
  'Roster S18 · 2026-08-07': 'S18 roster · 7 Aug 2026',
  'Susunan ini berasal dari pengumuman resmi TLID untuk MPL ID Season 18 dan dua sumber pendukung. Halaman tim resmi masih menampilkan daftar lama, sehingga tidak dipakai sebagai roster saat ini.': 'This lineup comes from TLID’s official MPL ID Season 18 announcement and two supporting sources. The official team page still shows an older list, so it is not used as the current roster.',
  'Buka profil →': 'Open profile →',
  'Catatan': 'Notes', 'Apa yang sengaja tidak kami isi': 'What we deliberately left blank',
  'Nama asli, tanggal lahir, dan statistik tidak ditambahkan jika tidak ada sumber terverifikasi.': 'Real names, dates of birth and statistics are not added without a verified source.',
  'identitas pribadi belum terverifikasi. Halaman mereka hanya memuat peran dan informasi dari pengumuman resmi.': 'personal identities are unverified. Their pages only carry roles and information from the official announcement.',
  'Peran Kevin': 'Kevin’s role',
  'pengumuman S18 menyebut Jungler, MLBBHub menyebut GOLD. Keduanya ditandai, bukan dipilih diam-diam.': 'the S18 announcement lists Jungler, MLBBHub lists GOLD. Both are flagged rather than silently chosen.',
  'Potret': 'Portraits',
  'Aran, Kevin, Drichel, Keven, dan Lyoni memakai potret dari Liquipedia Commons (CC BY-SA 3.0) dengan atribusi. Anaver tetap memakai ilustrasi sintetik karena tidak ada potret yang disediakan.': 'Aran, Kevin, Drichel, Keven and Lyoni use portraits from Liquipedia Commons (CC BY-SA 3.0) with attribution. Anaver keeps a synthetic illustration because no portrait was supplied.',

  // player profile
  '← Kembali ke roster': '← Back to roster',
  'KDA rata-rata': 'Average KDA', 'Kill participation': 'Kill participation',
  'Game tercatat': 'Games recorded', 'K/D/A rata-rata': 'Average K/D/A',
  'Statistik dari MLBBHub, 2026-11-17 14:13 UTC. Peran menurut sumber:': 'Statistics from MLBBHub, 17 Nov 2026 14:13 UTC. Role per source: ',
  'Nilai KDA 6.39 milik Drichel; Kevin 5.82.': 'Drichel’s KDA is 6.39; Kevin’s is 5.82.',
  'Statistik musiman untuk': 'Season statistics for ',
  'tidak tersedia dalam data yang dikumpulkan. Kami tidak mengisi dengan nol atau perkiraan.': ' are not available in the collected data. We do not fill them with zero or estimates.',
  'poin · peringkat': 'points · rank ',
  'Nama asli': 'Real name', 'Peran': 'Role',
  'Kewarganegaraan': 'Nationality', 'Tanggal lahir': 'Date of birth',
  'Riwayat joined': 'Joined history',
  'Profil': 'Profile', 'Catatan kompetitif': 'Competitive notes',
  'Konflik sumber': 'Source conflict', 'Angka': 'Numbers',
  'Statistik yang dapat ditampilkan': 'Statistics we can show',
  'Rute': 'Routes', 'Lanjut menjelajah': 'Keep exploring',
  'Lihat statistik tim →': 'View team statistics →',
  'Lihat arsip pertandingan →': 'View match archive →',
  'Lihat garis waktu tim →': 'View team timeline →',

  // player data
  'Tercatat di roster S14 (2024-07-31)': 'Listed on the S14 roster (31 Jul 2024)',
  'Bergabung 2025-08': 'Joined Aug 2025', 'Bergabung 2026-03': 'Joined Mar 2026',
  'Bergabung 2026-08': 'Joined Aug 2026', 'Akademi → tim utama, 2026-03': 'Academy → main team, Mar 2026',
  'Pilar EXP yang sudah melewati lebih dari satu babak tim.': 'An EXP mainstay who has crossed more than one chapter of the team.',
  'Aran tercatat sebagai EXP Laner TLID dalam roster S14 dan tetap masuk susunan S18. Namanya, tanggal lahir, dan kewarganegaraannya didokumentasikan di beberapa basis data esports.': 'Aran is listed as TLID’s EXP Laner on the S14 roster and remains in the S18 lineup. His name, date of birth and nationality are documented in several esports databases.',
  'EXP Laner dalam daftar roster S14 bersama Jeymz (2024-07-31).': 'EXP Laner on the S14 roster alongside Jeymz (31 Jul 2024).',
  'Salah satu dari tiga pemain dengan statistik musiman yang terverifikasi di MLBBHub.': 'One of three players with verified season statistics on MLBBHub.',
  'Nama panggungnya berubah di S17; datanya ada, identitas pribadinya tidak.': 'His stage name changed in S17; the data exists, the personal identity does not.',
  'Pengumuman S18 menempatkan Kevin sebagai Jungler. Sumber independen mencatat bahwa ia sebelumnya menggunakan nama “Joo” dan bergabung dengan TLID pada Agustus 2025. Nama asli dan tanggal lahirnya tidak terverifikasi.': 'The S18 announcement places Kevin as Jungler. An independent source notes that he previously used the name “Joo” and joined TLID in August 2025. His real name and date of birth are unverified.',
  'Mengubah nama panggung dari “Joo” menjadi Kevin pada MPL ID S17.': 'Changed stage name from “Joo” to Kevin in MPL ID S17.',
  'Memimpin klasemen MVP dengan 151 poin di data MLBBHub (2026-11-17).': 'Leads the MVP standings with 151 points in MLBBHub data (17 Nov 2026).',
  'Peran diperdebatkan: pengumuman S18 menyebut Jungler, MLBBHub mencantumkan GOLD.': 'Role disputed: the S18 announcement says Jungler, MLBBHub lists GOLD.',
  'Sumber S18: Jungler. MLBBHub: Gold Laner. Keduanya ditampilkan apa adanya; peran final belum dikonsolidasikan.': 'S18 source: Jungler. MLBBHub: Gold Laner. Both are shown as recorded; the final role has not been consolidated.',
  'KDA 6.39 — angka yang juga muncul di papan peringkat resmi MPL.': 'KDA 6.39 — a figure that also appears on MPL’s official leaderboard.',
  'Drichel masuk TLID pada Maret 2026 sebagai Mid Laner. Andric Alfayyadh tercatat sebagai nama aslinya. KDA rata-ratanya muncul baik di MLBBHub maupun di daftar Top 5 KDA resmi MPL.': 'Drichel joined TLID in March 2026 as Mid Laner. Andric Alfayyadh is recorded as his real name. His average KDA appears both on MLBBHub and in MPL’s official Top 5 KDA list.',
  'KDA 6.39 dengan 78% kill participation pada 53 game (MLBBHub, 2026-11-17).': 'KDA 6.39 with 78% kill participation across 53 games (MLBBHub, 17 Nov 2026).',
  'Termasuk dalam daftar Top 5 Avg KDA di halaman statistik resmi MPL ID.': 'Included in the Top 5 Average KDA list on the official MPL ID statistics page.',
  'Anggota gelombang S18 yang datanya belum dipublikasikan.': 'A member of the S18 wave whose data has not been published.',
  'Anaver diumumkan sebagai Mid Laner dalam roster S18. Akun Instagramnya menggunakan nama “Nain”. Nama asli, tanggal lahir, dan statistik musimannya tidak tersedia dalam data yang dikumpulkan.': 'Anaver was announced as Mid Laner in the S18 roster. His Instagram account uses the name “Nain”. His real name, date of birth and season statistics are not available in the collected data.',
  'Bagian dari pengumuman roster S18 pada 7 Agustus 2026.': 'Part of the S18 roster announcement on 7 August 2026.',
  'Statistik musiman belum tersedia dalam sumber yang terverifikasi.': 'Season statistics are not yet available in verified sources.',
  'Satu nama, beberapa ejaan di sumber yang berbeda.': 'One name, several spellings across different sources.',
  'Keven diumumkan sebagai Gold Laner TLID untuk S18. Sumber lain menuliskan Kevin, Kevinn, atau Keven untuk entitas yang berbeda, sehingga data pribadinya sengaja tidak diisi.': 'Keven was announced as TLID’s Gold Laner for S18. Other sources write Kevin, Kevinn or Keven for different entities, so personal data is intentionally left blank.',
  'Masuk dalam susunan S18 melalui pengumuman resmi 7 Agustus 2026.': 'Included in the S18 lineup via the official 7 August 2026 announcement.',
  'Ejaan nama masih bertabrakan di beberapa basis data; tidak ada identitas pribadi yang dipakai.': 'Name spellings still conflict across databases; no personal identity is used.',
  'Kevin / Kevinn / Keven muncul sebagai entitas terpisah di MLBBHub. Halaman ini hanya memakai Keven sesuai pengumuman S18.': 'Kevin / Kevinn / Keven appear as separate entities on MLBBHub. This page uses only Keven, per the S18 announcement.',
  'Jalur akademi yang akhirnya sampai ke roster utama.': 'An academy path that eventually reached the main roster.',
  'Lyoni naik dari TLID Academy ke tim utama pada Maret 2026 dan tercatat pernah bermain untuk Monster Vicious. Dua sumber memberi nama lengkap yang berbeda, sehingga halaman ini tidak memilih salah satu.': 'Lyoni moved from TLID Academy to the main team in March 2026 and is recorded as having played for Monster Vicious. Two sources give different full names, so this page does not choose one.',
  'Jalur karier: Monster Vicious → TLID Academy → tim utama (2026-03).': 'Career path: Monster Vicious → TLID Academy → main team (Mar 2026).',
  'Tercatat sebagai Roamer dalam pengumuman S18.': 'Listed as Roamer in the S18 announcement.',
  'Nama lengkap: “Muhammad ‘Lyoni’ Wijaya” dan “Muhammad Rio Adi Wijaya” keduanya muncul di sumber berbeda.': 'Full name: “Muhammad ‘Lyoni’ Wijaya” and “Muhammad Rio Adi Wijaya” both appear in different sources.',

  // statistics
  'Angka dengan': 'Numbers with', 'label yang jujur': 'honest labels',
  'Hanya nilai yang tercatat dalam riset yang ditampilkan. Jika musim, scope, atau sumbernya diperdebatkan, kami katakan — bukan memilih angka yang paling rapi.': 'Only values recorded in the research are shown. If the season, scope or source is disputed, we say so rather than choosing the tidiest number.',
  'Perbandingan': 'Comparison', 'Tiga pemain dengan data musiman': 'Three players with season data',
  'Data MLBBHub · 2026-11-17, 14:13 UTC. Klik metrik untuk mengubah perbandingan.': 'MLBBHub data · 17 Nov 2026, 14:13 UTC. Click a metric to change the comparison.',
  'Pilih metrik perbandingan': 'Choose comparison metric',
  'Game tercatat': 'Games recorded',
  'Nilai KDA 6.39 Drichel juga muncul di daftar Top 5 resmi MPL ID. Peran Kevin mengikuti MLBBHub (GOLD) dan berbeda dengan pengumuman S18 (Jungler).': 'Drichel’s 6.39 KDA also appears on MPL ID’s official Top 5 list. Kevin’s role follows MLBBHub (GOLD) and differs from the S18 announcement (Jungler).',
  'Tim': 'Team', 'Total yang tidak diberi label musim': 'Totals without a season label',
  'Angka identik muncul di empat jalur statistik resmi dengan judul musim berbeda.': 'Identical numbers appear on four official statistics paths with different season titles.',
  'poin': 'points', 'peringkat': 'rank', 'Rekor': 'Records',
  'Batas data': 'Data limits', 'Konflik yang tidak kami sembunyikan': 'Conflicts we do not hide',
  'Belum tersedia': 'Not available', 'Data yang tidak kami punya': 'Data we do not have',
  'GPM, DPM, CS, objektif Tambak/Tortoise per pemain, dan pemisahan musim reguler versus playoff tidak tersedia di sumber yang dikumpulkan. Kolom tersebut sengaja tidak dibuat.': 'GPM, DPM, CS, Turtle/Tortoise objectives per player, and regular-season versus playoff splits are not available in the collected sources. Those columns are intentionally omitted.',
  'Label musim pada statistik resmi': 'Season labels on official statistics',
  '/statistics bertajuk Season 17, sementara /s14, /s15, /s16 dan /id bertajuk Season 18 — namun keempatnya menampilkan angka TLID yang identik. Karena itu total tim tidak diberi label musim.': '/statistics is titled Season 17, while /s14, /s15, /s16 and /id are titled Season 18 — yet all four show identical TLID numbers. Team totals are therefore not season-labelled.',
  'Persentase kemenangan bergantung scope': 'Win percentage depends on scope',
  '45% (GosuGamers), 59% (Esports Charts), 68.4% (mldb.gg, S18), 68% (Polymarket). Tidak ada satu “win rate TLID” yang ditampilkan tanpa scope.': '45% (GosuGamers), 59% (Esports Charts), 68.4% (mldb.gg, S18), 68% (Polymarket). No single “TLID win rate” is shown without scope.',
  'Nilai 151 poin muncul di MLBBHub; klasemen MVP juga tersedia di halaman resmi MPL ID.': 'The 151-point value appears on MLBBHub; the MVP standings are also on the official MPL ID page.',
  'Nilai identik muncul di empat jalur statistik resmi dengan judul musim berbeda (S14–S18). Angka ini tidak diberi label musim.': 'Identical values appear on four official statistics paths with different season titles (S14–S18). These numbers are not season-labelled.',
  'Rekor agregat pertandingan': 'Aggregate match record',
  '174–141 game · 2024-05-21 – 2026-10-02': '174–141 games · 21 May 2024 – 2 Oct 2026',
  '26–11 game (+15) · posisi 1 klasemen': '26–11 games (+15) · 1st in standings',
  'Posisi 3': '3rd place', 'Kalah 3–4 dari BTR di final braket bawah, 2026-11-07': 'Lost 3–4 to BTR in the lower-bracket final, 7 Nov 2026',
  'Pengumuman S18 menyebut Jungler; MLBBHub mencantumkan GOLD. Keduanya ditandai di halaman pemain dan tabel statistik.': 'The S18 announcement says Jungler; MLBBHub lists GOLD. Both are flagged on the player page and statistics table.',

  // matches
  'Arsip': 'Archive of ', 'cutting lines': 'cutting lines',
  'Perjalanan kompetitif TLID dalam bentuk garis potong: turnamen, tanggal, lawan, dan hasil. Tidak ada jadwal masa depan yang mengarang.': 'TLID’s competitive journey as cutting lines: tournaments, dates, opponents and results. No invented future fixtures.',
  'Mendatang': 'Upcoming', 'Keadaan kosong yang disengaja': 'An intentional empty state',
  'NO VERIFIED FIXTURE': 'NO VERIFIED FIXTURE',
  'Tidak ada jadwal terverifikasi': 'No verified fixtures',
  'S18 berakhir pada 2026-11-08. Tidak ada pertandingan mendatang yang dapat diverifikasi dalam paket riset, jadi halaman ini sengaja tidak menampilkan jadwal palsu.': 'S18 ended on 8 November 2026. No upcoming matches could be verified in the research package, so this page deliberately shows no fake schedule.',
  'Arsip': 'Archive', 'Turnamen yang tercatat': 'Recorded tournaments',
  'Satu baris adalah satu turnamen, bukan satu pertandingan.': 'One row is one tournament, not one match.',
  'Filter tahun turnamen': 'Filter tournament year', 'Semua': 'All',
  'Jalur playoff terakhir': 'Latest playoff path',
  'Jatim Expo, Surabaya · 2026-11-04 – 2026-11-08': 'Jatim Expo, Surabaya · 4–8 November 2026',
  'Menang': 'Win', 'Kalah': 'Loss', 'TLID tidak bertanding': 'TLID did not compete',
  'Konflik': 'Conflicts', 'Catatan arsip': 'Archive notes',
  'Babak grup 5/2': 'Group stage 5/2', 'Babak grup 4/12 · tidak lolos playoff': 'Group stage 4/12 · did not reach playoffs',
  'Identitas S13': 'S13 identity',
  'Liquipedia mencatat hasil S13 di bawah TLID, sementara Wikipedia menyebut rebrand dari Liquid AURA baru terjadi di S14. Atribusi hasil S13 ambigu.': 'Liquipedia records the S13 result under TLID, while Wikipedia says the rebrand from Liquid AURA happened in S14. S13 attribution is ambiguous.',
  'Tanggal final M6': 'M6 final date',
  '2024-12-15 menurut Liquipedia dan Wikipedia; 2024-12-14 menurut Moonton.': '15 December 2024 per Liquipedia and Wikipedia; 14 December per Moonton.',
  'Juara': 'Champion',

  // discover
  'Hal yang bikin': 'What makes', 'arsip ini hidup': 'this archive live',
  'Setiap cerita di halaman ini bersumber dari paket riset Stage 4. Angka adalah fakta yang dikutip, bukan data contoh. Buka catatan sumber pada tiap bagian untuk melihat asal dan batas keyakinannya.': 'Every story on this page comes from the Stage 4 research package. Figures are cited facts, not sample data. Open the source note on each section to see origin and confidence.',
  'Gelar': 'Title', 'Tujuh game untuk gelar pertama': 'Seven games for a first title',
  'Grand Final MPL Indonesia Season 14 berakhir 4–3 atas RRQ Hoshi pada 2024-10-27. Kemenangan ini juga membawa TLID ke M6 World Championship.': 'The MPL Indonesia Season 14 grand final ended 4–3 over RRQ Hoshi on 27 October 2024. The win also took TLID to the M6 World Championship.',
  'Dunia': 'World', 'Satu langkah dari puncak M6': 'One step from the M6 summit',
  'Di final M6 World Championship, TLID taklukkan dalam empat game oleh Fnatic ONIC PH. Runner-up ini tetap menjadi capaian internasional terbesar tim menurut data yang dikumpulkan.': 'In the M6 World Championship final, TLID was beaten in four games by Fnatic ONIC PH. The runner-up finish remains the team’s biggest international achievement in the collected data.',
  'Detail kecil': 'Small detail', 'Nama panggung yang berubah': 'A stage name that changed',
  'Sumber independen mencatat bahwa Kevin menggunakan nama “Joo” sebelum mengubahnya pada MPL ID Season 17. S18 kemudian menampilkannya sebagai Jungler.': 'An independent source notes that Kevin used the name “Joo” before changing it in MPL ID Season 17. S18 then listed him as Jungler.',
  'Musim reguler': 'Regular season', 'Puncak klasemen yang tidak berujung trofi': 'Top of the table, no trophy',
  'TLID menutup musim reguler S18 di posisi pertama dengan selisih game +15, mendapat bye, lalu finis ketiga setelah kalah dari BTR di braket bawah.': 'TLID closed the S18 regular season in first place with a +15 game difference, earned a bye, then finished third after losing to BTR in the lower bracket.',
  'Skala': 'Scale', 'Rekor dalam jendela riset': 'A record within the research window',
  'Liquipedia dan Esports Charts sama-sama mencatat 71 kemenangan dan 50 kekalahan untuk TLID dalam rentang 2024-05-21 hingga 2026-10-02.': 'Liquipedia and Esports Charts both record 71 wins and 50 losses for TLID between 21 May 2024 and 2 October 2026.',
  'Jalur pemain': 'Player path', 'Akademi → utama': 'Academy → main',
  'Lyoni naik dari TLID Academy': 'Lyoni rose from TLID Academy',
  'Lyoni bergabung dari Monster Vicious, melewati TLID Academy, lalu masuk tim utama pada Maret 2026. Ia tercatat sebagai Roamer di S18.': 'Lyoni joined from Monster Vicious, passed through TLID Academy, then entered the main team in March 2026. He is listed as Roamer in S18.',
  'Pergerakan roster': 'Roster movement', 'Wajah yang berpindah': 'Faces that moved',
  'Faviannn bergabung dengan RRQ Hoshi, YehezKiel dengan RRQ Tora, dan AeronnShikii dengan AC Esports setelah kontraknya dengan TLID dihentikan pada Agustus 2026.': 'Faviannn joined RRQ Hoshi, YehezKiel joined RRQ Tora, and AeronnShikii joined AC Esports after his TLID contract ended in August 2026.',
  'Ruang kosong': 'Empty space', 'Cerita yang belum kami tulis': 'Stories we have not written',
  'Rivalitas jangka panjang, rekor head-to-head, dan wawancara pemain tidak masuk dalam paket riset. Halaman ini tidak mengisinya dengan spekulasi.': 'Long-term rivalries, head-to-head records and player interviews were not in the research package. This page does not fill them with speculation.',

  // history
  'Garis waktu': 'Timeline',
  'Arsip': 'Archive',
  'Kumpulan fakta bersumber, bukan siaran langsung.': 'Sourced facts, not a live feed.',
  'Sumber': 'Source',
  'Penerbit, tautan, tanggal ambil, dan tingkat keyakinan tiap fakta.': 'Publisher, URL, retrieval date and confidence for each fact.',
  'Roster S18 diumumkan': 'S18 roster announced',
  'Cadangan': 'Substitutes',
  'Cadangan · 1 pemain': 'Substitutes · 1 player',
  '1 pemain': '1 player',
  'Cari bagian': 'Find a section',
  'Cari bagian…': 'Find a section…',
  'Reset': 'Reset',
  'Hapus pencarian': 'Clear search',
  'Cari berdasarkan nama bagian di navigasi.': 'Search by section name in the navigation.',
  'Roster S18 menurut pengumuman resmi 2026-08-07.': 'S18 roster per the official 2026-08-07 announcement.',
  'Kevin, Keven, Anaver': 'Kevin, Keven, Anaver',
  'identitas pribadi belum terverifikasi.': 'personal identities are not verified.',
  'Peran Kevin': 'Kevin’s role',
  'Jungler menurut S18, GOLD menurut MLBBHub. Keduanya ditandai.': 'Jungler per S18, GOLD per MLBBHub. Both are flagged.',
  'Potret': 'Portraits',
  'bersumber dari Liquipedia Commons (CC BY-SA 3.0). Anaver memakai ilustrasi sintetik.': 'sourced from Liquipedia Commons (CC BY-SA 3.0). Anaver uses a synthetic illustration.',
  'EXP Laner TLID sejak S14. Masuk roster S18.': 'TLID EXP Laner since S14. On the S18 roster.',
  'Jungler menurut S18. Sebelumnya bernama Joo.': 'Jungler per S18. Previously named Joo.',
  'Mid Laner. Bergabung 2026-03.': 'Mid Laner. Joined 2026-03.',
  'Mid Laner dalam roster S18. Data pribadi belum terverifikasi.': 'Mid Laner on the S18 roster. Personal data unverified.',
  'Gold Laner dalam roster S18. Ejaan nama masih bertabrakan.': 'Gold Laner on the S18 roster. Name spellings still conflict.',
  'Roamer. Naik dari TLID Academy ke tim utama.': 'Roamer. Promoted from TLID Academy to the main team.',
  'Hanya angka bersumber. Nilai yang diperdebatkan tidak ditampilkan.': 'Only sourced figures. Disputed values are not shown.',
  'KDA 6.39 Drichel juga ada di Top 5 resmi MPL ID. Peran Kevin diperdebatkan.': 'Drichel’s 6.39 KDA is also on MPL ID’s official Top 5. Kevin’s role is disputed.',
  'GPM, DPM, CS, dan rincian objektif tidak tersedia di sumber terkumpul.': 'GPM, DPM, CS and objective details are not in the collected sources.',
  'Turnamen, tanggal, lawan, hasil. Tanpa jadwal rekaan.': 'Tournaments, dates, opponents, results. No invented fixtures.',
  'S18 selesai 2026-11-08. Tidak ada fixture terverifikasi setelahnya.': 'S18 ended 2026-11-08. No verified fixtures after it.',
  'Fakta bersumber dari riset publik. Baca catatan sumber di tiap bagian.': 'Facts from public research. Open each source note.',
  'Hanya peristiwa yang bisa ditelusuri. Bagian yang belum pasti dibiarkan kosong.': 'Only traceable events. Unconfirmed parts are left blank.', 'yang belum penuh': 'that is not full yet',
  'Arsip ini hanya memuat peristiwa yang dapat ditelusuri dalam paket riset. Tanggal pendirian AURA, struktur hukum, dan sebagian detail awal tim sengaja dibiarkan kosong.': 'This archive only contains events traceable in the research package. AURA’s founding date, legal structure and some early team details are intentionally left blank.',
  'Organisasi induk': 'Parent organisation', 'Team Liquid didirikan': 'Team Liquid was founded',
  'Organisasi esports Team Liquid didirikan di Belanda pada 2000. Ini adalah konteks induk, bukan tanggal berdirinya TLID.': 'Team Liquid was founded in the Netherlands in 2000. This is parent context, not TLID’s founding date.',
  'Akuisisi': 'Acquisition',
  'Team Liquid mengumumkan akuisisi STUN.GG beserta propertinya, AURA Esports di Indonesia dan ECHO Esports di Filipina. Nilai transaksi tidak diungkapkan.': 'Team Liquid announced the acquisition of STUN.GG and its properties, AURA Esports in Indonesia and ECHO Esports in the Philippines. The transaction value was not disclosed.',
  'Identitas awal': 'Early identity',
  'Tim berkompetisi sebagai Liquid AURA pada MPL Indonesia Season 13 dan menempati posisi 5–6. Atribusi hasil ini masih diperdebatkan karena sumber berbeda soal waktu rebrand.': 'The team competed as Liquid AURA in MPL Indonesia Season 13 and placed 5th–6th. Attribution is disputed because sources differ on the rebrand timing.',
  'Gelar pertama': 'First title', 'Juara MPL Indonesia S14': 'MPL Indonesia S14 champion',
  'TLID mengalahkan RRQ Hoshi 4–3 di grand final dan mengamankan gelar MPL Indonesia Season 14 sekaligus tiket M6.': 'TLID beat RRQ Hoshi 4–3 in the grand final to secure the MPL Indonesia Season 14 title and an M6 berth.',
  'Panggung dunia': 'World stage',
  'TLID kalah 1–4 dari Fnatic ONIC PH di final M6. Sumber Moonton mencantumkan tanggal 2024-12-14; perbedaan satu hari ini dicatat, bukan disembunyikan.': 'TLID lost 1–4 to Fnatic ONIC PH in the M6 final. Moonton lists 14 December; the one-day difference is recorded, not hidden.',
  'Fluktuasi': 'Fluctuation', 'S15 ke-5–6, S16 ke-9': 'S15 5th–6th, S16 9th',
  'Dua musim berikutnya berakhir di posisi 5–6 dan 9. TLID tidak lolos playoff pada MPL Indonesia Season 16.': 'The next two seasons ended 5th–6th and 9th. TLID missed playoffs in MPL Indonesia Season 16.',
  'Roster baru': 'New roster',
  'TLID mengumumkan susunan S18: Aran, Kevin, Drichel, Anaver, Keven, Lyoni, dengan Honjaw dan Facehugger di staf pelatih.': 'TLID announced the S18 lineup: Aran, Kevin, Drichel, Anaver, Keven, Lyoni, with Honjaw and Facehugger on the coaching staff.',
  'Puncak klasemen, posisi 3': 'Top of the table, 3rd place',
  'TLID finis pertama di musim reguler S18 dengan rekor 12–4, lalu ditutup di posisi 3 setelah kalah 3–4 dari BTR di final braket bawah. Dua tim teratas lolos ke M8.': 'TLID finished first in the S18 regular season at 12–4, then closed in 3rd after losing 3–4 to BTR in the lower-bracket final. The top two qualified for M8.',
  'Kosong dengan sengaja': 'Intentionally blank', 'Yang belum bisa dipastikan': 'What cannot yet be confirmed',
  'Tahun pendirian AURA Esports: 2017, 2018, atau 2024 (sebagai tanggal rebrand) — ketiganya muncul di sumber berbeda.': 'AURA Esports founding year: 2017, 2018 or 2024 (as the rebrand date) — all three appear in different sources.',
  'Tanggal pasti pertama kali tim menggunakan nama Team Liquid ID.': 'The exact first date the team used the Team Liquid ID name.',
  'Nilai akuisisi dan struktur kepemilikan hukum saat ini.': 'The acquisition value and current legal ownership structure.',

  // sources + not found
  'Daftar': 'List of ', 'sumber': 'sources', 'Provenansi': 'Provenance',
  'Semua sumber yang dipakai dalam situs ini. Setiap angka dan peristiwa membawa catatan sumber di halaman tempatnya muncul. Retrieval date seragam: 2026-11-17.': 'All sources used on this site. Every figure and event carries a source note where it appears. Uniform retrieval date: 17 November 2026.',
  'sumber tercatat': 'sources recorded',
  'Halaman ini': 'This page', 'tidak ada di arsip': 'is not in the archive',
  'Rute yang Anda cari tidak tersedia. Kembali ke beranda atau buka daftar sumber.': 'The route you are looking for is unavailable. Return home or open the source list.',
  'Ke beranda →': 'Go home →', 'Lihat sumber →': 'View sources →',

  // homepage V2
  'Temui roster': 'Meet the roster ',
  'Snapshot terakhir': 'Latest snapshot',
  'SNAPSHOT · 8 NOV 2026': 'SNAPSHOT · 8 NOV 2026',
  'ke-3': '3rd',
  'MPL ID S18 selesai': 'MPL ID S18 complete',
  'Catatan arsip, bukan data langsung.': 'Archive note, not a live feed.',
  'Susunan S18 menurut pengumuman resmi 7 Agustus 2026. Ilustrasi, bukan potret.': 'S18 lineup per the official 7 August 2026 announcement. Illustrations, not portraits.',
  'Rekor agregat': 'Aggregate record',
  '174–141 game · 2024-05-21 – 2026-10-02.': '174–141 games · 21 May 2024 – 2 Oct 2026.',
  'Juara MPL ID S14 · runner-up M6 · ke-3 S18.': 'MPL ID S14 champions · M6 runners-up · 3rd at S18.',
  'Masuk lebih dalam': 'Go deeper',
  'KDA, MVP, batas data': 'KDA, MVP, data limits',
  'Turnamen dan hasil': 'Tournaments and results',
  'Bagian lain': 'Other sections',
  'Lewati ke konten': 'Skip to content',
  'Snapshot terakhir': 'Latest snapshot',
  '2026-11-08': '8 November 2026',
  'Glosarium': 'Glossary',
  'MLBB': 'MLBB',
  'Mobile Legends: Bang Bang, judul kompetitif yang diikuti TLID.': 'Mobile Legends: Bang Bang, the competitive title TLID plays.',
  'MPL ID': 'MPL ID',
  'Liga MLBB profesional Indonesia tempat TLID berkompetisi.': 'Indonesia’s professional MLBB league, where TLID competes.',
  'S18': 'S18',
  'Season 18, musim kompetisi yang menjadi acuan roster saat ini.': 'Season 18, the competition season used as the current roster reference.',
  'KDA': 'KDA',
  'Rasio kill, death, assist. Semakin tinggi, semakin baik.': 'Kill/death/assist ratio. Higher is better.',
  'MVP': 'MVP',
  'Pemain paling berkontribusi menurut klasemen resmi liga.': 'The most contributing player per the league’s official standings.',
  'Kill participation': 'Kill participation',
  'Persentase kill tim yang melibatkan pemain tersebut.': 'Share of team kills involving that player.',
  'Buka ledger': 'Open the ledger',
  'Lima pemain utama. Satu musim. Rekor yang bisa diverifikasi.': 'Five starters. One season. A record you can check.',
  'Lima pemain utama S18': 'Five S18 starters',
  'Lihat roster ': 'View roster ',
  'Lihat roster': 'View roster',
  'Arsip, bukan data langsung.': 'Archive, not live data.',
  'Susunan diumumkan 2026-08-07. Potret bersumber, bukan ukiran.': 'Lineup announced 2026-08-07. Sourced portraits, not engravings.',
  '02 / Rekor': '02 / Record',
  'Rekor pertandingan': 'Match record',
  '174–141 game · 2024-05-21 sampai 2026-10-02.': '174–141 games · 2024-05-21 to 2026-10-02.',
  'Juara MPL ID S14. Runner-up M6. Posisi 3 di S18.': 'MPL ID S14 champion. M6 runner-up. 3rd at S18.',
  'Lihat pertandingan →': 'View matches →',
  'Lanjut ke arsip': 'Go to the archive',
  'Angka bersumber. Buka catatan sumber di tiap bagian. ': 'Sourced figures. Open each source note. ',
  'Angka bersumber. Buka catatan sumber di tiap bagian.': 'Sourced figures. Open each source note.',
  'KDA dan MVP': 'KDA and MVP', 'Hasil dan turnamen': 'Results and tournaments',
  'Cerita tim': 'Team stories', 'Garis waktu': 'Timeline',
  'S18 / KEDUDUKAN': 'S18 / PLACEMENT',
  'REKOR PERTANDINGAN · 2024–2026': 'MATCH RECORD · 2024–2026',
  'Susunan S18 menurut pengumuman resmi 7 Agustus 2026. Potret pemain bersumber dari Liquipedia Commons, bukan ukiran; Anaver memakai ilustrasi.': 'S18 lineup per the official 7 August 2026 announcement. Player portraits come from Liquipedia Commons, not engravings; Anaver uses an illustration.',
  'Tampilkan semua sumber': 'Show all sources',
  'Sembunyikan sumber': 'Hide all sources',
  'Gerakan dikurangi otomatis bila sistem memintanya.': 'Motion is reduced automatically when your system requests it.',
  'Tidak ada entri untuk filter ini.': 'No entries for this filter.',
  'SNAPSHOT · 2026-11-08': 'SNAPSHOT · 8 November 2026',
  'SNAPSHOT': 'SNAPSHOT',
  'Lokasi': 'Location',
  'Plat spesimen': 'Specimen plate',
  'Satu kartu pemain dalam ledger; potret bersumber, bukan ukiran.': 'One player slip in the ledger; sourced portrait, not an engraving.',
  'Cutting lines': 'Cutting lines',
  'Cara situs ini merangkai hasil pertandingan menjadi satu garis waktu.': 'How this site threads match results into one timeline.',
  'Urutkan ↓': 'Sort ↓', 'Urutkan ↑': 'Sort ↑',
  'Urutan: terbaru ↓': 'Order: newest ↓', 'Urutan: terlama ↑': 'Order: oldest ↑',
  'ENTRI': 'ENTRIES', 'PEMAIN': 'PLAYERS',
  'Jadwal terverifikasi': 'Verified fixtures',
  'Klasemen MVP': 'MVP standings',
  'TIDAK ADA JADWAL TERVERIFIKASI': 'NO VERIFIED FIXTURE',
  '2024-12-15 menurut Liquipedia dan Wikipedia; 2024-12-14 menurut Moonton.': '15 December 2024 per Liquipedia and Wikipedia; 14 December per Moonton.',
  'TLID kalah 1-4 dari Fnatic ONIC PH di final M6. Sumber Moonton mencantumkan tanggal 2024-12-14; perbedaan satu hari ini dicatat, bukan disembunyikan.': 'TLID lost 1-4 to Fnatic ONIC PH in the M6 final. Moonton lists 14 December; the one-day difference is recorded, not hidden.',
  'Angka di situs ini berasal dari riset publik. Buka catatan sumber pada setiap bagian untuk melihat asal, tanggal, dan batas keyakinannya.': 'Figures on this site come from public research. Open each section’s source note to see origin, date and confidence. ',
  'Lihat glosarium →': 'View glossary →',
};

// The authored source is now English; the Indonesian locale is produced by
// inverting the original sentence-level dictionary. Exact-match only, so a
// partial substitution can never change the meaning of a sourced statement.
const TO_ID = Object.fromEntries(Object.entries(DICT).map(([id, en]) => [en, id]));
Object.assign(TO_ID, {
  'Five starters. One season. A record you can check.': 'Lima pemain utama. Satu musim. Rekor yang bisa dicek.',
  'VIEW ROSTER': 'LIHAT ROSTER', 'View roster': 'Lihat roster',
  'FIVE STARTERS': 'LIMA PEMAIN UTAMA', 'Five starters': 'Lima pemain utama',
  'GO DEEPER': 'JELAJAHI', 'Go deeper': 'Jelajahi',
  'Substitutes (1)': 'Cadangan (1)', 'MATCH RECORD': 'REKOR PERTANDINGAN',
  'SINCE 2024': 'SEJAK 2024', 'All results': 'Semua hasil',
  'Sections': 'Bagian', 'Checks': 'Pengecekan', 'Sources': 'Sumber',
  'Skip to content': 'Lewati ke konten', 'Glossary': 'Glosarium',
  'Find a section': 'Cari bagian', 'Find a section…': 'Cari bagian…',
  'Show all sources': 'Tampilkan semua sumber', 'Hide all sources': 'Sembunyikan sumber',
  'Reset': 'Atur ulang', 'Clear search': 'Hapus pencarian',
  'Search by section name in the navigation.': 'Cari berdasarkan nama bagian di navigasi.',
  'Motion stops when your system asks for less.': 'Gerakan berhenti bila sistem memintanya.',
  'Source note': 'Catatan sumber',
  // Current authored headings and labels, kept in step with the shipped copy.
  'Five starters.': 'Lima pemain utama.', 'One season.': 'Satu musim.',
  'Roster notes': 'Catatan roster', 'Anaver is listed with the substitutes.': 'Anaver tercatat sebagai cadangan.',
  'Third at MPL ID S18.': 'Posisi ketiga di MPL ID S18.',
  'The five': 'Lima pemain utama', 'Announced 7 August 2026.': 'Diumumkan 7 Agustus 2026.',
  'What we left blank': 'Yang kami biarkan kosong',
  'the labels attached': 'label yang melekat',
  'Three players, one season of numbers': 'Tiga pemain, satu musim angka',
  'Where sources disagree': 'Di mana sumber berbeda',
  'GPM, DPM, CS and objective splits are missing': 'GPM, DPM, CS dan rincian objektif tidak tersedia',
  'Match': 'Pertandingan', 'record': 'rekor', 'Recorded': 'Tercatat',
  'Tournaments on file': 'Turnamen yang tercatat', 'The last playoff run': 'Playoff terakhir',
  'One row is one tournament, not one match.': 'Satu baris adalah satu turnamen, bukan satu pertandingan.',
  'this team real': 'tim ini nyata', 'Not covered': 'Tidak dibahas', 'Blank space': 'Ruang kosong',
  'A timeline': 'Linimasa', 'still unfinished': 'yang belum selesai',
  'What cannot be confirmed': 'Yang tidak bisa dipastikan', 'Deliberately blank': 'Sengaja dikosongkan',
  'list': 'daftar', '26 sources': '26 sumber', 'Ledger': 'Daftar',
  'S18 · SINGLE-SOURCE': 'S18 · SUMBER TUNGGAL',
  'Search site sections in header': 'Cari bagian di header',
  'Search site sections in footer': 'Cari bagian di footer',
  'Team Liquid ID crest — home': 'Lambang Team Liquid ID — beranda',
  'Five starters named on 7 August. 71–50 since May 2024.': 'Lima pemain utama diumumkan 7 Agustus. 71–50 sejak Mei 2024.',
  'Five starters named on 7 August. 71–50 since May 2024. S18 is the 2026 season; MLBB is Mobile Legends: Bang Bang.': 'Lima pemain utama diumumkan 7 Agustus. 71–50 sejak Mei 2024. S18 adalah musim 2026; MLBB adalah Mobile Legends: Bang Bang.',
  'Lane roles — EXP, Mid, Gold and Roamer describe where a player plays.': 'Peran jalur — EXP, Mid, Gold dan Roamer menjelaskan posisi bermain.',
  'Anaver uses a synthetic illustration.': 'Anaver menggunakan ilustrasi sintetik.',
  'View roster →': 'Lihat roster →',
  'NO. 04 IS ANAVER (SUBSTITUTE)': 'NO. 04 ADALAH ANAVER (CADANGAN)',
  'SWIPE TO BROWSE · TAP A CARD FOR ITS STORY': 'GESER UNTUK MELIHAT · KETUK KARTU UNTUK CERITANYA',
  'No. 04 is Anaver, a substitute.': 'No. 04 adalah Anaver, seorang cadangan.',
  'SYNTHETIC ILLUSTRATION · NO VERIFIED PORTRAIT': 'ILUSTRASI SINTETIK · POTRET TIDAK TERVERIFIKASI',
  'NOT A REAL PORTRAIT': 'BUKAN POTRET ASLI',
  'S18 standings and playoff path. One page shows 0–0, conflicting with 12–4.': 'Klasemen dan jalur playoff S18. Satu halaman menampilkan 0–0, bertentangan dengan 12–4.',
  'One step from the M6 title': 'Satu langkah dari gelar M6',
  'The record in this window': 'Rekor dalam rentang ini',
  'Liquipedia and Esports Charts both record 71 wins and 50 losses from 21 May 2024 to 2 October 2026.': 'Liquipedia dan Esports Charts sama-sama mencatat 71 kemenangan dan 50 kekalahan dari 21 Mei 2024 hingga 2 Oktober 2026.',
  'EXP laner since S14. Still in the S18 five.': 'EXP laner sejak S14. Masih dalam susunan S18.',
  'Jungler per S18. Previously named Joo.': 'Jungler menurut S18. Sebelumnya bernama Joo.',
  'Mid laner. Joined in March 2026.': 'Mid laner. Bergabung Maret 2026.',
  'Gold laner in S18. His name has several spellings in the sources.': 'Gold laner di S18. Namanya memiliki beberapa ejaan di sumber.',
  'Roamer who came up through TLID Academy.': 'Roamer yang naik dari TLID Academy.',
  '02 / Season': '02 / Musim', 'The verified record': 'Rekor terverifikasi',
  'One season, one sourced line.': 'Satu musim, satu baris bersumber.',
  'Verified record': 'Rekor terverifikasi',
  '174–141 games · 21 May 2024 – 2 October 2026. Third at MPL ID S18; best result S14 champion.': '174–141 game · 21 Mei 2024 – 2 Oktober 2026. Posisi ketiga di MPL ID S18; hasil terbaik juara S14.',
  'Keep exploring': 'Lanjut jelajah', 'The people behind the record.': 'Orang-orang di balik rekor itu.',
  'Five profiles, season numbers and the sources for both.': 'Lima profil, angka musim, dan sumber untuk keduanya.',
  'Meet the five →': 'Kenali lima pemain →', 'Why this team': 'Kenapa tim ini',
});

// Exact-match only. Blind fragment substitution can change meaning, which is
// unacceptable on a product whose core promise is "never invent the record".
export function translate(text) {
  if (typeof text !== 'string') return text;
  const key = text.trim();
  if (getLang() === 'id') return TO_ID[key] === undefined ? text : text.replace(key, TO_ID[key]);
  return DICT[key] === undefined ? text : text.replace(key, DICT[key]);
}

const ATTRS = ['aria-label', 'title', 'placeholder', 'alt'];

export function applyLanguage(root = document) {
  const lang = getLang();
  document.documentElement.lang = lang;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest('script, style, noscript, [data-no-i18n]')) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = translate(node.nodeValue); });

  root.querySelectorAll('*').forEach((el) => {
    ATTRS.forEach((attr) => {
      const value = el.getAttribute(attr);
      if (value) el.setAttribute(attr, translate(value));
    });
    if (el.hasAttribute('data-lang-toggle')) {
      el.textContent = lang === 'id' ? 'English': 'Bahasa Indonesia';
      el.setAttribute('aria-label', lang === 'id' ? 'Switch to English': 'Switch to Bahasa Indonesia');
    }
  });

  return lang;
}
