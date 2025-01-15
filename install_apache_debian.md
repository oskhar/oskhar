Untuk menjalankan aplikasi React hasil build (di dalam folder `dist`) menggunakan Apache Web Server di Debian, ikuti langkah-langkah berikut:

---

### 1. Install Apache di Debian
Jalankan perintah berikut untuk menginstal Apache:
```bash
sudo apt update
sudo apt install apache2 -y
```

#### a. Verifikasi Instalasi
Setelah instalasi selesai, pastikan Apache berjalan dengan perintah:
```bash
sudo systemctl status apache2
```
Jika Apache belum berjalan, mulai layanan dengan:
```bash
sudo systemctl start apache2
```

#### b. Aktifkan Apache pada Boot
Agar Apache otomatis berjalan saat booting, gunakan perintah:
```bash
sudo systemctl enable apache2
```

---

### 2. Salin Aplikasi React ke Direktori Web Apache
Apache secara default menggunakan direktori `/var/www/html` sebagai root dokumen web.

#### a. Hapus Konten Default (Opsional)
Hapus file default Apache:
```bash
sudo rm -rf /var/www/html/*
```

#### b. Salin Folder `dist`
Salin folder hasil build React (`dist`) ke direktori root web:
```bash
sudo cp -r /path/to/your/react-app/dist/* /var/www/html/
```

Pastikan file Anda telah disalin dengan benar:
```bash
ls /var/www/html/
```

---

### 3. Konfigurasi Apache untuk Aplikasi React
React adalah aplikasi single-page yang membutuhkan penanganan khusus untuk rute non-root (misalnya `/about`, `/contact`). Anda perlu meng
