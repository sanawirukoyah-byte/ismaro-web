/* =========================================================
   ISMARO - Data Default
   Hari libur mengacu SKB 3 Menteri (Menag, Menaker, MenpanRB):
   - 2026: SKB No. 1497/2/5 Tahun 2025 (ditandatangani 19 September 2025).
   - 2027: SKB No. 1205 Tahun 2026, No. 3 Tahun 2026, dan No. 2 Tahun 2026
     (ditandatangani 15 September 2026). 18 libur nasional + 8 cuti bersama.
   ========================================================= */

const HARI_BESAR = {
  "2026-01-01": { nama: "Tahun Baru Masehi", jenis: "nasional" },
  "2026-01-16": { nama: "Isra Mikraj Nabi Muhammad SAW", jenis: "nasional" },
  "2026-01-24": { nama: "Hari Gizi dan Makanan", jenis: "penting" },
  "2026-02-16": { nama: "Cuti Bersama Tahun Baru Imlek", jenis: "cuti" },
  "2026-02-17": { nama: "Tahun Baru Imlek 2577 Kongzili", jenis: "nasional" },
  "2026-03-08": { nama: "Hari Perempuan Internasional", jenis: "penting" },
  "2026-03-18": { nama: "Cuti Bersama Hari Suci Nyepi", jenis: "cuti" },
  "2026-03-19": { nama: "Hari Suci Nyepi (Tahun Baru Saka 1948)", jenis: "nasional" },
  "2026-03-20": { nama: "Cuti Bersama Idul Fitri 1447 H", jenis: "cuti" },
  "2026-03-21": { nama: "Hari Raya Idul Fitri 1447 H", jenis: "nasional" },
  "2026-03-22": { nama: "Hari Raya Idul Fitri 1447 H", jenis: "nasional" },
  "2026-03-23": { nama: "Cuti Bersama Idul Fitri 1447 H", jenis: "cuti" },
  "2026-03-24": { nama: "Cuti Bersama Idul Fitri 1447 H", jenis: "cuti" },
  "2026-04-03": { nama: "Wafat Yesus Kristus", jenis: "nasional" },
  "2026-04-05": { nama: "Kebangkitan Yesus Kristus (Paskah)", jenis: "nasional" },
  "2026-04-22": { nama: "Hari Bumi Sedunia", jenis: "penting" },
  "2026-05-01": { nama: "Hari Buruh Internasional", jenis: "nasional" },
  "2026-05-14": { nama: "Kenaikan Yesus Kristus", jenis: "nasional" },
  "2026-05-15": { nama: "Cuti Bersama Kenaikan Yesus Kristus", jenis: "cuti" },
  "2026-05-27": { nama: "Hari Raya Idul Adha 1447 H", jenis: "nasional" },
  "2026-05-28": { nama: "Cuti Bersama Idul Adha 1447 H", jenis: "cuti" },
  "2026-05-31": { nama: "Hari Raya Waisak 2570 BE", jenis: "nasional" },
  "2026-06-01": { nama: "Hari Lahir Pancasila", jenis: "nasional" },
  "2026-06-05": { nama: "Hari Lingkungan Hidup Indonesia", jenis: "penting" },
  "2026-06-16": { nama: "Tahun Baru Islam 1448 Hijriyah", jenis: "nasional" },
  "2026-06-21": { nama: "Hari Orang Tua Nasional", jenis: "penting" },
  "2026-07-23": { nama: "Hari Anak Nasional", jenis: "penting" },
  "2026-08-17": { nama: "Hari Kemerdekaan RI ke-81", jenis: "nasional" },
  "2026-08-25": { nama: "Maulid Nabi Muhammad SAW", jenis: "nasional" },
  "2026-10-01": { nama: "Hari Kesaktian Pancasila", jenis: "penting" },
  "2026-10-02": { nama: "Hari Batik Nasional", jenis: "penting" },
  "2026-10-28": { nama: "Sumpah Pemuda", jenis: "penting" },
  "2026-11-10": { nama: "Hari Pahlawan", jenis: "penting" },
  "2026-11-12": { nama: "Hari Jadi Kabupaten Tuban", jenis: "daerah" },
  "2026-11-21": { nama: "Hari Guru Nasional", jenis: "penting" },
  "2026-12-03": { nama: "Hari Penyandang Cacat", jenis: "penting" },
  "2026-12-24": { nama: "Cuti Bersama Hari Raya Natal", jenis: "cuti" },
  "2026-12-25": { nama: "Hari Raya Natal", jenis: "nasional" },

  "2027-01-01": { nama: "Tahun Baru Masehi", jenis: "nasional" },
  "2027-01-05": { nama: "Isra Mikraj Nabi Muhammad SAW", jenis: "nasional" },
  "2027-02-05": { nama: "Cuti Bersama Tahun Baru Imlek", jenis: "cuti" },
  "2027-02-06": { nama: "Tahun Baru Imlek 2578 Kongzili", jenis: "nasional" },
  "2027-03-08": { nama: "Hari Suci Nyepi (Tahun Baru Saka 1949)", jenis: "nasional" },
  "2027-03-09": { nama: "Cuti Bersama Idul Fitri 1448 H", jenis: "cuti" },
  "2027-03-10": { nama: "Hari Raya Idul Fitri 1448 H", jenis: "nasional" },
  "2027-03-11": { nama: "Hari Raya Idul Fitri 1448 H", jenis: "nasional" },
  "2027-03-12": { nama: "Cuti Bersama Idul Fitri 1448 H", jenis: "cuti" },
  "2027-03-15": { nama: "Cuti Bersama Idul Fitri 1448 H", jenis: "cuti" },
  "2027-03-25": { nama: "Cuti Bersama Wafat Yesus Kristus", jenis: "cuti" },
  "2027-03-26": { nama: "Wafat Yesus Kristus", jenis: "nasional" },
  "2027-03-28": { nama: "Kebangkitan Yesus Kristus (Paskah)", jenis: "nasional" },
  "2027-05-01": { nama: "Hari Buruh Internasional", jenis: "nasional" },
  "2027-05-06": { nama: "Kenaikan Yesus Kristus", jenis: "nasional" },
  "2027-05-17": { nama: "Hari Raya Idul Adha 1448 H", jenis: "nasional" },
  "2027-05-18": { nama: "Cuti Bersama Idul Adha 1448 H", jenis: "cuti" },
  "2027-05-19": { nama: "Cuti Bersama Hari Raya Waisak", jenis: "cuti" },
  "2027-05-20": { nama: "Hari Raya Waisak 2571 BE", jenis: "nasional" },
  "2027-06-01": { nama: "Hari Lahir Pancasila", jenis: "nasional" },
  "2027-06-06": { nama: "Tahun Baru Islam 1449 Hijriyah", jenis: "nasional" },
  "2027-08-15": { nama: "Maulid Nabi Muhammad SAW", jenis: "nasional" },
  "2027-08-17": { nama: "Hari Kemerdekaan RI", jenis: "nasional" },
  "2027-12-24": { nama: "Cuti Bersama Hari Raya Natal", jenis: "cuti" },
  "2027-12-25": { nama: "Hari Raya Natal", jenis: "nasional" },
  "2027-12-26": { nama: "Isra Mikraj Nabi Muhammad SAW", jenis: "nasional" }
};

