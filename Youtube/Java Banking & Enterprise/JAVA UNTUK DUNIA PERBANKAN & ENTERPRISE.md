# Cube Programming — Canonical Banking Programming Curriculum

> **Status:** Canonical Curriculum  
> **Versi:** 2.1  
> **Total video utama:** 78  
> **Project utama:** `banking-lab`  
> **Bahasa utama:** Java  
> **Framework utama:** Spring Boot  
> **Konteks utama:** Banking Backend Engineering, termasuk cross-border banking  
> **Prinsip:** **Java adalah bahasa. Banking adalah konteks. Engineering thinking adalah isi.**

## 0. Tujuan Dokumen

Dokumen ini adalah **single source of truth** untuk playlist utama Cube Programming tentang Java, backend engineering, distributed systems, dan banking programming.

Dokumen ini sengaja tidak ditulis seperti silabus pendek yang hanya berisi:

```text
Video 1: Java
Video 2: OOP
Video 3: Spring
Video 4: Kafka
```

Daftar seperti itu mudah dibuat, tetapi hampir tidak membantu ketika tiba waktunya menulis naskah, membuat demo, menentukan urutan konsep, menjaga kesinambungan repository, atau memastikan janji di opening benar-benar dibayar.

Dokumen ini harus menjawab pertanyaan berikut tanpa memaksa pembaca menebak:

1. **Mengapa sebuah topik dipelajari?**
2. **Problem engineering apa yang melahirkan topik tersebut?**
3. **Konsep teoritis apa yang wajib dipahami?**
4. **Apa yang harus didemonstrasikan dalam code?**
5. **Bagaimana topik tersebut berhubungan dengan banking?**
6. **Apa perubahan yang terjadi pada repository `banking-lab`?**
7. **Apa dependency terhadap video sebelumnya?**
8. **Apa yang sengaja tidak dibahas agar scope tidak melebar?**
9. **Kesalahan atau misconception apa yang harus dihancurkan?**
10. **Bagaimana mengetahui penonton benar-benar memahami materi?**
11. **Bagaimana materi tersebut dipakai lagi pada episode selanjutnya?**

Dengan kata lain, playlist ini bukan katalog teknologi. Playlist ini adalah **perjalanan sebuah sistem finansial yang tumbuh, rusak, diperbaiki, dibagi, diukur, didistribusikan, dan akhirnya dioperasikan seperti sistem production.**

# 1. Janji Utama Playlist

Opening menjanjikan bahwa playlist:

- dapat diikuti perlahan dari fundamental;
- menggunakan Java sebagai fondasi;
- memperkenalkan sejarah singkat Java agar penonton memahami problem asli yang melahirkan Java, bukan sekadar menghafal syntax;
- menjelaskan mengapa Java tetap relevan sebagai platform modern dan bagaimana posisi Java berubah, bukan hilang, di tengah adopsi AI-assisted software development;
- mengajarkan software engineering, bukan syntax semata;
- masuk ke concurrency melalui problem uang;
- membangun REST API, database, dan Spring;
- membahas banking backend secara serius;
- mengajarkan ledger, debit/credit, double-entry, transaction lifecycle, reconciliation, dan audit;
- membahas performance melalui latency, throughput, p50, p95, p99, database, thread, dan JVM;
- membawa penonton ke system design, microservices, distributed systems, retry, timeout, dan idempotency;
- membahas Kafka dan event-driven architecture;
- membongkar `@Transactional` dan behavior Spring di balik annotation;
- mengajarkan CQRS dan Event Sourcing beserta biayanya;
- menjalankan banking failure lab;
- membandingkan architecture secara terukur;
- membahas logging, metrics, tracing, deployment, rollback, dan production incident;
- dan yang terpenting, memperlihatkan **bagaimana software banking menangani transaksi lintas negara yang memiliki identifier, currency, routing, operational rule, dan lifecycle berbeda.**

Karena itu, chapter **Cross-Border Banking Engineering** bukan bonus. Ia adalah salah satu pusat identitas channel.

# 2. Filosofi Pengajaran

## 2.1 Problem-first, bukan technology-first

Urutan standar setiap video sebisa mungkin:

```text
OBSERVATION
    ↓
"Code ini terlihat benar."

PROBLEM
    ↓
"Tapi apa yang terjadi kalau kondisi X muncul?"

BREAK IT
    ↓
Kita reproduce failure.

MENTAL MODEL
    ↓
Kenapa failure ini terjadi?

ENGINEERING OPTIONS
    ↓
Apa pilihan solusi yang tersedia?

TRADE-OFF
    ↓
Apa harga setiap solusi?

BANKING CONSEQUENCE
    ↓
Apa akibatnya kalau state yang salah adalah uang?
```

Teknologi muncul ketika kita membutuhkan teknologi tersebut.

Contoh:

- `synchronized` muncul karena dua withdrawal bertabrakan.
- transaction database muncul karena debit dan credit tidak boleh setengah.
- idempotency muncul karena response transfer dapat hilang.
- Kafka muncul karena satu transfer memicu banyak asynchronous consumers.
- transactional outbox muncul karena database commit dan publish message tidak atomic.
- CQRS muncul karena read workload mulai berbeda dari write workload.
- Event Sourcing muncul ketika history sebagai primary record benar-benar dibutuhkan.
- tracing muncul karena satu transaksi melewati banyak service dan log lokal tidak cukup.

## 2.2 Banking hadir dari awal, bukan menunggu chapter akhir

Banking bukan skin yang ditempelkan ke tutorial Java.

```text
Java Fundamental
    ↓
Money

OOP / Encapsulation
    ↓
Account invariant

Concurrency
    ↓
Balance race

Database transaction
    ↓
Transfer atomicity

REST
    ↓
Transfer contract

Spring
    ↓
Banking application

Architecture
    ↓
Transaction boundary

Distributed systems
    ↓
Partial financial failure

Kafka
    ↓
Financial events

CQRS
    ↓
Transaction query model

Production
    ↓
Failed / unknown transaction
```

## 2.3 Tidak ada teknologi yang otomatis menjadi pemenang

Playlist ini tidak menggunakan pola:

```text
Monolith jelek → Microservices bagus
REST lama → Kafka modern
CRUD bodoh → CQRS pintar
State database biasa → Event Sourcing dewasa
```

Semua keputusan dibahas sebagai trade-off.

Pertanyaan yang selalu diajukan:

- Problem apa yang diselesaikan?
- Apa yang menjadi lebih mudah?
- Apa yang menjadi lebih sulit?
- Apa new failure mode yang kita beli?
- Apa operational cost-nya?
- Apa cognitive cost-nya?
- Apakah requirement kita benar-benar membutuhkannya?

# 3. Learning Outcome Global

Setelah mengikuti playlist secara penuh, penonton diharapkan mampu:

### Java dan Software Engineering

- membaca dan menulis Java backend modern;
- memahami reference, equality, mutability, BigDecimal, collections, generics, lambda, stream, record, Optional, dan exception;
- memodelkan entity, value object, invariant, state transition;
- membedakan abstraction yang berguna dari abstraction seremonial;
- mengevaluasi inheritance, composition, interface, SOLID, dan design pattern berdasarkan pressure perubahan.

### JVM dan Concurrency

- memahami stack/heap, allocation, GC, bytecode, class loading, JIT;
- memahami visibility, ordering, atomicity, happens-before;
- menemukan race condition dan deadlock;
- memahami lock, contention, thread pool, virtual thread, connection pool;
- menghubungkan concurrency Java dengan isolation/concurrency database.

### Backend dan Spring

- memahami lifecycle HTTP request;
- mendesain REST contract yang memiliki validation, error contract, idempotency, dan status inquiry;
- memahami DI/IoC, bean, controller/service/repository boundary;
- memahami ORM/JPA tanpa kehilangan pemahaman SQL;
- memahami index, query plan, connection pool;
- memahami `@Transactional`, proxy, propagation, flush, persistence context, locking.

### Banking Domain

- memodelkan Money, Account, Transaction, Ledger;
- membedakan balance, available balance, hold, dan ledger-derived state;
- memahami debit/credit dan balanced ledger;
- memodelkan transaction lifecycle dan unknown state;
- memahami idempotency, reversal, refund, correction;
- memahami audit, reconciliation, external reference.

### Cross-Border Banking

- memahami participant utama dalam flow lintas negara;
- membedakan account identifier, bank identifier, dan clearing/routing identifier;
- memodelkan country/corridor-specific requirement;
- memahami berbagai currency amount dalam satu transfer;
- memisahkan internal canonical model dari external connector schema;
- memodelkan routing/intermediary/correspondent secara engineering-level;
- memahami cut-off, calendar, timezone, approval, screening checkpoint, settlement, return, dan reconciliation.

### Architecture dan Distributed Systems

- memulai system design dari requirement;
- membangun modular monolith;
- mengenali pressure yang layak memicu service split;
- memahami timeout, retry, backoff, circuit breaker, partial failure;
- menentukan service boundary dan data ownership;
- memahami Saga, compensation, dan limitation distributed transaction.

### Event-Driven, CQRS, Event Sourcing

- membedakan command dan event;
- memahami topic, partition, consumer group, ordering, delivery semantics;
- membangun idempotent consumer;
- memahami dual-write dan transactional outbox;
- memahami retry, DLQ, replay, schema evolution;
- memahami CQRS, projection, eventual consistency;
- memahami Event Sourcing, rehydration, version, snapshot, beserta biaya operasionalnya.

### Production Engineering

- mengukur latency/throughput/p50/p95/p99;
- membuat benchmark reproducible;
- mendiagnosis database/thread/connection/JVM bottleneck;
- menggunakan logs, metrics, tracing, JFR, heap/thread dump secara terarah;
- memahami deployment, feature flag, canary, migration, rollback;
- melakukan failure recovery dan incident investigation;
- menulis postmortem berbasis evidence.

# 4. Scope yang Sengaja Tidak Menjadi Fokus

Agar playlist tidak berubah menjadi universitas empat tahun yang kebetulan ada tombol subscribe, beberapa hal sengaja tidak dijadikan fokus utama:

- tutorial syntax Java super-detail dari nol absolut;
- seluruh Java Standard Library;
- seluruh feature Spring ecosystem;
- seluruh annotation Spring;
- seluruh collector/flag JVM;
- seluruh SQL/database administration;
- seluruh specification ISO 20022;
- legal interpretation/regulatory advice per negara;
- implementation real payment network/proprietary bank;
- security cryptography deep-dive;
- Kubernetes deep-dive;
- cloud provider certification material;
- seluruh feature Kafka;
- seluruh pattern GoF;
- seluruh DDD tactical/strategic pattern;
- akuntansi profesional lengkap.

Jika topik tersebut dibutuhkan, ia dibahas **secukupnya untuk menjelaskan problem banking yang sedang dihadapi**.

# 5. Repository Utama: `banking-lab`

Tidak ada final project terpisah. Repository utama tumbuh bersama playlist.

## 5.1 Evolusi besar

```text
Money
  ↓
Account
  ↓
Transaction
  ↓
Transfer
  ↓
Database
  ↓
REST API
  ↓
Authentication / Entitlement
  ↓
Ledger
  ↓
Idempotency
  ↓
Reconciliation
  ↓
Cross-Border Rules
  ↓
FX / Charges
  ↓
Routing / Connector
  ↓
Performance Instrumentation
  ↓
Modular Monolith
  ↓
Distributed Services
  ↓
Kafka / Outbox
  ↓
CQRS Projection
  ↓
Production Observability
  ↓
Failure Recovery
```

## 5.2 Contoh module evolution

```text
banking-lab/
├── account/
├── money/
├── transfer/
├── ledger/
├── approval/
├── reconciliation/
├── crossborder/
│   ├── corridor/
│   ├── routing/
│   ├── fx/
│   └── connector/
├── platform/
│   ├── persistence/
│   ├── messaging/
│   ├── observability/
│   └── security/
└── docs/
    ├── adr/
    ├── diagrams/
    ├── benchmark/
    └── incidents/
```

Struktur final boleh berubah. Yang penting repository merefleksikan reasoning, bukan sekadar folder demi estetika.

# 6. Konvensi Domain `banking-lab`

## 6.1 Nilai uang

Gunakan object seperti:

```java
Money {
    BigDecimal amount;
    Currency currency;
}
```

Tidak boleh ada operasi aritmetika uang yang diam-diam mencampur currency.

## 6.2 Identifier

Identifier domain dibuat eksplisit:

```text
AccountId
TransactionId
TransactionReference
CustomerId
PaymentInstructionId
ExternalReference
```

Tujuannya bukan wrapper fever. Tujuannya mencegah string acak memiliki semantic berbeda tetapi dapat tertukar.

## 6.3 Transaction status

Minimal vocabulary:

```text
INITIATED
PENDING_APPROVAL
PROCESSING
SUCCESS
FAILED
UNKNOWN
REJECTED
RETURNED
REVERSED
```

Tidak semua flow harus memakai semua status.

## 6.4 Idempotency

Pisahkan:

- request id;
- business transaction id;
- transaction reference;
- external provider reference;
- idempotency key;
- correlation/trace id.

Masing-masing menjawab pertanyaan berbeda.

## 6.5 Waktu

Hindari menjadikan `LocalDateTime.now()` jawaban untuk semua hal.

Bedakan jika relevan:

- event timestamp;
- system timestamp;
- business date;
- value date;
- processing date;
- timezone;
- cut-off calendar.

# 7. Peta Kurikulum

| Chapter                                  |  Video | Fokus                                                        |
| ---------------------------------------- | -----: | ------------------------------------------------------------ |
| 01 Java Secukupnya                       |      5 | Sejarah Java, platform mental model, Java vocabulary + Money |
| 02 Java Engineering                      |      7 | OOP, invariant, abstraction, domain model                    |
| 03 Java Internals                        |      4 | JVM, GC, JIT, JMM                                            |
| 04 Concurrency & Transaction Correctness |      6 | Race, lock, ACID, isolation, deadlock                        |
| 05 Backend Banking Foundation            |      8 | HTTP, Spring, JPA, DB, testing, access                       |
| 06 Spring Transaction Internals          |      3 | Proxy, propagation, persistence context                      |
| 07 Banking Domain Engineering            |      8 | Account, balance, ledger, lifecycle, reconciliation          |
| 08 Cross-Border Banking Engineering      |      8 | Country rule, currency, routing, ISO/canonical model         |
| 09 Performance & Diagnosis               |      5 | Metrics, benchmark, JVM/DB diagnosis                         |
| 10 Architecture & Distributed Systems    |      7 | System design, modularity, services, Saga                    |
| 11 Event-Driven Banking                  |      5 | Kafka, ordering, outbox, DLQ                                 |
| 12 CQRS & Event Sourcing                 |      4 | Projection, rehydration, complexity                          |
| 13 Production Engineering & Failure Lab  |      8 | Deploy, observability, chaos/failure, incident               |
| **TOTAL**                                | **78** |                                                              |

# 01. Java Secukupnya

**Jumlah:** 5 video  
**Tujuan chapter:** Membuka perkenalan dengan Java melalui sejarah dan problem yang melahirkannya, menjelaskan mengapa platform ini masih berkembang dan relevan di era AI, lalu membuat penonton yang sudah memahami logika pemrograman mampu membaca dan menulis Java yang akan dipakai sepanjang playlist tanpa mengubah seri ini menjadi kursus sintaks Java generik.

## Outcome chapter

- Setelah `01.01`, penonton memahami dari problem apa Java lahir, bagaimana Oak berkembang menjadi Java, hubungan bahasa Java dengan JVM/JDK, mengapa Java terus berevolusi, dan mengapa AI-assisted development tidak menghapus kebutuhan terhadap platform, runtime, correctness, dan engineering judgement.
- Setelah `01.02`, penonton mampu membaca class Java sederhana dan menjelaskan dari mana program Java mulai berjalan serta apa peran compiler dan JVM.
- Setelah `01.03`, penonton dapat menjelaskan kapan equality berarti identity dan kapan berarti value, serta mengapa shared mutable state berbahaya.
- Setelah `01.04`, penonton mampu membaca kode modern Java tanpa perlu mempelajari seluruh Java Collections/Streams API secara terpisah.
- Setelah `01.05`, penonton memahami bahwa representasi data adalah bagian dari business correctness, bukan detail implementation.

## 01.01 — Kenalan dengan Java: Dari Oak, JVM, sampai Era AI

### Posisi episode dalam playlist

Ini bukan episode nostalgia dan bukan upaya membuktikan bahwa Java adalah bahasa terbaik.

Tujuannya adalah membuat penonton **mengenal Java sebelum diminta mempercayai Java**.

Sebelum menulis:

```java
public class Main {
    public static void main(String[] args) {
    }
}
```

penonton perlu mengetahui beberapa hal yang jauh lebih penting:

- Java sebenarnya lahir untuk menyelesaikan problem apa?
- Kenapa penciptanya tidak cukup memakai C++?
- Kenapa konsep portability menjadi begitu penting?
- Apa yang dimaksud ketika orang mengatakan “Java” — bahasa, JVM, JDK, atau ecosystem?
- Bagaimana bahasa yang lahir pada awal 1990-an masih memiliki release baru pada 2026?
- Kenapa perusahaan masih membangun dan memelihara sistem besar dengan Java?
- Apakah kemunculan AI coding assistant membuat bahasa seperti Java tidak relevan?
- Jika AI dapat menghasilkan controller, entity, test, bahkan SQL dalam hitungan detik, kemampuan apa yang masih harus dimiliki engineer?

Episode ini harus menjadi **perkenalan terhadap identitas Java**, bukan kelas sejarah satu jam.

### Problem yang memulai video

Banyak orang pertama kali bertemu Java melalui bentuk seperti:

```java
public static void main(String[] args)
```

lalu langsung menyimpulkan salah satu dari dua hal:

```text
"Java ribet."
```

atau:

```text
"Java bahasa enterprise."
```

Keduanya terlalu dangkal.

Syntax modern yang terlihat hari ini adalah hasil dari lebih dari tiga dekade keputusan desain, kebutuhan compatibility, perubahan hardware, perubahan cara aplikasi di-deploy, dan perubahan kebutuhan software.

Tanpa konteks tersebut, penonton mudah melihat Java hanya sebagai:

```text
bahasa tua
+
syntax verbose
+
Spring Boot
```

Padahal cerita yang lebih berguna adalah:

```text
heterogeneous devices
        ↓
portability problem
        ↓
managed runtime
        ↓
bytecode + JVM
        ↓
ecosystem berkembang
        ↓
server / enterprise workloads
        ↓
modern JVM + modern Java
        ↓
cloud / distributed systems / AI-integrated systems
```

### Learning objective

Setelah episode ini, penonton harus mampu menjelaskan:

1. Java bermula dari **Green Project** di Sun Microsystems pada 1991.
2. Bahasa awalnya bernama **Oak** dan dirancang oleh James Gosling bersama tim untuk lingkungan perangkat/network yang heterogen.
3. Salah satu motivasi penting desainnya adalah portability, reliability, dan mengurangi ketergantungan implementasi terhadap hardware/OS tertentu.
4. Java diumumkan ke publik pada 1995 dan berkembang kuat bersamaan dengan era internet.
5. “Java” bukan hanya syntax bahasa; ada hubungan antara Java language, bytecode, JVM, JDK, library, tooling, dan ecosystem.
6. Java modern tidak berhenti pada versi-versi lama; OpenJDK menggunakan release cadence berbasis waktu.
7. Per September 2026, **JDK 27 adalah feature release terbaru**, sedangkan **JDK 25 adalah LTS terbaru**.
8. Umur panjang Java bukan bukti bahwa Java tidak berubah; justru compatibility dan evolusi bertahap merupakan bagian besar dari nilainya.
9. AI mengubah cara software ditulis, tetapi tidak menghilangkan transaction semantics, runtime behavior, performance, failure mode, security, data consistency, dan ownership terhadap hasil.
10. Alasan mempelajari Java dalam playlist ini bukan karena “semua orang harus memakai Java”, melainkan karena Java merupakan kendaraan yang sangat baik untuk mempelajari backend engineering dan sistem banking secara serius.

### 1. Dari mana Java berasal?

#### 1.1 Green Project

Timeline awal yang harus disampaikan secara singkat:

```text
1991
│
├── Sun Microsystems memulai Green Project
│
├── fokus awal: consumer electronics / networked devices
│
└── bahasa yang dikembangkan bernama Oak
│
▼
1992+
│
├── Oak + virtual machine berkembang
│
└── fokus produk/proyek ikut berubah
│
▼
1995
│
├── Oak telah berevolusi dan dinamai Java
│
├── Java diperkenalkan secara publik
│
└── momentum internet membuat portability menjadi sangat relevan
```

Dokumen sejarah Oracle mencatat Green Project dimulai pada 1991 dan investasi teknisnya mencakup Oak, yang kemudian berganti nama menjadi Java. Java melakukan debut publik pada 1995.

Java Language Specification juga mencatat bahwa Oak awalnya dirancang James Gosling untuk embedded consumer-electronic applications sebelum kemudian diarahkan ke Internet dan direvisi menjadi Java.

#### 1.2 Kenapa tidak cukup menggunakan C++?

Jangan menjawab:

> “Karena C++ jelek.”

Itu bukan pembelajaran engineering.

Dokumen awal Java menjelaskan bahwa proyek tersebut pada mulanya menggunakan C++, tetapi tim menghadapi kesulitan yang akhirnya mendorong pembuatan language/platform baru.

Pressure-nya dapat dijelaskan sebagai:

```text
beragam hardware
+
beragam operating system
+
networked environment
+
reliability requirement
+
portability requirement
+
resource constraint
        ↓
butuh abstraction/runtime model berbeda
```

Di sini penonton mulai belajar satu pola yang akan muncul sepanjang playlist:

> **Teknologi biasanya lahir karena pressure. Bukan karena seseorang bangun pagi dan ingin membuat syntax baru.**

Itu juga menjadi preview filosofi architecture playlist.

### 2. Ide besarnya: source code tidak langsung menikah dengan satu mesin

Sederhanakan mental model awal menjadi:

```text
Java Source
    │
    │ javac
    ▼
Bytecode
    │
    ▼
JVM
    │
    ├── Linux
    ├── Windows
    └── macOS / platform lain
```

Jangan terlalu cepat masuk class loading/JIT karena akan dibahas di Java Internals.

Yang penting pada episode ini:

```text
SOURCE LANGUAGE
≠
BYTECODE
≠
RUNTIME IMPLEMENTATION
```

Ini menjelaskan mengapa slogan portability Java menjadi masuk akal.

Tetapi hindari penyederhanaan:

```text
Write Once Run Anywhere
=
semua aplikasi pasti portable tanpa masalah.
```

Realitas tetap memiliki:

- native library;
- filesystem;
- operating-system behavior;
- architecture-specific optimization;
- external dependency;
- environment/configuration;
- container/runtime constraints.

Jadi prinsip portability adalah **arah desain platform**, bukan jaminan bahwa seluruh software di dunia menjadi bebas environment.

### 3. “Java” itu sebenarnya apa?

Gunakan layering berikut:

```text
┌───────────────────────────────┐
│         JAVA ECOSYSTEM        │
│ Spring, libraries, build tool │
├───────────────────────────────┤
│              JDK              │
│ compiler, tools, libraries    │
├───────────────────────────────┤
│       JAVA STANDARD APIs      │
├───────────────────────────────┤
│              JVM              │
│ bytecode execution/runtime    │
├───────────────────────────────┤
│              OS               │
├───────────────────────────────┤
│            HARDWARE           │
└───────────────────────────────┘
```

Lalu bedakan:

#### Java language

Syntax dan semantic yang kita tulis:

```java
class Account {
}
```

#### Bytecode

Intermediate representation hasil compile yang akan diperkenalkan lebih dalam pada Java Internals.

#### JVM

Runtime yang mengeksekusi bytecode dan menyediakan mekanisme seperti:

- memory management;
- garbage collection;
- class loading;
- JIT compilation;
- threads;
- runtime diagnostics.

#### JDK

Development kit yang berisi compiler dan berbagai tools untuk membuat/menjalankan aplikasi Java.

#### Ecosystem

Hal yang sering membuat teknologi bertahan jauh lebih lama daripada syntax-nya sendiri:

```text
framework
library
tooling
build system
observability
testing ecosystem
community
production knowledge
```

Ini penting karena ketika membandingkan bahasa, developer sering hanya membandingkan syntax:

```text
Java:
10 baris

Language X:
4 baris

berarti X menang.
```

Software production, agak menyebalkan memang, mempunyai lebih banyak dimensi daripada lomba siapa paling hemat menekan keyboard.

### 4. Java tidak membeku di tahun 1995

Bagian ini harus menghancurkan misconception:

```text
old
=
stagnant
```

Java memang memiliki sejarah panjang.

Tetapi platform-nya menggunakan **time-based release model**. OpenJDK mendokumentasikan rapid-cadence feature release dengan siklus sekitar enam bulan.

Snapshot ketika kurikulum versi ini diperbarui:

```text
September 2026

Latest feature release:
JDK 27

Latest LTS:
JDK 25

Previous LTS:
JDK 21
JDK 17
JDK 11
JDK 8
```

Oracle juga menyatakan pola LTS modern direncanakan setiap dua tahun, dengan JDK 29 direncanakan menjadi LTS berikutnya pada September 2027.

Informasi versi adalah **snapshot waktu**. Sebelum video direkam, cek ulang halaman release resmi agar videonya tidak lahir dalam keadaan sudah basi. Sebuah pencapaian yang sangat mungkin di industri software.

### 5. Bukti bahwa Java masih berevolusi

Jangan menjadikan episode ini daftar fitur versi demi versi.

Pilih beberapa contoh yang menunjukkan arah evolusi.

Contoh:

#### Virtual Threads

JDK 21 memfinalisasi Virtual Threads melalui JEP 444.

Goal resminya adalah membantu server application dengan gaya thread-per-request mendapatkan scalability tinggi dengan effort programming/maintenance/observability yang lebih rendah.

Ini sangat relevan terhadap playlist karena nanti kita akan membahas:

```text
request
↓
thread
↓
blocking I/O
↓
connection pool
↓
throughput
```

Namun dari sekarang tanamkan:

> Virtual thread membuat thread lebih murah. Ia tidak membuat database connection, CPU, atau downstream service menjadi tidak terbatas.

Itulah alasan topik ini nanti kembali di Concurrency.

#### Evolusi language productivity

Java modern juga memperoleh berbagai language improvement selama bertahun-tahun:

- lambda;
- records;
- pattern matching;
- switch expression;
- local variable type inference;
- dan berbagai refinement lain.

Pesannya bukan:

> “Lihat, Java sekarang paling ringkas.”

Pesannya:

> **Platform yang mature tetap berevolusi tanpa membuang compatibility sebagai tujuan utama.**

### 6. Kenapa Java masih relevan?

Jawab secara multi-dimensional.

Jangan:

```text
karena banyak lowongan.
```

Itu alasan praktis, tetapi terlalu dangkal.

#### 6.1 Compatibility mempunyai nilai ekonomi

Sistem enterprise sering hidup bertahun-tahun bahkan puluhan tahun.

Jika platform mampu berevolusi sambil menjaga migration path yang cukup kuat, organisasi mendapatkan:

```text
existing investment
+
existing engineers
+
existing libraries
+
existing operational knowledge
+
incremental modernization
```

Maturity di sini bukan berarti tidak modern.

Maturity berarti banyak failure mode sudah ditemukan manusia lain sebelum kita. Sesekali peradaban memang menghasilkan sesuatu yang berguna.

#### 6.2 JVM adalah runtime yang sangat matang

Java bukan hanya compiler.

Sepanjang playlist nanti, penonton akan bertemu:

```text
JIT
GC
heap
thread
JFR
profiling
class loading
diagnostics
```

Runtime capability ini penting untuk backend yang:

- hidup lama;
- menerima traffic tinggi;
- perlu diobservasi;
- perlu di-profile;
- perlu dikendalikan latency-nya;
- perlu di-debug ketika production rusak.

#### 6.3 Ecosystem enterprise sudah sangat besar

Java memiliki ecosystem panjang untuk:

- web/backend;
- database;
- messaging;
- security;
- testing;
- observability;
- distributed system;
- enterprise integration.

Dalam playlist kita, Spring hanya salah satu bagian dari ecosystem tersebut.

#### 6.4 Static typing membantu menjaga contract besar

Static typing bukan obat seluruh bug.

Tetapi pada codebase besar, explicit type dapat membantu:

- refactoring;
- IDE tooling;
- API discoverability;
- compile-time feedback;
- domain modeling.

Nanti kita tetap akan memperlihatkan bahwa:

```text
code compile
≠
business logic benar
```

Compiler tidak mengetahui bahwa dua posting ledger harus balance kecuali kita memodelkan invariant itu.

#### 6.5 Java tetap digunakan dan berkembang di GitHub

GitHub Octoverse 2025 menempatkan Java di antara bahasa dengan penggunaan sangat besar dan mencatat pertumbuhan yang terus berjalan, terutama didorong workload enterprise.

Gunakan data ini secara hati-hati:

> Ini menunjukkan Java masih aktif dipakai pada skala besar.

Jangan mengubahnya menjadi:

> “Java ranking X, maka Java bahasa terbaik.”

Ranking bahasa adalah statistik penggunaan, bukan turnamen gladiator.

### 7. Lalu datang AI. Apakah Java masih penting?

Ini harus menjadi bagian paling tajam dari episode.

Mulai dengan sesuatu yang penonton lihat sendiri:

Hari ini AI coding assistant dapat menghasilkan:

```java
@RestController
public class TransferController {
    ...
}
```

dalam beberapa detik.

AI juga dapat membantu menghasilkan:

- DTO;
- mapper;
- test;
- SQL;
- documentation;
- boilerplate configuration;
- refactor suggestion.

Kalau begitu, kenapa kita masih belajar Java?

Karena problem utama playlist ini bukan:

```text
bagaimana mengetik controller lebih cepat?
```

Problem-nya adalah:

```text
Apakah transfer ini atomic?

Kalau response timeout,
apakah uang sudah pindah?

Kalau request dikirim dua kali,
apakah posting terjadi dua kali?

Kalau dua withdrawal masuk bersamaan,
invariant saldo masih aman?

Kalau DB commit tetapi Kafka gagal,
state sistem sekarang apa?

Kalau provider luar negeri timeout,
apakah retry aman?

Kalau dua sistem punya status berbeda,
mana yang menjadi source of truth?

Kalau p99 naik,
bottleneck ada di JVM, DB, pool,
network, atau provider?
```

AI dapat ikut membantu menjawab dan mengimplementasikan.

Tetapi organisasi tetap membutuhkan **mekanisme verifikasi** dan engineer tetap memiliki **accountability terhadap behavior sistem**.

### 8. Gunakan data AI dengan jujur

Stack Overflow Developer Survey 2025 menunjukkan AI tooling sudah sangat mainstream:

- 84% responden menggunakan atau berencana menggunakan AI tools dalam development;
- 51% professional developer melaporkan penggunaan harian.

Namun survey yang sama menemukan lebih banyak developer **tidak mempercayai** akurasi output AI dibanding yang mempercayainya:

```text
Distrust accuracy: 46%
Trust accuracy:    33%
```

Angka ini tidak berarti:

> “AI buruk.”

Dan juga tidak berarti:

> “Programmer aman selamanya.”

Interpretasi yang jauh lebih berguna:

> **AI-assisted development menjadi normal, sehingga kemampuan memverifikasi hasil menjadi semakin penting, bukan semakin tidak penting.**

Untuk sistem finansial, verification mencakup lebih dari code style.

Kita harus memverifikasi:

```text
correctness
transaction boundary
concurrency
security
data consistency
failure recovery
performance
auditability
observability
```

### 9. AI mengurangi harga menulis code, bukan harga salah memahami sistem

Gunakan perbandingan berikut sebagai salah satu tesis episode:

```text
DULU

idea
 ↓
engineer
 ↓
banyak waktu menulis code
 ↓
software


SEKARANG

idea
 ↓
engineer + AI
 ↓
code jauh lebih cepat muncul
 ↓
software
```

Tetapi semakin cepat code dapat dibuat, semakin besar kemungkinan bottleneck engineering berpindah ke:

```text
Apakah requirement benar?
Apakah model domain benar?
Apakah abstraction masuk akal?
Apakah generated code aman?
Apakah transaction semantics benar?
Apakah performance assumption benar?
Apakah failure sudah diuji?
```

Jadi narasi channel bukan anti-AI.

Justru:

> **Engineer yang memahami sistem dapat menggunakan AI lebih efektif karena ia tahu apa yang harus diminta, apa yang harus diuji, dan apa yang harus ditolak.**

### 10. Kenapa Java cocok untuk roadmap banking ini?

Bukan karena banking hanya memakai Java.

Tidak.

Sistem finansial dapat dibangun menggunakan banyak bahasa dan platform.

Java dipilih karena roadmap ini membutuhkan kendaraan yang memungkinkan kita mempelajari semuanya secara bersambung:

```text
language
↓
OOP / domain modeling
↓
memory/runtime
↓
concurrency
↓
database transaction
↓
Spring
↓
enterprise backend
↓
performance
↓
distributed systems
↓
event-driven
↓
production diagnostics
```

