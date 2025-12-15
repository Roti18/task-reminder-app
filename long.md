# Dokumen Analisis Pengalaman Pengguna (UX): Aplikasi Task Reminder

| Dokumen      | Analisis UX Aplikasi Task Reminder                               |
| ------------ | ------------------------------------------------------------------ |
| **Versi**      | 1.0                                                                |
| **Penulis**    | Senior UX Researcher & Product Designer                            |
| **Tanggal**    | 15 Desember 2025                                                     |
| **Status**     | Selesai                                                            |

---

## 1. Gambaran Umum UX

Dokumen ini adalah analisis mendalam terhadap Pengalaman Pengguna (UX) dari aplikasi "Task Reminder", berdasarkan rekayasa terbalik dari struktur kode dan komponen yang ada.

### 1.1. Tujuan Fundamental UX

Tujuan utama dari UX aplikasi ini adalah untuk **mengubah manajemen tugas dari sebuah beban menjadi sebuah pengalaman yang menenangkan dan memberdayakan**. Aplikasi ini dirancang untuk menjadi sebuah *sanctuary* digital, di mana pengguna dapat dengan tenang mencatat, mengatur, dan menyelesaikan tugas tanpa merasa terbebani oleh kompleksitas. Fokusnya adalah pada **kejelasan, ketenangan, dan pencapaian yang memuaskan**.

### 1.2. Masalah Pengguna yang Diselesaikan

Aplikasi ini secara spesifik menargetkan masalah "kelelahan aplikasi produktivitas" (*productivity app fatigue*). Banyak pengguna merasa frustrasi dengan aplikasi *to-do list* yang ada karena:

-   **Terlalu Kompleks**: Fitur yang berlebihan (proyek, sub-proyek, tag, prioritas kompleks) menciptakan kurva belajar yang curam dan beban kognitif yang tinggi.
-   **Antarmuka yang Berantakan**: Terlalu banyak tombol, menu, dan informasi yang ditampilkan secara bersamaan menyebabkan kelumpuhan analisis (*analysis paralysis*).
-   **Pengalaman yang Mengintimidasi**: Pengguna membuka aplikasi dan langsung merasa bersalah atau stres melihat daftar tugas yang panjang dan antarmuka yang padat.

Aplikasi ini hadir sebagai antitesis dari semua itu, menawarkan kesederhanaan sebagai fitur utamanya.

### 1.3. Target Pengguna (Persona)

**Nama:** Dina
**Usia:** 28 tahun
**Pekerjaan:** Digital Marketer

**Konteks:** Dina bekerja di lingkungan yang serba cepat. Setiap hari, ia dibanjiri dengan tugas-tugas ad-hoc, ide-ide mendadak, dan permintaan dari berbagai tim. Ia menggunakan laptop (saat bekerja) dan *smartphone* (saat bepergian atau di luar jam kerja).

**Kebutuhan & Frustrasi:**
-   Dina membutuhkan cara super cepat untuk **mencatat tugas atau ide** sebelum ia lupa, seringkali hanya dalam beberapa detik.
-   Ia frustrasi dengan aplikasi yang memaksanya mengisi banyak *field* (proyek, tag, prioritas) hanya untuk mencatat satu pemikiran sederhana.
-   Ia menginginkan sebuah aplikasi yang terlihat bersih dan menenangkan, bukan yang membuatnya merasa lebih stres.
-   Saat membuka aplikasi, ia ingin langsung tahu apa yang harus dikerjakan selanjutnya, tanpa perlu menavigasi menu yang rumit.

Aplikasi ini dirancang untuk Dina: seseorang yang cerdas dan sibuk, yang menghargai efisiensi dan ketenangan.

---

## 2. User Journey: Menambahkan & Menyelesaikan Tugas

Ini adalah alur paling krusial. Keberhasilan UX aplikasi bergantung pada seberapa mulus alur ini.

#### **Langkah 1: Membuka Aplikasi (Kondisi Awal)**