/* Tanggal tetap setiap tahun, untuk tahun di luar daftar di atas */
const TANGGAL_TETAP = [
  { mm: 1,  dd: 1,  nama: "Tahun Baru Masehi", jenis: "nasional" },
  { mm: 5,  dd: 1,  nama: "Hari Buruh Internasional", jenis: "nasional" },
  { mm: 6,  dd: 1,  nama: "Hari Lahir Pancasila", jenis: "nasional" },
  { mm: 8,  dd: 17, nama: "Hari Kemerdekaan RI", jenis: "nasional" },
  { mm: 10, dd: 1,  nama: "Hari Kesaktian Pancasila", jenis: "penting" },
  { mm: 10, dd: 2,  nama: "Hari Batik Nasional", jenis: "penting" },
  { mm: 10, dd: 28, nama: "Sumpah Pemuda", jenis: "penting" },
  { mm: 11, dd: 10, nama: "Hari Pahlawan", jenis: "penting" },
  { mm: 11, dd: 21, nama: "Hari Guru Nasional", jenis: "penting" },
  { mm: 12, dd: 25, nama: "Hari Raya Natal", jenis: "nasional" }
];

const JENIS_LABEL = {
  nasional: "Libur Nasional",
  cuti: "Cuti Bersama",
  penting: "Hari Penting",
  daerah: "Hari Daerah",
  organisasi: "Agenda ISMARO"
};