Java mempunyai lapisan yang cukup luas untuk membawa semua pembahasan tersebut dalam satu ecosystem.

Dan untuk channel ini, keuntungan terbesar bukan:

> “Java lebih bagus daripada bahasa lain.”

Melainkan:

> **Satu bahasa dapat kita pakai untuk mengikuti perjalanan sebuah financial system dari object sederhana sampai production incident.**

### 11. Misconception yang harus dihancurkan

#### “Java tua, berarti obsolete.”

Salah framing.

Java tua secara usia, tetapi release platform tetap berjalan. Pertanyaan yang benar:

```text
apakah ecosystem masih hidup?
apakah runtime masih berkembang?
apakah release masih aktif?
apakah production workload masih ada?
```

Untuk Java, jawabannya masih iya.

#### “Java lambat.”

Tidak dapat dijawab tanpa workload dan measurement.

Nanti Performance chapter akan menunjukkan:

```text
latency
throughput
allocation
GC
JIT
DB
network
```

Aplikasi Java yang lambat dapat lambat karena Java, database, network, algorithm, lock contention, external provider, configuration, atau programmer. Yang terakhir secara statistik informal cukup kompetitif.

#### “Java verbose.”

Sebagian kritik historis valid.

Tetapi modern Java telah mengurangi banyak boilerplate.

Tetap jangan defensif. Bahasa lain memang dapat lebih ringkas untuk berbagai kasus.

Pertanyaannya selalu:

> Apakah verbosity tersebut memberi atau tidak memberi nilai pada konteks kita?

#### “AI akan membuat belajar bahasa programming tidak perlu.”

AI membuat syntax lookup dan boilerplate jauh lebih murah.

Itu justru memungkinkan playlist menghabiskan lebih sedikit waktu pada hafalan syntax dan lebih banyak waktu pada:

```text
semantics
correctness
failure
trade-off
architecture
```

Jadi AI malah memperkuat alasan format playlist ini.

### 12. Demo / visual yang harus ada

Episode ini sebaiknya visual-heavy dan code-light.

#### Visual 1 — Timeline

```text
1991        1995          2010          2017/18       2021      2023      2025      2026
 │           │             │               │            │         │         │         │
Green       Java          Oracle       rapid release   JDK17     JDK21     JDK25     JDK27
Project     public        stewardship   model era       LTS       LTS       LTS       latest
 │
Oak
```

Catatan: timeline harus diberi sumber dan jangan memaksa setiap milestone menjadi trivia.

#### Visual 2 — Portability mental model

```text
             Java Source
                 │
               javac
                 │
              Bytecode
          ┌──────┼──────┐
          ▼      ▼      ▼
        JVM    JVM    JVM
       Linux Windows macOS
```

#### Visual 3 — Java bukan hanya syntax

```text
Language
   ↓
Bytecode
   ↓
JVM
   ↓
Runtime
   ↓
Libraries
   ↓
Frameworks
   ↓
Production ecosystem
```

#### Visual 4 — AI shift

```text
AI makes CODE cheaper.

It does not make:

correctness
consistency
latency
failures
security
money

disappear.
```

### 13. Demo terminal yang sangat singkat

Tidak perlu membuat aplikasi.

Cukup:

```bash
java --version
javac --version
```

Tunjukkan versi JDK yang dipakai dalam seri.

Kemudian:

```bash
javac HelloJava.java
java HelloJava
```

dan perlihatkan:

```text
HelloJava.java
      ↓
HelloJava.class
```

Jangan bedah bytecode sekarang.

Akhiri dengan:

> “Kita baru kenalan. Video berikutnya baru kita bongkar mental model program Java.”

Ini menjadi bridge langsung menuju `01.02 — Java dalam Satu Mental Model`.

### 14. Perubahan pada `banking-lab`

Belum perlu domain implementation.

Episode ini membuat:

```text
banking-lab/
├── README.md
└── docs/
    └── java-platform-notes.md
```

`README.md` minimal menjelaskan:

```text
Java version used
why Java is chosen
how to verify JDK
repository learning philosophy
```

Tujuannya agar repository mempunyai keputusan teknologi yang terdokumentasi sejak awal.

### 15. Kriteria pemahaman

Penonton dianggap memahami episode jika mampu menjawab tanpa menghafal:

1. Apa problem historis yang ikut mendorong kelahiran Java?
2. Apa hubungan Oak dengan Java?
3. Kenapa JVM penting terhadap portability?
4. Apa beda Java language, JVM, dan JDK?
5. Kenapa “Java sudah tua” tidak otomatis berarti “Java sudah berhenti berkembang”?
6. Apa bukti bahwa Java modern masih memiliki release aktif?
7. Apa latest release dan latest LTS pada saat video direkam?
8. Mengapa AI tidak membuat runtime semantics dan distributed correctness menghilang?
9. Bagian mana yang AI dapat bantu percepat?
10. Bagian mana yang masih perlu diverifikasi engineer?
11. Kenapa Java dipilih untuk `banking-lab` tanpa perlu mengklaim Java sebagai bahasa terbaik?

### 16. Hal yang harus dihindari

- Jangan membuat perang bahasa Java vs Go vs Rust vs Kotlin vs C#.
- Jangan mengklaim “semua bank memakai Java”.
- Jangan menggunakan umur Java sebagai satu-satunya argumen maturity.
- Jangan memakai jumlah lowongan sebagai bukti kualitas bahasa.
- Jangan menyatakan Java “tidak akan pernah mati”.
- Jangan menyatakan AI tidak mampu melakukan pekerjaan engineering apa pun.
- Jangan pula mengatakan AI otomatis dapat menggantikan understanding.
- Jangan menggunakan benchmark tanpa methodology.
- Jangan menjadikan Oracle marketing copy sebagai satu-satunya evidence.
- Jangan membuat sejarah terlalu panjang sampai penonton lupa playlist ini akhirnya akan membahas uang.

### 17. Catatan fakta yang harus diperbarui sebelum recording

Bagian berikut time-sensitive dan harus diverifikasi ulang ketika naskah final direkam:

```text
latest JDK feature release
latest JDK LTS
LTS roadmap
current language usage statistics
current AI developer survey statistics
```

Snapshot kurikulum ini diverifikasi pada **21 September 2026**:

```text
Latest Java SE feature release: JDK 27
Latest Java LTS release:       JDK 25
```

### 18. Referensi berkualitas

Prioritaskan **primary source** untuk sejarah dan behavior Java, lalu gunakan survey/industry report hanya untuk mengukur penggunaan atau sentiment.

#### Primary sources — sejarah dan desain

1. **Oracle — A Brief History of Java**  
   https://education.oracle.com/file/general/4955_BriefHistoryOfJava_7.pdf  
   Dipakai untuk timeline Green Project 1991, Oak, dan debut Java pada 1995.

2. **Java Language Specification — Preface**  
   https://docs.oracle.com/javase/specs/jls/se6/html/j.preface.html  
   Sumber primer untuk asal Oak, James Gosling, target embedded consumer electronics, serta transisi menuju Internet/Java.

3. **Oracle — The Java Language Environment**  
   https://www.oracle.com/java/technologies/introduction-to-java.html  
   Berguna untuk memahami pressure desain awal: heterogeneous networked environment, portability, reliability, dan alasan tim bergerak dari C++ menuju platform baru.

#### Primary sources — evolusi modern

4. **OpenJDK — JEP 3: JDK Release Process**  
   https://openjdk.org/jeps/3  
   Referensi release process dan rapid time-based cadence.

5. **OpenJDK — JEP 322: Time-Based Release Versioning**  
   https://openjdk.org/jeps/322  
   Menjelaskan versioning pada six-month release model.

6. **Oracle — Java SE Support Roadmap**  
   https://www.oracle.com/java/technologies/java-se-support-roadmap.html  
   Referensi versi LTS/non-LTS dan support roadmap. Per September 2026 halaman ini mencantumkan 8, 11, 17, 21, dan 25 sebagai LTS serta rencana LTS berikutnya.

7. **Oracle — Java Downloads**  
   https://www.oracle.com/java/technologies/downloads/  
   Referensi untuk memverifikasi release terbaru saat recording. Snapshot 21 September 2026 menunjukkan JDK 27 sebagai latest release dan JDK 25 sebagai latest LTS.

8. **OpenJDK — JEP 444: Virtual Threads**  
   https://openjdk.org/jeps/444  
   Contoh konkret bagaimana Java modern berkembang untuk high-throughput concurrent server applications.

9. **OpenJDK — Project Panama**  
   https://openjdk.org/projects/panama/  
   Contoh evolusi JVM/JDK untuk interoperabilitas dengan native code dan memory.

#### Evidence penggunaan dan era AI

10. **GitHub Octoverse 2025**  
    https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/  
    Digunakan sebagai evidence sekunder bahwa Java tetap memiliki penggunaan dan pertumbuhan besar di GitHub, dengan karakter enterprise yang kuat. Jangan dipakai untuk menyimpulkan “bahasa terbaik”.

11. **Stack Overflow Developer Survey 2025 — AI**  
    https://survey.stackoverflow.co/2025/ai  
    Dipakai untuk memberikan konteks adoption dan trust AI tooling: penggunaan sudah mainstream, tetapi kebutuhan verifikasi output tetap nyata.

12. **Oracle — Java 25 Release Announcement**  
    https://www.oracle.com/news/announcement/oracle-releases-java-25-2025-09-16/  
    Referensi tambahan untuk Java 30 tahun, LTS Java 25, serta investasi platform terhadap modern workload termasuk AI integration. Karena ini berasal dari vendor Java, perlakukan klaim evaluatif sebagai perspektif Oracle, bukan fakta netral tunggal.

### 19. Bridge ke video berikutnya

Episode berakhir dengan pertanyaan:

> “Kalau Java punya language, compiler, bytecode, JDK, dan JVM, sebenarnya apa yang terjadi dari saat kita menulis satu class sampai program itu benar-benar berjalan?”

Masuk ke:

```text
01.02 — Java dalam Satu Mental Model
```

## 01.02 — Java dalam Satu Mental Model

### Problem yang memulai video

Penonton sering belajar syntax Java secara terpisah tanpa peta mengenai hubungan source code, compiler, bytecode, JVM, object, package, dan runtime.

### Teori dan mental model wajib

- Alur `.java → javac → .class/bytecode → JVM → program berjalan`.
- Type, variable, expression, statement, method, class, object, package, access modifier.
- Primitive vs reference type sebagai mental model awal, bukan katalog seluruh tipe.
- Compile-time error vs runtime error.
- Kenapa Java disebut statically typed dan managed-runtime language.

### Demo / lab yang harus ada

- Membuat `Money`, `AccountId`, dan `Account` sangat sederhana.
- Compile menggunakan `javac`, jalankan menggunakan `java`, lalu inspeksi struktur file hasil compile.
- Tunjukkan bagaimana package dan classpath memengaruhi program kecil.

### Perubahan pada `banking-lab`

Skeleton awal repository `banking-lab` dengan module/domain package pertama.

### Kriteria pemahaman

Penonton mampu membaca class Java sederhana dan menjelaskan dari mana program Java mulai berjalan serta apa peran compiler dan JVM.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengubah episode menjadi katalog syntax.
- Menambahkan abstraction sebelum ada kebutuhan.
- Menggunakan contoh non-banking terlalu lama setelah konsep dijelaskan.

## 01.03 — Reference, Equality, Null, dan Mutability

### Problem yang memulai video

Bug domain sering muncul karena developer mengira dua variable object berarti dua object terpisah, menyamakan `==` dengan equality bisnis, atau mengubah object dari tempat yang tidak terduga.

### Teori dan mental model wajib

- Reference, object identity, aliasing.
- `==` vs `equals()` dan kontrak `equals/hashCode` secara konseptual.
- `null`, NullPointerException, dan invalid state.
- Mutable vs immutable object.
- Kenapa mutability meningkatkan jumlah state yang mungkin terjadi.

### Demo / lab yang harus ada

- `Account a = ...; Account b = a;` lalu mutasi melalui salah satu reference.
- Bandingkan `Money` mutable vs immutable.
- Demonstrasikan bug equality pada `AccountId` jika equality tidak dimodelkan dengan benar.

### Perubahan pada `banking-lab`

`AccountId` dan `Money` mulai dirancang sebagai value object immutable.

### Kriteria pemahaman

Penonton dapat menjelaskan kapan equality berarti identity dan kapan berarti value, serta mengapa shared mutable state berbahaya.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengubah episode menjadi katalog syntax.
- Menambahkan abstraction sebelum ada kebutuhan.
- Menggunakan contoh non-banking terlalu lama setelah konsep dijelaskan.

## 01.04 — Java Modern yang Benar-Benar Akan Kita Pakai

### Problem yang memulai video

Penonton membutuhkan vocabulary Java modern agar episode setelahnya tidak terus berhenti hanya untuk menjelaskan syntax.

### Teori dan mental model wajib

- List, Set, Map dan alasan memilih masing-masing.
- Generics dan type safety.
- Lambda dan functional interface.
- Stream secukupnya: filter, map, reduce/collect tanpa memaksakan functional style.
- Enum untuk finite states.
- Record untuk immutable data carrier.
- Optional sebagai representasi absence, termasuk kapan tidak perlu dipakai.
- Checked/unchecked exception secara praktis.

### Demo / lab yang harus ada

- `List<Transaction>`, `Set<TransactionId>`, `Map<AccountId, Account>`.
- Filter transaksi berdasarkan status dan currency.
- Representasikan `TransactionStatus` dengan enum.
- Gunakan record untuk request/response internal sederhana.

### Perubahan pada `banking-lab`

Vocabulary Java yang dipakai konsisten di seluruh codebase.

### Kriteria pemahaman

Penonton mampu membaca kode modern Java tanpa perlu mempelajari seluruh Java Collections/Streams API secara terpisah.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengubah episode menjadi katalog syntax.
- Menambahkan abstraction sebelum ada kebutuhan.
- Menggunakan contoh non-banking terlalu lama setelah konsep dijelaskan.

## 01.05 — BigDecimal: Ketika Angka Menjadi Uang

### Problem yang memulai video

`double` terlihat cukup sampai perhitungan finansial menghasilkan nilai yang tidak tepat. Di domain uang, error kecil bukan sekadar kosmetik.

### Teori dan mental model wajib

- Floating-point binary representation dan mengapa decimal tertentu tidak representable secara exact.
- `BigDecimal`: scale, precision, rounding mode.
- `new BigDecimal(double)` vs constructor/string/valueOf.
- `equals()` vs `compareTo()` pada BigDecimal.
- Currency minor unit dan pembulatan sebagai business rule.
- Konsep `Money(amount, currency)` sebagai value object.

### Demo / lab yang harus ada

- Demonstrasikan `0.1 + 0.2` dan efeknya.
- Implementasikan operasi `Money.add/subtract/compare` dengan currency guard.
- Uji rounding pada fee/FX sederhana.

### Perubahan pada `banking-lab`

Value object `Money` production-oriented sebagai fondasi seluruh playlist.

### Kriteria pemahaman

Penonton memahami bahwa representasi data adalah bagian dari business correctness, bukan detail implementation.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengubah episode menjadi katalog syntax.
- Menambahkan abstraction sebelum ada kebutuhan.
- Menggunakan contoh non-banking terlalu lama setelah konsep dijelaskan.

# 02. Java Engineering

**Jumlah:** 7 video  
**Tujuan chapter:** Mengajarkan cara mengorganisasi code, state, dependency, dan abstraction berdasarkan perubahan bisnis, bukan menghafal empat pilar OOP atau katalog design pattern.

## Outcome chapter

- Setelah `02.01`, penonton mampu menjelaskan mengapa sebuah behavior ditempatkan pada entity, value object, atau service.
- Setelah `02.02`, penonton dapat membedakan encapsulation struktural dengan encapsulation behavior/invariant.
- Setelah `02.03`, penonton dapat menyebut benefit dan biaya inheritance serta kapan composition memberi boundary lebih sehat.
- Setelah `02.04`, penonton mampu menjawab 'kita sebenarnya sedang mengabstraksikan apa?' sebelum membuat interface.
- Setelah `02.05`, penonton memahami bahwa SOLID adalah alat diagnosis desain, bukan ritual jumlah class.
- Setelah `02.06`, penonton dapat menjelaskan mana object yang identity-nya penting dan mana yang seharusnya diperlakukan sebagai value.
- Setelah `02.07`, penonton memahami 'setiap abstraction mempunyai pajak' dan mampu menyebut pajaknya.

## 02.01 — OOP Bukan Tujuan

### Problem yang memulai video

Developer sering menganggap semakin banyak object berarti semakin object-oriented dan otomatis semakin baik.

### Teori dan mental model wajib

