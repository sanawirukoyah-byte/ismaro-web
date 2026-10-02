/* =========================================================
   ISMARO - Logika Aplikasi
   Data disimpan di localStorage perangkat.
   ========================================================= */

const KEY = "ismaro-data-v1";
const BULAN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const BULAN_S = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
const HARI = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const HARI_S = ["Min","Sen","Sel","Rab","Kam","Jum","Sab"];
const HIJRI_BULAN = ["Muharram","Safar","Rabiul Awal","Rabiul Akhir","Jumadil Awal","Jumadil Akhir",
                     "Rajab","Sya'ban","Ramadhan","Syawal","Zulkaidah","Zulhijah"];

let state = load();
let editMode = false;
let view = new Date();

/* =============== Penyimpanan =============== */
function defaultState(){
  const base = {
    meta: {
      nama: "ISMARO",
      kepanjangan: "Ikatan Silaturahmi Mahasiswa Ronggolawe",
      masa: "2026/2027",
      asal: "Kabupaten Tuban, Jawa Timur",
      isiSejarah:
        "ISMARO adalah organisasi daerah bagi mahasiswa asal Kabupaten Tuban yang menimba ilmu di " +
        "Universitas Islam Negeri Walisongo Semarang. Organisasi ini lahir dari pertemuan sederhana " +
        "antar mahasiswa Tuban di kampus tersebut. Perintisnya, Abdul Muvidi Muzayyin (asal Kutorejo, " +
        "Tuban), mulai menghimpun mahasiswa Tuban sejak 2014, dan sekitar Maret 2015 nama Ikatan " +
        "Silaturahmi Mahasiswa Ronggolawe Tuban resmi terbentuk.\n\n" +
        "Arah dan tujuan organisasi ditetapkan pada Hari Keakraban, Minggu 27 November 2016 di " +
        "Gonoharjo, Kendal — sejak saat itu ISMARO menegaskan diri sebagai organisasi daerah sekaligus " +
        "wadah silaturahmi mahasiswa Tuban di UIN Walisongo. Nama Ronggolawe diambil dari Raden Haryo " +
        "Ronggolawe, tokoh yang dikenang lewat Hari Jadi Kabupaten Tuban setiap 12 November.\n\n" +
        "Sebagai organisasi daerah, ISMARO menjadi kanal untuk belajar, berkarya, serta menjaga " +
        "kearifan lokal Bumi Wali, dan tumbuh menjadi mitra kampus dalam kegiatan kemahasiswaan.",
      isiVisi:
        "Terwujudnya mahasiswa Tuban yang berdaya, berkepribadian, dan bermanfaat bagi daerah asalnya, " +
        "baik di kampus maupun di kampung halaman.",
      isiMisi:
        "1. Mempererat tali brotherhood antar mahasiswa Tuban di seluruh kampus.\n" +
        "2. Menyelenggarakan program pendidikan, keagamaan, dan ekonomi kreatif.\n" +
        "3. Menjaga serta merawat warisan budaya dan kearifan lokal Bumi Wali.\n" +
        "4. Mewujudkan ruang diskusi yang sehat, inklusif, dan bebas dari kebencian.",
      catatanStruktur: "Alur dari Ketua Umum hingga seluruh divisi.",
      catatanDivisi: "Setiap divisi punya fokus, tugas, dan anggota yang bisa kamu atur sendiri.",
      alamat: "Sekretariat ISMARO, UIN Walisongo Semarang",
      email: "sekretariat@ismaro.id",
      whatsapp: "0812-0000-0000",
      instagram: "@ismaro_tuban",
      blog: "https://ismarotuban.blogspot.com/",
      maps: "https://maps.google.com/?q=UIN+Walisongo+Semarang",
      footerTagline: "Organisasi Daerah Kabupaten Tuban x Nurcreativ",
      footerCopy: "© 2026 ISMARO — Ikatan Silaturahmi Mahasiswa Ronggolawe. Hak cipta dilindungi."
    },
    bph: clone(BPH_AWAL),
    divisi: clone(DIVISI_AWAL),
    nilai: clone(NILAI_AWAL),
    agenda: clone(AGENDA_AWAL)
  };
  return base;
}
function clone(o){ return JSON.parse(JSON.stringify(o)); }

function normalize(d){
  const base = defaultState();
  if(!d || typeof d !== "object") return base;
  const divisi = Array.isArray(d.divisi) ? d.divisi.map(v => {
    if(!v || typeof v !== "object") return { nama:"Divisi", fokus:"", tugas:"", warna:"biru", anggota:[] };
    if(!Array.isArray(v.anggota)) v.anggota = [];
    return v;
  }) : base.divisi;
  return {
    meta: Object.assign(base.meta, (d.meta && typeof d.meta === "object") ? d.meta : {}),
    bph: Array.isArray(d.bph) ? d.bph : base.bph,
    divisi: divisi,
    nilai: Array.isArray(d.nilai) ? d.nilai : base.nilai,
    agenda: Array.isArray(d.agenda) ? d.agenda.filter(a => a && typeof a.tanggal === "string") : base.agenda
  };
}
function load(){
  try{
    const raw = localStorage.getItem(KEY);
    return raw ? normalize(JSON.parse(raw)) : defaultState();
  }catch(e){ return defaultState(); }
}
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(state)); }catch(e){} }

/* =============== Utilitas =============== */
const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c =>
  ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const pad = n => String(n).padStart(2, "0");
const iso = (y, m, d) => y + "-" + pad(m + 1) + "-" + pad(d);
const inisial = n => (String(n).trim()[0] || "?").toUpperCase();

