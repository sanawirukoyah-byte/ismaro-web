# Website ISMARO

Portal statis untuk **ISMARO — Ikatan Silaturahmi Mahasiswa Ronggolawe**, organisasi mahasiswa daerah
Kabupaten Tuban yang bermula di UIN Walisongo Semarang. Berisi profil, struktur kepengurusan yang bisa diedit, dan kalender yang
mengikuti kalender Indonesia (hari libur nasional, cuti bersama, hari penting, dan kalender Hijriah).

## Isi folder

```
ismaro-web/
├─ index.html          kerangka halaman + seluruh markup section
└─ assets/
   ├─ style.css        tema, tata letak, responsif, aturan cetak
   ├─ logo.png         logo resmi ISMARO (dari blog resmi)
   +- data.js            data default: hari besar, kalender Hijriah, struktur awal, AD/ART, artikel blog
   └─ app.js           logika aplikasi: render, kalender, mode edit
```

Tidak ada proses build, tidak ada dependensi. Cukup buka `index.html` di browser.

## Menjalankan

**Cara paling cepat** — klik dua kali `index.html`.

**Kalau mau dipakai di localhost** (disarankan, agar `localStorage` dan `fetch` lokal normal):

```bash
cd ismaro-web
python -m http.server 8765 --bind 127.0.0.1
```

Lalu buka <http://127.0.0.1:8765/>.

## Mode Edit

Klik tombol **Edit** di kanan atas (atau tombol *Selesai* di banner kuning). Setelah aktif,
tombol tambah / ubah / hapus akan muncul di seluruh halaman. Semua perubahan **tersimpan
otomatis** di `localStorage` perangkat tersebut.

Yang bisa diedit:

| Bagian | Apa saja |
| --- | --- |
| Identitas | Nama singkat, kepanjangan, asal, masa kepengurusan, teks sejarah, keterangan Struktur & Divisi, tagline footer, copyright footer |
| Profil | Visi, misi, nilai organisasi (tambah / ubah / hapus) |
| Struktur | Keterangan bagian struktur (lewat Mode Edit → Ubah Identitas) |
| BPH | Tambah / ubah / hapus anggota beserta jabatan dan deskripsi tugas |
| Divisi | Tambah / ubah / hapus divisi, ganti nama, fokus, tugas, warna; tambah / hapus anggota; atur urutan |
| AD/ART | Naskah Anggaran Dasar, Anggaran Rumah Tangga, dan Tata Tertib Konggres I (dari blog resmi; diedit di `assets/data.js`) |
| Berita | Kartu artikel terbaru — diambil langsung dari feed blog resmi saat daring; `ARTIKEL_AWAL` di `assets/data.js` hanya cadangan saat luring |
| Kontak | Alamat, email, WhatsApp, Instagram, blog resmi, tautan peta |
| Kalender | Tambah agenda (tombol `+` pada sel kalender, atau tombol *+ Tambah Agenda*), hapus agenda |

> Data disimpan **per perangkat** di browser masing-masing; tidak ada sinkronisasi
> antar perangkat.

### Reset

Tombol **Reset** di footer menghapus penyimpanan perangkat dan kembali ke data bawaan.
Fitur Export/Import sengaja dihapus agar data tidak bisa diotak-atik lewat file JSON.

## Data yang perlu diganti

Data bawaan sengaja memakai placeholder supaya tidak ada nama yang salah publikasi.
Ganti lewat Mode Edit:

- `[Nama Ketua]`, `[Nama Wakil Ketua]`, `[Nama Sekretaris]`, `[Nama Bendahara]`, `[Nama Koordinator]`
- `[Nama Ketua Divisi]` di setiap divisi
- Nama pada *Koordinator Pemasaran* (kosong) dan *Koordinator Publikasi Digital* (kosong)
- Kontak: `sekretariat@ismaro.id`, `0812-0000-0000`, `@ismaro_tuban`

## Sumber data kalender

- **Hari libur nasional & cuti bersama 2026** — SKB Menteri Agama, Menteri Ketenagakerjaan, dan
  Menteri PANRB Nomor 1497/2/5 Tahun 2025 (ditandatangani 19 September 2025).
  17 hari libur nasional + 8 hari cuti bersama.
- **Hari libur nasional & cuti bersama 2027** — SKB Menteri Agama, Menteri Ketenagakerjaan, dan
  Menteri PANRB Nomor 1205 Tahun 2026, Nomor 3 Tahun 2026, dan Nomor 2 Tahun 2026
  (ditandatangani 15 September 2026). 18 hari libur nasional + 8 hari cuti bersama.
