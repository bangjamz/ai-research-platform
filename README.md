# AI Research Platform

**Website Belajar Riset Akademik dengan Bantuan AI**

Platform ini dirancang sebagai panduan interaktif untuk memahami dan menerapkan 4 Pilar Riset Berbasis AI. Dibangun dengan teknologi web modern untuk memberikan pengalaman belajar yang premium dan responsif.

## 🌟 Fitur Utama
-   **4 Pilar Workflow**: Panduan langkah demi langkah dari Akuisisi Data hingga Eksekusi.
-   **Visualisasi Interaktif**: Diagram alur (Mermaid) dan infografis high-quality dengan fitur Lightbox.
-   **Responsive Design**: Tampilan optimal di Desktop, Tablet, dan Mobile.
-   **Unified Codebase**: Satu kode untuk deployment di Root Domain maupun Subfolder.

## 🛠 Teknologi
-   **Framework**: Next.js 14 (App Router)
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React
-   **Animations**: Framer Motion
-   **Diagrams**: Mermaid.js

## 🚀 Deployment Strategy

Project ini menggunakan **Unified Branch Strategy**. Anda tidak perlu lagi berpindah branch untuk deployment yang berbeda. Cukup gunakan perintah build yang sesuai.

### 1. Deploy ke Root Domain (misal: `dojo-it.my.id/`)
Gunakan perintah build standar:
```bash
npm run build
```
*Output folder: `out/`*

### 2. Deploy ke Subfolder (misal: `dojo-it.my.id/belajar/ai/`)
Gunakan perintah build khusus subdirectory:
```bash
npm run build:subdir
```
*Output folder: `out/`*

> **Catatan**: Perintah ini otomatis mengatur `basePath` dan path gambar agar sesuai dengan subfolder `/belajar/ai`.

## 📂 Struktur Project
-   `app/`: Halaman dan layout utama (Next.js App Router).
-   `components/`: Komponen UI reusable (Hero, Navbar, ImageModal, dll).
-   `public/images/`: Aset gambar infografis.
-   `lib/utils.ts`: Helper functions (termasuk `getAssetPath` untuk dynamic routing).

## 📝 Lisensi
Project ini dibuat untuk tujuan edukasi dan riset.