function toast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(t._tm);
  t._tm = setTimeout(()=>{ t.hidden = true; }, 2200);
}

/* =============== Kalender Hijriah =============== */
/* y = tahun, m = bulan 0-11 (mengikuti Date JS), d = tanggal */
function toJDN(y, m, d){
  const bl = m + 1;                       // jadi 1-12
  const a = Math.floor((14 - bl) / 12);
  const yy = y + 4800 - a;
  const mm = bl + 12 * a - 3;
  return d + Math.floor((153 * mm + 2) / 5) + 365 * yy + Math.floor(yy / 4)
       - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;
}
function toHijriTabular(y, m, d){
  let l = toJDN(y, m, d) - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  l = l - 10631 * n + 354;
  const j = Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719)
          + Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
  l = l - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50)
        - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const bulan = Math.floor((24 * l) / 709);
  return {
    tanggal: l - Math.floor((709 * bulan) / 24),
    bulan: bulan + 1,
    tahun: 30 * n + j - 30,
    pasti: false
  };
}

/* Konversi Hijriah dengan acuan kalender Indonesia.
   Untuk tahun Hijriah 1447-1448 H hasilnya sudah disesuaikan dengan
   tanggal resmi kalender Indonesia (Isra Mikraj, Idul Fitri, Idul Adha,
   Tahun Baru Islam) per SKB 3 Menteri 2026 dan 2027.
   Di luar rentang tersebut dipakai perhitungan aritmatis (perkiraan). */
function toHijri(y, m, d){
  const target = toJDN(y, m, d);
  const tahun = Object.keys(HIJRI_MULAI).map(Number).sort((a, b) => a - b);
  for(let k = tahun.length - 1; k >= 0; k--){
    const hy = tahun[k];
    const mulai = HIJRI_MULAI[hy].split("-").map(Number);
    const start = toJDN(mulai[0], mulai[1] - 1, mulai[2]);
    if(target < start) continue;
    const panjang = HIJRI_PANJANG_BULAN[hy];
    const total = panjang.reduce((a, b) => a + b, 0);
    if(target - start >= total) continue;

    let sisa = target - start, bulan = 1;
    while(bulan <= 12 && sisa >= panjang[bulan - 1]){ sisa -= panjang[bulan - 1]; bulan++; }
    return { tanggal: sisa + 1, bulan: bulan, tahun: hy, pasti: true };
  }
  return toHijriTabular(y, m, d);
}
function labelHijri(y, m, d){
  const h = toHijri(y, m, d);
  const namaBulan = HIJRI_BULAN[h.bulan - 1] || "?";
  return h.tanggal + " " + namaBulan + " " + h.tahun + " H" + (h.pasti ? "" : " ~");
}

/* =============== Pengambilan event =============== */
function eventsTanggal(y, m, d){
  const out = [];
  const key = iso(y, m, d);
  if(HARI_BESAR[key]){
    out.push(HARI_BESAR[key]);
  }else{
    // tanggal tetap: bulan & tanggal sama setiap tahun
    TANGGAL_TETAP.filter(x => x.mm === m + 1 && x.dd === d).forEach(t => out.push(t));
  }
  state.agenda.filter(a => a.tanggal === key)
    .forEach(a => out.push({ nama: a.judul, jenis: "organisasi" }));
  return out;
}
function semuaLibur(tahun){
  const list = [];
  Object.keys(HARI_BESAR).forEach(k => {
    if(k.indexOf(tahun + "-") === 0 && (HARI_BESAR[k].jenis === "nasional" || HARI_BESAR[k].jenis === "cuti"))
      list.push({ k: k, nama: HARI_BESAR[k].nama, jenis: HARI_BESAR[k].jenis });
  });
  TANGGAL_TETAP.filter(t => t.jenis === "nasional").forEach(t => {
    const k = tahun + "-" + pad(t.mm) + "-" + pad(t.dd);
    if(!list.some(x => x.k === k)) list.push({ k: k, nama: t.nama, jenis: t.jenis });
  });
  return list.sort((a, b) => a.k < b.k ? -1 : 1);
}

/* =============== Render utama =============== */
function render(){
  renderHero();
  renderProfil();
  renderStruktur();
  renderDivisi();
  renderAdArt();
  renderBerita();
  renderKontak();
  renderKalender();
  renderFooter();
  $("#statPeriod").textContent = state.meta.masa;
  $("#statBph").textContent = state.bph.length;
  $("#statDivisi").textContent = state.divisi.length;
  const th = String(state.meta.masa || "").match(/\d{4}/);
  const bk = $("#btnKalender");
  if(bk) bk.textContent = "Kalender" + (th ? " " + th[0] : "");
}

/* ---- Hero ---- */
function renderHero(){
  const ketua = state.bph.filter(o => /^ketua umum/i.test(o.jabatan))[0] || { nama: "" };
  const sisa = state.bph.filter(o => !/^ketua umum/i.test(o.jabatan)).slice(0, 4);
  $("#heroCard").innerHTML =
    '<h3>Dewan Pengurus</h3>' +
    '<p class="sub">Masa ' + esc(state.meta.masa) + '</p>' +
    '<div class="mini-bph">' +
      '<div class="mini-row"><div class="av">' + esc(inisial(ketua.nama)) + '</div>' +
        '<div><b>Ketua Umum</b><span>' + esc(ketua.nama || "belum diisi") + '</span></div></div>' +
      sisa.map(o =>
        '<div class="mini-row"><div class="av">' + esc(inisial(o.nama)) + '</div>' +
        '<div><b>' + esc(o.jabatan) + '</b><span>' + esc(o.nama || "belum diisi") + '</span></div></div>'
      ).join("") +
    '</div>' +
    '<a class="btn btn-gold" href="#struktur">Lihat struktur lengkap</a>';
}