- State, behavior, responsibility, ownership.
- Procedural function vs behavior pada object vs domain service.
- Cohesion dan reason-to-change.
- OOP sebagai alat pengorganisasian, bukan target arsitektur.

### Demo / lab yang harus ada

- Bandingkan `calculateFee(tx)`, `tx.calculateFee()`, dan `feeCalculator.calculate(tx)`.
- Nilai konsekuensi perubahan rule fee pada masing-masing bentuk.

### Perubahan pada `banking-lab`

Prinsip penempatan logic awal untuk domain transfer.

### Kriteria pemahaman

Penonton mampu menjelaskan mengapa sebuah behavior ditempatkan pada entity, value object, atau service.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 02.02 — Encapsulation Bukan Getter dan Setter

### Problem yang memulai video

Entity dengan semua field private tetapi semua setter public tetap memungkinkan state invalid.

### Teori dan mental model wajib

- Information hiding.
- Invariant.
- Controlled state transition.
- Tell, don't ask secara pragmatis.
- Public API sebuah domain object.

### Demo / lab yang harus ada

- Bandingkan `account.setBalance(-1000000)` dengan `account.withdraw(amount)`.
- Tambahkan invariant balance/limit yang relevan.

### Perubahan pada `banking-lab`

`Account` tidak lagi sekadar data bag; state transition dikontrol.

### Kriteria pemahaman

Penonton dapat membedakan encapsulation struktural dengan encapsulation behavior/invariant.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 02.03 — Inheritance Itu Indah... Sampai Parent Berubah

### Problem yang memulai video

Inheritance memberi reuse cepat tetapi dapat membuat perubahan parent menyebar ke seluruh hierarchy.

### Teori dan mental model wajib

- Inheritance, polymorphism, subtype.
- Liskov Substitution Principle sebagai behavioral contract.
- Fragile base class.
- Structural coupling.
- Composition over inheritance sebagai opsi, bukan dogma.

### Demo / lab yang harus ada

- Model `Payment → Transfer/VirtualAccount/Card`, kemudian ubah behavior parent.
- Refactor salah satu bagian menjadi composition.

### Perubahan pada `banking-lab`

Model payment capability yang tidak bergantung pada hierarchy rapuh.

### Kriteria pemahaman

Penonton dapat menyebut benefit dan biaya inheritance serta kapan composition memberi boundary lebih sehat.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 02.04 — Interface Tidak Otomatis Membuat Code Loose Coupling

### Problem yang memulai video

`Service` + `ServiceImpl` sering dibuat ritualistik meskipun tidak ada abstraction boundary yang nyata.

### Teori dan mental model wajib

- Interface sebagai contract.
- Dependency direction.
- Coupling vs indirection.
- Cohesion.
- Boundary yang stabil vs speculative abstraction.

### Demo / lab yang harus ada

- Bedah `TransferService` satu implementation yang tidak pernah diganti.
- Bandingkan dengan `FraudChecker` yang benar-benar memiliki internal/external implementation.

### Perubahan pada `banking-lab`

Dependency boundary hanya dibuat ketika ada alasan perubahan/integrasi/testability yang jelas.

### Kriteria pemahaman

Penonton mampu menjawab 'kita sebenarnya sedang mengabstraksikan apa?' sebelum membuat interface.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 02.05 — SOLID Tanpa Agama SOLID

### Problem yang memulai video

SOLID mudah berubah menjadi checklist yang menghasilkan Strategy, Factory, Provider, Resolver, dan Manager untuk satu `if`.

### Teori dan mental model wajib

- SRP sebagai reason to change.
- OCP sebagai kemampuan extension yang dibutuhkan, bukan speculative framework.
- LSP sebagai substitusi perilaku.
- ISP sebagai meaningful client boundary.
- DIP sebagai arah dependency.
- Abstraction cost dan navigation cost.

### Demo / lab yang harus ada

- Mulai dari `TransferService` sengaja buruk.
- Refactor hanya pada area yang memang memiliki independent reasons to change.
- Bandingkan complexity sebelum/sesudah.

### Perubahan pada `banking-lab`

Transfer application service dengan boundary yang cukup, tidak berlebihan.

### Kriteria pemahaman

Penonton memahami bahwa SOLID adalah alat diagnosis desain, bukan ritual jumlah class.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 02.06 — Entity, Value Object, Immutability, dan Domain Model

### Problem yang memulai video

Tanpa pembedaan identity/value/lifecycle, model banking berubah menjadi table-shaped objects dan setter.

### Teori dan mental model wajib

- Entity identity dan lifecycle.
- Value object berdasarkan nilai.
- Immutability dan predictability.
- Rich domain model vs anemic model.
- State transition eksplisit.

### Demo / lab yang harus ada

- `Account`, `Transaction`, `Money`, `AccountId`, `TransactionReference`.
- Bandingkan `transaction.setStatus("SUCCESS")` vs `transaction.markSuccessful()`.

### Perubahan pada `banking-lab`

Domain model dasar yang akan dipakai sampai production lab.

### Kriteria pemahaman

Penonton dapat menjelaskan mana object yang identity-nya penting dan mana yang seharusnya diperlakukan sebagai value.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 02.07 — Design Pattern dan Pajak Abstraction

### Problem yang memulai video

Pattern sering dipelajari sebagai nama-nama yang harus dimasukkan ke project, bukan solusi terhadap pressure tertentu.

### Teori dan mental model wajib

- Strategy untuk policy yang memang bervariasi.
- Adapter untuk external integration.
- Factory untuk creation yang kompleks.
- Decorator untuk behavior tambahan.
- Trade-off: flexibility, indirection, allocation, navigability, testing.

### Demo / lab yang harus ada

- Fee policy sebagai Strategy.
- Dummy external bank sebagai Adapter.
- Factory untuk payment instruction yang membutuhkan validation.
- Decorator untuk observability/audit wrapper sederhana.

### Perubahan pada `banking-lab`

Empat pattern yang benar-benar akan muncul lagi pada chapter banking/cross-border.

### Kriteria pemahaman

Penonton memahami 'setiap abstraction mempunyai pajak' dan mampu menyebut pajaknya.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

# 03. Java Internals untuk Backend

**Jumlah:** 4 video  
**Tujuan chapter:** Memberi mental model JVM secukupnya agar penonton dapat memahami concurrency, memory, latency, profiling, dan gejala production tanpa mengubah playlist menjadi kursus JVM specialist.

## Outcome chapter

- Setelah `03.01`, penonton dapat menggambar hubungan local variable, reference, object dan heap.
- Setelah `03.02`, penonton dapat menjelaskan mengapa 'Java boros memory' terlalu sederhana dan bagaimana GC memengaruhi latency.
- Setelah `03.03`, penonton memahami mengapa benchmark JVM harus mempertimbangkan warmup/JIT.
- Setelah `03.04`, penonton dapat membedakan visibility, ordering, dan atomicity.

## 03.01 — Apa yang Terjadi Saat Java Membuat Object?

### Problem yang memulai video

Developer memakai object setiap hari tanpa memahami lifecycle allocation dan reference, sehingga sulit mendiagnosis memory behavior.

### Teori dan mental model wajib

- Stack frame, heap, reference.
- Allocation dan object lifetime.
- Escape secara konseptual.
- Apa yang sebenarnya disimpan variable reference.

### Demo / lab yang harus ada

- Buat banyak `Transaction` dan lihat memory footprint secara kasar.
- Visualisasikan stack/reference/heap untuk satu request transfer.

### Perubahan pada `banking-lab`

Mental model memory untuk episode GC dan concurrency.

### Kriteria pemahaman

Penonton dapat menggambar hubungan local variable, reference, object dan heap.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 03.02 — Garbage Collection dan Latency

### Problem yang memulai video

Aplikasi dapat benar secara fungsi tetapi mengalami latency spike karena allocation dan GC pressure.

### Teori dan mental model wajib

- Reachability dan garbage.
- Allocation rate.
- Young/old generation secara konseptual.
- GC pause vs concurrent work.
- Hubungan heap sizing, allocation, CPU, dan latency.

### Demo / lab yang harus ada

- Generate allocation pressure.
- Amati GC log/JFR secara sederhana.
- Hubungkan pause dengan request latency.

### Perubahan pada `banking-lab`

Baseline JVM observation untuk `banking-lab`.

### Kriteria pemahaman

Penonton dapat menjelaskan mengapa 'Java boros memory' terlalu sederhana dan bagaimana GC memengaruhi latency.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 03.03 — Bytecode, Class Loading, dan JIT

### Problem yang memulai video

Istilah JVM sering terdengar seperti magic karena source code langsung dianggap 'dijalankan Java'.

### Teori dan mental model wajib

- Bytecode.
- Class loading/linking/initialization pada level mental model.
- Interpreter dan JIT.
- Hot method dan optimization.
- Warmup effect pada benchmark.

### Demo / lab yang harus ada

- Gunakan `javap`.
- Jalankan method berkali-kali dan jelaskan warmup.
- Hubungkan dengan kesalahan benchmark micro sederhana.

### Perubahan pada `banking-lab`

Pemahaman runtime yang nanti dipakai di performance chapter.

### Kriteria pemahaman

Penonton memahami mengapa benchmark JVM harus mempertimbangkan warmup/JIT.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 03.04 — Java Memory Model: Kenapa Thread Bisa Tidak Melihat Perubahan?

### Problem yang memulai video

Dua thread dapat berinteraksi dengan shared state dengan hasil yang tidak intuitif walaupun source code terlihat berurutan.

### Teori dan mental model wajib

- Visibility.
- Ordering.
- Atomicity.
- Happens-before.
- `volatile` secukupnya.
- Thread safety bukan hanya 'pakai synchronized'.

### Demo / lab yang harus ada

- Buat concurrent balance bug/inconsistent flag.
- Akhiri dengan dua withdrawal yang sama-sama melihat balance lama.

### Perubahan pada `banking-lab`

Bug sengaja yang menjadi pintu masuk chapter concurrency.

### Kriteria pemahaman

Penonton dapat membedakan visibility, ordering, dan atomicity.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

# 04. Concurrency & Transaction Correctness

**Jumlah:** 6 video  
**Tujuan chapter:** Memahami bagaimana request paralel dapat merusak invariant uang serta bagaimana concurrency Java dan database transaction saling melengkapi tetapi tidak saling menggantikan.

## Outcome chapter

- Setelah `04.01`, penonton mampu menjelaskan race sebagai interleaving, bukan 'thread random'.
- Setelah `04.02`, penonton memahami lock menyelesaikan jenis problem tertentu dengan harga tertentu.
- Setelah `04.03`, penonton mampu menjelaskan kalimat 'concurrency tidak menciptakan capacity'.
- Setelah `04.04`, penonton mengerti apa yang dijamin database transaction dan apa yang tidak.
- Setelah `04.05`, penonton mampu memilih teknik berdasarkan conflict rate dan workload, bukan menghafal urutan isolation level.
- Setelah `04.06`, penonton mampu membedakan deadlock prevention dan recovery.

## 04.01 — Dua Request, Satu Saldo, Data yang Salah

### Problem yang memulai video

Saldo Rp1.000.000 menerima dua withdrawal Rp800.000 pada waktu hampir bersamaan; masing-masing request melihat saldo yang sama.

### Teori dan mental model wajib

- Race condition.
- Read-modify-write.
- Critical section.
- Lost update sebagai jembatan Java→database.

### Demo / lab yang harus ada

- Reproduce race dengan concurrent test.
- Catat interleaving operasi.

### Perubahan pada `banking-lab`

Test yang gagal secara nondeterministic/terkontrol.

### Kriteria pemahaman

Penonton mampu menjelaskan race sebagai interleaving, bukan 'thread random'.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 04.02 — Lock Bukan Solusi Ajaib

### Problem yang memulai video

Lock memperbaiki correctness lokal tetapi bisa menurunkan throughput dan bahkan tidak bekerja jika aplikasi dijalankan multi-instance.

### Teori dan mental model wajib

- `synchronized`, `Lock`, atomic classes.
- Lock scope.
- Contention.
- Local lock vs distributed/process boundary.

### Demo / lab yang harus ada

- Bandingkan tanpa lock, synchronized, explicit lock.
- Naikkan concurrency dan ukur throughput.

### Perubahan pada `banking-lab`

Implementasi thread-safe lokal dan catatan limitation.

### Kriteria pemahaman

Penonton memahami lock menyelesaikan jenis problem tertentu dengan harga tertentu.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 04.03 — Thread Pool, Virtual Thread, dan Resource yang Tetap Terbatas

### Problem yang memulai video

Menambah concurrency tidak menciptakan kapasitas database, downstream service, atau CPU.

### Teori dan mental model wajib

- Thread pool.
- Queueing secara intuitif.
- Virtual thread dan blocking I/O.
- Connection pool sebagai hard resource.
- Backpressure secara konseptual.

### Demo / lab yang harus ada

- 10.000 task vs 20 DB connections simulasi.
- Bandingkan platform thread/virtual thread secara wajar.

### Perubahan pada `banking-lab`

Resource-capacity mental model.

### Kriteria pemahaman

Penonton mampu menjelaskan kalimat 'concurrency tidak menciptakan capacity'.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 04.04 — ACID dan Transfer Uang

### Problem yang memulai video

Debit berhasil lalu proses mati sebelum credit; sistem tidak boleh meninggalkan transfer setengah.

### Teori dan mental model wajib

- Atomicity, consistency, isolation, durability.
- Database transaction boundary.
- Commit/rollback.
- Invariant transfer lokal.

### Demo / lab yang harus ada

- Debit A + credit B dalam satu DB transaction.
- Inject exception di tengah.

### Perubahan pada `banking-lab`

Transfer lokal atomic.

### Kriteria pemahaman

Penonton mengerti apa yang dijamin database transaction dan apa yang tidak.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 04.05 — Isolation: Ketika Dua Transaction Berjalan Bersamaan

### Problem yang memulai video

ACID tidak otomatis berarti semua transaction seolah berjalan sendirian.

### Teori dan mental model wajib

- Lost update.
- Dirty/non-repeatable/phantom read secukupnya.
- Isolation level secara problem-oriented.
- Optimistic locking/version.
- Pessimistic locking.

### Demo / lab yang harus ada

- Dua withdrawal pada row yang sama.
- Bandingkan optimistic vs pessimistic pada correctness/retry.

### Perubahan pada `banking-lab`

Strategi concurrency control database.

### Kriteria pemahaman

Penonton mampu memilih teknik berdasarkan conflict rate dan workload, bukan menghafal urutan isolation level.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 04.06 — Deadlock, Ordering, Timeout, dan Retry

### Problem yang memulai video

Transfer A→B dan B→A dapat mengambil lock dengan urutan berbeda lalu saling menunggu.

### Teori dan mental model wajib

- Deadlock prerequisites secara praktis.
- Lock ordering.
- Timeout/deadlock detection.
- Retry policy.
- Idempotency requirement saat retry.

### Demo / lab yang harus ada

- Reproduce deadlock.
- Implement deterministic account ordering.
- Tambahkan bounded retry.

### Perubahan pada `banking-lab`

Transfer dengan lock ordering konsisten.

### Kriteria pemahaman

Penonton mampu membedakan deadlock prevention dan recovery.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

# 05. Backend Banking Foundation

**Jumlah:** 8 video  
**Tujuan chapter:** Membawa domain model ke aplikasi backend nyata melalui HTTP, Spring, persistence, database, testing, dan enterprise access control tanpa membuat REST/Spring sebagai tujuan utama.

## Outcome chapter

- Setelah `05.01`, penonton dapat menggambar request lifecycle end-to-end.
- Setelah `05.02`, penonton mampu menjelaskan contract API lebih luas daripada URL + method.
- Setelah `05.03`, penonton memahami apa yang Spring lakukan untuk object graph.
- Setelah `05.04`, penonton mampu menjelaskan mengapa sebuah class berada pada layer/module tertentu.
- Setelah `05.05`, penonton mampu membaca SQL yang dihasilkan ORM dan tidak menganggap repository sebagai black box.
- Setelah `05.06`, penonton dapat membedakan query bottleneck dan pool bottleneck.
- Setelah `05.07`, penonton mampu memilih jenis test berdasarkan failure yang ingin dicegah.
- Setelah `05.08`, penonton mampu membedakan identity, permission, data entitlement, dan approval workflow.

## 05.01 — Bagaimana Request Bisa Sampai ke Java?

### Problem yang memulai video

Framework menyembunyikan perjalanan request sehingga annotation tampak seperti magic.

### Teori dan mental model wajib

- Client/server.
- TCP/HTTP secukupnya.
- Web server/container.
- Routing/controller.
- Serialization.
- Application call.
- Database call.
- Response lifecycle.

### Demo / lab yang harus ada

- Trace satu `POST /transfers` dari curl sampai controller dan kembali.

