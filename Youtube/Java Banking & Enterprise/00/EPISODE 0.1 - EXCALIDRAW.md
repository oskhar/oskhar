# STORYBOARD EXCALIDRAW AUDIO-SYNCED v2
## Video: Kenapa Playlist Ini Dibuat?
### Cube Programming | Java → Software Engineering → Banking

> **Tujuan revisi:** storyboard ini disusun sebagai panduan editing berdasarkan audio. Setiap paragraf naskah memiliki blok `AUDIO CUE`, lalu `DRAW`, `MOVE`, `CAMERA`, dan `HOLD`. Jadi editor bisa mencari frase yang terdengar di waveform, memberi marker, lalu menjalankan perubahan Excalidraw tepat pada frase tersebut.
>
> **Catatan penting:** kata pengisi seperti “ges”, “temen-temen”, “oke”, atau “gitu aja” tidak perlu diberi ilustrasi baru satu per satu. Semua gagasan substantif, objek, hubungan, contoh, masalah, perubahan state, dan kesimpulan harus terlihat secara eksplisit. Targetnya adalah **setiap ide yang diucapkan mempunyai padanan visual**, bukan layar yang panik membuat doodle setiap 0,4 detik.

---

# 0. SISTEM VISUAL GLOBAL

## 0.1 Bentuk

Gunakan rounded rectangle, tulisan tangan, arrow, circle, sticky note, token transaksi, dan box monospaced untuk kode.

Warna jangan terlalu ramai:

```text
NORMAL      = hitam / abu
FAILURE     = merah
VERIFIED    = hijau
FOCUS       = circle / frame
```

## 0.2 Grammar movement

```text
DRAW-IN      = konsep baru
ARROW        = hubungan / sebab-akibat
TOKEN MOVE   = transaksi / aksi
DUPLICATE    = concurrency / retry / duplicate
SPLIT        = decomposition
MERGE        = reconciliation
X            = failure / asumsi salah
PULSE        = uncertain / penting
ERASE        = model lama ditinggalkan
ZOOM IN      = “kenapa / bagaimana / apa yang terjadi”
ZOOM OUT     = melihat konteks besar
PAN          = berpindah fase
```

## 0.3 Object recurring

### TX-001

Gunakan satu token:

```text
[TX-001]
```

Token ini muncul berulang dari cross-border transaction → API → concurrency → ledger → Kafka → timeout → production. Ini membuat seluruh video terasa seperti membedah satu transaksi yang sama dari sudut pandang berbeda.

### Master Roadmap

Simpan mini roadmap di pojok kanan atas:

```text
JAVA
 ↓
ENGINEERING
 ↓
BACKEND
 ↓
BANKING
 ↓
SYSTEM DESIGN
 ↓
MICROSERVICES
 ↓
DISTRIBUTED
 ↓
EVENT-DRIVEN
 ↓
BANKING COMPLEXITY
 ↓
PRODUCTION
```

Node yang sedang dibahas dilingkari.

### Complexity Meter

```text
COMPLEXITY
███░░░░░░░
```

Naik bertahap sepanjang video.

---

# 1. FORMAT MARKER AUDIO

Untuk editing, tandai waveform dengan format berikut:

```text
A01 = opening identity
A02 = playlist purpose
A03 = cross-border problem
...
```

Pada setiap marker:

1. audio phrase dimulai,
2. objek yang terkait mulai digambar/bergerak,
3. saat gagasan selesai, state visual harus sudah lengkap,
4. hold sebentar sebelum pindah ide.

---

# 2. OPENING — IDENTITY, BRANDING, DAN CTA AWAL

## Paragraf naskah

> “Halo ges kembali lagi di channel cube programming, buat yang belum kenal perkenalkan nama gua oskhar saat ini gua bekerja sebagai software engineer di salah satu bank internasional, dan gua biasanya buat konten di waktu waktu senggang, jadi maaf kalau lama banget update video, gua juga biasanya suka ngajar private dan side project freelance, jadi buat yang butuh mentor private programming atau butuh rekan project buat ngebantu develop dan sempurnain app kalian bisa chat atau dm aja, so mari kita langsung masuk saja ke pembahasannya”

## A01.1 — “kembali lagi di channel cube programming”

**DRAW**

```text
CUBE PROGRAMMING
```

Tambahkan cube kecil di kiri.

**MOVE**: cube digambar tiga garis, kemudian teks ditulis.

**CAMERA**: medium static.

**HOLD**: 0.5 detik.

## A01.2 — “buat yang belum kenal perkenalkan nama gua oskhar”

**DRAW**

```text
OSKHAR
```

**MOVE**: nama muncul setelah kata “oskhar”.

**CAMERA**: zoom-in ringan.

## A01.3 — “saat ini gua bekerja sebagai software engineer”

**DRAW**

```text
OSKHAR
   ↓
SOFTWARE ENGINEER
```

**MOVE**: arrow digambar ketika “sebagai” terdengar.

## A01.4 — “di salah satu bank internasional”

**DRAW**

```text
┌──────────────────┐
│ INTERNATIONAL    │
│ BANK 🌐          │
└──────────────────┘
```

**MOVE**: arrow dari SOFTWARE ENGINEER → bank.

**CAMERA**: pan mengikuti arrow.

## A01.5 — “gua biasanya buat konten di waktu waktu senggang”

**DRAW**

```text
WORK → FREE TIME → CONTENT
```

**MOVE**: icon jam bergerak menuju FREE TIME, lalu token kecil menuju CONTENT.

## A01.6 — “maaf kalau lama banget update video”

**DRAW**

```text
CALENDAR
MON TUE WED THU FRI
      ...
VIDEO UPDATE?
```

**MOVE**: pointer berhenti di `...`, hourglass muncul.

## A01.7 — “suka ngajar private dan side project freelance”

**DRAW**

```text
          ┌──────────┐
          │ TEACHING │
          └──────────┘
OSKHAR
          ┌──────────┐
          │ FREELANCE│
          └──────────┘
```

**MOVE**: dua kartu masuk dari dua arah berbeda.

## A01.8 — “buat yang butuh mentor private programming”

**DRAW**

```text
PRIVATE PROGRAMMING
MENTOR
```

**MOVE**: card turun dari atas.

## A01.9 — “butuh rekan project”

**DRAW**

```text
PROJECT PARTNER
```

**MOVE**: card bergeser masuk ke samping mentor.

## A01.10 — “ngebantu develop dan sempurnain app kalian”

**DRAW**

```text
PROJECT
  ↓
DEVELOP
  ↓
IMPROVE APP
```

**MOVE**: ikon app bergerak melewati tiga state.

## A01.11 — “bisa chat atau dm aja”

**DRAW**

```text
CHAT / DM
```

**MOVE**: bubble notification muncul dan pulse sekali.

## A01.12 — “mari kita langsung masuk saja ke pembahasannya”

**MOVE**: seluruh identity cards bergeser ke kiri; canvas tengah dibersihkan.

**DRAW**:

```text
WHY THIS PLAYLIST?
```

**CAMERA**: pan horizontal menuju canvas baru.

---