/* ---------------- Kalender Hijriah (sinkron kalender Indonesia) ----------------
   1 Muharram 1447 H = 27 Juni 2025   (acuan)
   1 Ramadhan 1447 H = 20 Februari 2026
   1 Syawal  1447 H = 21 Maret 2026     (Idul Fitri)
   10 Dzulhijah 1447 H = 27 Mei 2026    (Idul Adha)
   1 Muharram 1448 H = 16 Juni 2026
   1 Rajab   1448 H = 10 Desember 2026  (27 Rajab = 5 Januari 2027, Isra Mikraj)
   1 Ramadhan 1448 H = 8 Februari 2027
   1 Syawal  1448 H = 10 Maret 2027     (Idul Fitri)
   10 Dzulhijah 1448 H = 17 Mei 2027    (Idul Adha)
   1 Muharram 1449 H = 6 Juni 2027
   Acuan 1447-1448 mengikuti SKB 3 Menteri 2026 dan 2027.
   Di luar rentang ini, tanggal Hijriah hanya perkiraan aritmatis.      */
const HIJRI_MULAI = {
  1447: "2025-06-27",
  1448: "2026-06-16",
  1449: "2027-06-06",
  1450: "2028-05-25"
};
const HIJRI_PANJANG_BULAN = {
  1447: [30, 29, 30, 29, 30, 30, 30, 30, 29, 29, 29, 29],
  1448: [30, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30, 29],
  1449: [30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30],
  1450: [30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30]
};

/* ---------------- Struktur organisasi ---------------- */

const BPH_AWAL = [
  { jabatan: "Ketua Umum", nama: "[Nama Ketua]", tugas: "Pemimpin utama dan penanggung jawab arah organisasi." },
  { jabatan: "Wakil Ketua Umum", nama: "[Nama Wakil Ketua]", tugas: "Mendampingi ketua dan menyelaraskan program kerja." },
  { jabatan: "Sekretaris Umum", nama: "[Nama Sekretaris]", tugas: "Administrasi, surat, dokumen, dan kesekretariatan." },
  { jabatan: "Bendahara", nama: "[Nama Bendahara]", tugas: "Keuangan, penghimpunan dana, dan pelaporan." },
  { jabatan: "Koordinator Program", nama: "[Nama Koordinator]", tugas: "Menyusun kalender kegiatan dan evaluasi program." },
  { jabatan: "Koordinator Pemasaran", nama: "", tugas: "" }
];