### Perubahan pada `banking-lab`

Spring Boot application pertama di `banking-lab`.

### Kriteria pemahaman

Penonton dapat menggambar request lifecycle end-to-end.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 05.02 — Mendesain API Transfer yang Tidak Menyebalkan

### Problem yang memulai video

API transfer yang hanya menerima JSON lalu mengembalikan 200 tidak cukup untuk client nyata.

### Teori dan mental model wajib

- Resource/action modeling pragmatis.
- Request/response schema.
- Validation.
- HTTP status.
- Error contract.
- Correlation/reference.
- Idempotency key.
- Backward compatibility dasar.

### Demo / lab yang harus ada

- Desain `POST /transfers`, `GET /transfers/{id}`.
- Validasi amount/currency/account.

### Perubahan pada `banking-lab`

API contract v1.

### Kriteria pemahaman

Penonton mampu menjelaskan contract API lebih luas daripada URL + method.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 05.03 — Spring Dependency Injection Tanpa Magic

### Problem yang memulai video

DI sering diajarkan dengan annotation sebelum penonton tahu problem object construction/dependency graph.

### Teori dan mental model wajib

- Manual composition.
- Dependency injection.
- IoC container.
- Bean.
- Configuration.
- Constructor injection.

### Demo / lab yang harus ada

- Bangun `TransferService` manual, lalu pindahkan composition ke Spring.

### Perubahan pada `banking-lab`

Dependency graph Spring yang eksplisit dan testable.

### Kriteria pemahaman

Penonton memahami apa yang Spring lakukan untuk object graph.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 05.04 — Controller, Service, Repository Bukan Hukum Alam

### Problem yang memulai video

Tiga folder klasik mudah berubah menjadi dumping ground dan dependency tanpa domain boundary.

### Teori dan mental model wajib

- HTTP boundary.
- Application orchestration.
- Domain logic.
- Persistence boundary.
- Package-by-feature vs package-by-layer.
- Use case/application service.

### Demo / lab yang harus ada

- Refactor folder structure berdasarkan transfer/account feature.
- Pindahkan business rule dari controller/service gemuk.

### Perubahan pada `banking-lab`

Struktur codebase yang merefleksikan responsibility.

### Kriteria pemahaman

Penonton mampu menjelaskan mengapa sebuah class berada pada layer/module tertentu.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 05.05 — JPA Mempermudah Database, Tapi Tidak Menghilangkan Database

### Problem yang memulai video

ORM dapat membuat developer lupa query, transaction, dan cost database tetap ada.

### Teori dan mental model wajib

- Entity persistence.
- Persistence context.
- Entity state.
- Dirty checking.
- Lazy/eager loading.
- N+1.
- Generated SQL.
- Mapping domain vs persistence model trade-off.

### Demo / lab yang harus ada

- Persist Account/Transfer.
- Trigger N+1 lalu lihat SQL.
- Perbaiki query.

### Perubahan pada `banking-lab`

Persistence layer yang observable.

### Kriteria pemahaman

Penonton mampu membaca SQL yang dihasilkan ORM dan tidak menganggap repository sebagai black box.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 05.06 — Index, Query Plan, dan Connection Pool

### Problem yang memulai video

API lambat sering diselesaikan dengan 'tambah server' padahal query scan atau pool sudah saturasi.

### Teori dan mental model wajib

- Index basics.
- Selectivity.
- Query plan/EXPLAIN.
- Connection lifecycle.
- Pool size.
- Queueing/saturation.
- Timeout.

### Demo / lab yang harus ada

- Buat query transfer history lambat.
- Gunakan EXPLAIN dan index.
- Simulasikan 100 requests dengan 20 connections.

### Perubahan pada `banking-lab`

Database baseline + connection pool config terdokumentasi.

### Kriteria pemahaman

Penonton dapat membedakan query bottleneck dan pool bottleneck.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 05.07 — Testing yang Benar-Benar Memberi Confidence

### Problem yang memulai video

Jumlah test tidak sama dengan confidence jika test tidak menguji invariant dan integration boundary yang relevan.

### Teori dan mental model wajib

- Unit test untuk pure/domain rule.
- Integration test untuk DB/transaction.
- API/contract test.
- Test double secukupnya.
- Testcontainers.
- Determinism.

### Demo / lab yang harus ada

- Test Money invariant.
- Test atomic transfer dengan DB nyata container.
- Test HTTP contract.

### Perubahan pada `banking-lab`

Testing pyramid/pragmatic test suite untuk core flow.

### Kriteria pemahaman

Penonton mampu memilih jenis test berdasarkan failure yang ingin dicegah.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 05.08 — Authentication, Authorization, Entitlement, dan Maker-Checker

### Problem yang memulai video

Dalam banking, 'sudah login' tidak berarti boleh melakukan semua transfer.

### Teori dan mental model wajib

- Authentication vs authorization.
- Entitlement terhadap account/product/function.
- Role vs permission vs policy.
- Maker-checker/four-eyes principle sebagai workflow concept.
- Transaction limit dan approval chain.
- Auditability akses.

### Demo / lab yang harus ada

- Tambahkan actor context.
- Maker membuat transfer; checker berbeda melakukan approval.
- Tolak self-approval.

### Perubahan pada `banking-lab`

Approval boundary dasar.

### Kriteria pemahaman

Penonton mampu membedakan identity, permission, data entitlement, dan approval workflow.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

# 06. Spring Transaction Internals

**Jumlah:** 3 video  
**Tujuan chapter:** Membayar janji playlist untuk tidak sekadar memakai `@Transactional`, tetapi memahami transaction boundary, proxy, persistence context, flush, rollback, dan limitation terhadap sistem eksternal.

## Outcome chapter

- Setelah `06.01`, penonton dapat menggambar call path caller→proxy→transaction→method.
- Setelah `06.02`, penonton memahami kapan transaction terlalu panjang atau salah boundary.
- Setelah `06.03`, penonton dapat menjelaskan kapan perubahan object menjadi SQL dan kapan data benar-benar durable.

## 06.01 — `@Transactional` Sebenarnya Melakukan Apa?

### Problem yang memulai video

Annotation sering dianggap jimat yang otomatis membuat seluruh operasi aman.

### Teori dan mental model wajib

- Proxy/interceptor mental model.
- Transaction manager.
- Begin/commit/rollback.
- Method boundary.
- Self-invocation problem.
- Visibility/proxy caveat secara proporsional.

### Demo / lab yang harus ada

- Bandingkan method melalui proxy vs self invocation.
- Aktifkan transaction logging.

### Perubahan pada `banking-lab`

Dokumentasi transaction boundary aktual pada use case transfer.

### Kriteria pemahaman

Penonton dapat menggambar call path caller→proxy→transaction→method.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 06.02 — Propagation, Isolation, Rollback, dan Boundary yang Salah

### Problem yang memulai video

Memperpanjang DB transaction mengelilingi network call dapat menahan lock/connection dan tetap tidak dapat rollback dunia luar.

### Teori dan mental model wajib

- Propagation yang paling relevan (`REQUIRED`, `REQUIRES_NEW` sebagai contoh).
- Isolation relation dengan chapter sebelumnya.
- Rollback rules.
- Transaction duration.
- External side effect bukan bagian dari local DB transaction.

### Demo / lab yang harus ada

- `debit → external HTTP → credit` dan tunjukkan limitation.
- Pisahkan domain flow dan external interaction.

### Perubahan pada `banking-lab`

Transaction boundary yang lebih sehat.

### Kriteria pemahaman

Penonton memahami kapan transaction terlalu panjang atau salah boundary.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 06.03 — Persistence Context, Flush, Lock, dan Kapan SQL Benar-Benar Jalan

### Problem yang memulai video

Developer sering menyamakan `save()` dengan SQL langsung dan commit dengan flush.

### Teori dan mental model wajib

- Persistence context lifecycle.
- Managed/detached state.
- Dirty checking.
- Flush vs commit.
- Optimistic version.
- Pessimistic lock API.
- SQL execution timing.

### Demo / lab yang harus ada

- Ubah entity tanpa explicit save.
- Paksa flush.
- Observasi generated SQL dan lock.

### Perubahan pada `banking-lab`

Transfer persistence behavior yang dipahami, bukan ditebak.

### Kriteria pemahaman

Penonton dapat menjelaskan kapan perubahan object menjadi SQL dan kapan data benar-benar durable.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

# 07. Banking Domain Engineering

**Jumlah:** 8 video  
**Tujuan chapter:** Menjadikan domain banking sebagai pusat playlist: account, balance, ledger, debit/credit, transaction lifecycle, uncertainty, reversal, reconciliation, dan audit.

## Outcome chapter

- Setelah `07.01`, penonton dapat membedakan persistence shape dan domain behavior.
- Setelah `07.02`, penonton tidak lagi menggunakan kata 'saldo' tanpa menyebut saldo jenis apa.
- Setelah `07.03`, penonton memahami mengapa history posting lebih kuat daripada sekadar overwrite balance.
- Setelah `07.04`, penonton memandang transaction sebagai process/lifecycle, bukan row CRUD.
- Setelah `07.05`, penonton dapat memecah transfer menjadi responsibility dan invariant.
- Setelah `07.06`, penonton memahami bahwa timeout adalah kurangnya informasi, bukan bukti failure.
- Setelah `07.07`, penonton mampu membedakan reversal, refund, correction, dan overwrite.
- Setelah `07.08`, penonton memahami reconciliation sebagai proses pembuktian state lintas sistem.

## 07.01 — Account Bukan Sekadar Row Database

### Problem yang memulai video

Menyamakan account dengan row `accounts` membuat domain rule tercecer di service dan query.

### Teori dan mental model wajib

- Account sebagai domain entity.
- Account status/lifecycle.
- Currency/account product constraint.
- Invariant dan capability.
- Data record vs domain concept.

### Demo / lab yang harus ada

- Model active/frozen/closed.
- Tolak transaction pada state yang tidak mengizinkan.

### Perubahan pada `banking-lab`

Account aggregate/entity yang membawa invariant penting.

### Kriteria pemahaman

Penonton dapat membedakan persistence shape dan domain behavior.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 07.02 — Balance Bukan Selalu Sumber Kebenaran

### Problem yang memulai video

Satu kolom `balance` tidak cukup menjelaskan posted, available, held, pending, atau derived balance.

### Teori dan mental model wajib

- Ledger-derived balance.
- Posted/current balance.
- Available balance.
- Held/reserved amount.
- Caching/materialized balance sebagai optimization.
- Source of truth.

### Demo / lab yang harus ada

- Tambahkan hold dan available balance.
- Bandingkan stored balance vs derived ledger sum.

### Perubahan pada `banking-lab`

Explicit balance semantics.

### Kriteria pemahaman

Penonton tidak lagi menggunakan kata 'saldo' tanpa menyebut saldo jenis apa.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 07.03 — Debit, Credit, dan Double-Entry Ledger

### Problem yang memulai video

Transfer yang hanya mengubah dua balance kehilangan model accounting/audit yang kuat.

### Teori dan mental model wajib

- Ledger account secara engineering-level.
- Debit/credit sesuai model yang dipilih.
- Balanced entry invariant.
- Journal/entry/reference.
- Immutability historical posting.
- Rounding/currency boundary.

### Demo / lab yang harus ada

- Post transfer sebagai dua/multiple ledger entries.
- Assert net/balanced invariant.

### Perubahan pada `banking-lab`

Ledger module dasar.

### Kriteria pemahaman

Penonton memahami mengapa history posting lebih kuat daripada sekadar overwrite balance.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 07.04 — Transaction Bukan CRUD

### Problem yang memulai video

Financial transaction memiliki lifecycle dan legal state transition; update status bebas dapat menciptakan history tidak masuk akal.

### Teori dan mental model wajib

- State machine mental model.
- INITIATED/PROCESSING/SUCCESS/FAILED/UNKNOWN/REVERSED.
- Terminal vs non-terminal state.
- Allowed transition.
- Reference/idempotency relation.

### Demo / lab yang harus ada

- Implement transition guard.
- Test illegal transition SUCCESS→PROCESSING.

### Perubahan pada `banking-lab`

Transaction lifecycle eksplisit.

### Kriteria pemahaman

Penonton memandang transaction sebagai process/lifecycle, bukan row CRUD.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 07.05 — Transfer Tidak Sesederhana `A -= X; B += X`

### Problem yang memulai video

Transfer nyata terdiri dari validation, authorization, fee, posting, reference, audit, dan kemungkinan workflow.

### Teori dan mental model wajib

- Precondition.
- Authorization/entitlement.
- Fee calculation.
- Debit/credit posting.
- Ledger reference.
- Audit context.
- Business date/value date secara pengantar.

### Demo / lab yang harus ada

- Bangun end-to-end internal transfer berdasarkan semua modul sebelumnya.

### Perubahan pada `banking-lab`

Use case transfer internal v1 yang benar-benar domain-oriented.

### Kriteria pemahaman

Penonton dapat memecah transfer menjadi responsibility dan invariant.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 07.06 — Timeout Tidak Sama dengan Gagal

### Problem yang memulai video

Response hilang setelah server commit; client tidak mengetahui status sebenarnya.

### Teori dan mental model wajib

- Known success/failure vs uncertainty.
- At-most-once intention vs retries.
- Idempotency key.
- Business transaction reference.
- Status inquiry.
- Client retry contract.

### Demo / lab yang harus ada

- Commit lalu sengaja drop response.
- Retry request dengan/without idempotency.

### Perubahan pada `banking-lab`

Idempotent submission + inquiry API.

### Kriteria pemahaman

Penonton memahami bahwa timeout adalah kurangnya informasi, bukan bukti failure.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 07.07 — Hold, Reversal, Refund, dan Correction

### Problem yang memulai video

Financial history tidak seharusnya diperbaiki dengan menghapus atau mengedit posting lama tanpa jejak.

### Teori dan mental model wajib

- Reservation/hold.
- Release.
- Reversal.
- Refund.
- Correction/adjustment.
- Compensating financial entry.
- Immutability/audit.

### Demo / lab yang harus ada

- Hold dana sebelum finalization.
- Reverse posting dengan linked reference.

### Perubahan pada `banking-lab`

Financial adjustment primitives.

### Kriteria pemahaman

Penonton mampu membedakan reversal, refund, correction, dan overwrite.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 07.08 — Reconciliation, Audit, dan External System

### Problem yang memulai video

Dua sistem dapat sama-sama mengklaim keadaan berbeda; log aplikasi saja tidak cukup menentukan financial truth.

### Teori dan mental model wajib

- Operational log vs audit trail vs transaction history.
- Reconciliation.
- Missing/duplicate/amount/status mismatch.
- Internal vs external reference.
- Daily/periodic matching concept.
- Exception queue/manual handling.

### Demo / lab yang harus ada

- Buat dataset internal/external mismatch.
- Generate reconciliation result.

### Perubahan pada `banking-lab`

Reconciliation module sederhana.

### Kriteria pemahaman

Penonton memahami reconciliation sebagai proses pembuktian state lintas sistem.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

# 08. Cross-Border Banking Engineering

**Jumlah:** 8 video  
**Tujuan chapter:** Menjadi signature utama channel: bagaimana software banking menangani transaksi lintas negara, currency, identifier, routing, correspondent, country rules, compliance workflow, settlement, dan reconciliation. Fokusnya engineering, bukan nasihat hukum atau penjelasan regulasi spesifik yang dapat berubah.

## Outcome chapter

- Setelah `08.01`, penonton mampu menjelaskan siapa saja participant dan di mana uncertainty dapat muncul.
- Setelah `08.02`, penonton mampu memodelkan perbedaan field per corridor tanpa membuat domain tergantung pada UI form.
- Setelah `08.03`, penonton dapat menyebut jenis amount/currency tanpa mencampurnya.
- Setelah `08.04`, penonton mampu membedakan variasi stabil yang pantas diabstraksikan dengan rule kecil yang cukup eksplisit.
- Setelah `08.05`, penonton memahami bahwa route adalah domain decision/input, bukan sekadar URL external API.
- Setelah `08.06`, penonton memahami manfaat dan bahaya canonical model.
- Setelah `08.07`, penonton memahami bahwa waktu, kalender, approval, dan rule eksternal adalah first-class domain concerns.
- Setelah `08.08`, penonton dapat menjelaskan mengapa transfer lintas negara membutuhkan lifecycle dan reconciliation yang lebih kaya.

## 08.01 — Anatomi Transfer Antarnegara

### Problem yang memulai video

Cross-border transfer bukan sekadar internal transfer dengan country field tambahan.

### Teori dan mental model wajib

- Originator/debtor, beneficiary/creditor.
- Originating/sending bank.
- Beneficiary/receiving bank.
- Intermediary/correspondent concept.
- Payment/clearing/settlement network secara high-level.
- Domestic vs cross-border vs cross-currency.
- Instruction vs clearing vs settlement.