# 3. OPENING — PROGRAMMING → SOFTWARE → BANKING

## Paragraf naskah

> “jadi temen temen, gua berencana mau bikin playlist belajar programming terus memperdalam pemikiran tentang software dan sebagai perantara mempersiapkan diri di dunia perbankan, beberapa orang mungkin penasaran tentang gimana si programming di perbankan dan seberapa sulit menghandle transaksi besar di berbagai negara, karena kita pun tau bank di tiap tiap negara itu pasti punya regulasi masing masing terhadap uang dan kita ga bisa sembarangan ngoding”

## A02.1 — “playlist belajar programming”

**DRAW** `PROGRAMMING` dengan ikon `<>`.

**MOVE**: draw-in.

## A02.2 — “memperdalam pemikiran tentang software”

**DRAW**

```text
PROGRAMMING
      ↓
SOFTWARE ENGINEERING
```

Tambahkan gear kecil pada SOFTWARE ENGINEERING.

## A02.3 — “mempersiapkan diri di dunia perbankan”

**DRAW**

```text
PROGRAMMING
      ↓
SOFTWARE ENGINEERING
      ↓
BANKING
```

`BANKING` dibuat paling besar.

**MOVE**: focus circle pada BANKING.

## A02.4 — “gimana si programming di perbankan”

**DRAW**

```text
PROGRAMMING   ?   BANKING
```

**MOVE**: `?` pulse dua kali.

## A02.5 — “seberapa sulit menghandle transaksi besar”

**DRAW**

```text
[TX-001]
Rp2.000.000.000
```

**MOVE**: token membesar sedikit dan bergerak.

## A02.6 — “di berbagai negara”

**DRAW**

```text
INDONESIA ─────────→ GERMANY
     │
     └────────────→ SINGAPORE
```

**MOVE**: TX-001 bergerak ID → Germany. Lalu jalur visual berikutnya ke Singapore.

## A02.7 — “bank di tiap tiap negara”

**DRAW** tiga bank nodes di masing-masing negara.

**MOVE**: setiap node dibuka satu per satu.

## A02.8 — “punya regulasi masing masing terhadap uang”

**DRAW** constraint masuk:

```text
REGULATION
CURRENCY
PAYMENT RULE
ROUTING
ACCOUNT IDENTIFIER
```

**MOVE**: satu constraint dari satu arah, sampai TX-001 dikelilingi lima constraint.

## A02.9 — “ga bisa sembarangan ngoding”

**DRAW** shortcut:

```text
CODE
 ↓
BANK
```

**MOVE**: X besar melintasi arrow.

Lalu morph menjadi:

```text
CODE
 ↓
BUSINESS RULE
 ↓
VALIDATION
 ↓
TRANSACTION
 ↓
BANKING SYSTEM
```

**CAMERA**: zoom-in pada X lalu pull-back.

**HOLD**: 1 detik pada layered flow.

---

# 4. OPENING — RELEVANSI, GAP, DAN HARAPAN PLAYLIST

## Paragraf naskah

> “karena kebetulan gua juga relevan untuk membahas ini karena gua terbiasa menghandle transaksi B2B di luar negeri, dan karena belum ada juga channel youtube fokus ke bidang ini jadi ini pastinya bakal menarik, gua harap dengan playlist ini kalian jadi programmer handal dan keterima di bank2 besar temen temen, kita akan bahas ini perlahan dari yang paling basic, gua usahakan sebisa mungkin bikin orang yang awam pun bisa mengikuti pembelajaran dengan baik sampai benar benar mahir”

## A03.1 — “relevan untuk membahas ini”

**DRAW** `OSKHAR → B2B BANKING`

## A03.2 — “transaksi B2B di luar negeri”

**DRAW**

```text
COMPANY A
   ↓
[TX-001]
   ↓
BANK
   ↓
FOREIGN BANK
```

`B2B` + `CROSS-BORDER` muncul di atas.

**MOVE**: TX-001 bergerak sepanjang alur.

## A03.3 — “belum ada juga channel youtube fokus ke bidang ini”

**DRAW** banyak kartu:

```text
JAVA
JAVA
JAVA
JAVA
```

Lalu satu ruang kosong diberi label:

```text
JAVA FOR BANKING
?
```

**MOVE**: kartu umum bergeser ke kiri, ruang gap terbuka.

## A03.4 — “ini pastinya bakal menarik”

**DRAW** circle pada `JAVA FOR BANKING`.

**MOVE**: pulse sekali.

## A03.5 — “jadi programmer handal dan keterima di bank2 besar”

**DRAW**

```text
LEARN
 ↓
BUILD
 ↓
UNDERSTAND
 ↓
READY FOR BANKING
```

Ikon bank generik di endpoint.

## A03.6 — “dari yang paling basic”

**DRAW**

```text
BASIC
```

## A03.7 — “orang yang awam”

**DRAW**

```text
BEGINNER
```

Pointer mulai dari BEGINNER.

## A03.8 — “sampai benar benar mahir”

**DRAW**

```text
BEGINNER → PRACTICE → MASTER
```

**MOVE**: pointer mengikuti tiga state.

---

# 5. BODY — MASTER ROADMAP

## Paragraf naskah

> “Oke temen temen, kurang lebih ini yang bakal kita pelajari di playlist yang akan gua buat.”

Saat kata “ini yang bakal kita pelajari” terdengar, **canvas wajib berpindah ke MASTER ROADMAP**.

**DRAW SEKUENSIAL**

```text
JAVA
 ↓
JAVA ENGINEERING
 ↓
BACKEND
 ↓
BANKING BACKEND
 ↓
SYSTEM DESIGN
 ↓
MICROSERVICES
 ↓
DISTRIBUTED SYSTEM
 ↓
EVENT-DRIVEN
 ↓
BANKING COMPLEXITY
 ↓
PRODUCTION ENGINEERING
```

**MOVE**: node hanya muncul saat topik pertama kali disebut di audio. Jangan reveal seluruh roadmap terlalu awal. Versi final baru tampil ketika kalimat selesai.

**CAMERA**: follow node yang baru disebut.

**HOLD**: 1 detik setelah roadmap lengkap.

---

# 6. BODY — JAVA SECUKUPNYA

## Paragraf naskah

> “Pertama, kita akan membahas Java secukupnya – perlahan tapi pasti, ga sampai detail banget yang bikin pusing, tapi cukup sebagai pondasi kita di awal.”

## B01.1 — “Pertama”

Mini roadmap focus pindah ke `JAVA`.

## B01.2 — “Java secukupnya”

**DRAW**

```text
JAVA
┌───────────────┐
│ FUNDAMENTALS  │
│ OOP           │
│ COLLECTION    │
│ EXCEPTION     │
│ STREAM        │
└───────────────┘
```

## B01.3 — “perlahan tapi pasti”

**DRAW**

```text
BASIC → PRACTICE → FOUNDATION
```

**MOVE**: arrow satu-satu.

## B01.4 — “ga sampai detail banget yang bikin pusing”

**DRAW**

```text
JAVA A → Z
```

**MOVE**: coret `JAVA A → Z`.

