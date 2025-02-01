Berikut adalah cara untuk mengirim file atau Directory local ke salah satu instance dalam compute engine menggunakan google cloud cli

```bash
gcloud compute scp -r ./mydirectory instance-name:/home/your-user
```

Cara unzip ke Directory tujuan

```bash
unzip archive.zip -d /dir/tujuan/
```

Cara mengirim file menggunakan scp jika berada di local

```bash
scp /dir/namafile username@hostname:/home/username/
```