### Demo / lab yang harus ada

- Gambar sequence transfer dari corporate customer ke beneficiary luar negeri.
- Map object internal ke participant/step.

### Perubahan pada `banking-lab`

Cross-border context map di repository docs.

### Kriteria pemahaman

Penonton mampu menjelaskan siapa saja participant dan di mana uncertainty dapat muncul.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 08.02 — IBAN, SWIFT/BIC, Routing Number, dan Local Clearing Code

### Problem yang memulai video

Field beneficiary berbeda berdasarkan negara/jaringan; hardcode satu form global menghasilkan validation yang salah.

### Teori dan mental model wajib

- Account identifier vs bank identifier vs clearing/routing identifier.
- IBAN/BIC/SWIFT terminology secara konseptual.
- Local clearing/routing code sebagai country/network-specific data.
- Conditional required fields.
- Validation format vs business validation.
- Extensible metadata/capability model.

### Demo / lab yang harus ada

- Bangun `CountryPaymentRequirement`/`RoutingRequirement`.
- Request schema menyesuaikan requirement tanpa giant-if.

### Perubahan pada `banking-lab`

Country/routing requirement engine v1.

### Kriteria pemahaman

Penonton mampu memodelkan perbedaan field per corridor tanpa membuat domain tergantung pada UI form.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 08.03 — Currency, FX Rate, Deal Number, dan Charges

### Problem yang memulai video

Amount yang diketik customer tidak selalu sama dengan amount debit, settlement, atau yang diterima beneficiary.

### Teori dan mental model wajib

- Debit currency.
- Transfer/instructed currency.
- Credit/beneficiary currency.
- Settlement currency.
- FX rate/quote/deal concept.
- Indicative vs booked/final rate.
- Fee/charge components.
- Rounding dan minor unit.

### Demo / lab yang harus ada

- Model `FxQuote`, `DealReference`, `ChargeBreakdown`.
- Hitung debit total dan beneficiary amount dengan scenario sederhana.

### Perubahan pada `banking-lab`

FX/charge model terpisah dari core Money.

### Kriteria pemahaman

Penonton dapat menyebut jenis amount/currency tanpa mencampurnya.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 08.04 — Country Rules Tanpa Membuat `if` Neraka

### Problem yang memulai video

`if country == X ... else if Y ...` tumbuh menjadi pusat ketergantungan seluruh negara.

### Teori dan mental model wajib

- Policy/Strategy.
- Country capability.
- Corridor rule.
- Required field rule.
- Cut-off/limit/routing capability.
- Configuration vs code.
- Versioning rule.

### Demo / lab yang harus ada

- Refactor giant-if menjadi policy registry/config-driven boundary.
- Tambahkan negara baru dengan perubahan lokal.

### Perubahan pada `banking-lab`

Country/corridor policy architecture.

### Kriteria pemahaman

Penonton mampu membedakan variasi stabil yang pantas diabstraksikan dengan rule kecil yang cukup eksplisit.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 08.05 — Correspondent Banking dan Payment Routing

### Problem yang memulai video

Sending bank tidak selalu memiliki direct route ke beneficiary bank.

### Teori dan mental model wajib

- Direct vs intermediary route.
- Correspondent relationship secara konseptual.
- Routing decision input.
- Intermediary chain.
- Cost/latency/reachability trade-off.
- Do not infer actual bank routing rules from simplified lab model.

### Demo / lab yang harus ada

- Buat graph/routing table sederhana.
- Pilih route berdasarkan corridor/currency/capability.

### Perubahan pada `banking-lab`

Payment route abstraction.

### Kriteria pemahaman

Penonton memahami bahwa route adalah domain decision/input, bukan sekadar URL external API.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 08.06 — ISO 20022 dan Canonical Payment Model

### Problem yang memulai video

Integrasi banyak network/provider menghasilkan bentuk message berbeda; langsung menyebarkan schema eksternal ke domain membuat coupling tinggi.

### Teori dan mental model wajib

- Message standard sebagai contract.
- ISO 20022 secara high-level, bukan menghafal seluruh message.
- Canonical/internal model.
- Adapter/anti-corruption layer.
- Semantic loss saat canonical model terlalu umum.
- Schema/version boundary.

### Demo / lab yang harus ada

- Map `TransferInstruction` internal ke dua dummy connector schema.
- Tunjukkan field yang tidak 1:1.

### Perubahan pada `banking-lab`

Connector/adaptor layer.

### Kriteria pemahaman

Penonton memahami manfaat dan bahaya canonical model.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 08.07 — Compliance, Limits, Approval, Cut-Off, Holiday, dan Time Zone

### Problem yang memulai video

Transaksi valid secara syntax dapat tetap tidak boleh/dapat diproses saat ini karena approval, screening, limit, calendar, atau operational window.

### Teori dan mental model wajib

- Rule orchestration.
- Screening/compliance checkpoint sebagai external/domain capability, tanpa memberi legal advice.
- Transaction limits.
- Maker-checker/multi-level approval.
- Cut-off time.
- Business calendar/holiday.
- Time zone dan business date.
- Pending/scheduled processing.

### Demo / lab yang harus ada

- Tambah calendar/cut-off policy.
- Simulasikan Jakarta vs London/New York timezone.
- Tahan transaksi menunggu approval/screening result.

### Perubahan pada `banking-lab`

Pre-processing pipeline yang eksplisit.

### Kriteria pemahaman

Penonton memahami bahwa waktu, kalender, approval, dan rule eksternal adalah first-class domain concerns.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

## 08.08 — Dari Instruction sampai Settlement dan Reconciliation

### Problem yang memulai video

Status 'SENT' tidak sama dengan 'SETTLED'; external flow dapat rejected, returned, pending, unknown, atau mismatch.

### Teori dan mental model wajib

- Instruction lifecycle.
- Accepted/rejected.
- Clearing/settlement concept.
- Return/reject/reversal.
- Status inquiry.
- External reference mapping.
- Reconciliation setelah processing.
- Operational exception handling.

### Demo / lab yang harus ada

- Simulasikan state: INITIATED→VALIDATED→AUTHORIZED→ROUTED→SENT→ACCEPTED→SETTLED.
- Inject REJECTED/RETURNED/UNKNOWN.
- Reconcile provider statement dummy.

### Perubahan pada `banking-lab`

Cross-border lifecycle end-to-end.

### Kriteria pemahaman

Penonton dapat menjelaskan mengapa transfer lintas negara membutuhkan lifecycle dan reconciliation yang lebih kaya.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Mengklaim implementasi lab sebagai representasi persis sistem bank tertentu.
- Menyamakan business rule contoh dengan regulasi universal.
- Mengabaikan status UNKNOWN, reconciliation, reference, dan audit demi demo yang terlihat sederhana.

# 09. Performance & Diagnosis

**Jumlah:** 5 video  
**Tujuan chapter:** Mengajarkan performance sebagai pengukuran sistem, bukan perasaan bahwa endpoint 'terasa cepat', serta membangun kemampuan diagnosis dari metric sampai JVM/database.

## Outcome chapter

- Setelah `09.01`, penonton mampu membaca percentile dan membedakan latency/throughput/concurrency.
- Setelah `09.02`, penonton mampu mengkritik benchmark yang tidak menyebut workload/resource budget.
- Setelah `09.03`, penonton memulai dari evidence, bukan langsung menambah instance/index.
- Setelah `09.04`, penonton mampu memilih tool berdasarkan symptom.
- Setelah `09.05`, penonton dapat menyusun evidence chain sampai root cause.

## 09.01 — Performance Bukan 'API Gue Cepat'

### Problem yang memulai video

Satu angka average latency tidak menjelaskan tail latency, capacity, saturation, atau failure.

### Teori dan mental model wajib

- Latency.
- Throughput/TPS.
- Concurrency.
- Utilization.
- Saturation.
- Error rate.
- p50/p95/p99.
- Service time vs waiting time secara intuitif.

### Demo / lab yang harus ada

- Instrument API transfer.
- Bandingkan average dengan percentile.

### Perubahan pada `banking-lab`

Performance glossary + baseline metrics.

### Kriteria pemahaman

Penonton mampu membaca percentile dan membedakan latency/throughput/concurrency.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 09.02 — Load Test yang Tidak Bohong ke Diri Sendiri

### Problem yang memulai video

Benchmark mudah menghasilkan kesimpulan palsu karena workload, data, warmup, resource, atau environment tidak dikontrol.

### Teori dan mental model wajib

- Workload model.
- Arrival rate/concurrency model.
- Warmup/JIT.
- Dataset size.
- Think time.
- Resource budget.
- Repeatability.
- Success criteria.

### Demo / lab yang harus ada

- Buat test internal transfer dengan k6/JMeter/Gatling salah satu.
- Dokumentasikan environment dan workload.

### Perubahan pada `banking-lab`

Benchmark protocol reproducible.

### Kriteria pemahaman

Penonton mampu mengkritik benchmark yang tidak menyebut workload/resource budget.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 09.03 — Database, Thread Pool, atau Connection Pool?

### Problem yang memulai video

Gejala sama-sama 'lambat', tetapi root cause bisa berbeda.

### Teori dan mental model wajib

- Queue/saturation.
- Connection wait.
- Slow query.
- Thread starvation/blocking.
- Downstream latency.
- Basic metric correlation.

### Demo / lab yang harus ada

- Buat tiga bottleneck berbeda dengan symptom serupa.
- Diagnosis tanpa melihat source dulu.

### Perubahan pada `banking-lab`

Diagnosis checklist.

### Kriteria pemahaman

Penonton memulai dari evidence, bukan langsung menambah instance/index.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 09.04 — Membongkar JVM dengan JFR, GC, Heap, dan Thread Dump

### Problem yang memulai video

Tool JVM banyak; developer perlu tahu tool mana cocok untuk gejala apa.

### Teori dan mental model wajib

- JFR/JMC mental model.
- GC log.
- Heap dump.
- Thread dump.
- CPU profiling.
- Allocation profiling.
- Safe production usage secara prinsip.

### Demo / lab yang harus ada

- CPU hotspot scenario.
- Memory retention scenario.
- Blocked threads scenario.

### Perubahan pada `banking-lab`

JVM investigation playbook.

### Kriteria pemahaman

Penonton mampu memilih tool berdasarkan symptom.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 09.05 — Kenapa p99 Tiba-Tiba 2 Detik?

### Problem yang memulai video

Tail latency spike membutuhkan korelasi multi-layer.

### Teori dan mental model wajib

- Metric→trace→thread→DB→JVM workflow.
- Correlation vs causation.
- Baseline/deviation.
- Root cause vs symptom.

### Demo / lab yang harus ada

- Full investigation pada banking-lab dengan injected bottleneck.

### Perubahan pada `banking-lab`

Mini incident report pertama.

### Kriteria pemahaman

Penonton dapat menyusun evidence chain sampai root cause.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

# 10. Architecture & Distributed Systems

**Jumlah:** 7 video  
**Tujuan chapter:** Membawa sistem dari modular monolith ke distributed architecture hanya ketika pressure nyata muncul, lalu mempelajari network failure, service boundary, data ownership, Saga/compensation, dan biaya operasionalnya.

## Outcome chapter

- Setelah `10.01`, penonton mampu menanyakan requirement sebelum memilih teknologi.
- Setelah `10.02`, penonton mampu membedakan monolith terstruktur dan big ball of mud.
- Setelah `10.03`, penonton mampu memberi alasan konkret untuk pemisahan service.
- Setelah `10.04`, penonton memahami microservice menukar coupling tertentu dengan distributed complexity.
- Setelah `10.05`, penonton mampu menjelaskan siapa yang boleh menulis data tertentu dan mengapa.
- Setelah `10.06`, penonton memahami compensation bukan time machine dan tidak semua side effect dapat di-undo.
- Setelah `10.07`, penonton mampu menjelaskan trade-off dan konteks, bukan sekadar menyebut best practice.

## 10.01 — Mendesain Sistem dari Requirement, Bukan Diagram

### Problem yang memulai video

System design sering dimulai dari menggambar Kafka/Redis sebelum menyebut target bisnis/non-functional.

### Teori dan mental model wajib

- Functional requirement.
- Throughput/latency target.
- Availability.
- Consistency.
- Durability.
- Data volume.
- RPO/RTO pengantar.
- Security/compliance constraints.
- Cost/team constraints.
- Capacity estimation sederhana.

### Demo / lab yang harus ada

- Tulis requirement banking-lab v2 sebelum menggambar architecture.

### Perubahan pada `banking-lab`

Architecture decision input document.

### Kriteria pemahaman

Penonton mampu menanyakan requirement sebelum memilih teknologi.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 10.02 — Monolith Itu Bukan Masalah

### Problem yang memulai video

Monolith sering disamakan dengan codebase buruk, padahal modularity dan deployment topology adalah hal berbeda.

### Teori dan mental model wajib

- Module.
- Boundary.
- Dependency rule.
- Modular monolith.
- Internal API.
- Ownership.

### Demo / lab yang harus ada

- Pisahkan account/transfer/ledger/cross-border sebagai module dalam satu deployable.

### Perubahan pada `banking-lab`

Modular monolith baseline.

### Kriteria pemahaman

Penonton mampu membedakan monolith terstruktur dan big ball of mud.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 10.03 — Kapan Monolith Mulai Sakit?

### Problem yang memulai video

Microservices seharusnya menjawab pressure tertentu, bukan tren.

### Teori dan mental model wajib

- Independent deployment.
- Team ownership.
- Independent scaling.
- Availability/isolation needs.
- Different change rate.
- Boundary maturity.
- Operational readiness.

### Demo / lab yang harus ada

- Analisis pressure mana yang cukup kuat untuk split dummy Transfer Processing.

### Perubahan pada `banking-lab`

Decision record: split or not split.

### Kriteria pemahaman

Penonton mampu memberi alasan konkret untuk pemisahan service.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 10.04 — Memecah Service Berarti Menambah Network

### Problem yang memulai video

Method call yang deterministik berubah menjadi network call yang bisa timeout, lambat, duplicate, atau partial.

### Teori dan mental model wajib

- Latency.
- Timeout.
- Retry.
- Backoff/jitter.
- Circuit breaker.
- Bulkhead secara pengantar.
- Partial failure.
- Network is not reliable.

### Demo / lab yang harus ada

- Pisahkan service lalu inject timeout/error.

### Perubahan pada `banking-lab`

Resilient HTTP client policy dasar.

### Kriteria pemahaman

Penonton memahami microservice menukar coupling tertentu dengan distributed complexity.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 10.05 — Service Boundary, Bounded Context, DDD, dan Data Ownership

### Problem yang memulai video

Service terpisah tetapi shared DB dan shared model sering hanya menjadi distributed monolith.

### Teori dan mental model wajib

- Bounded context.
- Ubiquitous language secukupnya.
- Context boundary.
- Data ownership.
- Shared database smell.
- Contract/API/event boundary.
- Duplication vs coupling.

### Demo / lab yang harus ada

- Tetapkan ownership Account/Transfer/Ledger/Payment.
- Hilangkan direct table access lintas service pada versi distributed.

### Perubahan pada `banking-lab`

Context map + ownership matrix.

### Kriteria pemahaman

Penonton mampu menjelaskan siapa yang boleh menulis data tertentu dan mengapa.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 10.06 — Distributed Transaction: Saga, Compensation, dan 2PC

### Problem yang memulai video

Satu ACID transaction tidak lagi mencakup beberapa database/service.

### Teori dan mental model wajib

- Local transaction.
- Distributed workflow.
- Saga orchestration/choreography.
- Compensating action.
- Semantic rollback.
- 2PC secara konsep dan trade-off.
- Exactly-once business effect sebagai desain, bukan klaim sederhana.

### Demo / lab yang harus ada

- Transfer workflow debit→external step→ledger notification.
- Gagal di tengah lalu compensation.

### Perubahan pada `banking-lab`

Distributed transaction state machine.

### Kriteria pemahaman

Penonton memahami compensation bukan time machine dan tidak semua side effect dapat di-undo.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 10.07 — Architecture Complexity: Apa Kita Benar-Benar Mendapat Sesuatu?

### Problem yang memulai video

Arsitektur yang lebih kompleks harus membayar dirinya dengan benefit yang dapat dijelaskan.

### Teori dan mental model wajib

- Deployment independence.
- Performance.
- Reliability.
- Consistency.
- Developer cognitive load.
- Operational cost.
- Debugging complexity.
- Data ownership.
- Team topology.

### Demo / lab yang harus ada

- Bandingkan modular monolith dan versi split berdasarkan requirement 10.01.

### Perubahan pada `banking-lab`

Architecture trade-off matrix tanpa winner universal.