## B01.5 — “cukup sebagai pondasi kita di awal”

**DRAW**

```text
JAVA
────────────
FOUNDATION
────────────
ENGINEERING
```

**CAMERA**: zoom out. Daftar fundamentals mengecil relatif terhadap roadmap.

---

# 7. BODY — JAVA ENGINEERING + JAVA INTERNAL

## Paragraf naskah

> “Dari situ kita akan masuk ke java engineering seperti clean code dan design pattern, lalu mengupas sedikit internal Java agar kita paham bagaimana program kita berjalan di balik layar.”

## B02.1 — “java engineering”

**DRAW** arrow JAVA → JAVA ENGINEERING.

## B02.2 — “clean code”

**DRAW** comparison:

```text
BAD CODE               CLEAN CODE
method()               readable
method2()              clear
???                    maintainable
```

**MOVE**: kiri sedikit berantakan, kanan rapi.

## B02.3 — “design pattern”

**DRAW** puzzle/pattern kecil:

```text
DESIGN + PATTERN
```

Masuk ke kolom clean.

## B02.4 — “internal Java”

**CAMERA** zoom masuk ke `JAVA CODE`.

**DRAW**

```text
JAVA CODE
   ↓
BYTECODE
   ↓
JVM
```

## B02.5 — “berjalan di balik layar”

**DRAW** buka JVM:

```text
┌────────────────────┐
│ JVM                │
│ Heap               │
│ Stack              │
│ Garbage Collector  │
│ JIT                │
└────────────────────┘
       ↓
      CPU
       ↓
PROGRAM RUNNING
```

**MOVE**: camera “masuk” dari Java Code ke JVM kemudian keluar ke CPU.

---

# 8. BODY — CONCURRENCY BANKING

## Paragraf naskah

> “Setelah itu, kita langsung ke studi kasus concurrency dengan konteks banking: misalnya dua transaksi uang yang berjalan bersamaan, kenapa bisa ada race condition, dan bagaimana cara memperbaikinya.”

## B03.1 — “concurrency dengan konteks banking”

**DRAW**

```text
ACCOUNT A
Balance = Rp1.000.000
```

## B03.2 — “dua transaksi uang”

**DRAW**

```text
REQUEST A
Withdraw Rp700.000

REQUEST B
Withdraw Rp700.000
```

## B03.3 — “yang berjalan bersamaan”

**MOVE** kedua request bergerak paralel menuju DB. Jangan berurutan.

```text
REQUEST A ─────┐
               ├──→ DATABASE
REQUEST B ─────┘
```

## B03.4 — “kenapa bisa ada race condition”

**DRAW**

```text
A READ 1.000.000
B READ 1.000.000
```

**MOVE** dua read muncul hampir bersamaan lalu dua state berubah:

```text
A → 300.000
B → 300.000
```

## B03.5 — “bagaimana cara memperbaikinya”

**DRAW**

```text
RACE CONDITION ✕
       ↓
TRANSACTION
LOCK
```

**CAMERA**: zoom ke failure, lalu pull-back.

Jangan menjelaskan implementasi solusi. Ini teaser menuju episode concurrency.

---

# 9. BODY — BACKEND: REST API, DB, TRANSACTION

## Paragraf naskah

> “Selanjutnya kita lanjut ke membangun backend, kita belajar membuat REST API dengan Java, koneksi ke DB, serta manajemen transaksi agar data tetap aman.”

## B04.1 — “membangun backend”

**DRAW**

```text
CLIENT
 ↓
BACKEND
```

## B04.2 — “REST API dengan Java”

**DRAW**

```text
CLIENT
 │
 │ POST /transfer
 ▼
CONTROLLER
```

**MOVE** TX-001 bergerak Client → Controller.

## B04.3 — “koneksi ke DB”

**DRAW**

```text
CONTROLLER
 ↓
SERVICE
 ↓
DATABASE
```

## B04.4 — “manajemen transaksi”

**DRAW**

```text
BEGIN
 ↓
UPDATE
 ↓
COMMIT ✓
```

Branch:

```text
UPDATE
 ↓
ERROR ✕
 ↓
ROLLBACK
```

## B04.5 — “data tetap aman”

Frame seluruh flow dengan label:

```text
DATA CONSISTENCY
```

---

# 10. BODY — SPRING ENTERPRISE

## Paragraf naskah

> “Langkah berikutnya adalah Spring Enterprise: kenapa Spring populer dan bagaimana menggunakannya untuk menyusun aplikasi yang terstruktur.”

## B05.1 — “Spring Enterprise”

**DRAW** `SPRING`.

## B05.2 — “kenapa Spring populer”

**DRAW** empat cards masuk satu per satu:

```text
DEPENDENCY INJECTION
TRANSACTION
CONFIGURATION
TESTING
```

## B05.3 — “menyusun aplikasi yang terstruktur”

**DRAW** state berantakan:

```text
EVERYTHING
Controller
Business Logic
Database
Config
Transaction
```

**MOVE** kotak pecah menjadi:

```text
CONTROLLER
   ↓
SERVICE
   ↓
REPOSITORY
   ↓
DATABASE
```

**CAMERA**: zoom sedikit saat decomposition terjadi.

---

# 11. BODY — BANKING BACKEND

## Paragraf naskah

> “Setelah Spring, kita masuk ke banking backend – di sinilah kita memodelkan akun, penarikan, penyetoran, transfer antar-rekening, sampai audit trail-nya.”

## B06.1 — “banking backend”

**DRAW** hero label:

```text
BANKING BACKEND
```

## B06.2 — “memodelkan akun”

```text
CUSTOMER
   ↓
ACCOUNT
```

## B06.3 — “penarikan”

```text
WITHDRAW
- Rp700K
```

**MOVE** money token keluar.

## B06.4 — “penyetoran”

```text
DEPOSIT
+ Rp1M
```

**MOVE** money token masuk.

## B06.5 — “transfer antar-rekening”

```text
ACCOUNT A
   ↓ -Rp2M
TRANSFER
   ↓ +Rp2M
ACCOUNT B
```

TX-001 bergerak A → Transfer → B.

## B06.6 — “audit trail”

**DRAW**

```text
AUDIT TRAIL
TX-001
WHO
WHEN
WHAT
STATUS
```

**MOVE** record baru masuk ketika transfer selesai.

---

# 12. BODY — TESTING DAN PERFORMANCE

## Paragraf naskah

> “Sambil membangun itu semua, kita juga belajar testing dan performance: bagaimana mengukur kecepatan API, menemukan bottleneck di DB atau thread, serta memahami metrik seperti p50, p95, p99.”

## B07.1 — “testing”

**DRAW**

```text
TEST CASE
─────────────────────
Normal Transfer       ✓
Insufficient Balance  ✓
Duplicate Transfer    ✕
DB Failure            ✕
Timeout               ✕
```

**MOVE** checklist terisi satu-satu.

## B07.2 — “performance”

**DRAW** request path:

```text
CLIENT → API → SERVICE → DATABASE
```

## B07.3 — “mengukur kecepatan API”

**DRAW/MOVE**

