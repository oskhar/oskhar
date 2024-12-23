## **1. Operasi Dasar**

| **Aksi**                         | **Shortcut**         | **Penjelasan**                                              |
|-----------------------------------|----------------------|-------------------------------------------------------------|
| **Mode Insert**                   | `i`                  | Masuk mode insert sebelum kursor.                          |
| **Mode Insert (setelah karakter)**| `a`                  | Masuk mode insert setelah karakter di bawah kursor.        |
| **Keluar ke Mode Normal**         | `Esc`                | Kembali ke mode normal dari mode lainnya.                  |
| **Undo**                          | `u`                  | Membatalkan perubahan terakhir.                            |
| **Redo**                          | `Ctrl+r`             | Mengembalikan perubahan yang di-undo.                      |
| **Simpan File**                   | `:w`                 | Menyimpan file saat ini.                                   |
| **Keluar**                        | `:q`                 | Keluar dari Neovim (jika tidak ada perubahan).             |
| **Keluar dan Simpan**             | `:wq`                | Menyimpan file lalu keluar.                                |
| **Force Quit**                    | `:q!`                | Keluar tanpa menyimpan perubahan.                         |

---

## **2. Copy, Paste, dan Cut**

| **Aksi**                         | **Shortcut**         | **Penjelasan**                                              |
|-----------------------------------|----------------------|-------------------------------------------------------------|
| **Copy (Yank) Baris Saat Ini**    | `yy`                 | Menyalin seluruh baris di bawah kursor.                    |
| **Copy Sampai Akhir Baris**       | `y$`                 | Menyalin teks dari kursor hingga akhir baris.              |
| **Copy Ke Register Sistem**       | `"+y`                | Menyalin teks ke clipboard sistem.                         |
| **Cut Baris Saat Ini**            | `dd`                 | Memotong seluruh baris di bawah kursor.                    |
| **Cut Sampai Akhir Baris**        | `d$`                 | Memotong teks dari kursor hingga akhir baris.              |
| **Paste Setelah Kursor**          | `p`                  | Menempelkan teks dari register setelah kursor.             |
| **Paste Sebelum Kursor**          | `P`                  | Menempelkan teks dari register sebelum kursor.             |
| **Paste dari Clipboard Sistem**   | `"+p`                | Menempelkan teks dari clipboard sistem.                    |

---

## **3. Navigasi Teks**

| **Aksi**                         | **Shortcut**         | **Penjelasan**                                              |
|-----------------------------------|----------------------|-------------------------------------------------------------|
| **Pindah ke Awal Baris**          | `0`                  | Memindahkan kursor ke awal baris.                          |
| **Pindah ke Akhir Baris**         | `$`                  | Memindahkan kursor ke akhir baris.                         |
| **Pindah ke Awal Paragraf**       | `{`                  | Pindah ke awal paragraf.                                   |
| **Pindah ke Akhir Paragraf**      | `}`                  | Pindah ke akhir paragraf.                                  |
| **Cari Kata**                     | `/kata`              | Mencari kata dalam file.                                   |
| **Cari Berikutnya**               | `n`                  | Pindah ke hasil pencarian berikutnya.                      |
| **Cari Sebelumnya**               | `N`                  | Pindah ke hasil pencarian sebelumnya.                      |
| **Pindah Antar Baris Cepat**      | `:123`               | Pindah langsung ke baris ke-123.                          |

---

## **4. Multicursor (vim-visual-multi Plugin)**

| **Aksi**                         | **Shortcut**         | **Penjelasan**                                              |
|-----------------------------------|----------------------|-------------------------------------------------------------|
| **Tambahkan Kursor ke Kata Serupa** | `Ctrl+n`           | Menambah kursor ke instance kata berikutnya.               |
| **Pilih Semua Kata Serupa**        | `Ctrl+F2`           | Memilih semua instance kata yang sama di buffer.           |
| **Hapus Satu Kursor**             | `Shift+n`            | Menghapus kursor aktif terakhir.                           |

