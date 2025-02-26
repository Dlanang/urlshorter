# ShortLink & QR Code Generator Documentation for Beginners 🌟

Selamat datang di dokumentasi **ShortLink & QR Code Generator**! Di sini, kamu akan belajar bagaimana cara menggunakan proyek ini secara mudah dan ramah, bahkan jika kamu baru mengenal coding. Kami akan memandu kamu dari awal hingga akhir dengan langkah demi langkah. Yuk, kita mulai! 🚀

---

## Table of Contents 📚

- [Apa Itu Proyek Ini?](#apa-itu-proyek-ini)
- [Tech Stack yang Digunakan](#tech-stack-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Persiapan & Instalasi](#persiapan--instalasi)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Cara Menjalankan Proyek](#cara-menjalankan-proyek)
- [Cara Menggunakan Aplikasi](#cara-menggunakan-aplikasi)
- [Testing & CI/CD](#testing--cicd)
- [File SEO: Robots.txt & Sitemap.xml](#file-seo-robotstxt--sitemapxml)
- [Tips & Saran untuk Pemula](#tips--saran-untuk-pemula)
- [FAQ](#faq)

---

## Apa Itu Proyek Ini? 🤔

Proyek **ShortLink & QR Code Generator** adalah aplikasi yang membantumu membuat **short URL** (tautan pendek) dan **QR Code** dari URL asli yang kamu masukkan. Ini sangat berguna ketika kamu ingin membagikan link yang panjang dengan cara yang lebih mudah dan menarik.

---

## Tech Stack yang Digunakan 💻

Berikut adalah teknologi utama yang digunakan dalam proyek ini:

- **Backend:**
  - **Node.js (LTS):** Platform JavaScript yang andal dan banyak digunakan.
  - **Express.js:** Framework untuk membuat server yang sederhana dan cepat.
  - **Axios:** Untuk melakukan HTTP request, contohnya memanggil API is.gd.
  - **Helmet, CORS, Rate Limiter:** Untuk meningkatkan keamanan API.
  - **QRCode:** Untuk membuat gambar QR Code.
  - **Winston:** Untuk mencatat log dan membantu debugging.
  - **Jest & Supertest:** Untuk unit dan integration testing.

- **Frontend:**
  - **React.js:** Library JavaScript untuk membangun user interface.
  - **Tailwind CSS:** Framework CSS untuk membuat tampilan yang modern dan responsif.

- **CI/CD:**
  - **GitHub Actions:** Untuk mengotomatisasi testing dan deployment.

---

## Struktur Proyek 📂

Berikut adalah gambaran struktur proyek yang telah disusun dengan rapi:

```plaintext
shortlink-qr/
├── backend/
│   ├── package.json            # Daftar dependency backend
│   ├── server.js               # File utama backend
│   ├── config/                 
│   │   └── index.js            # (Opsional) Konfigurasi environment
│   ├── controllers/            
│   │   └── UrlController.js    # Mengatur routing dan validasi URL
│   ├── services/               
│   │   ├── ShortUrlService.js  # Memanggil API is.gd untuk membuat short URL
│   │   └── QRCodeService.js    # Menghasilkan QR Code
│   ├── utils/                  
│   │   ├── logger.js           # Logging dengan Winston
│   │   └── errorHandler.js     # Global error handler
│   └── tests/                  
│       ├── ShortUrlService.test.js
│       ├── QRCodeService.test.js
│       ├── UrlController.test.js
│       └── integration.test.js
├── frontend/
│   ├── package.json            # Daftar dependency frontend
│   ├── tailwind.config.js      # Konfigurasi Tailwind CSS
│   ├── postcss.config.js       # Konfigurasi PostCSS
│   ├── public/                 
│   │   ├── index.html          # File HTML utama
│   │   ├── robots.txt          # File untuk petunjuk robot mesin pencari
│   │   └── sitemap.xml         # Sitemap untuk SEO
│   └── src/                    
│       ├── index.js            # Entry point React
│       ├── index.css           # Style global dengan Tailwind
│       ├── App.js              # Komponen utama aplikasi React
│       └── components/         
│           ├── ShortLinkForm.jsx  # Form input URL
│           └── Result.jsx         # Menampilkan hasil short URL & QR Code
└── .github/
    └── workflows/
        └── ci.yml              # Konfigurasi CI/CD dengan GitHub Actions
```

---

## Persiapan & Instalasi 🛠️

### Backend Setup

1. **Buka Terminal & Navigasi ke Folder `backend`:**
   ```bash
   cd backend
   ```

2. **Install Dependency:**
   ```bash
   npm install
   ```

3. **Jalankan Server:**
   ```bash
   npm start
   ```
   Server akan berjalan di [http://localhost:3000](http://localhost:3000).

### Frontend Setup

1. **Buka Terminal & Navigasi ke Folder `frontend`:**
   ```bash
   cd frontend
   ```

2. **Install Dependency:**
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi Frontend:**
   ```bash
   npm start
   ```
   Aplikasi frontend akan terbuka di browser, biasanya di [http://localhost:3000](http://localhost:3000) (atau port lain sesuai konfigurasi).

---

## Cara Menjalankan Proyek 🚀

1. **Jalankan Backend:**  
   Pastikan server backend berjalan (lihat langkah backend setup).

2. **Jalankan Frontend:**  
   Pastikan aplikasi React berjalan (lihat langkah frontend setup).

3. **Buka Browser & Akses Aplikasi:**  
   Navigasikan ke URL yang ditampilkan oleh React (misalnya, [http://localhost:3000](http://localhost:3000)) dan kamu akan melihat tampilan aplikasi.

---

## Cara Menggunakan Aplikasi 📲

1. **Masukkan URL:**  
   Di halaman utama, kamu akan melihat form untuk memasukkan URL. Contoh: `https://contoh.com`.

2. **Klik Tombol Generate:**  
   Tekan tombol **Generate**. Aplikasi akan:
   - Memvalidasi URL yang kamu masukkan.
   - Memanggil API untuk membuat short URL.
   - Menghasilkan QR Code dari short URL tersebut.

3. **Lihat Hasil:**  
   Hasilnya akan ditampilkan di halaman:
   - **URL Asli:** Link asli yang kamu masukkan.
   - **Short URL:** Tautan pendek yang dihasilkan, bisa diklik untuk mengunjungi URL asli.
   - **QR Code:** Gambar QR Code yang bisa kamu unduh dan bagikan.
   - **Riwayat:** Semua short URL yang pernah kamu buat akan tersimpan dan ditampilkan di bawah form.

4. **Bagikan URL:**  
   Kamu juga dapat menggunakan tombol **Share** untuk membagikan short URL langsung melalui perangkatmu. Jika fitur share tidak didukung, URL akan disalin ke clipboard secara otomatis.

---

## Testing & CI/CD 🧪

### Unit & Integration Testing

- **Unit Test:**  
  Kami menggunakan **Jest** untuk menguji fungsi-fungsi di backend, seperti pembuatan short URL dan QR Code.  
  Contoh file unit test ada di folder `backend/tests`.

- **Integration Test:**  
  Kami menggunakan **Supertest** untuk menguji endpoint API secara menyeluruh (file: `backend/tests/integration.test.js`).

### CI/CD dengan GitHub Actions

File konfigurasi CI/CD terletak di:
```plaintext
.github/workflows/ci.yml
```
Konfigurasi ini memastikan setiap commit atau pull request ke branch utama akan menjalankan test otomatis, sehingga menjaga kualitas kode sebelum deploy.

---

## File SEO: Robots.txt & Sitemap.xml 🌐

### Robots.txt

Letakkan file berikut di folder `frontend/public/robots.txt`:
```plaintext
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```
Ganti `https://your-domain.com/` dengan domain aktual kamu.

### Sitemap.xml

Letakkan file berikut di folder `frontend/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
     <loc>https://your-domain.com/</loc>
     <lastmod>2025-02-26</lastmod>
     <changefreq>monthly</changefreq>
     <priority>1.0</priority>
   </url>
   <!-- Tambahkan URL lain sesuai kebutuhan -->
</urlset>
```

---

## Tips & Saran untuk Pemula 😊

- **Baca Dokumentasi Resmi:**  
  Jika kamu baru mengenal Node.js atau React, pastikan untuk membaca dokumentasi resmi masing-masing untuk pemahaman yang lebih mendalam.
- **Mulai dengan Hal Kecil:**  
  Fokuslah pada bagian backend terlebih dahulu, lalu lanjutkan ke frontend. Jangan ragu untuk mencoba mengubah kode dan melihat hasilnya.
- **Gunakan Git:**  
  Manfaatkan Git untuk mengatur versi kode kamu. Pastikan file `.gitignore` sudah diatur untuk menghindari file yang tidak perlu.
- **Jangan Takut Bertanya:**  
  Komunitas developer sangat suportif. Jika kamu menemui kesulitan, tanyakan di forum atau grup belajar.

---

## FAQ (Frequently Asked Questions) ❓

**Q: Apa yang harus dilakukan jika server tidak berjalan?**  
A: Pastikan kamu sudah menginstall semua dependency dengan `npm install` di folder backend dan memeriksa apakah port 3000 tidak digunakan oleh aplikasi lain.

**Q: Bagaimana cara melihat hasil test?**  
A: Di folder backend, jalankan `npm test` untuk melihat hasil unit dan integration test dengan Jest.

**Q: Apa itu short URL dan QR Code?**  
A: Short URL adalah versi pendek dari URL yang panjang. QR Code adalah representasi visual dari data (dalam kasus ini, URL) yang bisa discan dengan ponsel.

---

## Kesimpulan 🎯

Proyek **ShortLink & QR Code Generator** dirancang dengan ramah untuk pemula dan profesional. Dengan dokumentasi ini, kamu bisa mempelajari, menjalankan, dan mengembangkan aplikasi ini secara bertahap. Selamat mencoba, dan semoga perjalanan coding-mu menyenangkan! 😎🚀

Happy coding! 🎉# ShortLink & QR Code Generator Documentation for Beginners 🌟

Selamat datang di dokumentasi **ShortLink & QR Code Generator**! Di sini, kamu akan belajar bagaimana cara menggunakan proyek ini secara mudah dan ramah, bahkan jika kamu baru mengenal coding. Kami akan memandu kamu dari awal hingga akhir dengan langkah demi langkah. Yuk, kita mulai! 🚀

---

## Table of Contents 📚

- [Apa Itu Proyek Ini?](#apa-itu-proyek-ini)
- [Tech Stack yang Digunakan](#tech-stack-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Persiapan & Instalasi](#persiapan--instalasi)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Cara Menjalankan Proyek](#cara-menjalankan-proyek)
- [Cara Menggunakan Aplikasi](#cara-menggunakan-aplikasi)
- [Testing & CI/CD](#testing--cicd)
- [File SEO: Robots.txt & Sitemap.xml](#file-seo-robotstxt--sitemapxml)
- [Tips & Saran untuk Pemula](#tips--saran-untuk-pemula)
- [FAQ](#faq)

---

## Apa Itu Proyek Ini? 🤔

Proyek **ShortLink & QR Code Generator** adalah aplikasi yang membantumu membuat **short URL** (tautan pendek) dan **QR Code** dari URL asli yang kamu masukkan. Ini sangat berguna ketika kamu ingin membagikan link yang panjang dengan cara yang lebih mudah dan menarik.

---

## Tech Stack yang Digunakan 💻

Berikut adalah teknologi utama yang digunakan dalam proyek ini:

- **Backend:**
  - **Node.js (LTS):** Platform JavaScript yang andal dan banyak digunakan.
  - **Express.js:** Framework untuk membuat server yang sederhana dan cepat.
  - **Axios:** Untuk melakukan HTTP request, contohnya memanggil API is.gd.
  - **Helmet, CORS, Rate Limiter:** Untuk meningkatkan keamanan API.
  - **QRCode:** Untuk membuat gambar QR Code.
  - **Winston:** Untuk mencatat log dan membantu debugging.
  - **Jest & Supertest:** Untuk unit dan integration testing.

- **Frontend:**
  - **React.js:** Library JavaScript untuk membangun user interface.
  - **Tailwind CSS:** Framework CSS untuk membuat tampilan yang modern dan responsif.

- **CI/CD:**
  - **GitHub Actions:** Untuk mengotomatisasi testing dan deployment.

---

## Struktur Proyek 📂

Berikut adalah gambaran struktur proyek yang telah disusun dengan rapi:

```plaintext
shortlink-qr/
├── backend/
│   ├── package.json            # Daftar dependency backend
│   ├── server.js               # File utama backend
│   ├── config/                 
│   │   └── index.js            # (Opsional) Konfigurasi environment
│   ├── controllers/            
│   │   └── UrlController.js    # Mengatur routing dan validasi URL
│   ├── services/               
│   │   ├── ShortUrlService.js  # Memanggil API is.gd untuk membuat short URL
│   │   └── QRCodeService.js    # Menghasilkan QR Code
│   ├── utils/                  
│   │   ├── logger.js           # Logging dengan Winston
│   │   └── errorHandler.js     # Global error handler
│   └── tests/                  
│       ├── ShortUrlService.test.js
│       ├── QRCodeService.test.js
│       ├── UrlController.test.js
│       └── integration.test.js
├── frontend/
│   ├── package.json            # Daftar dependency frontend
│   ├── tailwind.config.js      # Konfigurasi Tailwind CSS
│   ├── postcss.config.js       # Konfigurasi PostCSS
│   ├── public/                 
│   │   ├── index.html          # File HTML utama
│   │   ├── robots.txt          # File untuk petunjuk robot mesin pencari
│   │   └── sitemap.xml         # Sitemap untuk SEO
│   └── src/                    
│       ├── index.js            # Entry point React
│       ├── index.css           # Style global dengan Tailwind
│       ├── App.js              # Komponen utama aplikasi React
│       └── components/         
│           ├── ShortLinkForm.jsx  # Form input URL
│           └── Result.jsx         # Menampilkan hasil short URL & QR Code
└── .github/
    └── workflows/
        └── ci.yml              # Konfigurasi CI/CD dengan GitHub Actions
```

---

## Persiapan & Instalasi 🛠️

### Backend Setup

1. **Buka Terminal & Navigasi ke Folder `backend`:**
   ```bash
   cd backend
   ```

2. **Install Dependency:**
   ```bash
   npm install
   ```

3. **Jalankan Server:**
   ```bash
   npm start
   ```
   Server akan berjalan di [http://localhost:3000](http://localhost:3000).

### Frontend Setup

1. **Buka Terminal & Navigasi ke Folder `frontend`:**
   ```bash
   cd frontend
   ```

2. **Install Dependency:**
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi Frontend:**
   ```bash
   npm start
   ```
   Aplikasi frontend akan terbuka di browser, biasanya di [http://localhost:3000](http://localhost:3000) (atau port lain sesuai konfigurasi).

---

## Cara Menjalankan Proyek 🚀

1. **Jalankan Backend:**  
   Pastikan server backend berjalan (lihat langkah backend setup).

2. **Jalankan Frontend:**  
   Pastikan aplikasi React berjalan (lihat langkah frontend setup).

3. **Buka Browser & Akses Aplikasi:**  
   Navigasikan ke URL yang ditampilkan oleh React (misalnya, [http://localhost:3000](http://localhost:3000)) dan kamu akan melihat tampilan aplikasi.

---

## Cara Menggunakan Aplikasi 📲

1. **Masukkan URL:**  
   Di halaman utama, kamu akan melihat form untuk memasukkan URL. Contoh: `https://contoh.com`.

2. **Klik Tombol Generate:**  
   Tekan tombol **Generate**. Aplikasi akan:
   - Memvalidasi URL yang kamu masukkan.
   - Memanggil API untuk membuat short URL.
   - Menghasilkan QR Code dari short URL tersebut.

3. **Lihat Hasil:**  
   Hasilnya akan ditampilkan di halaman:
   - **URL Asli:** Link asli yang kamu masukkan.
   - **Short URL:** Tautan pendek yang dihasilkan, bisa diklik untuk mengunjungi URL asli.
   - **QR Code:** Gambar QR Code yang bisa kamu unduh dan bagikan.
   - **Riwayat:** Semua short URL yang pernah kamu buat akan tersimpan dan ditampilkan di bawah form.

4. **Bagikan URL:**  
   Kamu juga dapat menggunakan tombol **Share** untuk membagikan short URL langsung melalui perangkatmu. Jika fitur share tidak didukung, URL akan disalin ke clipboard secara otomatis.

---

## Testing & CI/CD 🧪

### Unit & Integration Testing

- **Unit Test:**  
  Kami menggunakan **Jest** untuk menguji fungsi-fungsi di backend, seperti pembuatan short URL dan QR Code.  
  Contoh file unit test ada di folder `backend/tests`.

- **Integration Test:**  
  Kami menggunakan **Supertest** untuk menguji endpoint API secara menyeluruh (file: `backend/tests/integration.test.js`).

### CI/CD dengan GitHub Actions

File konfigurasi CI/CD terletak di:
```plaintext
.github/workflows/ci.yml
```
Konfigurasi ini memastikan setiap commit atau pull request ke branch utama akan menjalankan test otomatis, sehingga menjaga kualitas kode sebelum deploy.

---

## File SEO: Robots.txt & Sitemap.xml 🌐

### Robots.txt

Letakkan file berikut di folder `frontend/public/robots.txt`:
```plaintext
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```
Ganti `https://your-domain.com/` dengan domain aktual kamu.

### Sitemap.xml

Letakkan file berikut di folder `frontend/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
     <loc>https://your-domain.com/</loc>
     <lastmod>2025-02-26</lastmod>
     <changefreq>monthly</changefreq>
     <priority>1.0</priority>
   </url>
   <!-- Tambahkan URL lain sesuai kebutuhan -->
</urlset>
```

---

## Tips & Saran untuk Pemula 😊

- **Baca Dokumentasi Resmi:**  
  Jika kamu baru mengenal Node.js atau React, pastikan untuk membaca dokumentasi resmi masing-masing untuk pemahaman yang lebih mendalam.
- **Mulai dengan Hal Kecil:**  
  Fokuslah pada bagian backend terlebih dahulu, lalu lanjutkan ke frontend. Jangan ragu untuk mencoba mengubah kode dan melihat hasilnya.
- **Gunakan Git:**  
  Manfaatkan Git untuk mengatur versi kode kamu. Pastikan file `.gitignore` sudah diatur untuk menghindari file yang tidak perlu.
- **Jangan Takut Bertanya:**  
  Komunitas developer sangat suportif. Jika kamu menemui kesulitan, tanyakan di forum atau grup belajar.

---

## FAQ (Frequently Asked Questions) ❓

**Q: Apa yang harus dilakukan jika server tidak berjalan?**  
A: Pastikan kamu sudah menginstall semua dependency dengan `npm install` di folder backend dan memeriksa apakah port 3000 tidak digunakan oleh aplikasi lain.

**Q: Bagaimana cara melihat hasil test?**  
A: Di folder backend, jalankan `npm test` untuk melihat hasil unit dan integration test dengan Jest.

**Q: Apa itu short URL dan QR Code?**  
A: Short URL adalah versi pendek dari URL yang panjang. QR Code adalah representasi visual dari data (dalam kasus ini, URL) yang bisa discan dengan ponsel.

---

## Kesimpulan 🎯

Proyek **ShortLink & QR Code Generator** dirancang dengan ramah untuk pemula dan profesional. Dengan dokumentasi ini, kamu bisa mempelajari, menjalankan, dan mengembangkan aplikasi ini secara bertahap. Selamat mencoba, dan semoga perjalanan coding-mu menyenangkan! 😎🚀

Happy coding! 🎉
CREATED BY DHIMAS LN