```text
100 req/s
500 req/s
1000 req/s
```

Request token makin padat.

## B07.4 — “bottleneck di DB”

**DRAW**

```text
┌──────────────────┐
│ DATABASE         │
│       🔥         │
│ BOTTLENECK       │
└──────────────────┘
```

**CAMERA** zoom ke DB.

## B07.5 — “atau thread”

**DRAW**

```text
THREAD 1 ████████
THREAD 2 ████████
THREAD 3 ████████
WAIT...
```

## B07.6 — “p50, p95, p99”

**DRAW** tiga garis:

```text
p50 ─────
p95 ─────────────
p99 ───────────────────
```

**MOVE** tiap garis muncul tepat pada kata metriknya.

---

# 13. BODY — SYSTEM DESIGN

## Paragraf naskah

> “Kemudian kita naik level ke system design: bagaimana melihat requirement bukan cuma saat ini tapi skala besar, soal scalability, Availability, dan konsistensi data.”

## B08.1 — “naik level ke system design”

**DRAW**

```text
LEVEL UP
   ↓
SYSTEM DESIGN
```

## B08.2 — “requirement bukan cuma saat ini”

**DRAW**

```text
TODAY
```

## B08.3 — “tapi skala besar”

**MOVE/DRAW**

```text
1.000 USERS
      ↓
100.000 USERS
      ↓
1.000.000 USERS
```

Kamera zoom out sedikit setiap angka naik.

## B08.4 — “scalability, Availability, dan konsistensi data”

**DRAW** cards:

```text
SCALABILITY
AVAILABILITY
CONSISTENCY
```

Muncul satu per satu.

---

# 14. BODY — MICROSERVICES DAN DECOMPOSITION

## Paragraf naskah

> “Setelah itu baru kita bahas microservices – bukan untuk sekadar ikut tren, tapi untuk melihat perbedaan arsitektur.”

## B09.1 — “microservices”

**DRAW** monolith:

```text
┌─────────────────────────┐
│ ACCOUNT                 │
│ TRANSFER                │
│ PAYMENT                 │
│ LEDGER                  │
│ NOTIFICATION            │
└─────────────────────────┘
```

## B09.2 — “bukan untuk sekadar ikut tren”

**DRAW** stamp:

```text
TREND?
```

X merah.

## B09.3 — “melihat perbedaan arsitektur”

**MOVE** garis pemisah membelah monolith.

Morph menjadi:

```text
┌─────────┐  ┌──────────┐
│ ACCOUNT │  │ TRANSFER │
└─────────┘  └──────────┘

┌─────────┐  ┌─────────┐
│ LEDGER  │  │ PAYMENT │
└─────────┘  └─────────┘
```

---

# 15. BODY — SERVICE, TRANSAKSI TERDISTRIBUSI, KOMUNIKASI

## Paragraf naskah

> “Misalnya, kita akan praktek memecah aplikasi bank kita menjadi beberapa service (account service, transfer service, dll), lalu menyelami masalah baru seperti transaksi terdistribusi dan komunikasi antar-service.”

## B10.1 — “memecah aplikasi bank kita menjadi beberapa service”

**DRAW/MOVE** monolith split menjadi:

```text
ACCOUNT SERVICE
TRANSFER SERVICE
PAYMENT SERVICE
LEDGER SERVICE
```

## B10.2 — “transaksi terdistribusi”

**DRAW**

```text
ACCOUNT SERVICE
      ↓
TRANSFER SERVICE
      ↓
LEDGER SERVICE
```

Label:

```text
DISTRIBUTED TRANSACTION
```

## B10.3 — “komunikasi antar-service”

**MOVE** TX-001 bergerak antar service dengan panah dua arah.

---

# 16. BODY — DISTRIBUTED SYSTEM: NETWORK FAILURE → TIMEOUT → RETRY → IDEMPOTENCY

## Paragraf naskah

> “Selanjutnya kita masuk ke distributed systems secara umum: kita belajar tentang kegagalan jaringan, retry, timeout, dan idempotenitas dalam distributed system.”

## B11.1 — “distributed systems secara umum”

```text
SERVICE A
   │
REQUEST
   │
   ▼
SERVICE B
```

## B11.2 — “kegagalan jaringan”

**MOVE** garis dipotong:

```text
SERVICE A
   │
   X NETWORK FAILURE
   │
SERVICE B
```

## B11.3 — “retry”

```text
RETRY
 ↓
REQUEST AGAIN
```

TX-001 bergerak balik.

## B11.4 — “timeout”

```text
TIMEOUT ⏳
```

Clock pulse.

## B11.5 — “idempotenitas”

**DRAW**

```text
request_id = TX-001
```

Kemudian duplicate:

```text
TX-001
TX-001
TX-001
```

## B11.6 — hasil visual idempotency

```text
TX-001 → PROCESS ✓
TX-001 → IGNORE
TX-001 → IGNORE
```

**MOVE** hanya request pertama melewati database gate.

**HOLD** 1.2 detik.

---

# 17. BODY — EVENT-DRIVEN + KAFKA

## Paragraf naskah

> “Lalu kita akan membahas event-driven architecture dengan Java: kenapa tidak semua komunikasi harus synchronous, dan bagaimana Kafka atau message broker digunakan dalam sistem bank. Kita kupas konsep seperti partition, consumer group, delivery semantics (at-most-once, at-least-once, exactly-once), retry, dan dead letter queue.”

## B12.1 — “event-driven architecture dengan Java”

State awal synchronous:

```text
TRANSFER
  ├──→ LEDGER
  └──→ NOTIFICATION
```

## B12.2 — “tidak semua komunikasi harus synchronous”

Notification diberi jam tunggu:

```text
NOTIFICATION ⏳
```

Lalu morph:

```text
TRANSFER
   ↓
 KAFKA
 ↙   ↘
LEDGER NOTIFICATION
```

## B12.3 — “Kafka atau message broker”

**CAMERA** zoom ke broker.

**DRAW**

```text
┌──────────────────┐
│ KAFKA            │
├──────────────────┤
│ Partition 0      │
│ Partition 1      │
│ Partition 2      │
└──────────────────┘
```

## B12.4 — “consumer group”

```text
CONSUMER GROUP
 ├── LEDGER
 └── NOTIFICATION
```

## B12.5 — “delivery semantics”

Muncul tiga label:

```text
AT-MOST-ONCE
AT-LEAST-ONCE
EXACTLY-ONCE
```

Masing-masing muncul pada kata yang sesuai.

## B12.6 — “retry”

Event gagal → `RETRY`.

## B12.7 — “dead letter queue”

Gagal lagi →

```text
DLQ ✕
```

**MOVE** event berpindah ke DLQ.

---

# 18. BODY — INTI: BANKING ENGINEERING

## Paragraf naskah

> “Setelah itu, yang menjadi inti playlist ini: engineering di dunia banking. Di sinilah kita eksplor soal money, balance, ledger, debit/credit, transaksi ganda, dan rekonsiliasi.”

## B13.1 — “yang menjadi inti playlist ini”