const DIVISI_AWAL = [
  {
    nama: "Divisi Pendidikan",
    fokus: "Kualitas akademik dan literasi",
    tugas: "Pelatihan kepenulisan, pendampingan belajar, lomba karya tulis, dan forum beasiswa.",
    warna: "biru",
    anggota: [
      { jabatan: "Ketua Divisi", nama: "[Nama Ketua Divisi]" }
    ]
  },
  {
    nama: "Divisi Kemasyarakatan",
    fokus: "Keterlibatan dan kebersamaan warga",
    tugas: "Kerja bakti, penataan lingkungan, program dialog warga, dan pembangunan komunitas.",
    warna: "hijau",
    anggota: [
      { jabatan: "Ketua Divisi", nama: "[Nama Ketua Divisi]" }
    ]
  },
  {
    nama: "Divisi Ekonomi Kreatif",
    fokus: "Potensi ekonomi desa",
    tugas: "Pelatihan wirausaha, pemasaran produk, dan festival produk lokal.",
    warna: "kuning",
    anggota: [
      { jabatan: "Ketua Divisi", nama: "[Nama Ketua Divisi]" }
    ]
  },
  {
    nama: "Divisi Keagamaan",
    fokus: "Pembinaan rohani dan kerohanian",
    tugas: "Mengajar mengaji, banjari, TPQ, wakaf Al-Qur'an, dan kegiatan keagamaan.",
    warna: "ungu",
    anggota: [
      { jabatan: "Ketua Divisi", nama: "[Nama Ketua Divisi]" }
    ]
  },
  {
    nama: "Divisi Publikasi dan Dokumentasi",
    fokus: "Cerita yang tertuang",
    tugas: "Liputan kegiatan, media sosial, arsip foto dan video, desain grafis.",
    warna: "merah",
    anggota: [
      { jabatan: "Ketua Divisi", nama: "[Nama Ketua Divisi]" }
    ]
  },
  {
    nama: "Divisi Olahraga dan Seni",
    fokus: "Semangat juang dan sportivitas",
    tugas: "Turnamen futsal dan voli, pencak silat, seni budaya, serta kerja sama.",
    warna: "biru",
    anggota: [
      { jabatan: "Ketua Divisi", nama: "[Nama Ketua Divisi]" }
    ]
  }
];

const NILAI_AWAL = [
  { judul: "Kekeluargaan", teks: "Satu wadah untuk semua mahasiswa Tuban di perantauan. Rantai kekeluargaan dijaga bersama, bukan milik segelintir orang." },
  { judul: "Keadilan", teks: "Setiap suara anggota didengar, dengan posisi yang setara dan dipakai untuk kepentingan bersama." },
  { judul: "Kreativitas", teks: "Ide besar hanya bermakna bila menjelma menjadi karya yang menyentuh orang banyak." },
  { judul: "Tanggung Jawab", teks: "Amanah yang dipercayakan adalah modal sosial termahal yang harus kita rawat." }
];

const AGENDA_AWAL = [
  { tanggal: "2026-08-17", judul: "Lomba 17-an dan Upacara Bendera", tempat: "Sekretariat", jenis: "organisasi" },
  { tanggal: "2026-11-12", judul: "Upacara dan Syukuran Hari Jadi Kabupaten Tuban", tempat: "Tuban", jenis: "organisasi" },
  { tanggal: "2026-12-25", judul: "Apresiasi Natal Bersama", tempat: "Tuban", jenis: "organisasi" }
];

