# Landing Page Program Studi D4 Teknologi Rekayasa Logistik (TRL)

Selamat datang di repositori kode sumber untuk Landing Page resmi Program Studi **D4 Teknologi Rekayasa Logistik (TRL)** - Politeknik META Industri Cikarang. Website ini dirancang khusus untuk mempromosikan keunggulan, fasilitas, beasiswa, dan kurikulum yang ditawarkan oleh program studi.

## 🚀 Fitur Utama
1. **Desain Modern & Profesional:** Menyajikan antarmuka (UI) yang dirancang secara matang (*card layout*, *badges*, tipografi bersih) menggunakan HTML5 & CSS3 murni tanpa framework *(Vanilla)* untuk performa muat halaman yang sangat cepat.
2. **Sangat Responsif:** Tampilan yang menyesuaikan di semua ukuran layar mulai dari *Mobile*, *Tablet*, hingga *Desktop*.
3. **Navigasi Dinamis:** Efek *sticky navigation* dengan transisi warna cerdas saat melakukan *scrolling*.
4. **Kurikulum Terstruktur:** Tabel kurikulum disajikan dalam desain berbasis *card* elegan yang secara cerdas memisahkan proporsi SKS Teori & Praktek dengan sistem warna pintar.
5. **Visi & Misi Terfokus:** Ringkasan Visi Misi yang dibagi menjadi kompartemen *card grid* tiga lantai untuk memudahkan keterbacaan tingkat tinggi.
6. **Program Beasiswa Eksklusif:** Detail info beasiswa menggunakan gaya UI/UX modis dan mudah dipahami oleh calon mahasiswa.

## 🛠️ Teknologi yang Digunakan
*   **HTML5** - Struktur utama (Semantik HTML)
*   **CSS3** - *Vanilla CSS / Custom Styling*, *CSS Grid*, *Flexbox CSS*
*   **JavaScript** - Membantu menjalankan logika *sticky navbar*, *smooth scroll*, dan navigasi *hamburger menu* pada *mobile*.
*   **FontAwesome (v6)** - Library standar industri untuk penempatan berbagai tipe variasi ikon navigasi dan kurikulum.
*   **API Font Eksternal** - Menggunakan keluarga font **'Inter'** dari Google Fonts yang terkenal dengan nilai kejelasan di layar modern.

## 📂 Struktur Folder
Berikut adalah arsitektur file dari *landing page* ini:

```
web-trl/
│
├── index.html                # Tampilan Utama Halaman (Landing Page)
├── README.md                 # Dokumentasi Proyek  
│
├── css/
│   └── styles.css            # Stylesheet utama seluruh komponen tampilan web
│
├── js/
│   └── script.js             # Fungsionalitas interaktif UI (Navbar, Mobile Menu, Animasi)
│
└── assets/
    └── images/               # Semua aset gambar 
        ├── hero.png          # Arsip gambar hero lam
        ├── logistik-hero.jpg # Gambar latar hero baru (Tema Logistik)
        ├── trl-poltek.png    # Gambar profil prodi ("Tentang Section")
        ├── meta.png          # Logo Politeknik META
        └── ...
```

## 💻 Cara Menjalankan Secara Lokal (Local Run)
Karena website ini dikembangkan murni menggunakan komponen dasar *(static)* aplikasi Web, tidak ada kompiler (*bundler*) atau layanan khusus yang diperlukan.

1.  **Unduh atau *Clone* file:** Salin semua file dari proyek ini.
2.  **Sediakan Local Server:** Jika tersedia, letakkan di folder web server seperti `htdocs` (XAMPP) atau direktori standar Laragon (`c:\laragon\www\web-trl\`).
3.  **Jalankan (Buka File):** Klik dua kali pada file `index.html` dan pilih untuk dijalankan di sembarang peramban Web modern pilihan Anda (*Google Chrome, Mozilla Firefox, Microsoft Edge, dll.*)

Apabila Anda mengunduh Ekstensi **"Live Server"** dari VSCode, jalankan saja langsung klik kanan pada file html lalu pilih **"Open With Live Server"**.

## 🎨 Kustomisasi (Edit Konten)
Jika Administrator jurusan ingin memperbarui keterangan Mata Kuliah, visi misi, foto dosen, silakan secara langsung edit di file `index.html`. 

Seluruh pengaturan gaya dan layout berada di dalam `css/styles.css`. Gunakan fitur *"Find / Ctrl + F"* dan carilah *class* area yang diinginkan (Misalnya `/* Curriculum Section */` untuk area Mata Kuliah) guna memudahkan perubahan spesifik.

---
**_Politeknik META Industri Cikarang - Membangun Generasi Terampil, Unggul, & Inovatif!_**