**MOVE** semua roadmap node mengecil kecuali `BANKING COMPLEXITY`.

Circle besar pada node itu.

## B13.2 — “engineering di dunia banking”

**DRAW**

```text
BANKING ENGINEERING
```

## B13.3 — “money”

Token:

```text
Rp2M
```

## B13.4 — “balance”

```text
ACCOUNT A
Balance = Rp10M
```

## B13.5 — “ledger”

Buku/box:

```text
LEDGER
```

## B13.6 — “debit/credit”

Dua kolom:

```text
DEBIT | CREDIT
```

## B13.7 — “transaksi ganda”

Duplicate TX-001:

```text
TX-001
TX-001
```

## B13.8 — “rekonsiliasi”

```text
DEBIT ───┐
         ├──→ RECONCILIATION ✓
CREDIT ──┘
```

**MOVE** dua sisi merge.

---

# 19. BODY — TRANSFER ≠ BALANCE -= AMOUNT

## Paragraf naskah

> “Misalnya kita akan pelajari mengapa transfer uang bukan sekadar kurangi dan tambah angka di DB, kenapa perlu double-entry accounting, apa yang terjadi saat dua proses withdrawal bertabrakan, atau bagaimana menangani transaksi yang tidak pasti statusnya (timeout pembayaran misalnya).”

## B14.1 — “transfer uang bukan sekadar kurangi dan tambah angka di DB”

**DRAW**

```java
balance -= amount;
balance += amount;
```

**MOVE** X besar.

## B14.2 — “double-entry accounting”

**DRAW/MOVE**

```text
TRANSFER
 ↓
DEBIT
 ↓
CREDIT
 ↓
LEDGER
```

Kemudian:

```text
TOTAL DEBIT = TOTAL CREDIT
```

Circle pada equality.

## B14.3 — “dua proses withdrawal bertabrakan”

Kembali sebentar ke concurrency scene.

```text
WITHDRAW A ↘
           COLLISION
WITHDRAW B ↗
```

X merah.

## B14.4 — “transaksi yang tidak pasti statusnya”

**DRAW**

```text
TRANSFER
   ↓
UNKNOWN ?
```

Pulse pada `UNKNOWN`.

## B14.5 — “timeout pembayaran misalnya”

```text
EXTERNAL PAYMENT
       ↓
    TIMEOUT
       ↓
SUCCESS?
FAILED?
UNKNOWN?
```

---

# 20. BODY — SPRING DEEP DIVE

## Paragraf naskah

> “Selain itu, kita bongkar Spring secara mendalam – misalnya apa sebenarnya terjadi ketika kita menggunakan @Transactional, kenapa terkadang transaksi Spring tidak berjalan sesuai harapan, dan bagaimana cara kerjanya di balik layar.”

## B15.1 — “bongkar Spring secara mendalam”

**CAMERA** kembali ke Spring board dan zoom-in.

## B15.2 — “apa sebenarnya terjadi ketika kita menggunakan @Transactional”

**DRAW**

```java
@Transactional
public transfer() {
    ...
}
```

Arrow menuju:

```text
SPRING
 ↓
PROXY
 ↓
TRANSACTION MANAGER
 ↓
DATABASE
```

## B15.3 — “transaksi Spring tidak berjalan sesuai harapan”

**DRAW**

```text
EXPECTED
BEGIN → METHOD → COMMIT

ACTUAL?
?
```

`?` pulse.

## B15.4 — “bagaimana cara kerjanya di balik layar”

**CAMERA** zoom dari annotation → Proxy → Transaction Manager → DB.

---

# 21. BODY — JVM COMPLEXITY LAB

## Paragraf naskah

> “Kita juga lihat JVM complexity lab: misal kenapa aplikasi Java bisa boros memori, bagaimana mencari memory leak, profiling, dan mengatasi latency spike.”

## B16.1 — “JVM complexity lab”

JVM box terbuka.

## B16.2 — “boros memori”

```text
HEAP
████
██████
██████████
██████████████
```

**MOVE** bar terisi perlahan.

## B16.3 — “memory leak”

Tetes kecil keluar dari heap:

```text
MEMORY LEAK
```

## B16.4 — “profiling”

```text
PROFILER
 ↓
CPU / HEAP / THREAD
```

## B16.5 — “latency spike”

```text
LATENCY
  ↑
  │       /\
  │      /  \
  │_____/    \____
```

**MOVE** line naik tajam tepat pada “spike”.

---

# 22. BODY — ARCHITECTURE COMPLEXITY, MONOLITH, MICROSERVICES

## Paragraf naskah

> “Kemudian kita masuk ke architecture complexity: kapan monolith masih lebih mudah, kapan microservices harus dipakai, sampai detail bounded context dan DDD.”

## B17.1 — “architecture complexity”

Complexity meter naik satu tingkat.

## B17.2 — “kapan monolith masih lebih mudah”

```text
MONOLITH
✓?
SIMPLE
CHEAPER
EASIER
```

Jangan tandai semua sebagai kebenaran universal, gunakan tanda `?` atau konteks.

## B17.3 — “kapan microservices harus dipakai”

```text
MICROSERVICES
?
FLEXIBLE
SCALABLE
DISTRIBUTED
```

## B17.4 — “bounded context”

**DRAW boundary kuat:**

```text
┌──────────────────┐  ┌──────────────────┐
│ ACCOUNT CONTEXT  │  │ PAYMENT CONTEXT  │
│ Customer         │  │ Payment          │
│ Account          │  │ Provider         │
│ Balance          │  │ Status           │
└──────────────────┘  └──────────────────┘
```

## B17.5 — “DDD”

Label parent:

```text
DOMAIN-DRIVEN DESIGN
```

---

# 23. BODY — CQRS

## Paragraf naskah

> “Kita bahas juga CQRS – mengapa dipisah command dan query...”

## B18.1 — “CQRS”

```text
APPLICATION
```

## B18.2 — “dipisah command dan query”

```text
             APPLICATION
              /       \
        COMMAND       QUERY
           ↓            ↓
        WRITE DB      READ DB
```

## B18.3 — “command”

```text
COMMAND
= CHANGE STATE
```

## B18.4 — “query”

```text
QUERY
= READ STATE
```

**MOVE**: split terjadi saat kata “dipisah”.

---

# 24. BODY — EVENT SOURCING

## Paragraf naskah

> “serta event sourcing – kapan menyimpan event jadi masuk akal atau terlalu overengineering.”

## B19.1 — “event sourcing”

**DRAW** timeline:

```text
EVENT 1  DEPOSIT +10M
EVENT 2  WITHDRAW -3M
EVENT 3  TRANSFER -2M
```

## B19.2 — “menyimpan event”

Event cards menumpuk sebagai timeline, bukan langsung mengubah balance display.

## B19.3 — “masuk akal”

```text
EVENTS
 ↓
REPLAY
 ↓
BALANCE = 5M
```

## B19.4 — “terlalu overengineering”

Tampilkan dua gate:

```text
WORTH IT?
OVERENGINEERED?
```

Jangan beri jawaban pada teaser ini.

---

# 25. BODY — BANKING COMPLEXITY LAB