### Kriteria pemahaman

Penonton mampu menjelaskan trade-off dan konteks, bukan sekadar menyebut best practice.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

# 11. Event-Driven Banking

**Jumlah:** 5 video  
**Tujuan chapter:** Memperkenalkan asynchronous/event-driven architecture saat kebutuhan fan-out, decoupling, throughput, dan resilience muncul, lalu membahas ordering, duplicate, delivery semantics, dual-write, outbox, retry, DLQ, dan schema evolution.

## Outcome chapter

- Setelah `11.01`, penonton dapat menjelaskan kapan asynchronous communication memberi nilai.
- Setelah `11.02`, penonton mampu membedakan command dan event dari bahasa serta ownership.
- Setelah `11.03`, penonton tidak menganggap broker menghapus kebutuhan idempotency.
- Setelah `11.04`, penonton memahami mengapa DB transaction tidak mencakup Kafka secara otomatis.
- Setelah `11.05`, penonton mampu menjelaskan lifecycle failure event dari publish sampai recovery.

## 11.01 — Kapan REST Tidak Lagi Cukup?

### Problem yang memulai video

Transfer selesai tetapi notification, fraud monitoring, analytics, audit, reporting tidak harus menambah latency request utama.

### Teori dan mental model wajib

- Synchronous vs asynchronous.
- Command/query/request vs event.
- Temporal coupling.
- Fan-out.
- Eventual consistency.
- When async is unnecessary.

### Demo / lab yang harus ada

- Pisahkan post-transfer side effects dari request path.

### Perubahan pada `banking-lab`

Candidate event map.

### Kriteria pemahaman

Penonton dapat menjelaskan kapan asynchronous communication memberi nilai.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 11.02 — Event, Command, dan Kafka dalam Satu Mental Model

### Problem yang memulai video

`TransferMoney` dan `MoneyTransferred` sering disamakan padahal semantics berbeda.

### Teori dan mental model wajib

- Command = intention/request.
- Event = fact yang telah terjadi.
- Producer/topic/partition/consumer group.
- Offset.
- Key.
- Broker/cluster high-level.

### Demo / lab yang harus ada

- Publish `MoneyTransferred` setelah local commit via tahap sementara.
- Consumer notification dummy.

### Perubahan pada `banking-lab`

Event vocabulary + Kafka local setup.

### Kriteria pemahaman

Penonton mampu membedakan command dan event dari bahasa serta ownership.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 11.03 — Partition, Ordering, Duplicate Message, dan Delivery Semantics

### Problem yang memulai video

Event dapat datang duplicate atau ordering hanya terjamin dalam scope tertentu.

### Teori dan mental model wajib

- Partition ordering.
- Message key.
- Consumer group parallelism.
- At-most-once.
- At-least-once.
- Exactly-once terminology dan scope.
- Idempotent consumer.
- Deduplication.

### Demo / lab yang harus ada

- Kirim duplicate event.
- Gunakan transaction/account key.
- Implement processed-message/inbox concept sederhana.

### Perubahan pada `banking-lab`

Idempotent consumer.

### Kriteria pemahaman

Penonton tidak menganggap broker menghapus kebutuhan idempotency.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 11.04 — Database Commit Berhasil, Kafka Gagal

### Problem yang memulai video

Dual-write DB + broker dapat meninggalkan state database tanpa event atau event tanpa state yang sesuai.

### Teori dan mental model wajib

- Dual-write problem.
- Transactional outbox.
- Outbox relay/publisher.
- At-least-once relay.
- Idempotent consumer.
- CDC sebagai alternatif high-level.

### Demo / lab yang harus ada

- Reproduce commit-success/publish-fail.
- Implement outbox table + publisher.

### Perubahan pada `banking-lab`

Transactional outbox pada banking-lab.

### Kriteria pemahaman

Penonton memahami mengapa DB transaction tidak mencakup Kafka secara otomatis.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 11.05 — Retry, DLQ, Schema Evolution, dan Eventual Consistency

### Problem yang memulai video

Consumer failure dan perubahan schema adalah bagian normal lifecycle event production.

### Teori dan mental model wajib

- Retry policy.
- Backoff.
- Poison message.
- DLQ.
- Replay.
- Schema compatibility.
- Additive change.
- Event versioning.
- Lag/consistency monitoring.

### Demo / lab yang harus ada

- Consumer gagal beberapa kali→DLQ.
- Upgrade schema tanpa merusak consumer lama.

### Perubahan pada `banking-lab`

Production-ish event handling policy.

### Kriteria pemahaman

Penonton mampu menjelaskan lifecycle failure event dari publish sampai recovery.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

# 12. CQRS & Event Sourcing

**Jumlah:** 4 video  
**Tujuan chapter:** Mengajarkan advanced pattern hanya setelah problem read/write divergence dan need for history/replay benar-benar terlihat, serta menekankan biaya kompleksitasnya.

## Outcome chapter

- Setelah `12.01`, penonton memahami CQRS tidak identik dengan microservices atau event sourcing.
- Setelah `12.02`, penonton mampu menjelaskan consistency window dan UX consequence.
- Setelah `12.03`, penonton dapat membedakan event log biasa, audit log, ledger, dan event sourcing.
- Setelah `12.04`, penonton mampu mempertahankan keputusan tidak memakai pattern advanced.

## 12.01 — Kapan Satu Model Read/Write Mulai Menyulitkan?

### Problem yang memulai video

Model optimal untuk transaction command belum tentu cocok untuk reporting/search/query yang berbeda.

### Teori dan mental model wajib

- Read/write workload divergence.
- CQRS sebagai separation principle.
- Same DB vs separate store sebagai spectrum.
- When not to use CQRS.

### Demo / lab yang harus ada

- Transfer write model vs transaction history query.

### Perubahan pada `banking-lab`

CQRS candidate decision.

### Kriteria pemahaman

Penonton memahami CQRS tidak identik dengan microservices atau event sourcing.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 12.02 — Command, Projection, dan Eventual Consistency

### Problem yang memulai video

Read model yang dibangun asynchronous tidak langsung sinkron dengan write model.

### Teori dan mental model wajib

- Command model.
- Event.
- Projection.
- Query model.
- Projection rebuild.
- Lag.
- Read-your-write expectation.

### Demo / lab yang harus ada

- Bangun projection transaction summary dari events.

### Perubahan pada `banking-lab`

Read model terpisah sederhana.

### Kriteria pemahaman

Penonton mampu menjelaskan consistency window dan UX consequence.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 12.03 — Menyimpan History, Bukan State: Event Sourcing

### Problem yang memulai video

Beberapa domain membutuhkan history sebagai primary record sehingga state diturunkan dari sequence event.

### Teori dan mental model wajib

- Event store.
- Aggregate stream.
- Rehydration.
- Version.
- Optimistic concurrency.
- Snapshot.
- Replay.
- Event immutability.
- Schema evolution concern.

### Demo / lab yang harus ada

- AccountOpened, MoneyDeposited, MoneyWithdrawn.
- Rehydrate balance.
- Snapshot setelah N events.

### Perubahan pada `banking-lab`

Mini event-sourced aggregate eksperimental, bukan pengganti otomatis ledger utama.

### Kriteria pemahaman

Penonton dapat membedakan event log biasa, audit log, ledger, dan event sourcing.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

## 12.04 — CQRS dan Event Sourcing Itu Mahal

### Problem yang memulai video

Advanced architecture sering dipakai untuk terlihat sophisticated walau problem belum membutuhkan.

### Teori dan mental model wajib

- Operational complexity.
- Storage growth.
- Eventual consistency.
- Debugging.
- Schema evolution.
- Rehydration cost.
- Projection repair.
- Developer cognitive load.
- Migration difficulty.

### Demo / lab yang harus ada

- Bandingkan change request yang sama pada CRUD/CQRS/event-sourced variant.

### Perubahan pada `banking-lab`

Decision checklist kapan menolak CQRS/ES.

### Kriteria pemahaman

Penonton mampu mempertahankan keputusan tidak memakai pattern advanced.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjadikan arsitektur advanced sebagai upgrade otomatis.
- Mengabaikan failure mode dan operational cost.
- Menyimpulkan teknologi sebagai pemenang universal dari satu demo.

# 13. Production Engineering & Banking Failure Lab

**Jumlah:** 8 video  
**Tujuan chapter:** Puncak playlist: sistem yang sudah dibangun dibawa ke kondisi production dan sengaja dirusak untuk melatih observability, deployment, rollback, recovery, reconciliation, performance trade-off, dan incident response.

## Outcome chapter

- Setelah `13.01`, penonton memahami perbedaan code correctness dan operability.
- Setelah `13.02`, penonton memahami mengapa rollback code tidak selalu rollback data.
- Setelah `13.03`, penonton mampu mengikuti satu transaction dari request sampai downstream.
- Setelah `13.04`, penonton dapat menunjukkan evidence bahwa duplicate request tidak menggandakan posting.
- Setelah `13.05`, penonton dapat menghubungkan locking strategy dengan workload.
- Setelah `13.06`, penonton memahami recovery sebagai workflow yang didesain, bukan `catch(Exception)`.
- Setelah `13.07`, penonton mampu membaca hasil benchmark sebagai trade-off, bukan menentukan teknologi 'pemenang'.
- Setelah `13.08`, penonton mampu membuat evidence-backed root cause dan tindakan perbaikan, bukan sekadar 'server overload'.

## 13.01 — Dari Laptop ke Production

### Problem yang memulai video

Aplikasi lokal yang berjalan belum tentu production-ready.

### Teori dan mental model wajib

- Environment/configuration.
- Secret management principle.
- Database migration.
- Connection pool sizing.
- Health/readiness/liveness concept.
- Graceful shutdown.
- Container/process lifecycle.
- Clock/timezone config.

### Demo / lab yang harus ada

- Containerize services.
- Run migration.
- Kill instance saat request berjalan.

### Perubahan pada `banking-lab`

Production baseline deployment local/containerized.

### Kriteria pemahaman

Penonton memahami perbedaan code correctness dan operability.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 13.02 — Deployment, Canary, Feature Flag, dan Rollback

### Problem yang memulai video

Deploy bukan sekadar restart server; perubahan app/schema harus bisa diperkenalkan dan dipulihkan dengan aman.

### Teori dan mental model wajib

- Rolling deployment.
- Canary concept.
- Feature flag.
- Backward/forward compatibility.
- Expand-contract DB migration.
- Rollback limitation.
- Data migration irreversibility.

### Demo / lab yang harus ada

- Deploy v2 endpoint/schema kompatibel.
- Simulasikan rollback.

### Perubahan pada `banking-lab`

Deployment runbook sederhana.

### Kriteria pemahaman

Penonton memahami mengapa rollback code tidak selalu rollback data.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 13.03 — Bagaimana Mengetahui Sistem Sedang Bermasalah?

### Problem yang memulai video

Tanpa telemetry, incident berubah menjadi menebak-nebak log.

### Teori dan mental model wajib

- Structured log.
- Correlation/trace ID.
- Metrics.
- Distributed tracing.
- Golden signals.
- SLI/SLO.
- Alert threshold vs symptom.
- Business metric: transaction success/unknown rate.

### Demo / lab yang harus ada

- Trace satu transfer lintas service.
- Dashboard latency/error/transaction outcome.

### Perubahan pada `banking-lab`

Observability baseline.

### Kriteria pemahaman

Penonton mampu mengikuti satu transaction dari request sampai downstream.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 13.04 — Failure Lab: Transfer Sukses, Response Hilang

### Problem yang memulai video

Client timeout setelah commit memicu retry dan potensi duplicate.

### Teori dan mental model wajib

- Uncertainty.
- Idempotency persistence.
- Retry contract.
- Status inquiry.
- Correlation/reference.
- Exactly-once business outcome sebagai composite design.

### Demo / lab yang harus ada

- Drop response setelah commit.
- Retry paralel dengan key sama.
- Buktikan hanya satu financial effect.

### Perubahan pada `banking-lab`

End-to-end idempotent transfer test.

### Kriteria pemahaman

Penonton dapat menunjukkan evidence bahwa duplicate request tidak menggandakan posting.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 13.05 — Failure Lab: Dua Transfer Berebut Saldo yang Sama

### Problem yang memulai video

Correctness concurrency harus tetap bertahan di bawah load, bukan hanya unit test.

### Teori dan mental model wajib

- Conflict rate.
- Optimistic retry cost.
- Pessimistic contention.
- Serialization/queue per account concept.
- Throughput vs correctness.

### Demo / lab yang harus ada

- Load concurrent withdrawal.
- Bandingkan optimistic/pessimistic/serialized strategy.

### Perubahan pada `banking-lab`

Concurrency strategy benchmark.

### Kriteria pemahaman

Penonton dapat menghubungkan locking strategy dengan workload.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 13.06 — Failure Lab: DB Commit, Message Gagal, Provider Timeout

### Problem yang memulai video

Beberapa failure dapat terjadi sekaligus dan menghasilkan state UNKNOWN/partial.

### Teori dan mental model wajib

- Partial failure.
- Outbox recovery.
- Provider timeout.
- Inquiry.
- Reconciliation.
- Compensation/reversal.
- Manual exception handling.
- Retry safety.

### Demo / lab yang harus ada

- DB commit success + broker unavailable.
- External provider timeout setelah menerima request.
- Recovery melalui outbox + inquiry/reconcile.

### Perubahan pada `banking-lab`

Recovery workflow end-to-end.

### Kriteria pemahaman

Penonton memahami recovery sebagai workflow yang didesain, bukan `catch(Exception)`.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 13.07 — Banking Architecture Performance Lab

### Problem yang memulai video

Perbandingan arsitektur tanpa workload/resource/correctness yang setara menghasilkan kesimpulan yang tidak berarti.

### Teori dan mental model wajib

- Fair benchmark design.
- Resource budget.
- Business invariants tetap sama.
- TPS/p50/p95/p99.
- CPU/memory.
- DB connections.
- Network overhead.
- Consistency lag.
- Failure behavior.
- Developer/operational complexity.

### Demo / lab yang harus ada

- Bandingkan modular monolith, split services, CQRS projection pada skenario yang didefinisikan.
- Catat bukan hanya speed tetapi complexity.

### Perubahan pada `banking-lab`

Architecture benchmark report.

### Kriteria pemahaman

Penonton mampu membaca hasil benchmark sebagai trade-off, bukan menentukan teknologi 'pemenang'.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

## 13.08 — Production Incident: Dari Alarm sampai Root Cause

### Problem yang memulai video

Engineer production perlu mengelola incident sebagai proses: detection, triage, mitigation, investigation, recovery, learning.

### Teori dan mental model wajib

- Incident timeline.
- Triage.
- Impact assessment.
- Mitigation vs root cause fix.
- Metrics→trace→logs→DB→JFR.
- Rollback/feature disable.
- Recovery validation.
- Postmortem.
- Corrective/preventive action.

### Demo / lab yang harus ada

- Inject p99 spike + error rate + transaction impact.
- Lakukan incident response end-to-end dan tulis postmortem.

### Perubahan pada `banking-lab`

Postmortem final `banking-lab`.

### Kriteria pemahaman

Penonton mampu membuat evidence-backed root cause dan tindakan perbaikan, bukan sekadar 'server overload'.

### Pola penyampaian yang disarankan

1. Tampilkan code/flow yang terlihat masuk akal.
2. Tanyakan kondisi ekstrem atau failure yang membuat asumsi awal runtuh.
3. Reproduce problem, jangan hanya menjelaskannya secara verbal.
4. Bangun mental model sebelum memberi solusi.
5. Bandingkan minimal dua opsi jika memang ada trade-off.
6. Tutup dengan konsekuensi terhadap correctness, operability, atau uang.

### Hal yang harus dihindari

- Menjelaskan API/framework tanpa menghubungkannya ke failure/problem.
- Menggunakan istilah tanpa menunjukkan bukti/observasi.
- Mengoptimalkan sebelum mempunyai baseline atau invariant.

# 14. Cross-Cutting Themes yang Harus Muncul Berulang

Topik berikut bukan satu episode lalu selesai. Ia harus muncul kembali ketika konteks berubah.

## 14.1 Correctness

Correctness selalu lebih dari “endpoint mengembalikan 200”.

Pertanyaan berulang:

- Apakah financial effect terjadi tepat satu kali secara bisnis?
- Apakah ledger tetap balanced?
- Apakah invalid state dapat dibuat?
- Apakah retry aman?
- Apakah concurrent execution tetap menjaga invariant?
- Apakah recovery mempertahankan history?
- Apakah hasil reconciliation dapat menjelaskan mismatch?

## 14.2 Idempotency

Muncul pada:

- REST transfer submission;
- retry setelah timeout;
- consumer Kafka;
- outbox relay;
- provider retry;
- production failure lab.