/* ---- Profil ---- */
function renderProfil(){
  const m = state.meta;
  $("#profilSejarah").innerHTML =
    '<h3 style="margin:0 0 12px;font-size:20px">Siapa <em style="color:var(--gold);font-style:italic">' +
      esc(m.nama) + '</em>?</h3>' +
    '<p style="margin:0 0 14px"><strong>' + esc(m.kepanjangan) + '</strong><br>' +
    '<span style="color:var(--muted);font-size:13.5px">' + esc(m.asal) + ' &middot; Masa ' + esc(m.masa) + '</span></p>' +
    esc(m.isiSejarah);
  $("#profilVisi").innerHTML = '<h3>Visi</h3><p>' + esc(m.isiVisi) + '</p>' +
    (editMode ? '<button class="linkbtn" style="margin-top:12px" data-act="edit-teks" data-k="isiVisi" data-j="Visi">Ubah</button>' : "");
  $("#profilMisi").innerHTML = '<h3>Misi</h3><p style="white-space:pre-line">' + esc(m.isiMisi) + '</p>' +
    (editMode ? '<button class="linkbtn" style="margin-top:12px" data-act="edit-teks" data-k="isiMisi" data-j="Misi">Ubah</button>' : "");

  $("#nilaiRow").innerHTML = state.nilai.map((v, i) =>
    '<div class="nilai"><b>' + esc(v.judul) + '</b><p>' + esc(v.teks) + '</p>' +
    (editMode
      ? '<div style="display:flex;gap:6px;margin-top:10px">' +
          '<button class="linkbtn" data-act="edit-nilai" data-i="' + i + '">Ubah</button>' +
          '<button class="linkbtn danger" data-act="del-nilai" data-i="' + i + '">Hapus</button>' +
        '</div>'
      : "") +
    '</div>').join("") ||
    '<p style="color:var(--muted)">Belum ada nilai organisasi.</p>';

  const cs = $('[data-ed="catatanStruktur"]');
  if(cs) cs.textContent = m.catatanStruktur;
  const cd = $('[data-ed="catatanDivisi"]');
  if(cd) cd.textContent = m.catatanDivisi;
}

/* ---- Struktur ---- */
function kartuOrang(o, i, cls){
  const ada = i !== null && i >= 0;
  return '<div class="pcard ' + (cls || "") + '">' +
    (ada ? '<button class="del" data-act="del-bph" data-i="' + i + '" title="Hapus">&times;</button>' : "") +
    '<div class="jb">' + esc(o.jabatan) + '</div>' +
    '<div class="nm">' + esc(o.nama || "belum diisi") + '</div>' +
    (o.tugas ? '<div class="tg">' + esc(o.tugas) + '</div>' : "") +
    (ada ? '<button class="pen" data-act="edit-bph" data-i="' + i + '">ubah</button>' : "") +
    '</div>';
}
function renderStruktur(){
  const bph = state.bph;
  const ketua = bph.filter(o => /^ketua umum/i.test(o.jabatan))[0] || { jabatan:"Ketua Umum", nama:"", tugas:"" };
  const sisa = bph.filter(o => !/^ketua umum/i.test(o.jabatan));

  $("#strukturRail").innerHTML =
    '<div class="rail-tier"><div style="text-align:center">' +
      '<div class="tier-label">Ketua Umum</div>' +
      '<div class="pcards">' + kartuOrang(ketua, bph.indexOf(ketua), "ketua") + '</div>' +
    '</div></div>' +

    '<div class="rail-tier"><div style="text-align:center">' +
      '<div class="tier-label">Badan Pengurus Harian</div>' +
      '<div class="pcards">' + sisa.map(o => kartuOrang(o, bph.indexOf(o))).join("") + '</div>' +
    '</div></div>' +

    '<div class="rail-tier"><div style="text-align:center;width:100%">' +
      '<div class="tier-label">Divisi Program &middot; ' + state.divisi.length + ' divisi</div>' +
      '<div class="pcards">' +
        state.divisi.map((d, di) =>
          '<div class="pcard">' +
          (editMode ? '<button class="del" data-act="del-divisi" data-i="' + di + '" title="Hapus">&times;</button>' : "") +
          '<div class="jb">' + esc(d.nama) + '</div><div class="nm">' +
          esc((d.anggota || []).filter(a => /ketua/i.test(a.jabatan)).map(a => a.nama).filter(Boolean).join(", ") || "belum diisi") +
          '</div>' +
          (editMode ? '<button class="pen" data-act="edit-divisi" data-i="' + di + '">ubah</button>' : "") +
          '</div>').join("") +
        (editMode ? '<button class="linkbtn" data-act="add-divisi">+ Tambah Divisi</button>' : "") +
      '</div></div></div>';
}

