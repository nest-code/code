# Ruang Kode

Profil personal dan playground frontend untuk Software Engineer. Dibangun dengan SvelteKit, Svelte, TypeScript, dan Bun; dijalankan sebagai Cloudflare Worker tanpa database aplikasi.

## Menjalankan lokal

1. Pasang Bun dari https://bun.sh
2. Jalankan `bun install`
3. Jalankan `bun run dev -- --open`

Perintah proyek:

- `bun run dev` — server pengembangan
- `bun run build` — menghasilkan worker SvelteKit dan tipe binding Cloudflare
- `bun run preview` — pratinjau lokal melalui Wrangler
- `bun run deploy` — deploy Worker dengan Wrangler
- `bun run cf-typegen` — membuat ulang tipe binding Cloudflare
- `bun run check` — pemeriksaan tipe dan komponen Svelte

## Sebelum dipublikasikan

- Ganti nama brand **Ruang Kode** dengan nama yang Anda pilih.
- Ganti `hello@example.com` dengan alamat kontak Anda.
- Ubah proyek contoh yang bertanda **CONCEPT / PLAYGROUND** menjadi karya Anda; label konsep sebaiknya dipertahankan untuk ide yang belum menjadi proyek nyata.
- Isi tautan profil profesional dan jejaring sosial setelah informasinya tersedia.

Situs tidak memakai database aplikasi. Login dan pengelolaan artikel disediakan CMS eksternal yang menulis konten ke repositori GitHub.

## Admin artikel

CMS artikel tersedia di `/admin/`. Decap CMS menyimpan artikel sebagai Markdown di GitHub, kemudian Workers Builds membangun dan menerbitkan perubahan.

Untuk mengaktifkan login CMS:

1. Push proyek ke repositori GitHub pada branch `main`.
2. Buat akun Decap Turbo, hubungkan GitHub, lalu buat satu site untuk repositori ini. Paket Free yang tercantum saat ini mencakup satu site dan satu seat.
3. Masukkan URL situs publik lengkap, termasuk `/admin/`, sebagai Admin Interface URL di Decap Turbo.
4. Salin Site ID dari dashboard Decap Turbo ke `turbo_site_id` di `static/admin/config.yml`.
5. Ganti `YOUR-SITE` di `site_url` dan `display_url` dengan hostname Worker Anda.
6. Deploy ulang situs. Buka `/admin/`, lalu masuk dengan akun Decap Turbo Anda untuk membuat dan menerbitkan artikel.

Artikel berstatus draf tidak tampil di situs publik. Artikel yang dipublikasikan akan dirender saat build berikutnya.
