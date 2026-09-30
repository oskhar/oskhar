# Kenapa Playlist Ini Dibuat?

## OPENING

### Perkenalan Diri / Identitas / Branding

Halo ges kembali lagi di channel cube programming, buat yang belum kenal perkenalkan nama gua oskhar saat ini gua bekerja sebagai software engineer di salah satu bank internasional, dan gua biasanya buat konten di waktu waktu senggang, jadi maaf kalau lama banget update video, gua juga biasanya suka ngajar private dan side project freelance, jadi buat yang butuh mentor private programming atau butuh rekan project buat ngebantu develop dan sempurnain app kalian bisa chat atau dm aja, so mari kita langsung masuk saja ke pembahasannya

jadi temen temen, gua berencana mau bikin playlist belajar programming terus memperdalam pemikiran tentang software dan sebagai perantara mempersiapkan diri di dunia perbankan, beberapa orang mungkin penasaran tentang gimana si programming di perbankan dan seberapa sulit menghandle transaksi besar di berbagai negara, karena kita pun tau bank di tiap tiap negara itu pasti punya regulasi masing masing terhadap uang dan kita ga bisa sembarangan ngoding

karena kebetulan gua juga relevan untuk membahas ini karena gua terbiasa menghandle transaksi B2B di luar negeri, dan karena belum ada juga channel youtube fokus ke bidang ini jadi ini pastinya bakal menarik, gua harap dengan playlist ini kalian jadi programmer handal dan keterima di bank2 besar temen temen, kita akan bahas ini perlahan dari yang paling basic, gua usahakan sebisa mungkin bikin orang yang awam pun bisa mengikuti pembelajaran dengan baik sampai benar benar mahir

---

# BODY CONTENT

Oke temen temen, kurang lebih ini yang bakal kita pelajari di playlist yang akan gua buat. Pertama, kita akan membahas **Java secukupnya** – perlahan tapi pasti, ga sampai detail banget yang bikin pusing, tapi cukup sebagai pondasi kita di awal. Dari situ kita akan masuk ke **java engineering** seperti clean code dan design pattern, lalu mengupas sedikit **internal Java** agar kita paham bagaimana program kita berjalan di balik layar. Setelah itu, kita langsung ke studi kasus **concurrency dengan konteks banking**: misalnya dua transaksi uang yang berjalan bersamaan, kenapa bisa ada race condition, dan bagaimana cara memperbaikinya. Selanjutnya kita lanjut ke **membangun backend**, kita belajar membuat REST API dengan Java, koneksi ke DB, serta manajemen transaksi agar data tetap aman. 

Langkah berikutnya adalah **Spring Enterprise**: kenapa Spring populer dan bagaimana menggunakannya untuk menyusun aplikasi yang terstruktur. Setelah Spring, kita masuk ke **banking backend** – di sinilah kita memodelkan akun, penarikan, penyetoran, transfer antar-rekening, sampai audit trail-nya. Sambil membangun itu semua, kita juga belajar **testing** dan **performance**: bagaimana mengukur kecepatan API, menemukan bottleneck di DB atau thread, serta memahami metrik seperti p50, p95, p99. 

Kemudian kita naik level ke **system design**: bagaimana melihat requirement bukan cuma saat ini tapi skala besar, soal scalability, Availability, dan konsistensi data. Setelah itu baru kita bahas **microservices** – bukan untuk sekadar ikut tren, tapi untuk melihat perbedaan arsitektur. Misalnya, kita akan praktek memecah aplikasi bank kita menjadi beberapa service (account service, transfer service, dll), lalu menyelami masalah baru seperti transaksi terdistribusi dan komunikasi antar-service. Selanjutnya kita masuk ke **distributed systems** secara umum: kita belajar tentang kegagalan jaringan, retry, timeout, dan idempotenitas dalam distributed system. 

Lalu kita akan membahas **event-driven architecture dengan Java**: kenapa tidak semua komunikasi harus synchronous, dan bagaimana Kafka atau message broker digunakan dalam sistem bank. Kita kupas konsep seperti partition, consumer group, delivery semantics (at-most-once, at-least-once, exactly-once), retry, dan dead letter queue. 

Setelah itu, yang menjadi inti playlist ini: **engineering di dunia banking**. Di sinilah kita eksplor soal money, balance, ledger, debit/credit, transaksi ganda, dan rekonsiliasi. Misalnya kita akan pelajari mengapa transfer uang bukan sekadar kurangi dan tambah angka di DB, kenapa perlu double-entry accounting, apa yang terjadi saat dua proses withdrawal bertabrakan, atau bagaimana menangani transaksi yang tidak pasti statusnya (timeout pembayaran misalnya). 

Selain itu, kita bongkar **Spring secara mendalam** – misalnya apa sebenarnya terjadi ketika kita menggunakan `@Transactional`, kenapa terkadang transaksi Spring tidak berjalan sesuai harapan, dan bagaimana cara kerjanya di balik layar. Kita juga lihat **JVM complexity lab**: misal kenapa aplikasi Java bisa boros memori, bagaimana mencari memory leak, profiling, dan mengatasi latency spike. 

Kemudian kita masuk ke **architecture complexity**: kapan monolith masih lebih mudah, kapan microservices harus dipakai, sampai detail bounded context dan DDD. Kita bahas juga **CQRS** – mengapa dipisah command dan query, serta event sourcing – kapan menyimpan event jadi masuk akal atau terlalu overengineering. 

Di bagian **banking complexity lab** nanti kita bener2 praktek soal perbankan: misalnya apa yang terjadi jika DB mati saat transfer, atau jika server pembayaran eksternal tidak respons, dan bagaimana aplikasi menangani semua itu agar data tetap konsisten. Setelah itu ada **banking performance lab**, di mana kita akan benchmark sistem: berapa banyak transaksi per detik yang bisa diproses, perbandingan monolith vs microservices, bahkan CQRS vs non CQRS dalam hal throughput. 

Terakhir, kita ke **production engineering** – tentang apa yang berubah saat aplikasi dipasang di server: logging terstruktur, monitoring, tracing, deployment, rollback, dan lain-lain. 

Nah, setelah menamatkan playlist ini, kalian bukan cuma bisa **menulis Java atau membuat CRUD sederhana**. Kalian akan jadi orang yang bisa **membaca sebuah sistem backend dan memahami kenapa dibuat seperti itu**. Kalian bakal paham **bagaimana mengukur dan memecahkan masalah** seperti double transaction, race condition, atau bottleneck performa. Kalian juga bisa menjelaskan **trade-off sebuah arsitektur**: misalnya kenapa sebuah sistem perbankan memilih monolith, microservices, atau event-driven berdasarkan kebutuhan.

Playlist ini dirancang sebagai roadmap lengkap: dari dasar Java sampai kompleksitas software dalam perbankan. Subscribe channel ini biar ga ketinggalan dan terus mengikuti perkembangan pembelajaran dari channel ini. Udah banyak banget tutorial Java, tapi sangat sedikit yang bahas **Java untuk sistem banking** kalau enterprise mungkin mas eko sudah bahas ya beliau bahas di ecomerse, tapi untuk banking saya rasa masih sangat minim pembahasan. Saya pastikan pembelajaran tetap relevan di era AI – dan saya yakin perbankan lebih suka sistemnya di handle oleh pakar daripada orang yang paham cara promting. Dengan pemahaman ini, kalian jadi yang siap menghadapi segala problem nyata di dunia perbankan.

Oke, di video berikutnya kita bakal belajar java secukupnya, mungkin gitu aja. Sekian!