/* ---- Divisi ---- */
function renderDivisi(){
  $("#divisiGrid").innerHTML = state.divisi.map((d, i) =>
    '<article class="dcard">' +
      '<div class="bar ' + esc(d.warna || "biru") + '"></div>' +
      '<div class="dbody">' +
        '<h3>' + esc(d.nama) + '</h3>' +
        '<div class="fokus">' + esc(d.fokus || "") + '</div>' +
        '<p class="tugas">' + esc(d.tugas || "") + '</p>' +
        '<ul class="anggota">' +
          (d.anggota || []).map(a =>
            '<li><span class="j">' + esc(a.jabatan) + '</span><span class="n">' + esc(a.nama || "belum diisi") + '</span></li>'
          ).join("") +
        '</ul>' +
        (editMode
          ? '<div class="acts">' +
              '<button class="linkbtn" data-act="edit-divisi" data-i="' + i + '">Ubah</button>' +
              '<button class="linkbtn" data-act="add-anggota" data-i="' + i + '">+ Anggota</button>' +
              '<button class="linkbtn" data-act="del-anggota" data-i="' + i + '">- Anggota</button>' +
              '<button class="linkbtn" data-act="move-divisi" data-i="' + i + '" data-d="-1">&#8593;</button>' +
              '<button class="linkbtn" data-act="move-divisi" data-i="' + i + '" data-d="1">&#8595;</button>' +
              '<button class="linkbtn danger" data-act="del-divisi" data-i="' + i + '">Hapus</button>' +
            '</div>'
          : "") +
      '</div>' +
    '</article>').join("") ||
    '<p style="color:var(--muted)">Belum ada divisi. Aktifkan Mode Edit untuk menambahkan.</p>';
}

/* ---- AD/ART ---- */
function adBabHtml(b){
  let h = '<div class="ad-bab"><h4>' + esc(b.bab) + '</h4>';
  if(b.isi) h += (Array.isArray(b.isi) ? b.isi : [b.isi]).map(t => '<p>' + esc(t) + '</p>').join("");
  (b.pasal || []).forEach(p => {
    h += '<div class="pasal"><div class="pasal-head">' + esc(p.no) + ' &mdash; ' + esc(p.judul) + '</div>';
    if(p.isi) h += '<p>' + esc(p.isi) + '</p>';
    if(p.list) h += '<ol>' + p.list.map(li => '<li>' + esc(li) + '</li>').join("") + '</ol>';
    h += '</div>';
  });
  return h + '</div>';
}
function renderAdArt(){
  const a = AD_ART;
  $("#adartBody").innerHTML =
    '<p class="ad-meta">Naskah resmi organisasi &mdash; Anggaran Dasar disahkan pada Konggres I, Semarang, 19 November 2017.</p>' +
    '<h3 class="ad-doc-title">Anggaran Dasar</h3>' + a.ad.map(adBabHtml).join("") +
    '<h3 class="ad-doc-title">Anggaran Rumah Tangga</h3>' + a.art.map(adBabHtml).join("") +
    '<h3 class="ad-doc-title">Tata Tertib Persidangan Konggres I</h3>' + a.tatib.map(adBabHtml).join("") +
    '<p class="ad-src">Sumber naskah: <a href="' + esc(a.sumberAdArt) + '" target="_blank" rel="noopener">AD/ART ISMARO</a> dan ' +
    '<a href="' + esc(a.sumberTatib) + '" target="_blank" rel="noopener">Tata Tertib Konggres I</a> di blog resmi ISMARO Tuban.</p>';
}

/* ---- Berita ---- */
function tanggalPanjang(isoStr){
  const p = String(isoStr).split("-");
  return (+p[2]) + " " + BULAN[+p[1] - 1] + " " + p[0];
}
function renderBerita(){
  const list = (blogFeed && blogFeed.length) ? blogFeed : ARTIKEL_AWAL;
  $("#beritaGrid").innerHTML = list.map(a =>
    '<a class="bcard" href="' + esc(a.url) + '" target="_blank" rel="noopener">' +
    (a.gambar ? '<img class="bthumb" src="' + esc(a.gambar) + '" alt="" loading="lazy">' : "") +
    '<span class="bd">' + esc(tanggalPanjang(a.tanggal)) + '</span>' +
    '<b>' + esc(a.judul) + '</b>' +
    '<span class="bl">Baca di blog &rarr;</span>' +
    '</a>'
  ).join("") ||
  '<p style="color:var(--muted)">Belum ada artikel.</p>';
}

