Berikut adalah langkah-langkah untuk mengautentikasi konsol Anda ke GitHub menggunakan SSH:

---

### 1. Periksa Ketersediaan Kunci SSH
1. Buka terminal.
2. Periksa apakah Anda sudah memiliki kunci SSH:
   ```bash
   ls -al ~/.ssh
   ```
   - Jika Anda melihat file seperti `id_rsa` dan `id_rsa.pub`, Anda sudah memiliki kunci SSH.
   - Jika tidak ada, lanjutkan ke langkah berikutnya untuk membuat kunci SSH.

---

### 2. Buat Kunci SSH Baru (Jika Diperlukan)
1. Buat kunci SSH baru:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   - Ganti `"your_email@example.com"` dengan email yang terhubung ke akun GitHub Anda.
   - Jika Anda menggunakan versi OpenSSH lama yang tidak mendukung `ed25519`, gunakan `rsa`:
     ```bash
     ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
     ```

2. Ketika diminta lokasi penyimpanan, tekan `Enter` untuk menyimpan di lokasi default (`~/.ssh/id_ed25519` atau `~/.ssh/id_rsa`).

3. Jika diminta, masukkan passphrase untuk kunci SSH Anda (opsional).

---

### 3. Tambahkan Kunci SSH ke Agen SSH
1. Pastikan agen SSH berjalan:
   ```bash
   eval "$(ssh-agent -s)"
   ```

2. Tambahkan kunci SSH ke agen:
   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```
   - Jika Anda menggunakan RSA:
     ```bash
     ssh-add ~/.ssh/id_rsa
     ```

---

### 4. Tambahkan Kunci SSH ke Akun GitHub
1. Salin kunci publik Anda ke clipboard:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   - Jika Anda menggunakan RSA:
     ```bash
     cat ~/.ssh/id_rsa.pub
     ```

2. Masuk ke akun GitHub Anda.

3. Buka Settings → SSH and GPG keys → New SSH key.

4. Beri nama untuk kunci (misalnya, "My Arch Linux PC") dan tempelkan kunci publik Anda di kolom yang tersedia.

5. Klik Add SSH key.

---

### 5. Uji Koneksi SSH ke GitHub
1. Jalankan perintah berikut untuk menguji koneksi:
   ```bash
   ssh -T git@github.com
   ```

2. Jika berhasil, Anda akan melihat pesan seperti:
   ```
   Hi username! You've successfully authenticated, but GitHub does not provide shell access.
   ```

---

### 6. Konfigurasikan Git untuk Menggunakan SSH
1. Atur Git untuk menggunakan URL SSH saat mengkloning atau mengakses repositori:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your_email@example.com"
   ```

2. Saat mengkloning repositori, gunakan URL SSH:
   ```bash
   git clone git@github.com:username/repository.git
   ```

---

### Catatan Tambahan
- Jika Anda memiliki beberapa kunci SSH, gunakan file konfigurasi `~/.ssh/config` untuk mengatur kunci tertentu untuk GitHub:
  ```plaintext
  Host github.com
      HostName github.com
      User git
      IdentityFile ~/.ssh/id_ed25519
  ```

Dengan langkah-langkah ini, konsol Anda sekarang dapat terautentikasi dengan GitHub menggunakan SSH. 🎉