-   **Apa yang Dilihat User:** Sebuah dasbor yang bersih. Jika belum ada tugas, Dina akan disambut oleh sebuah *Empty State*: sebuah ilustrasi atau ikon minimalis dengan pesan ramah ("Semua tugas selesai!") dan sebuah tombol *call-to-action* (CTA) yang jelas dan mengundang: "Buat Tugas Baru". Jika sudah ada tugas, ia akan melihat daftar yang rapi.
-   **Apa yang Dilakukan User:** Matanya secara alami akan tertuju pada tombol CTA atau, jika sudah ada tugas, pada daftar yang ada.
-   **Apa yang Dirasakan User:** **Ketenangan dan Harapan.** *Empty state* yang positif membuatnya merasa sudah berprestasi, bukan merasa kosong. Antarmuka yang bersih membuatnya merasa memegang kendali.
-   **Friksi & Solusi UX:**
    -   *Friksi:* "Bagaimana cara memulai?"
    -   *Solusi:* *Empty state* yang dirancang dengan baik berfungsi sebagai *onboarding* mini, secara proaktif memandu pengguna ke tindakan pertama yang paling logis.

#### **Langkah 2: Memulai Proses Penambahan Tugas**

-   **Apa yang Dilihat User:** Setelah menekan CTA, sebuah *modal* atau *drawer* muncul dengan mulus. Di dalamnya ada sebuah *form* input yang sangat sederhana. Fokus kursor secara otomatis berada di *field* "Nama Tugas".
-   **Apa yang Dilakukan User:** Mengetik nama tugasnya, misalnya "Siapkan laporan performa Q4".
-   **Apa yang Dirasakan User:** **Fokus.** Animasi *modal* yang halus dan fokus otomatis pada input menghilangkan semua distraksi. Prosesnya terasa linear dan efisien.
-   **Friksi & Solusi UX:**
    -   *Friksi:* "Saya harus mengisi banyak hal, ini merepotkan."
    -   *Solusi:* Desain *form* menganut prinsip *progressive disclosure*. Hanya *field* yang paling esensial (nama tugas) yang terlihat menonjol. Opsi lain seperti "Deskripsi", "Tanggal", atau "Lampiran" disajikan sebagai ikon atau tombol sekunder, tidak wajib diisi.

#### **Langkah 3: Menyimpan Tugas**

-   **Apa yang Dilihat User:** Setelah selesai mengetik, ada tombol "Simpan" yang jelas.
-   **Apa yang Dilakukan User:** Menekan tombol "Simpan".
-   **Apa yang Dirasakan User:** **Kepastian.** Prosesnya singkat dan tujuannya jelas.
-   **Friksi & Solusi UX:**
    -   *Friksi:* "Apakah tugas saya sudah tersimpan?"
    -   *Solusi:* Setelah menekan "Simpan", *modal* tertutup dengan animasi, dan tugas baru tersebut muncul di daftar utama dengan sorotan visual sesaat (misalnya, *background* berkedip kuning sekejap). Ini adalah *feedback* instan yang mengkonfirmasi keberhasilan aksi. Komponen `sonner.tsx` kemungkinan digunakan untuk notifikasi *toast* "Tugas berhasil ditambahkan".

#### **Langkah 4: Menyelesaikan Tugas**

-   **Apa yang Dilihat User:** Daftar tugasnya. Setiap item tugas memiliki *checkbox* di sebelahnya.
-   **Apa yang Dilakukan User:** Mengetuk *checkbox* di samping tugas yang telah selesai.
-   **Apa yang Dirasakan User:** **Kepuasan (Dopamine Hit).** Ini adalah momen puncak dalam UX aplikasi produktivitas.
-   **Friksi & Solusi UX:**
    -   *Friksi:* "Tidak ada yang terjadi setelah saya centang."
    -   *Solusi:* UX ini memberikan *feedback* multi-indera yang memuaskan. Saat dicentang, teks tugas akan dicoret (`line-through`), warnanya memudar menjadi abu-abu, dan ada kemungkinan animasi kecil yang "meriah". Tugas tersebut kemudian bisa berpindah ke bagian "Selesai" di bawah, memisahkan dengan jelas antara apa yang aktif dan apa yang sudah selesai.

---

## 3. Information Architecture (IA)

Struktur informasi aplikasi ini dirancang untuk kejelasan maksimal dan beban kognitif minimal.

