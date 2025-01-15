Pesan kesalahan yang Anda terima menunjukkan bahwa repositori Docker yang ditambahkan tidak sesuai dengan distribusi Debian yang Anda gunakan, atau repositori Docker tidak ditemukan untuk Debian `bookworm`. Untuk mengatasi masalah ini, Anda perlu menambahkan repositori Docker yang tepat untuk Debian.

### Langkah-langkah untuk Menginstal Docker di Debian

Berikut adalah langkah-langkah yang benar untuk menginstal Docker di Debian:

### Langkah 1: Perbarui Sistem dan Instal Dependensi
Pastikan sistem Anda diperbarui dan instal beberapa dependensi yang diperlukan:
```bash
sudo apt update
sudo apt upgrade -y
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

### Langkah 2: Menambahkan GPG Key Docker
Tambahkan kunci GPG Docker untuk memverifikasi paket yang diunduh:
```bash
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

### Langkah 3: Menambahkan Repositori Docker
Tambahkan repositori Docker untuk Debian:
```bash
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Perintah di atas akan menambahkan repositori Docker yang tepat untuk distribusi Debian Anda. `$(lsb_release -cs)` akan mengambil nama kode rilis Debian Anda (misalnya `bullseye`, `bookworm`, dll.).

### Langkah 4: Perbarui Daftar Paket
Setelah menambahkan repositori, perbarui daftar paket:
```bash
sudo apt update
```

### Langkah 5: Instal Docker
Sekarang Anda dapat menginstal Docker dengan perintah berikut:
```bash
sudo apt install docker-ce docker-ce-cli containerd.io -y
```

### Langkah 6: Verifikasi Instalasi Docker
Setelah instalasi selesai, pastikan Docker terinstal dengan benar dengan menjalankan perintah berikut:
```bash
sudo docker --version
```
Ini akan menampilkan versi Docker yang terinstal, jika instalasi berhasil.

### Langkah 7: Menguji Docker
Uji Docker dengan menjalankan perintah berikut untuk menarik dan menjalankan kontainer "hello-world":
```bash
sudo docker run hello-world
```
Jika Docker berhasil dijalankan, Anda akan melihat pesan yang menyatakan bahwa Docker berhasil diinstal dan berfungsi dengan baik.

### Langkah 8: Menjalankan Docker Tanpa `sudo` (Opsional)
Jika Anda ingin menjalankan perintah Docker tanpa `sudo`, tambahkan pengguna Anda ke grup `docker`:
```bash
sudo usermod -aG docker $USER
```
Setelah itu, logout dan login kembali, atau jalankan perintah berikut untuk mengaktifkan perubahan grup:
```bash
newgrp docker
```

### Langkah 9: Mengelola Layanan Docker (Opsional)
Untuk memastikan Docker selalu dimulai saat sistem booting, aktifkan layanan Docker dengan perintah:
```bash
sudo systemctl enable docker
```

Untuk memulai layanan Docker secara manual:
```bash
sudo systemctl start docker
```

Untuk memeriksa status layanan Docker:
```bash
sudo systemctl status docker
```

---

Dengan langkah-langkah di atas, Anda seharusnya dapat menginstal Docker di Debian dengan benar. Pastikan Anda mengikuti setiap langkah dengan cermat dan menggunakan repositori yang tepat untuk distribusi Debian Anda.
