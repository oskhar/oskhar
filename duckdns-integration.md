## ✅ 1. Simpan Skrip DuckDNS

### 📝 Buat File

```bash
mkdir -p ~/duckdns
cd ~/duckdns

nano duck.sh
```

### 🔽 Isi Lengkap `duck.sh`

```bash
#!/bin/bash

# === Konfigurasi DuckDNS ===
DOMAIN="yoursubdomain"
TOKEN="yourtoken"

# === Update IP ke DuckDNS ===
echo "Updating DuckDNS for $DOMAIN..."
RESPONSE=$(curl -s "https://www.duckdns.org/update?domains=$DOMAIN&token=$TOKEN&ip=")

# === Logging ===
DATE=$(date)
echo "$DATE - Update response: $RESPONSE" >> duck.log
```

### ✅ Simpan dan beri izin eksekusi:

```bash
chmod +x duck.sh
```

## ✅ 2. Tes Manual

```bash
./duck.sh
```

Lalu cek log:

```bash
cat duck.log
```

Jika berhasil, log akan berisi:

```
Mon May 27 12:00:00 UTC 2025 - Update response: OK
```

## ✅ 3. Tambahkan ke `crontab` agar berjalan otomatis

```bash
crontab -e
```

Tambahkan baris berikut di bawah:

```bash
*/5 * * * * /home/YOUR_USERNAME/duckdns/duck.sh >/dev/null 2>&1
```

Ganti `/home/YOUR_USERNAME/` sesuai dengan path user VM Anda, contoh:

```bash
*/5 * * * * /home/septianputra_pratama02/duckdns/duck.sh >/dev/null 2>&1
```

## 🔄 Verifikasi Otomatisasi

- Tunggu 5–10 menit.
- Cek apakah log `duck.log` terus terisi.
- Cek `ping samtek.duckdns.org` dari luar, pastikan IP-nya 34.101.144.246.
