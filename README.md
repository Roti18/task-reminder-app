# ✨ Task Reminder App

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=github&logoColor=white)](https://ui.shadcn.com/)
[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

> Sebuah aplikasi pengingat tugas frontend yang modern dan responsif, dibangun dengan React, TypeScript, dan Vite, menampilkan pengalaman pengguna yang kaya melalui komponen UI canggih dari Radix UI dan Shadcn UI.

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the App](#-running-the-app)
- [Project Structure](#-project-structure)
- [NPM Scripts](#-npm-scripts)
- [Configuration](#️-configuration)
- [Usage](#-usage)

---

## ✨ Features

Proyek "Task Reminder App" dirancang untuk menyediakan pengalaman yang mulus dan intuitif dalam mengelola tugas Anda. Berikut adalah beberapa fitur utama yang dapat Anda harapkan:

- **Manajemen Tugas Intuitif:** Buat, lihat, edit, dan hapus tugas dengan mudah melalui antarmuka yang bersih dan berpusat pada pengguna, memungkinkan Anda untuk tetap terorganisir.
- **Penjadwalan dan Tampilan Kalender:** Manfaatkan kalender interaktif (`Calendar.tsx` dan `react-day-picker`) untuk menjadwalkan tugas, melihat tenggat waktu, dan mendapatkan gambaran visual tentang jadwal Anda.
- **Sistem Desain Modular & UI yang Elegan:** Dibangun dengan filosofi sistem desain yang kuat menggunakan komponen Radix UI dan Shadcn UI (`src/components/ui/`), memastikan konsistensi visual, aksesibilitas, dan pengalaman pengguna yang luar biasa.
- **Pengaturan Profil & Personalisasi:** Sesuaikan pengalaman aplikasi Anda dengan pengaturan profil dan persona (`Profile.tsx`, `Persona.tsx`), memungkinkan penyesuaian yang disesuaikan dengan preferensi Anda.
- **Pengalaman Orientasi Pengguna:** Panduan orientasi yang dirancang dengan baik (`Onboarding.tsx`) untuk membantu pengguna baru memulai dan memahami fungsionalitas aplikasi dengan cepat.
- **Dukungan Tema Gelap & Terang:** Beralih dengan mulus antara tema gelap dan terang (`next-themes`) untuk kenyamanan visual yang optimal di berbagai lingkungan.
- **Visualisasi Data Interaktif:** Dasbor (`Dashboard.tsx`) dapat menampilkan visualisasi data tugas, seperti kemajuan atau ringkasan tugas, menggunakan grafik canggih dari Recharts.
- **Navigasi Aplikasi Intuitif:** Dengan `react-router`, aplikasi menyediakan navigasi yang lancar dan pengalaman pengguna yang responsif antar bagian.

---

## 🛠️ Tech Stack

Aplikasi ini dibangun menggunakan tumpukan teknologi modern untuk memastikan kinerja, skalabilitas, dan pengalaman pengembang yang hebat.

| Kategori            | Teknologi        | Catatan                                                             |
| ------------------- | ---------------- | ------------------------------------------------------------------- |
| Frontend Frameworks | React            | Untuk membangun antarmuka pengguna interaktif.                      |
| Language            | TypeScript       | Untuk type safety dan pengalaman pengembangan yang lebih baik.      |
| Build Tool          | Vite             | Build tool yang sangat cepat dengan Hot Module Replacement (HMR).   |
| Styling             | Tailwind CSS     | Utility-first CSS framework untuk styling yang cepat dan konsisten. |
| UI Components       | Radix UI         | Komponen primitif yang dapat diakses dan tidak bergaya.             |
| UI Library          | Shadcn UI        | Komponen UI yang dapat disesuaikan dibangun di atas Radix UI.       |
| Routing             | React Router     | Untuk navigasi dan routing di aplikasi.                             |
| Date Picker         | react-day-picker | Komponen kalender dan date picker yang fleksibel.                   |
| Charts              | Recharts         | Library charting yang dibangun dengan React untuk visualisasi data. |
| Theming             | next-themes      | Untuk mengelola tema gelap dan terang.                              |
| Icons               | Lucide React     | Ikon yang indah dan konsisten.                                      |
| Package Manager     | npm              | Untuk mengelola dependensi proyek.                                  |

---

## 📋 Prerequisites

Sebelum memulai, pastikan Anda telah menginstal:

- **Node.js** (versi 16.x atau lebih tinggi) - [Download Node.js](https://nodejs.org/)
- **npm** (biasanya sudah termasuk dengan Node.js) atau **yarn** sebagai alternatif
- **Git** - [Download Git](https://git-scm.com/)

Untuk memeriksa versi yang terinstal:

```bash
node --version
npm --version
git --version
```

---

## 📥 Installation

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan proyek di mesin lokal Anda:

### 1. Clone Repository

```bash
git clone https://github.com/Roti18/task-reminder-app.git
cd task-reminder-app
```

### 2. Instal Dependensi

```bash
npm install
```

Atau jika Anda menggunakan yarn:

```bash
yarn install
```

Perintah ini akan menginstal semua dependensi yang diperlukan yang tercantum dalam `package.json`.

---

## 🚀 Running the App

### Mode Pengembangan

Untuk menjalankan aplikasi dalam mode pengembangan dengan hot reload:

```bash
npm run dev
```

Atau dengan yarn:

```bash
yarn dev
```

Aplikasi akan berjalan di **http://localhost:5173** (atau port lain jika 5173 sedang digunakan). Buka browser Anda dan navigasikan ke URL tersebut.

### Build untuk Produksi

Untuk membuat build produksi yang dioptimalkan:

```bash
npm run build
```

File build akan tersimpan di folder `dist/`.

### Preview Build Produksi

Untuk preview build produksi secara lokal:

```bash
npm run preview
```

---

## 📁 Project Structure

```
task-reminder-app/
├── public/                    # File statis
├── src/
│   ├── components/           # Komponen React
│   │   ├── ui/              # Komponen UI dari Shadcn UI
│   │   ├── Calendar.tsx     # Komponen kalender
│   │   ├── Dashboard.tsx    # Komponen dashboard
│   │   ├── Profile.tsx      # Komponen profil
│   │   ├── Persona.tsx      # Komponen persona
│   │   └── Onboarding.tsx   # Komponen onboarding
│   ├── assets/              # Gambar, font, dll
│   ├── styles/              # File CSS global
│   ├── utils/               # Fungsi utilitas
│   ├── App.tsx              # Komponen aplikasi utama
│   ├── main.tsx             # Entry point aplikasi
│   └── vite-env.d.ts        # Type definitions Vite
├── .gitignore               # File yang diabaikan Git
├── index.html               # HTML template
├── package.json             # Dependensi dan skrip proyek
├── tsconfig.json            # Konfigurasi TypeScript
├── vite.config.ts           # Konfigurasi Vite
├── tailwind.config.js       # Konfigurasi Tailwind CSS
├── postcss.config.js        # Konfigurasi PostCSS
└── README.md                # Dokumentasi proyek
```

---

## 📜 NPM Scripts

Berikut adalah skrip yang tersedia dalam `package.json`:

| Skrip             | Deskripsi                                        |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Menjalankan aplikasi dalam mode pengembangan     |
| `npm run build`   | Membuat build produksi yang dioptimalkan         |
| `npm run preview` | Preview build produksi secara lokal              |
| `npm run lint`    | Menjalankan ESLint untuk memeriksa kualitas kode |

---

## ⚙️ Configuration

### Tailwind CSS

Konfigurasi Tailwind CSS dapat dimodifikasi di `tailwind.config.js`. Anda dapat menambahkan:

- Warna custom
- Font custom
- Breakpoints
- Plugin tambahan

### TypeScript

Konfigurasi TypeScript tersedia di `tsconfig.json`. Anda dapat menyesuaikan:

- Target kompilasi
- Path aliases
- Strict mode options

### Vite

Konfigurasi Vite dapat disesuaikan di `vite.config.ts` untuk:

- Plugin tambahan
- Proxy development
- Build optimization

---

## 💡 Usage

### Membuat Tugas Baru

1. Klik tombol "Tambah Tugas" atau "+" di dashboard
2. Isi detail tugas (judul, deskripsi, tanggal, prioritas)
3. Klik "Simpan" untuk menyimpan tugas

### Mengelola Tugas

- **Edit:** Klik pada tugas untuk mengedit detailnya
- **Hapus:** Klik ikon hapus untuk menghapus tugas
- **Tandai Selesai:** Klik checkbox untuk menandai tugas sebagai selesai

### Melihat Kalender

- Navigasikan ke tab "Kalender" untuk melihat tugas dalam tampilan kalender
- Klik pada tanggal untuk melihat tugas di hari tersebut

### Personalisasi

- Buka "Pengaturan" atau "Profil" untuk mengatur preferensi Anda
- Ubah tema antara mode gelap dan terang
- Sesuaikan tampilan dan notifikasi