---

## **5. Visual Mode**

| **Aksi**                         | **Shortcut**         | **Penjelasan**                                              |
|-----------------------------------|----------------------|-------------------------------------------------------------|
| **Masuk Visual Mode**             | `v`                  | Memilih teks secara karakter demi karakter.                |
| **Visual Line Mode**              | `V`                  | Memilih teks secara baris.                                 |
| **Visual Block Mode**             | `Ctrl+v`             | Memilih teks dalam bentuk blok persegi panjang.            |
| **Ubah Case Teks**                | `~`                  | Mengubah huruf kapital menjadi kecil, atau sebaliknya.      |

---

## **6. Indentasi**

| **Aksi**                         | **Shortcut**         | **Penjelasan**                                              |
|-----------------------------------|----------------------|-------------------------------------------------------------|
| **Indent Baris**                  | `>>`                 | Menambahkan indentasi ke baris saat ini.                   |
| **Unindent Baris**                | `<<`                 | Mengurangi indentasi pada baris saat ini.                  |
| **Indent di Visual Mode**         | `>` (Visual Mode)    | Menambahkan indentasi pada teks yang dipilih.              |
| **Unindent di Visual Mode**       | `<` (Visual Mode)    | Mengurangi indentasi pada teks yang dipilih.               |

---

## **7. Split dan Tab**

| **Aksi**                         | **Shortcut**         | **Penjelasan**                                              |
|-----------------------------------|----------------------|-------------------------------------------------------------|
| **Horizontal Split**              | `:split` atau `Ctrl+w s` | Membuka split horizontal.                             |
| **Vertical Split**                | `:vsplit` atau `Ctrl+w v` | Membuka split vertikal.                                |
| **Pindah Antar Window**           | `Ctrl+w` lalu arah  | Navigasi antar split window.                                |
| **Tutup Split Window**            | `Ctrl+w c`           | Menutup window saat ini.                                   |
| **Membuka Tab Baru**              | `:tabnew`            | Membuka file baru dalam tab baru.                         |
| **Navigasi Tab**                  | `gt` atau `gT`       | Pindah ke tab berikutnya (`gt`) atau sebelumnya (`gT`).    |

---

## **8. Pencarian dan Penggantian**

| **Aksi**                         | **Shortcut**         | **Penjelasan**                                              |
|-----------------------------------|----------------------|-------------------------------------------------------------|
| **Cari Kata**                     | `/kata`              | Mencari kata di dalam buffer.                              |
| **Ganti Semua Kata**              | `:%s/kata_lama/kata_baru/g` | Mengganti semua instance kata lama dengan kata baru. |

---

## **9. Lainnya (Plugins dan Fitur Tambahan di NvChad)**

| **Aksi**                         | **Shortcut**         | **Penjelasan**                                              |
|-----------------------------------|----------------------|-------------------------------------------------------------|
| **Telescope File Finder**         | `<leader>ff`         | Mencari file di dalam proyek menggunakan Telescope.         |
| **Telescope Grep**                | `<leader>fg`         | Mencari kata dalam file di proyek.                         |
| **LSP Go to Definition**          | `gd`                 | Pergi ke definisi simbol (jika LSP aktif).                  |
| **LSP Hover Documentation**       | `K`                  | Menampilkan dokumentasi simbol di bawah kursor.            |
| **LSP Rename**                    | `<leader>rn`         | Mengganti nama simbol di seluruh proyek.                   |
| **Tree View (NvimTree)**          | `<leader>e`          | Membuka atau menutup file explorer.                        |

---

## **10. Leader Key**

- **Leader Key di NvChad**: `Space`
  - Kombinasi leader key dengan shortcut tambahan (`<leader>`) memungkinkan navigasi lebih cepat.
  - Contoh:
    - `Space ff`: Membuka file finder (Telescope).
    - `Space e`: Membuka file explorer.
💡
