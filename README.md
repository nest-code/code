# Ruang Kode

Profil personal dan playground frontend untuk Software Engineer. Dibangun dengan SvelteKit, Svelte, TypeScript, dan Bun; dijalankan sebagai Cloudflare Worker tanpa database aplikasi.

Antarmuka tersedia dalam bahasa Inggris dan Indonesia. Bahasa Inggris menjadi pilihan awal; preferensi bahasa disimpan di browser. Tombol WhatsApp saat ini terhubung ke nomor `081225353640`.

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

### Pengaturan Cloudflare Workers Builds

Di **Workers & Pages → Worker → Settings → Builds**, gunakan branch `main` dan set:

- Build command: kosongkan
- Deploy command: `bun run deploy`

Perintah deploy tersebut menjalankan build SvelteKit terlebih dahulu, lalu mengirim hasilnya dengan Wrangler. Jika build dan deploy ingin dipisah, gunakan Build command `bun run build` dan Deploy command `npx wrangler deploy`.

## Sebelum dipublikasikan

- Ganti nama brand **Ruang Kode** dengan nama yang Anda pilih.
- Perbarui nomor WhatsApp di `src/lib/i18n.ts` jika nomor kontak berubah.
- Ubah proyek contoh yang bertanda **CONCEPT / PLAYGROUND** menjadi karya Anda; label konsep sebaiknya dipertahankan untuk ide yang belum menjadi proyek nyata.
- Isi tautan profil profesional dan jejaring sosial setelah informasinya tersedia.

Situs tidak memakai database aplikasi. Login dan pengelolaan artikel disediakan CMS eksternal yang menulis konten ke repositori GitHub.

## Admin artikel

CMS artikel tersedia di `/admin/`. Decap CMS menyimpan artikel sebagai Markdown di GitHub, kemudian Workers Builds membangun dan menerbitkan perubahan.

Form Artikel menyediakan judul, bahasa, tanggal, kategori bebas, tag, ringkasan, gambar sampul dan teks alternatifnya, metadata SEO opsional, status publikasi, serta isi Markdown. Satu artikel boleh ditulis dalam satu bahasa saja; bahasa Indonesia dan Inggris tidak diwajibkan berpasangan. Kategori juga tidak dibatasi pada daftar topik tertentu.

Untuk mengaktifkan login CMS:

1. Push proyek ke repositori GitHub pada branch `main`.
2. Buat akun Decap Turbo, hubungkan GitHub, lalu buat satu site untuk repositori ini. Paket Free yang tercantum saat ini mencakup satu site dan satu seat.
3. Masukkan URL situs publik lengkap, termasuk `/admin/`, sebagai Admin Interface URL di Decap Turbo.
4. Salin Site ID dari dashboard Decap Turbo ke `turbo_site_id` di `static/admin/config.yml`.
5. Ganti `YOUR-SITE` di `site_url` dan `display_url` dengan hostname Worker Anda.
6. Deploy ulang situs. Buka `/admin/`, lalu masuk dengan akun Decap Turbo Anda untuk membuat dan menerbitkan artikel.

Artikel dengan status **Tampilkan di situs** dimatikan tetap tersimpan sebagai draf dan tidak ditampilkan ke publik. Perubahan CMS menjadi commit GitHub; Cloudflare membangun ulang situs dan merender artikel yang dipublikasikan. Untuk menampilkan gambar, CMS menyimpannya di `static/uploads` dan situs menggunakannya dari `/uploads`.