/* ---------------- AD/ART & dokumen resmi (sumber: blog ISMARO Tuban) ----------------
Naskah transkripsi dari:
- AD/ART: https://ismarotuban.blogspot.com/p/blog-page_7.html
- Tata Tertib Konggres I: https://ismarotuban.blogspot.com/p/tatatertib-persidangan-konggres-i.html
Struktur: { bab, isi?: [paragraf], pasal?: [{ no, judul, isi?, list? }] }
*/
const AD_ART = {
  sumberAdArt: "https://ismarotuban.blogspot.com/p/blog-page_7.html",
  sumberTatib: "https://ismarotuban.blogspot.com/p/tatatertib-persidangan-konggres-i.html",
  ad: [
    { bab: "Pembukaan", isi: [
      "Bahwa sesungguhnya falsafah Pancasila merupakan dasar Negara kesatuan Republik Indonesia. Pandangan Pancasila berarti menegakkan prinsip-prinsip Ketuhanan Yang Maha Esa, kemanusiaan, persatuan Indonesia, kerakyatan dalam permusyawaratan, serta keadilan sosial bagi seluruh rakyat Indonesia.",
      "Sebagai generasi penerus berkewajiban menjadikan Pancasila sebagai sumber inspirasi, motivasi, dan nilai kesadaran dalam bernegara, dan bermasyarakat untuk melakukan segala tindakan guna memperbaiki keadaan yang lebih baik sesuai dengan panggilan sejarah bangsa.",
      "Organisasi Ikatan Silaturahmi Mahasiswa Ronggolawe (ISMARO) yang dibangun sebagai wadah perekat kesatuan mahasiswa daerah Kabupaten Tuban yang ada di Universitas Islam Negeri Walisongo Semarang, yang memiliki tanggung jawab sama dalam penyelenggaraan pembinaan dan pengembangan generasi muda pada umumnya menuju terwujudnya generasi muda yang berkualitas, juga turut serta berpartisipasi dan bertanggung jawab untuk melanjutkan dan melaksanakan cita-cita pemuda serta mempersiapkan tunas-tunas bangsa yang mandiri, kritis, dinamis, demi tercapainya masa depan yang lebih baik.",
      "Selanjutnya demi terselenggara segala kegiatan dan menjaga keseimbangan organisasi, maka perlu disusun Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) sebagai berikut:"
    ] },
    { bab: "BAB I — Nama, Waktu dan Tempat Kedudukan", pasal: [
      { no: "Pasal 1", judul: "Nama", isi: "Organisasi ini bernama Ikatan Silaturahmi Mahasiswa Ronggolawe disingkat ISMARO." },
      { no: "Pasal 2", judul: "Waktu dan Tempat Kedudukan", isi: "ISMARO berdiri pada Hari Minggu, 27 Nopember 2016 dan berkedudukan di Universitas Islam Negeri Walisongo Semarang." }
    ] },
    { bab: "BAB II — Azas", pasal: [
      { no: "Pasal 3", judul: "Azas", isi: "Islam, Pancasila, dan UUD 1945." }
    ] },
    { bab: "BAB III — Tujuan, Usaha, dan Sifat", pasal: [
      { no: "Pasal 4", judul: "Tujuan", isi: "Membina insan akademis demi mewujudkan masyarakat adil, makmur, serta bertanggung jawab untuk mempersiapkan tunas-tunas bangsa yang mandiri, kritis, dan dinamis dalam rangka melanjutkan dan melaksanakan cita-cita kemerdekaan bangsa Indonesia." },
      { no: "Pasal 5", judul: "Usaha", list: [
        "Membina kepribadian pemuda yang berakhlakul karimah",
        "Membina kepribadian pemuda yang mandiri",
        "Mengembangkan potensi kreatif, keilmuan, sosial, dan budaya",
        "Mempelopori pengembangan ilmu pengetahuan dan teknologi bagi kemaslahatan masa depan umat manusia",
        "Ikut terlibat aktif dalam penyelesaian persoalan sosial kemasyarakatan dan kebangsaan",
        "Berperan aktif dalam perkembangan globalisasi dalam rangka mengangkat potensi daerah"
      ] },
      { no: "Pasal 6", judul: "Sifat", isi: "Ilmiah dan independen." }
    ] },
    { bab: "BAB IV — Status dan Fungsi", pasal: [
      { no: "Pasal 7", judul: "Status", isi: "Organisasi mahasiswa daerah." },
      { no: "Pasal 8", judul: "Fungsi", isi: "Wadah silaturahmi mahasiswa daerah." }
    ] },
    { bab: "BAB V — Keanggotaan", pasal: [
      { no: "Pasal 9", judul: "Anggota", isi: "Anggota ISMARO adalah mahasiswa asal daerah Kabupaten Tuban yang terdaftar di Universitas Islam Negeri Walisongo Semarang, terdiri dari:", list: [
        "Anggota biasa",
        "Anggota luar biasa",
        "Anggota kehormatan"
      ] }
    ] },
    { bab: "BAB VI — Kedaulatan", pasal: [
      { no: "Pasal 10", judul: "Kedaulatan", isi: "Kedaulatan berada di tangan anggota biasa, yang pelaksanaannya diatur dalam Anggaran Rumah Tangga." }
    ] },
    { bab: "BAB VII — Struktur Organisasi", pasal: [
      { no: "Pasal 11", judul: "Kekuasaan", isi: "Kekuasaan tertinggi ditentukan melalui konggres ISMARO." },
      { no: "Pasal 12", judul: "Kepemimpinan", isi: "Kepemimpinan tertinggi dipegang oleh Pengurus ISMARO UIN Walisongo Semarang." },
      { no: "Pasal 13", judul: "Dewan Penasihat", isi: "Dewan penasihat berasal dari demisioner." }
    ] },
    { bab: "BAB VIII — Keuangan dan Harta Benda", pasal: [
      { no: "Pasal 14", judul: "Keuangan dan Harta Benda", list: [
        "Keuangan diperoleh dari: iuran pokok dan iuran wajib dari setiap anggota; sumbangan dari donator yang tidak mengikat; serta usaha-usaha lain yang tidak bertentangan dengan hukum.",
        "Pengeluaran digunakan untuk: biaya setiap kegiatan yang diprogram; biaya lain untuk keperluan organisasi; serta biaya insidental.",
        "Harta benda yang dimiliki oleh ISMARO dipergunakan untuk kepentingan organisasi."
      ] }
    ] },
    { bab: "BAB IX — Perubahan Anggaran Dasar dan Pembubaran", pasal: [
      { no: "Pasal 15", judul: "Perubahan Anggaran Dasar dan Pembubaran", isi: "Perubahan Anggaran Dasar dan pembubaran diadakan pada konggres ISMARO." },
      { no: "Pasal 16", judul: "Aturan Tambahan", isi: "Diadakan pada konggres ISMARO." },
      { no: "Pasal 17", judul: "Pengesahan", isi: "Konggres 1 ditetapkan di Semarang, pada tanggal 19 November 2017." }
    ] },
    { bab: "BAB X — Penutup", isi: [
      "Demikianlah Anggaran Dasar ini ditetapkan dengan sebenarnya. Hal-hal lain yang belum diatur dalam Anggaran Dasar akan diatur dalam Anggaran Rumah Tangga."
    ] }
  ],
  art: [
    { bab: "BAB I — Keanggotaan", pasal: [
      { no: "Pasal I", judul: "Anggota Biasa", isi: "Mahasiswa aktif UIN Walisongo Semarang yang berasal dari Kabupaten Tuban yang terdaftar dalam keanggotaan ISMARO." },
      { no: "Pasal II", judul: "Anggota Luar Biasa", isi: "Anggota biasa yang ditetapkan sebagai pengurus atas wewenang Ketua Umum." },
      { no: "Pasal III", judul: "Anggota Kehormatan", isi: "Mereka yang berjasa dan berpartisipasi pada organisasi ISMARO." },
      { no: "Pasal IV", judul: "Syarat Keanggotaan", list: [
        "Mahasiswa aktif UIN Walisongo Semarang yang berasal dari Kabupaten Tuban",
        "Mengikuti makrab atau aktif dalam organisasi ISMARO"
      ] },
      { no: "Pasal V", judul: "Masa Keanggotaan", isi: "Masa keanggotaan berakhir terhitung setelah:", list: [
        "Lulus dari UIN Walisongo Semarang",
        "Meninggal dunia",
        "Mengundurkan diri secara tertulis yang disampaikan kepada pengurus harian"
      ] },
      { no: "Pasal VI", judul: "Hak", list: [
        "Anggota biasa dan anggota luar biasa berhak mendapatkan pendidikan dan kebebasan berpendapat",
        "Setiap anggota biasa dan luar biasa mempunyai hak berbicara, hak suara, partisipasi, dan hak untuk dipilih"
      ] },
      { no: "Pasal VII", judul: "Kewajiban", list: [
        "Setiap anggota berkewajiban menjaga nama baik organisasi",
        "Setiap anggota berkewajiban taat dan patuh pada AD/ART",
        "Setiap anggota berkewajiban membayar iuran pangkal dan iuran pokok",
        "Setiap anggota berkewajiban menjalankan visi dan misi organisasi",
        "Setiap anggota berkewajiban terlibat aktif dalam kegiatan organisasi",
        "Setiap anggota berkewajiban menjaga simbol-simbol organisasi"
      ] }
    ] },
    { bab: "BAB II — Struktur Kekuasaan", pasal: [
      { no: "Bagian I", judul: "Konggres", list: [
        "Konggres merupakan pengambilan keputusan tertinggi",
        "Konggres memegang kekuasaan tertinggi",
        "Konggres diadakan satu tahun sekali",
        "Apabila dalam keadaan luar biasa, konggres dapat diadakan menyimpang dalam ketentuan pasal tersebut ayat 3"
      ] }
    ] }
  ],
  tatib: [
    { bab: "Tata Tertib Persidangan Konggres I (19 November 2017, Asrama FUPK)", pasal: [
      { no: "Pasal I", judul: "Nama, Waktu dan Tempat", list: [
        "Sidang ini dinamakan Konggres Ikatan Silaturahmi Mahasiswa Ronggolawe (ISMARO TUBAN) 2017",
        "Dilaksanakan pada tanggal 19 November 2017",
        "Bertempat di Asrama FUPK"
      ] },
      { no: "Pasal II", judul: "Kekuasaan / Wewenang", list: [
        "Meminta Laporan Pertanggungjawaban Pengurus ISMARO TUBAN",
        "Memilih Pengurus ISMARO TUBAN dengan jalan memilih Ketua Umum",
        "Menetapkan Anggota Dewan Penasihat ISMARO TUBAN"
      ] },
      { no: "Pasal III", judul: "Peserta", list: [
        "Peserta Konggres terdiri dari anggota ISMARO TUBAN yang tercatat sebagai mahasiswa UIN Walisongo Semarang asal daerah Tuban",
        "Konggres baru dapat dinyatakan sah apabila dihadiri oleh lebih dari separuh anggota ISMARO TUBAN",
        "Apabila poin (2) tidak terpenuhi maka sidang ditunda 15 menit"
      ] },
      { no: "Pasal IV", judul: "Hak Peserta", list: [
        "Peserta mempunyai hak suara dan hak bicara"
      ] },
      { no: "Pasal V", judul: "Sidang-Sidang", isi: "Sidang-sidang dalam Konggres terdiri dari:", list: [
        "Sidang pembacaan tata tertib",
        "Sidang penyampaian laporan pertanggungjawaban pengurus ISMARO TUBAN",
        "Rekomendasi pengurus kedepan ISMARO TUBAN"
      ] },
      { no: "Pasal VII", judul: "Pimpinan Sidang", list: [
        "Pimpinan Sidang Konggres dipilih dari peserta",
        "Pimpinan Sidang bertugas mengatur jalannya persidangan"
      ] },
      { no: "Pasal IX", judul: "Keputusan", list: [
        "Keputusan diambil dengan cara musyawarah untuk mufakat",
        "Apabila poin (1) tidak tercapai, maka keputusan diambil dengan cara lobbying",
        "Apabila poin (1) dan (2) tidak tercapai, maka keputusan diambil dengan cara voting"
      ] },
      { no: "Pasal XI", judul: "Aturan Tambahan", isi: "Hal-hal yang belum diatur dalam tata tertib ini ditentukan lebih lanjut oleh Pimpinan Sidang dengan persetujuan peserta sidang." }
    ] },
    { bab: "Tata Tertib Pemilihan Pimpinan Sidang Konggres I", isi: [
      "1. Pimpinan Sidang Konggres terdiri dari tiga orang yang dipilih dari peserta sidang.",
      "2. Konggres I dilaksanakan secara langsung, umum, bebas, jujur, dan adil.",
      "3. Pemilihan Presidium Sidang dilaksanakan melalui pemilihan langsung oleh peserta sidang: menentukan tiga orang dari suara terbanyak; apabila terdapat jumlah suara yang sama maka dilakukan pemilihan ulang untuk jumlah suara yang sama."
    ] },
    { bab: "Tata Tertib Pemilihan Ketua Umum", isi: [
      "1. Pemilihan Ketua Umum dilakukan secara tertib, bebas, jujur, dan adil, dengan dua tahap: Tahap Pencalonan (setiap peserta berhak mencalonkan diri) dan Tahap Pemilihan (setiap peserta memilih satu calon).",
      "2. Calon dengan suara terbanyak dinyatakan sebagai Ketua Umum terpilih; bila jumlah suara sama diadakan pemilihan ulang; bila hanya terdapat satu calon maka langsung dinyatakan terpilih. Ketua Umum terpilih harus siap diturunkan bila tidak mampu mengemban amanah organisasi."
    ], pasal: [
      { no: "Syarat Formateur", judul: "Syarat-syarat Calon Ketua Umum", list: [
        "Bertaqwa kepada Allah SWT",
        "Mampu membaca Al-Qur'an dengan baik dan benar serta dibuktikan di depan forum",
        "Sehat secara jasmani maupun rohani",
        "Berdedikasi tinggi dan bisa menjaga nama baik organisasi",
        "Bersedia menunda kelulusannya demi kelancaran organisasi selama kepengurusannya",
        "Setiap calon Ketua Umum harus menyatakan kesediannya di depan forum sidang"
      ] }
    ] }
  ]
};