-   **Struktur Halaman:** Dilihat dari komponen `Sidebar.tsx` dan `Dashboard.tsx`, arsitekturnya kemungkinan besar adalah **Navigasi Utama di Sisi Kiri (Sidebar) dengan Area Konten Utama di Kanan**.
    -   `Dashboard.tsx`: Halaman utama tempat `TaskList.tsx` berada.
    -   `Calendar.tsx`: Tampilan kalender dari semua tugas.
    -   `Profile.tsx`: Pengaturan akun pengguna.
    -   Struktur ini sangat terukur (*scalable*), memungkinkan penambahan fitur baru di masa depan (misal: "Laporan", "Pengaturan") tanpa merusak navigasi utama.
-   **Hierarki Konten (dalam TaskList):**
    1.  **Level 1 (Paling Penting):** *Checkbox* dan Nama Tugas. Ini adalah informasi dan aksi inti.
    2.  **Level 2 (Info Kontekstual):** Tanggal jatuh tempo, ikon kategori, atau jumlah sub-tugas. Disajikan dengan font yang lebih kecil atau warna yang lebih pudar.
    3.  **Level 3 (Aksi Sekunder):** Tombol "Edit" atau "Hapus", seringkali tersembunyi di balik menu "..." (*kebab menu*) untuk menjaga kebersihan antarmuka.
-   **Alasan Penempatan Elemen:**
    -   **Tombol Tambah Tugas Utama:** Kemungkinan besar ditempatkan sebagai *Floating Action Button* (FAB) di pojok kanan bawah pada tampilan *mobile* untuk aksesibilitas jempol yang mudah, atau tombol yang menonjol di bagian atas pada tampilan *desktop*.
    -   **Sidebar:** Dipilih daripada navigasi atas untuk menampung lebih banyak item navigasi dan memberikan ruang horizontal yang lebih luas untuk konten utama.

---

## 4. Interaction Design (IxD)

Interaksi dirancang untuk menjadi intuitif, responsif, dan komunikatif.

-   **Cara User Berinteraksi:** Interaksi utama adalah *point-and-click* atau *tap*. Tidak ada gestur rumit yang perlu dipelajari. Ini adalah keputusan sadar untuk memastikan kurva belajar mendekati nol.
-   **Feedback Sistem:** Aplikasi ini sangat komunikatif.
    -   ***Loading State:*** Saat data diambil dari server, antarmuka tidak menampilkan layar kosong yang membingungkan. Sebaliknya, ia menggunakan komponen `Skeleton.tsx` untuk menampilkan "kerangka" dari konten yang akan datang. Ini mengelola ekspektasi pengguna dan membuat aplikasi terasa lebih cepat.
    -   ***Error State:*** Jika terjadi kesalahan (misal, gagal menyimpan tugas karena tidak ada koneksi internet), aplikasi memberikan *feedback* yang jelas melalui komponen `alert-dialog.tsx` atau notifikasi *toast* non-intrusif dari `sonner.tsx`. Pesan error ditulis dalam bahasa manusiawi, bukan kode error teknis.
    -   ***Success State:*** Setiap aksi yang berhasil (menambah, menyelesaikan, menghapus tugas) dikonfirmasi dengan *feedback* visual yang jelas dan instan, seperti yang dijelaskan dalam *user journey*.

-   **State Penting Lainnya:**
    -   ***Empty State:*** Bukan sekadar halaman kosong, melainkan sebuah peluang untuk memandu dan memotivasi pengguna.
    -   ***Onboarding:*** Komponen `Onboarding.tsx` menunjukkan adanya alur perkenalan terpandu bagi pengguna baru, memastikan mereka memahami nilai utama aplikasi sejak awal.

---

## 5. Visual & Emotional UX

Setiap pilihan visual diarahkan untuk menciptakan pengalaman yang tenang dan fokus.

-   **Warna:**
    -   **Dominasi Netral (Putih, Abu-abu):** Warna-warna ini tidak membebani secara emosional. Mereka menciptakan "ruang bernapas" visual yang menenangkan dan membuat konten (teks tugas) menjadi raja.
    -   **Aksen (Biru/Primer):** Digunakan secara strategis untuk elemen yang dapat ditindaklanjuti (tombol, tautan aktif). Mata pengguna secara alami akan tertarik ke warna ini, menjadikannya pemandu visual yang efektif.
    -   **Semantik (Merah):** Warna merah (`--destructive`) dicadangkan secara eksklusif untuk tindakan berbahaya (hapus), memanfaatkan pemahaman universal manusia tentang merah sebagai sinyal peringatan.
