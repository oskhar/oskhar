Pesan error "no modules loaded from context.modules" menunjukkan bahwa PipeWire tidak dapat memuat modul yang diperlukan untuk berfungsi dengan baik. Berikut adalah langkah-langkah untuk memperbaikinya:

---

### 1. Periksa File Konfigurasi Utama PipeWire
File konfigurasi utama biasanya terletak di `/etc/pipewire/pipewire.conf` atau `/usr/share/pipewire/pipewire.conf`.

1. Pastikan file konfigurasi ada:
   ```bash
   ls /etc/pipewire/pipewire.conf /usr/share/pipewire/pipewire.conf
   ```

   Jika salah satu file tidak ada, salin file default:
   ```bash
   sudo cp /usr/share/pipewire/pipewire.conf /etc/pipewire/pipewire.conf
   ```

2. Edit konfigurasi untuk memastikan modul dimuat:
   Buka file `/etc/pipewire/pipewire.conf`:
   ```bash
   sudo nano /etc/pipewire/pipewire.conf
   ```

   Cari bagian `context.modules` dan pastikan ada modul berikut:
   ```ini
   context.modules = [
       { name = libpipewire-module-rt }
       { name = libpipewire-module-protocol-native }
       { name = libpipewire-module-client-node }
       { name = libpipewire-module-metadata }
       { name = libpipewire-module-adapter }
       { name = libpipewire-module-link-factory }
       { name = libpipewire-module-client-device }
       { name = libpipewire-module-portal }
   ]
   ```

   Jika tidak ada, tambahkan secara manual.

---

### 2. Pastikan Semua Modul Terkait Terinstal
Pastikan PipeWire dan modulnya terinstal dengan benar.

1. Jalankan perintah ini untuk menginstal semua modul yang diperlukan:
   ```bash
   sudo pacman -S pipewire pipewire-pulse pipewire-alsa pipewire-jack wireplumber
   ```

2. Pastikan Anda menginstal versi 32-bit jika diperlukan:
   ```bash
   sudo pacman -S lib32-pipewire lib32-pipewire-jack
   ```

---

### 3. Reset Konfigurasi PipeWire
Jika konfigurasi sebelumnya telah dimodifikasi atau rusak, reset ke pengaturan default.

1. Hapus konfigurasi pengguna:
   ```bash
   rm -rf ~/.config/pipewire
   ```

2. Salin konfigurasi default ke `/etc/pipewire`:
   ```bash
   sudo cp -r /usr/share/pipewire/* /etc/pipewire/
   ```

---

### 4. Periksa dan Aktifkan WirePlumber
WirePlumber adalah session manager yang penting untuk memuat modul.

1. Periksa status WirePlumber:
   ```bash
   systemctl --user status wireplumber
   ```

2. Jika tidak aktif, aktifkan WirePlumber:
   ```bash
   systemctl --user enable --now wireplumber
   ```

3. Pastikan WirePlumber terhubung ke PipeWire:
   ```bash
   systemctl --user restart pipewire wireplumber
   ```

---

### 5. Restart PipeWire
Setelah melakukan perubahan, restart layanan PipeWire:
```bash
systemctl --user restart pipewire
systemctl --user restart pipewire-pulse
```

---

### 6. Debug dengan Log PipeWire
Jika masalah masih berlanjut, aktifkan debugging untuk PipeWire.

1. Jalankan PipeWire dalam mode debug:
   ```bash
   PIPEWIRE_DEBUG=3 pipewire
   ```

2. Periksa log layanan:
   ```bash
   journalctl --user -u pipewire -u pipewire-pulse
   ```

---

### 7. Reinstall PipeWire
Jika semua langkah di atas tidak berhasil, coba reinstall PipeWire:
```bash
sudo pacman -Rns pipewire
sudo pacman -S pipewire pipewire-pulse pipewire-alsa pipewire-jack wireplumber
```

---

### 8. Tes dan Verifikasi
Setelah melakukan semua langkah:
1. Uji dengan aplikasi yang membutuhkan audio, seperti `speaker-test`:
   ```bash
   speaker-test -c2 -r48000 -t wav
   ```

2. Periksa apakah layanan PipeWire berjalan tanpa error:
   ```bash
   systemctl --user status pipewire
   systemctl --user status wireplumber
   ```

Jika masalah masih terjadi, bagikan hasil log setelah langkah-langkah ini untuk analisis lebih lanjut! 😊
