# Panduan Push ke GitHub (Branching Strategy)

Panduan ini akan membantu Anda mengupload project ini ke GitHub dengan dua konfigurasi berbeda dalam satu repository:
1.  **Branch `main`**: Untuk deployment di Root Domain (misal: `dojo-it.my.id/`).
2.  **Branch `deploy/subdirectory`**: Untuk deployment di Subfolder (misal: `dojo-it.my.id/belajar/ai/`).

---

## Langkah 1: Buat Repository di GitHub
1.  Login ke [GitHub](https://github.com).
2.  Buat repository baru (New Repository).
3.  Beri nama (misal: `ai-research-platform`).
4.  Jangan centang "Initialize with README" (biarkan kosong).
5.  Salin URL repository Anda (misal: `https://github.com/username/ai-research-platform.git`).

## Langkah 2: Hubungkan Project Lokal ke GitHub
Buka terminal di folder project ini (`/Users/bangjamz/Documents/antigravity/ai-research-platform`) dan jalankan perintah berikut (ganti URL dengan URL repository Anda):

```bash
git remote add origin https://github.com/username/ai-research-platform.git
```

## Langkah 3: Push Branch Utama (Root Config)
Branch `main` saat ini berisi konfigurasi untuk root domain (tanpa `basePath`).

```bash
git checkout main
git push -u origin main
```

## Langkah 4: Push Branch Subdirectory
Branch `deploy/subdirectory` berisi konfigurasi khusus untuk folder `/belajar/ai`.

```bash
git checkout deploy/subdirectory
git push -u origin deploy/subdirectory
```

---

## Cara Mengelola Update
Jika Anda ingin mengupdate konten (misal: ganti teks di Homepage):

1.  **Lakukan perubahan di branch `main`**:
    ```bash
    git checkout main
    # ... edit file ...
    git add .
    git commit -m "Update teks homepage"
    git push origin main
    ```

2.  **Gabungkan perubahan ke branch subdirectory**:
    ```bash
    git checkout deploy/subdirectory
    git merge main
    git push origin deploy/subdirectory
    ```

Dengan cara ini, kedua versi akan selalu sinkron, namun konfigurasi deployment (path gambar, dll) tetap terjaga di masing-masing branch.