## Paragraf naskah

> “Di bagian banking complexity lab nanti kita bener2 praktek soal perbankan: misalnya apa yang terjadi jika DB mati saat transfer, atau jika server pembayaran eksternal tidak respons, dan bagaimana aplikasi menangani semua itu agar data tetap konsisten.”

## B20.1 — “banking complexity lab”

Hero title + circle.

## B20.2 — “DB mati saat transfer”

```text
ACCOUNT A
 ↓
TRANSFER
 ↓
DATABASE ✕
```

## B20.3 — “server pembayaran eksternal tidak respons”

```text
TRANSFER
 ↓
EXTERNAL PAYMENT
 ↓
NO RESPONSE
```

Clock pulse.

## B20.4 — “aplikasi menangani semua itu”

```text
FAILURE
 ↓
RECOVERY LOGIC
```

## B20.5 — “agar data tetap konsisten”

```text
CONSISTENT STATE ✓
```

**MOVE** recovery flow berakhir pada check hijau.

---

# 26. BODY — BANKING PERFORMANCE LAB

## Paragraf naskah

> “Setelah itu ada banking performance lab, di mana kita akan benchmark sistem: berapa banyak transaksi per detik yang bisa diproses, perbandingan monolith vs microservices, bahkan CQRS vs non CQRS dalam hal throughput.”

## B21.1 — “banking performance lab”

Hero title.

## B21.2 — “benchmark sistem”

```text
MEASURE
```

## B21.3 — “berapa banyak transaksi per detik”

```text
100 TPS
500 TPS
1000 TPS
```

Counter naik.

## B21.4 — “monolith vs microservices”

```text
MONOLITH
   VS
MICROSERVICES
```

## B21.5 — “CQRS vs non CQRS”

```text
CQRS
  VS
NON-CQRS
```

## B21.6 — “dalam hal throughput”

Tambahkan meter:

```text
THROUGHPUT
```

Dan sebelum ada angka hasil, tulis:

```text
NO ASSUMPTION
     ↓
EXPERIMENT
     ↓
MEASUREMENT
```

**MOVE**: measurement arrow selesai setelah kata “throughput”.

---

# 27. BODY — PRODUCTION ENGINEERING

## Paragraf naskah

> “Terakhir, kita ke production engineering – tentang apa yang berubah saat aplikasi dipasang di server: logging terstruktur, monitoring, tracing, deployment, rollback, dan lain-lain.”

## B22.1 — “production engineering”

```text
PRODUCTION ENGINEERING
```

## B22.2 — “aplikasi dipasang di server”

```text
LOCAL
 ↓
TEST
 ↓
STAGING
 ↓
PRODUCTION
```

`VERSION 42` bergerak sepanjang pipeline.

## B22.3 — “logging terstruktur”

```text
STRUCTURED LOG
{
 level,
 timestamp,
 transaction_id
}
```

## B22.4 — “monitoring”

```text
METRICS
CPU
MEMORY
TPS
LATENCY
```

## B22.5 — “tracing”

```text
TRACE
A → B → C
```

## B22.6 — “deployment”

```text
CODE
 ↓
DEPLOY
```

## B22.7 — “rollback”

```text
VERSION 42 ✕
     ↑
VERSION 41 ✓
```

**MOVE** arrow bergerak balik dari 42 → 41.

---

# 28. CLOSING VALUE — BUKAN CUMA JAVA / CRUD

## Paragraf naskah

> “Nah, setelah menamatkan playlist ini, kalian bukan cuma bisa menulis Java atau membuat CRUD sederhana.”

## C01.1 — “setelah menamatkan playlist ini”

Master roadmap berubah menjadi checklist yang selesai.

## C01.2 — “menulis Java”

```text
JAVA
```

## C01.3 — “CRUD sederhana”

```text
CRUD
CREATE
READ
UPDATE
DELETE
```

## C01.4 — “bukan cuma”

X kecil pada CRUD, lalu transform:

```text
JAVA + CRUD
      ≠
FULL ENGINEERING
```

---

# 29. CLOSING VALUE — MEMBACA SISTEM BACKEND

## Paragraf naskah

> “Kalian akan jadi orang yang bisa membaca sebuah sistem backend dan memahami kenapa dibuat seperti itu.”

## C02.1 — “membaca sebuah sistem backend”

**DRAW** whole system:

```text
┌──────────────────────────────┐
│ API                          │
│ SERVICES                     │
│ DATABASE                     │
│ EVENTS                       │
└──────────────────────────────┘
```

**CAMERA** zoom out supaya whole system terlihat.

## C02.2 — “memahami kenapa dibuat seperti itu”

**DRAW**

```text
WHY?
 ↓
REQUIREMENT
 ↓
CONSTRAINT
 ↓
DESIGN
```

**MOVE** arrow ditarik satu-satu.

---

# 30. CLOSING VALUE — MEASURE, SOLVE, DEBUG

## Paragraf naskah

> “Kalian bakal paham bagaimana mengukur dan memecahkan masalah seperti double transaction, race condition, atau bottleneck performa.”

## C03.1 — “mengukur”

```text
MEASURE
TPS
p95
CPU
MEMORY
```

## C03.2 — “memecahkan masalah”

```text
PROBLEM
 ↓
DEBUG
 ↓
FIX
```

## C03.3 — “double transaction”

Duplicate TX-001 jatuh menabrak transaction pertama.

## C03.4 — “race condition”

A dan B collision.

## C03.5 — “bottleneck performa”

Hotspot muncul pada DB / thread.

**MOVE**: setiap problem mendapat focus ring persis pada kata yang diucapkan.

---

# 31. CLOSING VALUE — TRADE-OFF ARCHITECTURE

## Paragraf naskah

> “Kalian juga bisa menjelaskan trade-off sebuah arsitektur: misalnya kenapa sebuah sistem perbankan memilih monolith, microservices, atau event-driven berdasarkan kebutuhan.”

## C04.1 — “trade-off sebuah arsitektur”

**DRAW**

```text
REQUIREMENT
 /    |    \
↓     ↓     ↓
a     b     c
```

Label:

```text
MONOLITH
MICROSERVICES
EVENT-DRIVEN
```

## C04.2 — “berdasarkan kebutuhan”

Criteria masuk:

```text
SCALE
CONSISTENCY
TEAM
COMPLEXITY
LATENCY
RELIABILITY
```

Setiap criteria bergerak menuju REQUIREMENT.

## C04.3 — visual conclusion

```text
ARCHITECTURE
      =
DECISION UNDER CONSTRAINT
```

Jangan memilih pemenang.

---

# 32. DIFFERENTIATION — ROADMAP LENGKAP

## Paragraf naskah

> “Playlist ini dirancang sebagai roadmap lengkap: dari dasar Java sampai kompleksitas software dalam perbankan.”

## C05.1 — “roadmap lengkap”

Reveal master roadmap penuh.

## C05.2 — “dari dasar Java”

Camera zoom ke JAVA.

## C05.3 — “sampai kompleksitas software dalam perbankan”

Camera follow node dari JAVA → BANKING COMPLEXITY.