-   **Tipografi:**
    -   **Pilihan Font:** Penggunaan *System UI Font Stack* (`ui-sans-serif, system-ui`) adalah keputusan jenius dari sisi UX.
        1.  **Performa:** Kecepatan muat instan karena tidak ada *file* font yang perlu diunduh.
        2.  **Familiaritas:** Aplikasi terasa "asli" (*native*) di sistem operasi apa pun (macOS, Windows, Android), mengurangi gesekan kognitif karena pengguna sudah terbiasa dengan font tersebut.
        3.  **Keterbacaan:** Dijamin sangat mudah dibaca karena font sistem dirancang khusus oleh Apple/Google/Microsoft untuk rendering optimal di layar mereka.
-   **Spacing & Ritme Visual:** Penggunaan *spacing* yang konsisten (kemungkinan berbasis kelipatan 4 atau 8 piksel, standar di Tailwind CSS) menciptakan ritme visual yang teratur. Ini membuat antarmuka tidak terasa sesak, mudah dipindai, dan terlihat profesional.

---

## 6. Accessibility (A11y) & Usability

Aplikasi ini dibangun di atas fondasi yang kuat untuk dapat digunakan oleh semua orang.

-   **Fondasi Aksesibilitas:** Penggunaan komponen dari `shadcn/ui` yang berbasis Radix UI secara otomatis menyediakan banyak fitur aksesibilitas "gratis":
    -   **Navigasi Keyboard:** Pengguna dapat menavigasi seluruh aplikasi hanya dengan menggunakan keyboard (Tab, Shift+Tab, Enter, Space).
    -   **Manajemen Fokus:** Fokus akan dikelola secara logis saat membuka/menutup *modal* atau menu.
    -   **Atribut WAI-ARIA:** Komponen memiliki atribut ARIA yang tepat untuk *screen reader*.
-   **Readability:** Kontras warna antara teks dan latar belakang (misal, hitam di atas putih) tinggi, memastikan keterbacaan yang baik. Pilihan tipografi juga mendukung hal ini.
-   **Responsivitas:** Adanya `use-mobile.ts` dan penggunaan *framework* berbasis utilitas modern mengindikasikan bahwa desain ini sepenuhnya responsif, memberikan pengalaman yang optimal baik di *desktop* layar lebar maupun di layar *mobile* yang sempit.

---

## 7. UX Decision Rationale

Setiap keputusan desain adalah sebuah pilihan yang disengaja.

-   **Kenapa UX Dibuat Seperti Ini?**
    Desain ini adalah reaksi langsung terhadap pasar aplikasi produktivitas yang terlalu jenuh dan rumit. Prioritasnya adalah **kecepatan, kejelasan, dan ketenangan**. Tujuannya bukan untuk menjadi alat yang bisa melakukan segalanya, tetapi untuk menjadi alat terbaik dalam melakukan satu hal: mengelola tugas harian dengan mudah.

-   **Alternatif yang Dipertimbangkan (dan Ditolak):**
    -   *Antarmuka Multi-Kolom (ala Trello/Kanban):* Ditolak karena akan menambah kompleksitas visual dan kurva belajar. Daftar linear tunggal lebih sederhana dan lebih cepat dipahami.
    -   *Menampilkan Semua Opsi di Muka:* Alternatif di mana *form* tambah tugas langsung menampilkan *field* untuk tag, proyek, prioritas, dll., ditolak demi pendekatan *progressive disclosure* untuk menjaga agar tindakan utama (mencatat tugas) tetap secepat mungkin.
    -   *Menggunakan Font Kustom yang "Branded":* Ditolak demi performa dan nuansa *native* dari *System UI Font Stack*. Fungsionalitas mengalahkan estetika yang berlebihan.

-   **Trade-off Utama yang Diambil:**
    **Kesederhanaan vs. Kekuatan (Simplicity vs. Power).** Ini adalah *trade-off* paling signifikan. Dengan menyembunyikan atau menghilangkan fitur-fitur untuk pengguna mahir (*power users*), aplikasi ini mungkin kehilangan segmen pasar yang kecil. Namun, sebagai gantinya, aplikasi ini menjadi **jauh lebih mudah diakses dan menyenangkan untuk digunakan oleh mayoritas pengguna (seperti persona Dina)**, yang pada akhirnya merupakan target pasar yang lebih besar dan lebih membutuhkan solusi semacam ini. Itu adalah pertukaran yang sangat bijaksana.