/* ---- Feed blog langsung: artikel terbaru selalu mengikuti blog resmi ----
Blogger menyediakan feed JSONP; dipanggil lewat <script> sehingga tetap
berfungsi dari file:// tanpa CORS. Kalau gagal (offline), pakai ARTIKEL_AWAL. */
let blogFeed = null;
function loadBlogFeed(){
  const cb = "ismaroFeedCb";
  window[cb] = function(j){
    try{
      const es = (j.feed && j.feed.entry) || [];
      if(!es.length) return;
      blogFeed = es.slice(0, 6).map(e => {
        const link = (e.link || []).filter(l => l.rel === "alternate")[0];
        return {
          judul: e.title.$t || "Tanpa judul",
          tanggal: e.published.$t.slice(0, 10),
          url: link ? link.href : "#",
          gambar: ((e.media$thumbnail && e.media$thumbnail.url) || "").replace(/\/s\d+[^/]*\//, "/w400-h225-c/")
        };
      });
      renderBerita();
    }catch(_){}
  };
  const s = document.createElement("script");
  s.src = "https://ismarotuban.blogspot.com/feeds/posts/default?alt=json-in-script&callback=" + cb + "&max-results=6";
  s.async = true;
  s.onerror = function(){ s.remove(); };
  document.head.appendChild(s);
  setTimeout(() => s.remove(), 10000);
}

/* ---- Footer ---- */
function renderFooter(){
  const m = state.meta;
  $("#footKepanjangan").textContent = m.kepanjangan || "";
  $("#footTagline").textContent = m.footerTagline || "Organisasi Daerah Kabupaten Tuban x Nurcreativ";
  $("#footCopy").textContent = m.footerCopy ||
    ("© " + new Date().getFullYear() + " ISMARO — " + (m.kepanjangan || "") + ". Hak cipta dilindungi.");
  $("#footLinks").innerHTML = $$("#nav a").map(a =>
    '<li><a href="' + a.getAttribute("href") + '">' + esc(a.textContent) + "</a></li>").join("");
  const lines = [
    ["Alamat", m.alamat], ["Email", m.email], ["WhatsApp", m.whatsapp],
    ["Instagram", m.instagram], ["Blog", m.blog]
  ].filter(x => x[1]);
  $("#footContact").innerHTML = lines.map(x =>
    "<li><b>" + esc(x[0]) + "</b> " + esc(x[1]) + "</li>").join("");
  $("#footSos").innerHTML = [
    m.instagram ? '<a class="sos" href="https://instagram.com/' + esc(String(m.instagram).replace(/^@/, "")) +
      '" target="_blank" rel="noopener">Instagram</a>' : "",
    m.whatsapp ? '<a class="sos" href="https://wa.me/' + esc(String(m.whatsapp).replace(/\D/g, "")) +
      '" target="_blank" rel="noopener">WhatsApp</a>' : "",
    m.blog ? '<a class="sos" href="' + esc(m.blog) + '" target="_blank" rel="noopener">Blog</a>' : ""
  ].join("");
}

/* ---- Kontak ---- */
function renderKontak(){
  const m = state.meta;
  const items = [
    { lb:"Alamat Sekretariat", vl:m.alamat, href:m.maps, ic:"&#127968;", f:"alamat" },
    { lb:"Email",             vl:m.email,  href:"mailto:" + m.email, ic:"&#9993;", f:"email" },
    { lb:"WhatsApp",          vl:m.whatsapp, href:"https://wa.me/" + String(m.whatsapp).replace(/\D/g, ""), ic:"&#128172;", f:"whatsapp" },
    { lb:"Instagram",         vl:m.instagram, href:"https://instagram.com/" + String(m.instagram).replace(/@/g, ""), ic:"&#128247;", f:"instagram" },
    { lb:"Blog Resmi",        vl:m.blog, href:m.blog, ic:"&#128214;", f:"blog" }
  ];
  $("#kontakGrid").innerHTML = items.map(k => {
    const isi =
      '<div class="ic">' + k.ic + '</div>' +
      '<div class="lb">' + esc(k.lb) + '</div>' +
      '<div class="vl">' + esc(k.vl) + '</div>';
    const badan = (k.href && k.href !== "#")
      ? '<a class="klink" href="' + esc(k.href) + '" target="_blank" rel="noopener">' + isi + '</a>'
      : '<div class="klink">' + isi + '</div>';
    return '<div class="kcard">' + badan +
      (editMode ? '<button class="linkbtn" style="margin-top:10px" data-act="edit-kontak" data-f="' + k.f + '" data-j="' + esc(k.lb) + '">Ubah</button>' : "") +
    '</div>';
  }).join("");
}

/* ---- Kalender ---- */
function initSelektor(){
  const bs = $("#bulanSel"), ts = $("#tahunSel");
  bs.innerHTML = BULAN.map((b, i) => '<option value="' + i + '">' + b + '</option>').join("");
  const thn = new Date().getFullYear();
  const daftar = [];
  for(let y = thn - 2; y <= thn + 4; y++) daftar.push(y);
  Object.keys(HARI_BESAR).forEach(k => {
    const y = +k.slice(0, 4);
    if(daftar.indexOf(y) === -1) daftar.push(y);
  });
  daftar.sort((a, b) => a - b);
  ts.innerHTML = daftar.map(y => '<option value="' + y + '">' + y + '</option>').join("");
}
function geserBulan(delta){
  const y = view.getFullYear(), m = view.getMonth() + delta;
  view = new Date(y, m, 1);
  renderKalender();
}
function renderKalender(){
  const y = view.getFullYear(), m = view.getMonth();
  $("#bulanSel").value = String(m);
  $("#tahunSel").value = String(y);

  $("#kalLegend").innerHTML = Object.keys(JENIS_LABEL).map(k => {
    const warna = {
      nasional:"#fde8e6", cuti:"#fff3da", penting:"#e6f0fb",
      daerah:"#e4f5ec", organisasi:"#efe8fa"
    }[k];
    return '<span class="lg"><i style="background:' + warna + '"></i>' + JENIS_LABEL[k] + '</span>';
  }).join("");

  const startDow = new Date(y, m, 1).getDay();
  const days    = new Date(y, m + 1, 0).getDate();
  const prev    = new Date(y, m, 0).getDate();
  const now     = new Date();
  const todayK  = iso(now.getFullYear(), now.getMonth(), now.getDate());

  let cells = "";
  for(let i = startDow - 1; i >= 0; i--) cells += cellHtml(y, m - 1, prev - i, true, false);
  for(let d = 1; d <= days; d++) cells += cellHtml(y, m, d, false, iso(y, m, d) === todayK);
  const total = Math.ceil((startDow + days) / 7) * 7;
  for(let i = 1; i <= total - startDow - days; i++) cells += cellHtml(y, m + 1, i, true, false);

  $("#kalGrid").innerHTML =
    HARI_S.map(h => '<div class="dow' + (h === "Min" || h === "Sab" ? " weekend" : "") + '">' + h + '</div>').join("") +
    cells;

  renderAgendaList();
  renderLiburList();
}
function cellHtml(y, m, d, isPad, isToday){
  const evs = isPad ? [] : eventsTanggal(y, m, d);
  const hari = new Date(y, m, d);
  const namaBulan = BULAN[((m % 12) + 12) % 12];
  return '<div class="cell' + (isPad ? " pad" : "") + (isToday ? " today" : "") + '"' +
    ' title="' + esc(HARI[hari.getDay()] + ", " + d + " " + namaBulan + " " + y
      + " (" + labelHijri(y, m, d) + ")"
      + (evs.length ? " - " + evs.map(e => e.nama).join(" | ") : " - tidak ada agenda")) + '">' +
    '<div class="num">' + d + '</div>' +
    evs.slice(0, 3).map(e => '<div class="ev ' + e.jenis + '">' + esc(e.nama) + '</div>').join("") +
    (evs.length > 3 ? '<div class="ev" style="background:#f1f5f9;color:#64748b">+' + (evs.length - 3) + " lagi</div>" : "") +
    '<div class="hijri">' + esc(labelHijri(y, m, d)) + '</div>' +
    (editMode && !isPad
      ? '<button class="linkbtn" style="position:absolute;top:3px;right:3px;padding:1px 6px;font-size:10px" data-act="quick-event" data-k="' + iso(y, m, d) + '">+</button>'
      : "") +
    '</div>';
}
function renderAgendaList(){
  const now = new Date(); now.setHours(0, 0, 0, 0);
  const min = iso(now.getFullYear(), now.getMonth(), now.getDate());
  const list = state.agenda
    .filter(a => a.tanggal >= min)
    .sort((a, b) => a.tanggal < b.tanggal ? -1 : 1)
    .slice(0, 6);
  $("#agendaList").innerHTML = list.length ? list.map((a, idx) => {
    const dt = new Date(a.tanggal + "T00:00:00");
    return '<li>' +
      '<div class="dt"><b>' + dt.getDate() + '</b><i>' + BULAN_S[dt.getMonth()] + '</i></div>' +
      '<div style="flex:1"><div class="jn">' + esc(a.judul) + '</div>' +
      '<div class="tp">' + esc(a.tempat || "") + (a.tempat ? " &middot; " : "") + HARI[dt.getDay()] + '</div></div>' +
      (editMode ? '<button class="linkbtn danger" data-act="del-event" data-k="' + a.tanggal + '|' + esc(a.judul) + '">&#10005;</button>' : "") +
      '</li>';
  }).join("") : '<li style="color:var(--muted);font-size:13.5px">Belum ada agenda mendatang.</li>';
}
function renderLiburList(){
  const tahun = view.getFullYear();
  const judul = $("#liburTitle");
  if(judul) judul.textContent = "Hari Libur " + tahun;
  const list = semuaLibur(tahun);
  $("#liburList").innerHTML = list.length
    ? "<ul>" + list.map(x => {
        const dt = new Date(x.k + "T00:00:00");
        const tag = x.jenis === "cuti"
          ? '<span class="tag" style="background:#fff3da;color:#91660f">Cuti</span>'
          : '<span class="tag" style="background:#fde8e6;color:#a0322b">Libur</span>';
        return '<li><span class="dt2">' + dt.getDate() + " " + BULAN_S[dt.getMonth()] + " " + dt.getFullYear() + "</span>" +
               '<span style="flex:1">' + esc(x.nama) + "</span> " + tag + "</li>";
      }).join("") + "</ul>"
    : '<p style="color:var(--muted);font-size:13.5px">Belum ada data libur untuk tahun ini.</p>';
}

/* =============== Modal =============== */
function openModal(title, fields, onSave){
  $("#modalTitle").textContent = title;
  const form = $("#modalForm");
  form.innerHTML = fields.map(f => {
    const nm = 'name="' + f.name + '"';
    if(f.type === "textarea")
      return '<div class="field"><label>' + esc(f.label) + '</label><textarea ' + nm + ' rows="4" placeholder="' + esc(f.ph || "") + '">' + esc(f.value || "") + "</textarea></div>";
    if(f.type === "select")
      return '<div class="field"><label>' + esc(f.label) + '</label><select ' + nm + ">" +
        f.options.map(o => '<option value="' + esc(o.v) + '"' + (o.v === f.value ? " selected" : "") + ">" + esc(o.t) + "</option>").join("") +
        "</select></div>";
    return '<div class="field"><label>' + esc(f.label) + '</label><input type="' + (f.type || "text") + '" ' + nm +
           ' value="' + esc(f.value || "") + '" placeholder="' + esc(f.ph || "") + '"></div>';
  }).join("");
  form.onsubmit = ev => {
    ev.preventDefault();
    const data = {};
    Array.prototype.forEach.call(form.elements, el => { if(el.name) data[el.name] = el.value; });
    onSave(data);
    closeModal();
  };
  $("#modal").hidden = false;
  const first = form.querySelector("input, textarea, select");
  if(first) first.focus();
}
function closeModal(){ $("#modal").hidden = true; }

const OPSI_WARNA = [
  { v:"biru",   t:"Biru" },
  { v:"hijau",  t:"Hijau" },
  { v:"kuning", t:"Kuning" },
  { v:"ungu",   t:"Ungu" },
  { v:"merah",  t:"Merah" }
];

/* =============== Aksi =============== */
document.addEventListener("click", ev => {
  const btn = ev.target.closest ? ev.target.closest("[data-act]") : null;
  if(!btn) return;
  const act = btn.dataset.act;
  const i = btn.dataset.i !== undefined && btn.dataset.i !== "" ? +btn.dataset.i : null;

  switch(act){

  case "toggle-edit":
    editMode = !editMode;
    document.body.classList.toggle("editing", editMode);
    $("#editBanner").hidden = !editMode;
    $("#btnEdit").querySelector("span").textContent = editMode ? "Selesai" : "Edit";
    render();
    if(editMode) toast("Mode Edit aktif");
    break;

  /* --- BPH --- */
  case "add-bph":
    openModal("Tambah Anggota BPH", [
      { label:"Jabatan", name:"jabatan", ph:"Contoh: Koordinator LITBANG" },
      { label:"Nama lengkap", name:"nama" },
      { label:"Deskripsi tugas", name:"tugas", type:"textarea", ph:"Opsional" }
    ], d => {
      state.bph.push({ jabatan: d.jabatan || "Anggota", nama: d.nama, tugas: d.tugas });
      save(); render(); toast("Anggota BPH ditambahkan");
    });
    break;

  case "edit-bph":
    if(i === null || !state.bph[i]) break;
    openModal("Ubah Anggota BPH", [
      { label:"Jabatan", name:"jabatan", value: state.bph[i].jabatan },
      { label:"Nama lengkap", name:"nama", value: state.bph[i].nama },
      { label:"Deskripsi tugas", name:"tugas", type:"textarea", value: state.bph[i].tugas }
    ], d => { Object.assign(state.bph[i], d); save(); render(); toast("Perubahan disimpan"); });
    break;

  case "del-bph":
    if(i === null || !state.bph[i]) break;
    if(confirm('Hapus "' + state.bph[i].jabatan + '" dari BPH?')){
      state.bph.splice(i, 1); save(); render(); toast("Dihapus");
    }
    break;

  /* --- Divisi --- */
  case "add-divisi":
    openModal("Tambah Divisi", [
      { label:"Nama divisi", name:"nama", ph:"Contoh: Divisi Seni Budaya" },
      { label:"Fokus singkat", name:"fokus", ph:"Contoh: Ekspresi dan kreativitas" },
      { label:"Rincian tugas", name:"tugas", type:"textarea" },
      { label:"Warna penanda", name:"warna", type:"select", value:"biru", options: OPSI_WARNA }
    ], d => {
      state.divisi.push({
        nama: d.nama || "Divisi Baru", fokus: d.fokus, tugas: d.tugas, warna: d.warna,
        anggota: [{ jabatan:"Ketua Divisi", nama:"" }]
      });
      save(); render(); toast("Divisi ditambahkan");
    });
    break;

  case "edit-divisi": {
    const d = state.divisi[i];
    openModal("Ubah Divisi", [
      { label:"Nama divisi", name:"nama", value: d.nama },
      { label:"Fokus singkat", name:"fokus", value: d.fokus },
      { label:"Rincian tugas", name:"tugas", type:"textarea", value: d.tugas },
      { label:"Warna penanda", name:"warna", type:"select", value: d.warna || "biru", options: OPSI_WARNA }
    ], v => { Object.assign(d, v); save(); render(); toast("Divisi diperbarui"); });
    break;
  }

  case "add-anggota":
    openModal("Tambah Anggota Divisi", [
      { label:"Jabatan dalam divisi", name:"jabatan", ph:"Contoh: Bendahara Divisi", value:"" },
      { label:"Nama lengkap", name:"nama" }
    ], d => {
      state.divisi[i].anggota.push({ jabatan: d.jabatan || "Anggota", nama: d.nama });
      save(); render(); toast("Anggota ditambahkan");
    });
    break;

  case "del-anggota": {
    const d = state.divisi[i];
    if(!d || !Array.isArray(d.anggota) || !d.anggota.length){ toast("Divisi ini belum punya anggota"); break; }
    openModal("Hapus Anggota Divisi", [
      { label:"Anggota", name:"idx", type:"select", value:"0",
        options: d.anggota.map((a, j) => ({ v: String(j), t: (a.jabatan || "Anggota") + " — " + (a.nama || "belum diisi") })) }
    ], v => {
      const j = +v.idx;
      if(!d.anggota[j]) return;
      d.anggota.splice(j, 1); save(); render(); toast("Anggota dihapus");
    });
    break;
  }

  case "move-divisi": {
    const j = i + (+btn.dataset.d);
    if(j < 0 || j >= state.divisi.length) break;
    const arr = state.divisi;
    const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    save(); render();
    break;
  }

  case "del-divisi":
    if(confirm('Hapus divisi "' + state.divisi[i].nama + '" beserta anggotanya?')){
      state.divisi.splice(i, 1); save(); render(); toast("Divisi dihapus");
    }
    break;

  /* --- Teks profil --- */
  case "edit-teks":
    openModal("Ubah " + btn.dataset.j, [
      { label: btn.dataset.j, name:"isi", type:"textarea", value: state.meta[btn.dataset.k] }
    ], d => { state.meta[btn.dataset.k] = d.isi; save(); render(); toast("Tersimpan"); });
    break;

  case "edit-nilai":
    openModal("Ubah Nilai Organisasi", [
      { label:"Judul", name:"judul", value: state.nilai[i].judul },
      { label:"Keterangan", name:"teks", type:"textarea", value: state.nilai[i].teks }
    ], d => { Object.assign(state.nilai[i], d); save(); render(); toast("Nilai diperbarui"); });
    break;

  case "del-nilai":
    if(i === null || !state.nilai[i]) break;
    if(!confirm('Hapus nilai "' + state.nilai[i].judul + '"?')) break;
    state.nilai.splice(i, 1); save(); render(); toast("Dihapus");
    break;

  case "add-nilai":
    openModal("Tambah Nilai Organisasi", [
      { label:"Judul", name:"judul" },
      { label:"Keterangan", name:"teks", type:"textarea" }
    ], d => {
      state.nilai.push({ judul: d.judul || "Nilai Baru", teks: d.teks || "" });
      save(); render(); toast("Nilai ditambahkan");
    });
    break;

  /* --- Kontak --- */
  case "edit-kontak": {
    const f = btn.dataset.f;
    const fields = [{ label: btn.dataset.j, name:f, value: state.meta[f] }];
    if(f === "alamat") fields.push({ label:"Tautan peta (URL)", name:"maps", value: state.meta.maps });
    openModal("Ubah " + btn.dataset.j, fields, d => {
      Object.keys(d).forEach(k => { state.meta[k] = d[k]; });
      save(); render(); toast("Kontak diperbarui");
    });
    break;
  }

  case "edit-meta":
    openModal("Ubah Identitas Organisasi", [
      { label:"Nama singkat", name:"nama", value: state.meta.nama },
      { label:"Kepanjangan", name:"kepanjangan", value: state.meta.kepanjangan },
      { label:"Asal daerah", name:"asal", value: state.meta.asal },
      { label:"Masa kepengurusan", name:"masa", value: state.meta.masa },
      { label:"Sejarah singkat", name:"isiSejarah", type:"textarea", value: state.meta.isiSejarah },
      { label:"Keterangan Struktur", name:"catatanStruktur", value: state.meta.catatanStruktur },
      { label:"Keterangan Divisi", name:"catatanDivisi", value: state.meta.catatanDivisi },
      { label:"Tagline footer", name:"footerTagline", value: state.meta.footerTagline },
      { label:"Copyright footer", name:"footerCopy", value: state.meta.footerCopy }
    ], d => {
      Object.keys(d).forEach(k => { state.meta[k] = d[k]; });
      save(); render(); toast("Identitas diperbarui");
    });
    break;

  /* --- Kalender --- */
  case "prev-month": geserBulan(-1); break;
  case "next-month": geserBulan(1); break;
  case "today": view = new Date(); view.setDate(1); renderKalender(); break;

  case "add-event":
    openModal("Tambah Agenda Organisasi", [
      { label:"Tanggal", name:"tanggal", type:"date" },
      { label:"Judul kegiatan", name:"judul" },
      { label:"Tempat", name:"tempat" }
    ], d => {
      if(!d.tanggal){ toast("Tanggal wajib diisi"); return; }
      state.agenda.push({ tanggal:d.tanggal, judul:d.judul || "Agenda", tempat:d.tempat || "", jenis:"organisasi" });
      save(); render(); toast("Agenda ditambahkan");
    });
    break;

  case "quick-event": {
    const k = btn.dataset.k;
    openModal("Tambah agenda di " + k, [
      { label:"Judul kegiatan", name:"judul", ph:"Contoh: Rapat Kerja" },
      { label:"Tempat", name:"tempat" }
    ], d => {
      state.agenda.push({ tanggal:k, judul:d.judul || "Agenda", tempat:d.tempat || "", jenis:"organisasi" });
      save(); render(); toast("Agenda ditambahkan");
    });
    break;
  }

  case "del-event": {
    const parts = (btn.dataset.k || "").split("|");
    const k = parts[0], judul = parts.slice(1).join("|");
    const target = state.agenda.filter(a => a.tanggal === k && a.judul === judul)[0];
    if(!target) break;
    if(!confirm('Hapus agenda "' + judul + '"?')) break;
    state.agenda = state.agenda.filter(a => a !== target);
    save(); render(); toast("Agenda dihapus");
    break;
  }

  /* --- Umum --- */
  case "close-modal": closeModal(); break;
  case "print-struktur": window.print(); break;

  case "reset":
    if(confirm("Kembalikan semua data ke kondisi awal? Perubahanmu akan hilang.")){
      try{ localStorage.removeItem(KEY); }catch(e){}
      state = defaultState();
      render();
      toast("Data dikembalikan ke awal");
    }
    break;
  }
});

/* ---- Select kalender ---- */
$("#bulanSel").addEventListener("change", ev => {
  view = new Date(view.getFullYear(), +ev.target.value, 1);
  renderKalender();
});
$("#tahunSel").addEventListener("change", ev => {
  view = new Date(+ev.target.value, view.getMonth(), 1);
  renderKalender();
});

/* ---- Modal ---- */
$("#modal").addEventListener("click", ev => { if(ev.target.id === "modal") closeModal(); });
document.addEventListener("keydown", ev => { if(ev.key === "Escape") closeModal(); });

/* ---- Scrollspy ---- */
function scrollspy(){
  const secs = $$("main section[id]");
  let aktif = secs.length ? secs[0].id : "";
  const y = window.scrollY + 140;
  secs.forEach(s => { if(s.offsetTop <= y) aktif = s.id; });
  $$("#nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + aktif));
}
window.addEventListener("scroll", scrollspy, { passive:true });

/* ---- Init ---- */
initSelektor();
view = new Date();
view.setDate(1);
render();
scrollspy();
loadBlogFeed();