Hold 1.5 detik.

---

# 33. CTA — SUBSCRIBE DAN JOURNEY

## Paragraf naskah

> “Subscribe channel ini biar ga ketinggalan dan terus mengikuti perkembangan pembelajaran dari channel ini.”

## C06.1 — “Subscribe channel ini”

**DRAW** tombol kecil:

```text
SUBSCRIBE
```

## C06.2 — “terus mengikuti perkembangan pembelajaran”

**DRAW/MOVE**

```text
EP 01 → EP 02 → EP 03 → ...
```

Arrow bergerak maju.

---

# 34. POSITIONING — BANYAK TUTORIAL JAVA, SEDIKIT BANKING

## Paragraf naskah

> “Udah banyak banget tutorial Java, tapi sangat sedikit yang bahas Java untuk sistem banking kalau enterprise mungkin mas eko sudah bahas ya beliau bahas di ecomerse, tapi untuk banking saya rasa masih sangat minim pembahasan.”

## C07.1 — “banyak banget tutorial Java”

**DRAW** banyak cards bertumpuk:

```text
JAVA
JAVA
JAVA
JAVA
JAVA
JAVA
```

**MOVE** stack memenuhi sebagian layar.

## C07.2 — “sangat sedikit yang bahas Java untuk sistem banking”

Stack terdorong ke kiri. Satu card tersisa:

```text
JAVA
FOR
BANKING
```

Zoom-in.

## C07.3 — “kalau enterprise ... e-commerce”

Buat card konteks:

```text
JAVA ENTERPRISE
      ↓
E-COMMERCE
```

Ini hanya konteks positioning.

## C07.4 — “untuk banking ... sangat minim pembahasan”

```text
BANKING
?
?
?
```

Kemudian circle pada `JAVA FOR BANKING`.

---

# 35. AI — GENERATE TIDAK SAMA DENGAN ENGINEER

## Paragraf naskah

> “Saya pastikan pembelajaran tetap relevan di era AI – dan saya yakin perbankan lebih suka sistemnya di handle oleh pakar daripada orang yang paham cara promting. Dengan pemahaman ini, kalian jadi yang siap menghadapi segala problem nyata di dunia perbankan.”

## C08.1 — “relevan di era AI”

**DRAW**

```text
HUMAN
 ↓
PROMPT
 ↓
AI
```

## C08.2 — AI menghasilkan kode

**DRAW** cards:

```text
Spring Boot
Transfer API
@Transactional
```

**MOVE** cards keluar cepat dari AI.

## C08.3 — “pakar” versus prompt

Card bergerak menuju Production, lalu tertahan di gate:

```text
STOP
```

Gate berikutnya muncul satu-satu:

```text
CORRECT?
SAFE?
IDEMPOTENT?
SCALABLE?
CONSISTENT?
```

## C08.4 — “orang yang paham cara promting”

Di bawah gate, tampilkan shortcut:

```text
PROMPT
  ↓
PRODUCTION ✕
```

X pada arrow.

## C08.5 — “Dengan pemahaman ini...”

Flow utama:

```text
AI
 ↓
GENERATE
 ↓
ENGINEER
 ↓
VERIFY
 ↓
PRODUCTION
```

## C08.6 — “problem nyata di dunia perbankan”

Kumpulkan failure cards:

```text
RACE CONDITION
DUPLICATE
TIMEOUT
DB FAILURE
BOTTLENECK
```

Semua mengarah ke:

```text
ENGINEERING
 ↓
REAL BANKING PROBLEMS
```

---

# 36. FINAL — VIDEO BERIKUTNYA

## Paragraf naskah

> “Oke, di video berikutnya kita bakal belajar java secukupnya, mungkin gitu aja. Sekian!”

## C09.1 — “di video berikutnya”

Camera kembali ke `JAVA` pada master roadmap.

**DRAW**

```text
NEXT EPISODE
```

## C09.2 — “kita bakal belajar java secukupnya”

Circle kuat pada:

```text
JAVA
```

Tambahkan kecil:

```text
JAVA FOUNDATION
```

## C09.3 — “mungkin gitu aja”

Semua visual berhenti bergerak.

## C09.4 — “Sekian”

Reveal final board:

```text
JAVA
 ↓
ENGINEERING
 ↓
BACKEND
 ↓
BANKING
 ↓
SYSTEM DESIGN
 ↓
MICROSERVICES
 ↓
DISTRIBUTED
 ↓
EVENT-DRIVEN
 ↓
BANKING COMPLEXITY
 ↓
PRODUCTION
```

Di bawah:

```text
UNDERSTAND
DESIGN
MEASURE
DEBUG
DECIDE
```

Di kanan:

```text
NEXT
JAVA FOUNDATION
```

**CAMERA**: slow zoom out 3–4 detik.

**HOLD**: 2 detik.

---

# 37. PARAGRAPH-TO-SCENE CHECKLIST

Gunakan ini saat sinkronisasi audio:

| Paragraf audio | Marker | Elemen visual utama | Movement utama |
|---|---|---|---|
| Opening identity | A01 | Oskhar, bank, teaching, freelance, DM | reveal + pan |
| Playlist purpose | A02 | Programming → Software → Banking | progressive draw |
| Cross-border curiosity | A02 | TX-001 + country network | token travel |
| Country regulation | A02 | Regulation/Currency/Rules | constraints surround TX |
| Why speaker relevant | A03 | B2B cross-border transaction | token travel |
| Channel gap | A03 | Java cards → Java for Banking | isolate |
| Beginner to mastery | A03 | Beginner → Master | pointer travel |
| Main roadmap | BODY opening | Master roadmap | progressive reveal |
| Java enough | B01 | Java foundation | zoom out |
| Clean code/pattern | B02 | bad vs clean | messy → clean |
| Java internals | B02 | code → bytecode → JVM | zoom through layers |
| Concurrency | B03 | Request A/B + balance | parallel race |
| REST/DB/transaction | B04 | Client → API → DB | TX move + branch |
| Spring Enterprise | B05 | everything → layered app | split |
| Banking backend | B06 | Account/deposit/withdraw/transfer/audit | token movement |
| Testing/performance | B07 | test matrix + bottleneck + percentiles | checklist + load |
| System design | B08 | scaling users + architecture | zoom out |
| Microservices | B09 | monolith → services | split |
| Distributed service | B10/B11 | services + network | failure/retry |
| Kafka | B12 | Transfer → Kafka → consumers | event routing |
| Banking engineering | B13 | money/balance/ledger | focus |
| Double-entry | B14 | debit/credit | split + merge |
| Spring deep dive | B15 | annotation → proxy → manager | zoom in |
| JVM lab | B16 | heap/leak/profiler/latency | fill + spike |
| Architecture complexity | B17 | monolith/microservices trade-off | branch |
| DDD | B17 | bounded contexts | boundaries draw |
| CQRS | B18 | command/query | split |
| Event sourcing | B19 | event timeline/replay | replay |
| Banking failure lab | B20 | DB failure/external timeout | failure simulation |
| Banking performance lab | B21 | TPS + comparison | counter |
| Production | B22 | local → production + observability | deploy + rollback |
| Not just CRUD | C01 | Java/CRUD → engineering | strike + transform |
| Read system | C02 | backend map + why | zoom out + causal arrows |
| Measure/debug | C03 | failure examples | focus per keyword |
| Trade-off | C04 | requirement → architecture | branch |
| Full roadmap | C05 | complete roadmap | camera travel |
| Subscribe | C06 | subscribe + EP journey | pop + flow |
| Java vs banking gap | C07 | crowded Java → single banking card | isolate |
| AI | C08 | prompt → AI → gates → production | stop + verify |
| Next episode | C09 | Java Foundation | focus + zoom out |