- **Hari penting** — hari nasional Indonesia (Hari Gizi dan Makanan, Hari Perempuan
  Internasional, Hari Bumi Sedunia, Hari Orang Tua, Hari Anak, Hari Kesaktian Pancasila,
  Hari Batik, Sumpah Pemuda, Hari Pahlawan, Hari Guru, Hari Penyandang Cacat).
- **Hari daerah** — Hari Jadi Kabupaten Tuban, 12 November.
- Tanggal yang jatuh di akhir pekan tetap ditampilkan sebagai libur, mengikuti aturan resmi
  (misalnya Idul Fitri 2026 tanggal 21–22 Maret bertepatan Sabtu–Minggu).

### Struktur data kalender (`assets/data.js`)

```js
const HARI_BESAR = {
  "2026-01-01": { nama: "Tahun Baru Masehi", jenis: "nasional" },
  // ...
};

const TANGGAL_TETAP = [
  { mm: 8, dd: 17, nama: "Hari Kemerdekaan RI", jenis: "nasional" },
  // ... dipakai untuk tahun yang tidak ada di HARI_BESAR
];
```

`jenis` yang tersedia: `nasional`, `cuti`, `penting`, `daerah`, `organisasi`.
Kalau menambah `jenis` baru, tambahkan juga labelnya di `JENIS_LABEL` dan aturan
warna `.ev.<jenis>` di `style.css`.

### Catatan kalender Hijriah

Tanggal Hijriah dihitung dari tabel panjang bulan yang dikunci ke kalender resmi Indonesia
(1447–1448 H mengikuti tanggal resmi SKB 3 Menteri 2026 dan 2027; 1449–1450 H masih perkiraan),
bukan perhitungan aritmatis murni. Alasannya, perhitungan aritmetik tabular bisa meleset ±3 hari
dari ru'yah Indonesia — dampanya tanggal Idul Fitri dan Idul Adha salah. Di luar rentang
1447–1450 H hasilnya ditandai `~` sebagai perkiraan.

## Menerbitkan ke internet

Situs ini statis, jadi bisa di-host di mana saja.

**GitHub Pages**

```bash
cd ismaro-web
git init
git add .
git commit -m "website ISMARO"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

Lalu di repo: **Settings → Pages → Source: Deploy from a branch → `main` / `root` → Save**.

**Netlify Drop** — buka <https://app.netlify.com/drop>, seret folder `ismaro-web` ke sana.
Alamat langsung diberikan dalam beberapa detik.

**Catatan:** data hasil Mode Edit ada di `localStorage` tiap pengunjung,
jadi tidak ikut terpublikasi. Kalau ingin isi situs yang tetap untuk semua pengunjung,
ubah langsung `assets/data.js` (konstanta `BPH_AWAL`, `DIVISI_AWAL`, `AGENDA_AWAL`, `AD_ART`, dll.).

## Cetak

`Ctrl+P` / `Cmd+P` menghasilkan versi cetak bersih: navigasi, tombol, dan banner Mode Edit
disembunyikan, bayangan kartu dihapus. Tombol *Cetak struktur* di section Struktur langsung
memanggil dialog cetak halaman tersebut.

## Keterbatasan

- Tanggal Hijriah bersifat perkiraan di luar 1447–1450 H dan harus dikonfirmasi ke sumber
  resmi (Kemenag / HisabIndonesia) sebelum dipakai untuk kegiatan yang sensitif terhadap tanggal.
- Tanggal libur 2026 dan 2027 sudah mengikuti SKB 3 Menteri resmi. Tahun 2028 ke atas masih
  estimasi; perbarui `HARI_BESAR` setiap kali SKB 3 Menteri untuk tahun tersebut terbit.
- Nama organisasi: **ISMARO — Ikatan Silaturahmi Mahasiswa Ronggolawe** (kepanjangan sudah
  dikonfirmasi pemilik). Ubah lewat Mode Edit → Identitas bila nanti berganti lagi.
- Naskah AD/ART, Tata Tertib Konggres I, sejarah, dan artikel diambil dari blog resmi
  ISMARO Tuban (<https://ismarotuban.blogspot.com/>). Artikel baru di section Berita
  otomatis muncul lewat feed blog (JSONP Blogger) — `ARTIKEL_AWAL` hanya cadangan saat
  luring. Perbarui `AD_ART` di `assets/data.js` bila naskah AD/ART di blog diperbarui.