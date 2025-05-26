## ✅ **1. Paling Mudah: Gunakan `nohup` + `&`**

Jalankan perintah ini dari folder tempat `mediamtx` dan `mediamtx.yml` berada:

```bash
nohup ./mediamtx mediamtx.yml > mediamtx.log 2>&1 &
```

### Penjelasan:

- `nohup`: agar tidak mati saat terminal ditutup
- `> mediamtx.log`: log output ditulis ke file
- `&`: menjalankan di background

### 🔍 Cek apakah berjalan:

```bash
ps aux | grep mediamtx
```

### 📄 Lihat log jika butuh debug:

```bash
tail -f mediamtx.log
```

## 🔄 **(Opsional) Matikan proses jika perlu**

```bash
pkill mediamtx
```

## 💡 **2. Lebih Rapi dan Otomatis: Buat Systemd Service**

Jika Anda ingin MediaMTX **otomatis berjalan saat boot**, gunakan cara ini.

### 📝 Buat file service:

```bash
sudo nano /etc/systemd/system/mediamtx.service
```

### 🔽 Isi dengan:

```ini
[Unit]
Description=MediaMTX Standalone Service
After=network.target

[Service]
ExecStart=/home/septianputra_pratama02/test/mediamtx /home/septianputra_pratama02/test/mediamtx.yml
WorkingDirectory=/home/septianputra_pratama02/test
Restart=always
RestartSec=5
StandardOutput=file:/var/log/mediamtx.log
StandardError=file:/var/log/mediamtx-error.log

[Install]
WantedBy=multi-user.target
```

### ✅ Simpan lalu jalankan:

```bash
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable mediamtx
sudo systemctl start mediamtx
```

### 🔍 Cek status:

```bash
sudo systemctl status mediamtx
```

### 📄 Lihat log:

```bash
cat /var/log/mediamtx.log
```

## 🟢 Rekomendasi

Jika Anda hanya ingin sekadar jalan di background saat ini, cukup pakai:

```bash
nohup ./mediamtx mediamtx.yml > mediamtx.log 2>&1 &
```