---

# 38. WORD/PHRASE-TO-MOVEMENT RULE

Gunakan aturan ini untuk cue tambahan jika saat editing ada frase baru yang tidak sengaja terlewat.

| Jenis kata dalam audio | Perlakuan visual |
|---|---|
| “adalah” / menyebut objek | reveal object |
| “dari” | draw outgoing arrow |
| “ke/menuju” | move token ke target |
| “karena” | causal arrow |
| “setelah itu” | pan ke node berikutnya |
| “memecah” | split box |
| “menggabungkan” | merge nodes |
| “bertabrakan” | duplicate + collision |
| “gagal/mati” | X + stop motion |
| “timeout” | clock + pulse |
| “retry” | token reverse/re-entry |
| “duplicate/ganda” | duplicate token |
| “mengukur” | metric appears |
| “bottleneck” | hotspot + zoom |
| “mengapa/kenapa” | zoom to mechanism |
| “bagaimana” | reveal internal path |
| “berdasarkan kebutuhan” | criteria converge to decision |
| “trade-off” | two or more paths remain visible |
| “konsisten/aman/verified” | check / stable frame |
| “tidak pasti/unknown” | pulse + question mark |
| “production” | camera pull back to whole system |

---

# 39. EDITOR WORKFLOW PER KALIMAT

Untuk setiap paragraf:

```text
1. COPY frase audio ke timeline marker
          ↓
2. Tentukan objek yang disebut
          ↓
3. Tentukan kata kerja yang akan dianimasikan
          ↓
4. Gambar object
          ↓
5. Bergerakkan object tepat saat kata kerja terdengar
          ↓
6. Tunjukkan failure jika disebut
          ↓
7. Tunjukkan konsep/solusi setelah failure
          ↓
8. HOLD
          ↓
9. Pan/zoom ke gagasan berikutnya
```

## Contoh 1: concurrency

Audio:

> “dua transaksi uang yang berjalan bersamaan, kenapa bisa ada race condition...”

Timeline visual:

```text
“dua transaksi”
→ REQUEST A + REQUEST B muncul

“berjalan bersamaan”
→ A dan B bergerak paralel

“kenapa”
→ camera zoom ke DB

“race condition”
→ A/B read same balance + collision + X
```

## Contoh 2: distributed system

Audio:

> “kegagalan jaringan, retry, timeout, dan idempotenitas...”

```text
“kegagalan jaringan”
→ line putus

“retry”
→ TX-001 kembali

“timeout”
→ clock + pause

“idempotenitas”
→ request_id sama + duplicate requests + gate
```

## Contoh 3: banking

Audio:

> “money, balance, ledger, debit/credit, transaksi ganda, dan rekonsiliasi”

```text
“money”
→ Rp2M token

“balance”
→ Account balance card

“ledger”
→ Ledger book muncul

“debit/credit”
→ ledger split dua kolom

“transaksi ganda”
→ TX duplicate

“rekonsiliasi”
→ dua kolom merge ke verified node
```

---

# 40. RECURRING VISUALS YANG HARUS TETAP SAMA

## TX-001

Jangan ganti ID setiap scene. Gunakan satu transaction token sebagai benang merah.

## Failure X

Semua:

```text
RACE CONDITION
DB FAILURE
TIMEOUT
DUPLICATE
BOTTLENECK
```

menggunakan gaya X yang sama.

## Verified Check

Semua:

```text
COMMIT
RECONCILED
IDEMPOTENT
ROLLBACK SUCCESS
```

menggunakan check yang sama.

## Roadmap

Jangan redraw full roadmap untuk setiap topik. Pan camera kembali ke master board dan circle node yang relevan.

---

# 41. RITME KAMERA

## Opening

Horizontal movement kiri → kanan. Banyak whitespace.

## Banking problem

Zoom ke TX-001 dan constraint.

## Concurrency

Zoom ke DB pada saat read collision.

## Microservices

Zoom out saat monolith pecah agar jumlah service terasa bertambah.

## Distributed failure

Zoom-in saat network putus, lalu pull-back saat idempotency berhasil.

## Banking ledger

Zoom-in pada debit/credit/equality, kemudian pull-back agar Account → Transfer → Ledger → Reconciliation terlihat bersama.

## Closing

Slow zoom out sampai seluruh roadmap terbaca.

---

# 42. FINAL VISUAL ARC

Video harus terasa mengalami perubahan state seperti ini:

```text
IDENTITY
   ↓
WHY BANKING IS HARD
   ↓
PROGRAMMING
   ↓
SOFTWARE ENGINEERING
   ↓
JAVA INTERNAL
   ↓
CONCURRENCY
   ↓
BACKEND
   ↓
SPRING
   ↓
BANKING DOMAIN
   ↓
TESTING / PERFORMANCE
   ↓
SYSTEM DESIGN
   ↓
MICROSERVICES
   ↓
DISTRIBUTED FAILURE
   ↓
EVENT-DRIVEN
   ↓
LEDGER / DOUBLE ENTRY
   ↓
SPRING INTERNALS / JVM
   ↓
ARCHITECTURE TRADE-OFF
   ↓
DDD / CQRS / EVENT SOURCING
   ↓
BANKING FAILURE LAB
   ↓
PERFORMANCE LAB
   ↓
PRODUCTION
   ↓
ENGINEERING JUDGMENT
   ↓
AI
   ↓
FINAL ROADMAP
```

Dan yang harus terasa di kepala penonton:

```text
“Gue kira ini playlist Java.”
          ↓
“Java ternyata cuma pondasi.”
          ↓
“Tujuannya memahami backend.”
          ↓
“Backend-nya masuk ke banking.”
          ↓
“Banking memunculkan real-world complexity.”
          ↓
“Jadi inti playlist ini adalah cara berpikir engineer.”
```

## END FRAME

```text
              JAVA
                ↓
           ENGINEERING
                ↓
             BACKEND
                ↓
             BANKING
                ↓
          SYSTEM DESIGN
                ↓
          MICROSERVICES
                ↓
           DISTRIBUTED
                ↓
          EVENT-DRIVEN
                ↓
      BANKING COMPLEXITY
                ↓
           PRODUCTION

     UNDERSTAND · DESIGN · MEASURE
          DEBUG · DECIDE

            NEXT EPISODE
           JAVA FOUNDATION
```

**Final movement:** semua node selesai, kamera zoom out perlahan, tidak ada lagi objek baru, lalu cut ke next episode.