/* ---------------- Blog resmi ---------------- */
const BLOG_URL = "https://ismarotuban.blogspot.com/";
/* Artikel terbaru dari feed blog; perbarui bila ada tulisan baru */
const ARTIKEL_AWAL = [
  { judul: "ISMARO Mengajar", tanggal: "2024-05-08", url: "https://ismarotuban.blogspot.com/2024/05/ismaro-mengajar.html" },
  { judul: "Pelaksanaan Kegiatan Isra Mi'raj", tanggal: "2024-03-13", url: "https://ismarotuban.blogspot.com/2024/03/pelaksanaan-kegiatan-isya-miraj.html" },
  { judul: "Menggali Peluang Karir dan Pendidikan: ISMARO Expo dan Sosialisasi Kampus 2024", tanggal: "2024-02-09", url: "https://ismarotuban.blogspot.com/2024/02/menggali-peluang-karir-dan-pendididkan.html" },
  { judul: "Sukses Pelantikan Pengurus ISMARO Periode 2023/2024 dan Meriahnya Dies Natalis ISMARO ke-7", tanggal: "2024-01-28", url: "https://ismarotuban.blogspot.com/2024/01/sukses-pelantikan-pengurus-ismaro.html" },
  { judul: "ISMARO — Halal Bi Halal", tanggal: "2022-06-03", url: "https://ismarotuban.blogspot.com/2022/06/ismaro-halal-bi-halal.html" },
  { judul: "ISMARO Takjil On The Road", tanggal: "2022-04-27", url: "https://ismarotuban.blogspot.com/2022/04/ismaro-takjil-on-road.html" }
];