Setiap kali idempotency muncul, jelaskan **scope** dan **key**-nya.

Idempotency request tidak otomatis berarti semua downstream side effect idempotent.

## 14.3 Transaction Reference dan Correlation

Bedakan reference bisnis dan observability.

```text
TransactionReference
→ dipahami domain/bisnis

IdempotencyKey
→ mengelola duplicate request

ExternalReference
→ menghubungkan sistem/provider

CorrelationId / TraceId
→ menghubungkan observability
```

## 14.4 Invariant

Contoh invariant yang berkembang:

```text
Money currency harus konsisten.
Account state harus valid.
Withdrawal tidak boleh melanggar rule.
Ledger posting harus balance.
State transition transaction harus legal.
Maker tidak boleh meng-approve miliknya sendiri.
Outbox event harus berasal dari committed state.
Projection boleh terlambat tetapi harus dapat dikejar/rebuild.
```

## 14.5 Failure sebagai first-class design input

Jangan menunggu production chapter untuk mulai bicara failure.

Pada setiap integration, tanyakan:

```text
Apa yang terjadi jika call lambat?
Apa yang terjadi jika timeout?
Apa yang terjadi jika response hilang?
Apa yang terjadi jika request diproses dua kali?
Apa yang terjadi jika database commit tetapi proses crash?
Apa yang terjadi jika message duplicate?
Apa yang terjadi jika state internal dan eksternal berbeda?
```

# 15. Mapping Janji Opening → Chapter

| Janji opening                             | Dipenuhi di    |
| ----------------------------------------- | -------------- |
| Java dari dasar                           | 01             |
| Clean code / engineering / design pattern | 02             |
| Java internal/JVM                         | 03, 09         |
| Concurrency banking                       | 04             |
| REST API + database                       | 05             |
| Spring Enterprise                         | 05, 06         |
| `@Transactional` secara mendalam          | 06             |
| Account, withdraw, deposit, transfer      | 07             |
| Ledger, debit/credit, double-entry        | 07             |
| Timeout/unknown transaction               | 07, 10, 13     |
| Reconciliation/audit                      | 07, 08, 13     |
| Transaksi berbagai negara                 | 08             |
| IBAN / bank/routing identifier            | 08             |
| Currency / FX / charges                   | 08             |
| Country-specific rule                     | 08             |
| Routing/correspondent                     | 08             |
| Cut-off/timezone/approval                 | 08             |
| System design                             | 10             |
| Monolith vs microservices                 | 10, 13         |
| Distributed transaction                   | 10             |
| Retry, timeout, idempotency               | 07, 10, 11, 13 |
| Kafka / event-driven                      | 11             |
| Partition / consumer group                | 11             |
| Delivery semantics                        | 11             |
| Retry / DLQ                               | 11             |
| CQRS                                      | 12             |
| Event Sourcing                            | 12             |
| p50/p95/p99                               | 09             |
| JVM profiling/memory leak/latency         | 09             |
| Architecture performance lab              | 13             |
| Logging/metrics/tracing                   | 13             |
| Deployment/rollback                       | 13             |
| Production incident/root cause            | 13             |

Jika sebuah janji opening tidak memiliki lokasi di tabel ini, kurikulum dianggap belum selesai.

# 16. Mastery Checkpoint per Fase

## Checkpoint A — Setelah Chapter 02

Penonton harus mampu:

- membuat `Money`, `AccountId`, `Account`;
- menjelaskan equality/value/identity;
- menjaga invariant melalui behavior;
- menjelaskan alasan penggunaan interface/composition/pattern.

Jika belum, jangan lompat ke framework hanya untuk merasa lebih “backend”.

## Checkpoint B — Setelah Chapter 04

Penonton harus mampu:

- reproduce race condition;
- menjelaskan critical section;
- membuat local transfer atomic;
- menjelaskan optimistic vs pessimistic locking;
- menjelaskan deadlock dan retry.

## Checkpoint C — Setelah Chapter 06

Penonton harus mampu:

- membuat transfer API;
- persist transaction;
- membaca generated SQL;
- menjelaskan transaction boundary;
- menjelaskan apa yang `@Transactional` **tidak** dapat rollback.

## Checkpoint D — Setelah Chapter 08

Penonton harus mampu:

- menjelaskan account vs balance vs ledger;
- memodelkan transaction lifecycle;
- menangani timeout dengan idempotency/inquiry;
- menjelaskan reconciliation;
- memodelkan field/rule berbeda per corridor;
- menjelaskan currency/FX/charge distinction;
- menjelaskan instruction vs settlement.

Ini adalah checkpoint yang paling merepresentasikan identitas **Banking Programming**.

## Checkpoint E — Setelah Chapter 11

Penonton harus mampu:

- menjelaskan alasan service split;
- mendesain retry/timeout policy;
- menjelaskan Saga/compensation;
- membangun idempotent Kafka consumer;
- menjelaskan transactional outbox.

## Checkpoint F — Setelah Chapter 13

Penonton harus mampu:

- mengukur system dengan benar;
- mendiagnosis bottleneck;
- men-deploy secara aman;
- menelusuri transaction lintas service;
- memulihkan partial failure;
- menulis incident timeline dan postmortem.

# 17. Definition of Done untuk Setiap Video

Sebuah video **belum selesai** hanya karena naskah sudah panjang.

Video dianggap siap diproduksi jika mempunyai:

- [ ] satu problem utama yang jelas;
- [ ] hook yang berasal dari problem, bukan clickbait kosong;
- [ ] prerequisite episode;
- [ ] vocabulary baru;
- [ ] diagram/visual yang diperlukan;
- [ ] minimal satu demo atau experiment;
- [ ] satu hubungan jelas ke `banking-lab`;
- [ ] failure case;
- [ ] trade-off;
- [ ] misconception yang dihancurkan;
- [ ] output code;
- [ ] test/evidence jika relevan;
- [ ] closing yang menjembatani video berikutnya;
- [ ] tidak ada claim regulasi/industry-specific yang diperlakukan sebagai universal tanpa konteks.

# 18. Template Naskah Episode

Gunakan struktur berikut sebagai default, lalu boleh diubah agar tidak repetitif.

```markdown
# Judul

## 1. Cold Open / Problem

Tampilkan problem nyata.

## 2. Kenapa Ini Penting di Banking

Apa risiko jika salah?

## 3. Baseline Implementation

Buat versi yang terlihat benar.

## 4. Break It

Buat kondisi yang merusaknya.

## 5. Mental Model

Jelaskan penyebab.

## 6. Option A

Cara kerja.
Benefit.
Cost.

## 7. Option B

Cara kerja.
Benefit.
Cost.

## 8. Implementasi pada banking-lab

Code + test + observability.

## 9. Edge Cases

Apa yang belum tertangani?

## 10. Production Consequence

Apa yang berubah di production?

## 11. Recap

Bukan mengulang definisi, tetapi simpulkan decision rule.

## 12. Bridge

Problem baru yang muncul menjadi opening episode berikutnya.
```

# 19. Template Demo/Lab

Setiap demo sebaiknya mempunyai:

```text
ASSUMPTION
↓
SETUP
↓
EXPECTED
↓
ACTUAL
↓
EVIDENCE
↓
WHY
↓
FIX
↓
NEW TRADE-OFF
```

Evidence dapat berupa:

- failing test;
- SQL log;
- transaction table;
- ledger entries;
- Kafka messages;
- trace;
- metric;
- JFR;
- benchmark;
- reconciliation output.

Hindari demo yang hanya mengatakan “lihat, sekarang sudah berhasil”.

Tunjukkan **mengapa kita percaya** bahwa berhasil.

# 20. ADR: Architecture Decision Record

Mulai chapter Architecture, setiap keputusan penting dapat memiliki ADR singkat:

```markdown
# ADR-00X: Use Transactional Outbox

## Context

DB commit dan Kafka publish dapat gagal independen.

## Decision

Gunakan outbox table dalam local transaction.

## Consequences

- event tidak hilang setelah DB commit
- recovery dapat diulang

* publisher tambahan
* duplicate tetap mungkin
* outbox cleanup/monitoring diperlukan
```

Tujuannya membiasakan penonton melihat architecture sebagai rangkaian keputusan, bukan gambar statis.

# 21. Benchmark Discipline

Benchmark wajib mencatat:

```text
hardware/resource limit
JVM version
Java version
database version
dataset
connection pool
warmup
duration
concurrency/arrival rate
success criteria
error rate
p50/p95/p99
CPU
memory
```

Jika membandingkan architecture, business behavior dan correctness requirement harus sama.

Jangan mengubah tiga variable lalu menyimpulkan penyebab dari satu variable.

# 22. Incident Discipline

Incident lab harus mempunyai:

```text
Detection
Impact
Timeline
Hypothesis
Evidence
Mitigation
Recovery
Root Cause
Contributing Factors
Corrective Action
Preventive Action
```

Bedakan:

```text
symptom:
p99 naik

technical cause:
connection pool exhausted

deeper cause:
slow external call dilakukan sambil memegang DB connection

organizational/design cause:
tidak ada timeout/metric/pool saturation alert
```

Root cause tidak harus selalu satu baris.

# 23. Terminologi yang Harus Konsisten

Gunakan istilah berikut dengan disiplin:

### Request vs Transaction

HTTP request bukan financial transaction.

Satu financial transaction dapat melewati banyak HTTP request.

### Failure vs Unknown

Timeout tidak sama dengan FAILED.

Jika kita tidak mengetahui hasil external processing, gunakan state yang merepresentasikan uncertainty.

### Retry vs Duplicate

Retry adalah tindakan pengirim.

Duplicate adalah kemungkinan yang diterima receiver.

### Event vs Command

```text
TransferMoney
→ meminta aksi

MoneyTransferred
→ menyatakan fakta
```

### Audit vs Log

Log dibuat untuk memahami behavior aplikasi.

Audit merekam tindakan/state penting untuk traceability.

### Ledger vs Transaction History

Transaction history adalah view perjalanan transaction.

Ledger merekam posting finansial sesuai model accounting yang dipilih.

### Reversal vs Delete

Reversal meninggalkan history.

Delete menghapus history.

Untuk financial record, perbedaan ini sangat penting.

# 24. Karakter Cross-Border yang Harus Terlihat di Codebase

Agar chapter cross-border tidak hanya teoritis, codebase harus memperlihatkan variasi seperti:

```text
CountryPaymentRequirement
CurrencyRule
BeneficiaryRequirement
BankIdentifierRequirement
ClearingCodeRequirement
CutOffPolicy
BusinessCalendar
FxQuote
ChargeBreakdown
PaymentRoute
ExternalConnector
ExternalReference
PaymentStatusInquiry
ReconciliationRecord
```

Namun jangan membuat seluruh object ini sekaligus.

Setiap abstraction muncul ketika episode menciptakan pressure yang membutuhkan abstraction tersebut.

# 25. AI dan Relevansi Playlist

Playlist tidak perlu membuat chapter “prompt engineering untuk programmer” hanya karena era AI.

Relevansi terhadap AI ditunjukkan dengan membedakan dua kemampuan:

```text
CODE GENERATION
vs
ENGINEERING JUDGEMENT
```

AI dapat membantu menghasilkan:

- DTO;
- controller;
- test boilerplate;
- SQL;
- mapping;
- documentation;
- refactor suggestion.

Materi `01.01 — Kenalan dengan Java: Dari Oak, JVM, sampai Era AI` menjadi fondasi naratif untuk bagian ini: AI diperlakukan sebagai perubahan besar pada **cara engineer menghasilkan software**, bukan alasan untuk berhenti mempelajari runtime, correctness, transaction semantics, atau architecture.

Tetapi engineer tetap perlu memutuskan:

- invariant apa yang tidak boleh rusak;
- transaction boundary di mana;
- timeout berarti apa;
- retry aman atau tidak;
- financial effect duplicate atau tidak;
- source of truth apa;
- apakah state UNKNOWN perlu reconciliation;
- apakah microservices benar-benar dibutuhkan;
- apakah benchmark adil;
- apakah rollback aman;
- evidence apa yang membuktikan root cause.

Playlist harus membuat penonton **semakin bagus menggunakan AI karena mereka tahu apa yang harus diminta, diperiksa, dan ditolak**, bukan mengajarkan bahwa AI menggantikan pemahaman sistem.

# 26. Urutan Dependency Tingkat Tinggi

```text
Money
  └─> Domain model
       └─> Concurrency
            └─> ACID
                 └─> Spring transaction
                      └─> Ledger / lifecycle
                           └─> Idempotency / reconciliation
                                └─> Cross-border
                                     └─> Performance
                                          └─> Service split
                                               └─> Distributed failure
                                                    └─> Kafka/outbox
                                                         └─> CQRS/ES
                                                              └─> Production failure lab
```

Jika sebuah episode membutuhkan konsep dari masa depan, ada tiga pilihan:

1. jelaskan secukupnya sebagai preview;
2. pindahkan episode;
3. sederhanakan demo.

Jangan diam-diam memakai konsep yang belum pernah diberikan.

# 27. Prinsip Kualitas Konten

Setiap chapter harus menjaga lima lapisan kualitas:

## 27.1 Conceptual correctness

Definisi tidak boleh hanya mudah dicerna tetapi salah.

## 27.2 Engineering realism

Demo harus memiliki failure mode yang masuk akal.

## 27.3 Banking relevance

Banking tidak boleh hanya mengganti nama `Product` menjadi `Account`.

## 27.4 Narrative continuity

Problem episode N idealnya merupakan konsekuensi solusi episode N-1.

## 27.5 Production awareness

Meskipun topik masih fundamental, sesekali tunjukkan batasannya saat dibawa ke production.

# 28. Prinsip Judul Video

Judul lebih baik berbentuk problem daripada nama teknologi.

Lebih kuat:

```text
Dua Nasabah Menarik Saldo yang Sama dalam Waktu Bersamaan
```

daripada:

```text
Java Synchronized Tutorial
```

Lebih kuat:

```text
Transfer Sudah Commit. Kenapa Client Masih Melihat Timeout?
```

daripada:

```text
Idempotency Key di Spring Boot
```

Lebih kuat:

```text
Database Berhasil, Kafka Gagal. Data Kita Sekarang Gimana?
```

daripada:

```text
Transactional Outbox Pattern
```

Teknologi tetap boleh berada di subtitle, thumbnail, description, atau bagian judul kedua untuk SEO.

# 29. Ending Filosofis Playlist

Playlist tidak boleh ditutup dengan:

> “Sekarang kalian sudah menjadi master banking engineer.”

Itu klaim yang bahkan 78 video pun tidak bisa membenarkan.

Ending yang lebih tepat:

> **Engineering sebenarnya dimulai ketika sistem tidak berperilaku seperti yang kita harapkan.**

Setelah 78 video, penonton seharusnya bukan merasa sudah mengetahui semua hal.

Mereka seharusnya memperoleh sesuatu yang lebih berguna:

- tahu bagaimana memecah problem;
- tahu apa yang harus diukur;
- tahu failure apa yang perlu dipikirkan;
- tahu kapan abstraction membantu;
- tahu kapan architecture terlalu mahal;
- tahu bahwa timeout tidak otomatis berarti gagal;
- tahu bahwa uang membutuhkan invariant dan history;
- tahu bahwa distributed system membawa uncertainty;
- tahu bahwa production membutuhkan evidence;
- dan tahu bagaimana melanjutkan belajar tanpa bergantung pada tutorial langkah demi langkah.

Itulah target sebenarnya dari Cube Programming.

# 30. Ringkasan Canonical

```text
JAVA SECUKUPNYA                         5
JAVA ENGINEERING                        7
JAVA INTERNALS                          4
CONCURRENCY & TRANSACTION CORRECTNESS   6
BACKEND BANKING FOUNDATION              8
SPRING TRANSACTION INTERNALS            3
BANKING DOMAIN ENGINEERING              8
CROSS-BORDER BANKING ENGINEERING        8
PERFORMANCE & DIAGNOSIS                 5
ARCHITECTURE & DISTRIBUTED SYSTEMS      7
EVENT-DRIVEN BANKING                    5
CQRS & EVENT SOURCING                   4
PRODUCTION & BANKING FAILURE LAB        8
                                      ───
TOTAL                                   78
```

**Canonical statement:**

> **Java adalah bahasa. Banking adalah konteks. Engineering thinking adalah isi.**

**Canonical teaching loop:**

> **Observation → Problem → Break It → Mental Model → Engineering Options → Trade-off → Banking Consequence**

**Canonical project:**

> **Satu repository `banking-lab` yang tumbuh dari `Money` sampai production incident.**

**Canonical signature:**

> **Banking Programming, terutama correctness transaksi, ledger, uncertainty, cross-border complexity, distributed systems, dan production engineering.**
