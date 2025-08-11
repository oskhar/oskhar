### **Kerangka Evaluasi Berbasis Dekomposisi dan Metrik untuk Layanan Mikro**

**Davide Taibi, Kari Systä**

TASE \- Kelompok Riset Rekayasa Perangkat Lunak Tampere  
Universitas Tampere. Tampere, Finlandia  
\[davide.taibi;kari.systa\]@tuni.fi  
**Kata Kunci:** Layanan Mikro, Cloud-Native, Pemisahan Layanan Mikro, Dekomposisi Layanan Mikro, Migrasi Layanan Mikro

**Abstrak.** Migrasi dari sistem monolitik ke layanan mikro adalah tugas yang sangat kompleks. Perusahaan umumnya melakukan dekomposisi sistem monolitik secara manual, menganalisis dependensi dari monolit, dan kemudian menilai berbagai opsi dekomposisi. Tujuan dari pekerjaan kami ada dua: 1\) kami menyediakan kerangka pengukuran layanan mikro untuk secara objektif mengevaluasi dan membandingkan kualitas sistem berbasis layanan mikro; 2\) kami mengusulkan sistem dekomposisi berdasarkan penambangan proses bisnis. Kerangka pengukuran layanan mikro dapat diterapkan secara independen dari proses dekomposisi yang diadopsi, tetapi juga berguna untuk terus mengevaluasi evolusi arsitektur suatu sistem. Hasil menunjukkan bahwa kerangka dekomposisi membantu perusahaan untuk dengan mudah mengidentifikasi berbagai opsi dekomposisi. Kerangka pengukuran dapat membantu mengurangi subjektivitas keputusan di antara berbagai opsi dekomposisi dan untuk mengevaluasi erosi arsitektur pada sistem yang ada.

### **1\. Pendahuluan**

Perangkat lunak berevolusi sepanjang masa pakainya, dan seringkali sebagian besar usaha dan biaya dihabiskan untuk pemeliharaan perangkat lunak \[14\]. Lebih lanjut, praktik pengembangan inkremental dalam pengembangan perangkat lunak modern membuat sifat dari semua proses pengembangan menyerupai proses pemeliharaan \[18\]. Hambatan utama untuk pemeliharaan yang efisien adalah keterkaitan yang erat antara komponen internal perangkat lunak. Dalam sistem monolitik, sebagian besar perubahan memerlukan modifikasi pada beberapa bagian sistem, dan seringkali ukuran serta kompleksitas modifikasi sulit diperkirakan sebelumnya.

Salah satu pendekatan untuk mengatasi masalah pemeliharaan adalah dengan menguraikan sistem menjadi modul-modul kecil dan independen \[20\] \[25\]. Seringkali, pada saat yang sama, perusahaan ingin memanfaatkan manfaat dari arsitektur berorientasi layanan dan bahkan layanan mikro, seperti pengembangan, penskalaan, dan penerapan yang independen \[31\].

Layanan mikro adalah adaptasi dari arsitektur berorientasi layanan tetapi berfokus pada layanan yang relatif kecil dan dapat diterapkan secara independen, dengan tujuan tunggal dan terdefinisi dengan jelas \[7\]. Pengembangan dan penerapan yang independen membawa beberapa keuntungan. Layanan mikro yang berbeda dapat dikembangkan dalam bahasa pemrograman yang berbeda, mereka dapat diskalakan secara independen dari layanan lain, dan setiap layanan mikro dapat diterapkan pada perangkat keras yang paling sesuai. Selain itu, layanan kecil lebih mudah dipelihara dan pemisahan menjadi tanggung jawab independen meningkatkan toleransi kesalahan karena kegagalan satu layanan tidak akan merusak seluruh sistem. Dari perspektif arsitektur, layanan mikro yang dirancang dengan baik mengenkapsulasi data dan pilihan desainnya. Dengan demikian, logika internal layanan mikro dapat diubah tanpa mempengaruhi antarmuka eksternal. Ini mengurangi kebutuhan interaksi antar tim \[29\] \[30\].

Namun, menguraikan sistem monolitik menjadi serangkaian layanan mikro independen adalah tugas yang sangat sulit dan kompleks \[31\]\[35\]. Dekomposisi sistem menjadi layanan yang dipelihara secara terpisah sudah sulit, tetapi arsitektur layanan mikro menambahkan tantangan lebih lanjut terkait kinerja. Panggilan di dalam layanan mikro secara signifikan lebih ringan daripada panggilan antar layanan mikro. Namun, kualitas dekomposisi—pemisahan optimal monolit menjadi layanan—sangat penting untuk mendapatkan manfaat yang diasumsikan dari penggunaan layanan mikro. Arsitek perangkat lunak biasanya melakukan dekomposisi secara manual tetapi para praktisi mengklaim bahwa alat untuk mendukung identifikasi berbagai solusi pemisahan yang mungkin \[25\]\[31\] \[32\] akan sangat membantu tugas tersebut. Biasanya, satu-satunya alat bantu bagi arsitek perangkat lunak didasarkan pada analisis statis dependensi seperti Structure 101¹. Penemuan opsi pemisahan yang sebenarnya masih dilakukan oleh arsitek perangkat lunak berpengalaman. Dalam layanan mikro, perilaku dinamis sistem juga penting karena mempengaruhi kinerja dan kemudahan pemeliharaan. Karena alat analisis dependensi statis tidak mampu menangkap perilaku dinamis, kami memutuskan untuk mengeksplorasi pemisahan berdasarkan perilaku waktu-jalan (runtime) alih-alih hanya mempertimbangkan dependensi statis.

Dalam pekerjaan kami sebelumnya, kami mengusulkan kerangka dekomposisi layanan mikro \[36\] berdasarkan penambangan proses (process-mining) untuk memudahkan identifikasi kandidat pemisahan untuk menguraikan sistem monolitik menjadi layanan mikro terpisah. Kerangka kerja ini didasarkan pada log yang dihasilkan oleh penambangan proses dari sistem monolitik asli. Kerangka dekomposisi juga telah divalidasi dalam studi kami sebelumnya \[36\] bekerja sama dengan sebuah UKM. Hasil dari \[36\] menunjukkan bahwa riwayat panggilan dinamis dapat secara efektif digunakan dalam dekomposisi layanan mikro. Pendekatan ini juga dapat mengidentifikasi masalah arsitektur dalam sistem monolitik. Pendekatan ini dapat digunakan oleh perusahaan untuk mengusulkan opsi pemisahan yang berbeda kepada arsitek perangkat lunak dan untuk memberikan analisis tambahan dari aset perangkat lunak. Ini akan mengurangi risiko solusi pemisahan yang salah.

Dalam makalah ini, kami memperluas kerangka dekomposisi sebelumnya \[36\] dengan mengusulkan kerangka pengukuran baru untuk secara objektif membandingkan dua opsi dekomposisi. Kerangka pengukuran dapat digunakan secara independen dari strategi dekomposisi yang diadopsi.

Sisa dari makalah ini disusun sebagai berikut. Bagian 2 menyajikan latar belakang tentang proses migrasi dan pemisahan sistem monolitik menjadi layanan mikro. Bagian 3 menyajikan kerangka pengukuran. Bagian 4 menjelaskan pendekatan dekomposisi yang kami usulkan. Bagian 5 membahas hasilnya. Bagian 6 menyajikan karya terkait sementara, akhirnya Bagian 7 menarik kesimpulan.

### **2\. Latar Belakang dan Asumsi**

Menguraikan sistem menjadi subsistem independen adalah tugas yang telah dilakukan selama bertahun-tahun dalam rekayasa perangkat lunak. Parnas \[20\] mengusulkan pendekatan pertama untuk modularisasi sistem pada tahun 1972\. Setelah proposal Parnas, beberapa karya mengusulkan pendekatan yang berbeda \[15\]. Baru-baru ini, dekomposisi sistem mengambil dimensi lain berkat sistem cloud-native dan terutama layanan mikro. Dalam layanan mikro, setiap modul dikembangkan sebagai layanan independen dan mandiri.

#### **2.1 Layanan Mikro**

Layanan mikro adalah layanan kecil dan otonom yang diterapkan secara independen, dengan tujuan tunggal dan terdefinisi dengan jelas \[7\], \[19\]. Dalam layanan mikro, setiap layanan dapat dikembangkan menggunakan bahasa dan kerangka kerja yang berbeda. Setiap layanan diterapkan ke lingkungan khusus mereka yang efisien bagi mereka.

Komunikasi antar layanan dapat didasarkan pada REST atau antrian pesan (message queue). Jadi, setiap kali ada perubahan logika bisnis di salah satu layanan, layanan lain tidak terpengaruh selama titik akhir komunikasi tidak diubah. Akibatnya, jika salah satu komponen sistem gagal, kegagalan tersebut tidak akan mempengaruhi komponen atau layanan lain, yang merupakan kelemahan besar dari sistem monolitik \[7\].

Seperti yang bisa kita lihat pada Gambar 1, komponen dalam sistem monolitik sangat terikat satu sama lain sehingga kegagalan satu komponen akan mempengaruhi seluruh sistem. Juga jika ada perubahan arsitektur dalam sistem monolitik, itu juga akan mempengaruhi komponen lain. Karena keunggulan ini, arsitektur layanan mikro jauh lebih efektif dan efisien daripada sistem monolitik.

*Gambar 1\. Arsitektur Sistem Layanan Mikro dan Monolitik*

#### **2.2 Proses Dekomposisi Layanan Mikro**

Taibi dkk. \[31\] melakukan survei di antara 21 praktisi yang mengadopsi layanan mikro setidaknya dua tahun yang lalu. Tujuan survei adalah untuk mengumpulkan motivasi mereka, serta evolusi, manfaat, dan masalah adopsi layanan mikro. Berdasarkan hasilnya, mereka mengusulkan kerangka proses migrasi yang terdiri dari dua proses untuk pembangunan kembali seluruh sistem dari awal dan satu proses untuk membuat fitur baru dengan arsitektur layanan mikro di atas sistem yang ada. Mereka mengidentifikasi tiga proses berbeda untuk migrasi dari sistem monolitik ke sistem berbasis layanan mikro. Tujuan dari dua proses pertama adalah untuk mendukung perusahaan yang perlu memigrasikan sistem monolitik yang ada ke layanan mikro dengan mengimplementasikan kembali sistem dari awal. Tujuan dari pendekatan ketiga adalah untuk mengimplementasikan fitur baru hanya sebagai layanan mikro, untuk menggantikan layanan eksternal yang disediakan oleh pihak ketiga, atau untuk mengembangkan fitur yang memerlukan perubahan penting dan oleh karena itu dapat dianggap sebagai fitur baru, sehingga secara bertahap menghilangkan sistem yang ada. Ketiga proses yang diidentifikasi didasarkan pada empat langkah umum tetapi berbeda dalam detailnya.

1. **Analisis struktur sistem.** Semua proses dimulai dengan menganalisis dependensi terutama dengan dukungan alat (Structure 101, SchemaSpy², atau lainnya).  
2. **Definisi arsitektur sistem baru.** Pedoman atau prinsip arsitektur, dan proposal solusi dekomposisi menjadi layanan mikro kecil didefinisikan. Dekomposisi selalu dilakukan secara manual.  
3. **Prioritas pengembangan fitur/layanan.** Pada langkah ini, ketiga proses mengidentifikasi dan memprioritaskan layanan mikro berikutnya yang akan diimplementasikan. Beberapa proses memprioritaskan layanan mikro berdasarkan nilai pelanggan; yang lain menurut komponen dengan lebih banyak bug; dan yang lain lagi memprioritaskan pengembangan fitur baru sebagai layanan mikro, dengan harapan bahwa, dalam jangka panjang, ekosistem baru layanan mikro secara bertahap akan menggantikan setiap fitur dari monolit yang ada.  
4. **Pengkodean dan Pengujian** kemudian dilakukan seperti proyek pengembangan perangkat lunak lainnya. Pengembang mengadopsi strategi pengujian yang mereka sukai. Namun, dalam beberapa kasus, pengujian layanan mikro yang berbeda dilakukan dengan melakukan pengujian unit di tingkat layanan mikro dan pengujian kotak hitam (black-box) di tingkat integrasi.

Dalam pekerjaan ini, kami fokus terutama pada dua langkah pertama, mendukung perusahaan dalam analisis struktur sistem dan dalam identifikasi alternatif dekomposisi. Pedoman arsitektur harus didefinisikan oleh perusahaan berdasarkan kebijakan internal mereka.

#### **2.3 Tujuan Arsitektur**

Layanan mikro harus sekohesif dan sekecil mungkin keterkaitannya (decoupled) \[7\]. Motivasi dari karakteristik arsitektur tersebut adalah untuk menjaga pemeliharaan selokal mungkin. Dengan kata lain, perubahan pada kode sumber harus bersifat lokal pada satu layanan mikro. Arsitektur yang terpisah seperti itu juga mendukung pengembangan dan penerapan yang independen. Sam Newman \[19\] menggambarkan *loose coupling* sebagai berikut: "layanan yang *loosely coupled* tahu sesedikit mungkin tentang layanan yang berkolaborasi dengannya".

Kohesi terkait dengan *decoupling* dan mengukur sejauh mana elemen-elemen dari kelas tertentu saling memiliki keterkaitan. Kohesi mengukur seberapa lemah fungsionalitas dari modul yang berbeda terkait satu sama lain \[6\]. Kohesi yang tinggi seringkali berhubungan dengan *coupling* yang rendah \[13\] \[10\]. Jika komponen perangkat lunak memiliki kohesi yang tinggi, penalaran sistem menjadi lebih mudah \[13\]. Dengan demikian, kohesi yang tinggi mendukung pengembangan dan pemeliharaan sistem yang efisien.

Dalam desain sistem berbasis layanan mikro, para pengembang menargetkan kohesi yang tinggi dan *coupling* yang rendah dengan mengelompokkan fungsionalitas dan komponen sesuai dengan proses bisnis. Kemudian, perubahan pada suatu fungsionalitas seharusnya hanya menyebabkan perubahan pada satu layanan mikro saja \[19\].

Karena kohesi dan *decoupling* adalah kualitas kunci dari layanan mikro, informasi dependensi diperlukan dalam proses dekomposisi. Alat analisis dependensi yang umum digunakan, seperti Structure 101, didasarkan pada analisis statis dependensi. Mereka tidak tahu panggilan antar-komponen mana yang benar-benar dibuat dan mereka tidak mengenali jalur panggilan lengkap. Pendekatan kami menggunakan informasi dependensi dinamis yang dapat disediakan oleh penambangan proses. Penambangan memberikan rekomendasi, dan analisis kemudian dapat digunakan untuk penalaran. Pada titik ini, kami tidak bertujuan untuk dekomposisi yang sepenuhnya otomatis. Pada Sub-bagian berikutnya kami melaporkan asumsi yang mendasari pendekatan kami dan detail proses dekomposisi.

#### **2.4 Asumsi Kerangka Dekomposisi**

Asumsi inti dari pendekatan kami adalah adanya jejak log (log trace) yang diperluas yang telah dikumpulkan saat runtime. Ini berarti bahwa seluruh rantai operasi setelah pemicu eksternal apa pun dapat dilacak dari file log. Contoh peristiwa eksternal tersebut termasuk operasi pengguna apa pun (misalnya, mengklik tombol) dan panggilan dari aplikasi lain (misalnya, API atau baris perintah). File log harus menyertakan informasi tentang semua metode dan kelas yang terlibat dalam melayani permintaan. Jalur eksekusi lengkap harus dapat dilacak sepenuhnya dari titik masuk hingga akses ke basis data (jika ada) dan hingga hasil yang dikembalikan ke klien. Log juga harus menyertakan peristiwa awal dan akhir. Contoh hipotetis dari data yang dilaporkan dalam file log ditunjukkan pada Tabel 1\. Sebuah jejak di Tabel 1 diidentifikasi oleh ID sesi. ID itu membedakan jejak dari sesi lain.

Ada beberapa cara untuk mengumpulkan jejak. Salah satu metode yang mungkin adalah dengan menginstrumentasi kode sumber, tetapi menggunakan Pemrograman Berorientasi Aspek (AOP) juga dapat dilakukan, seperti dalam pekerjaan yang dilakukan oleh Suonsyrjä \[26\]. Untuk beberapa sistem runtime, juga dimungkinkan untuk menginstrumentasi file yang dapat dieksekusi dengan alat seperti Elastic APM³. Untuk program Java, rekomendasi kami saat ini adalah menggunakan Elastic APM karena instrumentasi dengannya memerlukan upaya minimal. Tergantung pada bahasa dan teknologi yang diadopsi, alat lain seperti Dynatrace⁴ atau Datadog⁵ juga dapat digunakan.

Tabel 1\. Contoh Jejak Log (Stempel waktu disingkat untuk alasan ruang)  
| Start | End | Sess. ID | Class | Method |  
|---|---|---|---|---|  
| Time | Time | | | |  
| 00:00 | 00:36 | S1 | Form.jsp | btnClick() |  
| 01:00 | 01:39 | S1 | A.java | a() |  
| 01:40 | 01:45 | S1 | A.java | b() |  
| 01:45 | 01:55 | S1 | B.java | b() |  
| 01:56 | 02:05 | S1 | B.java | c() |  
| 02:05 | 02:13 | S1 | DB.java | query() TABLE A |  
| 02:14 | 02:21 | S1 | DB | TABLE A |  
| 02:22 | 03:28 | S1 | DB | TABLE B |  
| 02:29 | 02:36 | S1 | B.java | c() |  
| 02:36 | 02:45 | S1 | B.java | b() |  
| 02:46 | 02:55 | S1 | A.java | b() |  
| 02:56 | 03:03 | S1 | A.java | c() |  
| 03:04 | 03:16 | S1 | Results.jsp | render() |

### **3\. Kerangka Pengukuran Layanan Mikro**

Di Bagian ini, kami mengusulkan kerangka pengukuran layanan mikro kami. Kerangka kerja ini bertujuan untuk mendukung perusahaan dalam membandingkan berbagai solusi berbasis layanan mikro, tetapi juga untuk memahami kualitas arsitektur tingkat tinggi dari sistem mereka saat ini.

Kerangka pengukuran didasarkan pada ketersediaan file log dari eksekusi nyata dan terdiri dari empat ukuran: *coupling* (CBM), jumlah kelas per layanan mikro (CLA), jumlah kelas yang diduplikasi (DUP), dan frekuensi panggilan eksternal (FEC).

Kerangka pengukuran ini digunakan pada kerangka dekomposisi yang disajikan di Bagian 4\.

#### **3.1 Coupling (CBM)**

Seperti yang dilaporkan di Bagian 2.3, dalam dekomposisi yang berhasil, *coupling* antar layanan mikro harus diminimalkan dan kohesi harus dimaksimalkan. Perhitungan komprehensif dari ukuran-ukuran ini akan memerlukan pengetahuan informasi di luar jejak log \- misalnya pengetahuan tentang akses ke variabel lokal. Jadi, kita perlu mengandalkan aproksimasi. Salah satu cara untuk memperkirakan *coupling* adalah dengan menganggapnya sebagai kebalikan dari kohesi. *Coupling* dapat dianggap berbanding terbalik dengan kohesi dan oleh karena itu, sistem dengan *coupling* rendah akan memiliki kemungkinan tinggi untuk memiliki kohesi yang tinggi \[10\].

Dalam kerangka kerja kami, kami mengadopsi metrik "Coupling Between Microservice" (CBM) \[36\], sebuah ukuran *coupling* yang terinspirasi oleh metrik "Coupling Between Object" (CBO) yang terkenal yang diusulkan oleh Chidamber dan Kemerer \[3\]. CBO menghitung jumlah kelas yang terhubung dengan kelas tertentu. Kelas dapat terhubung melalui beberapa mekanisme, termasuk panggilan metode, akses field, pewarisan, argumen, tipe kembalian, dan pengecualian.

Di \[36\] kami menghitung CBM relatif untuk setiap layanan mikro sebagai berikut:

CBM\_MS \= (Jumlah Tautan Eksternal) / (Jumlah Kelas dalam Layanan Mikro)

Dalam rumus ini "Jumlah Tautan Eksternal" mewakili jumlah jalur panggilan ke layanan eksternal. Jadi, layanan eksternal yang dipanggil beberapa kali, bahkan oleh kelas yang berbeda dari layanan mikro, hanya dihitung sekali. Layanan eksternal bisa berupa layanan mikro lain atau layanan eksternal ke seluruh sistem. Frekuensi panggilan eksternal juga harus diperhitungkan, tetapi kami memiliki ukuran terpisah yang disajikan di Sub-bagian 3.4 untuk itu.

#### **3.2 Jumlah kelas per layanan mikro (CLA)**

Ukuran ini adalah abstraksi dari ukuran layanan mikro, dan memungkinkan pengembang untuk menemukan layanan yang terlalu besar atau terlalu kecil dibandingkan dengan layanan mikro lainnya. Secara umum, layanan mikro yang lebih kecil lebih mudah dipelihara dan oleh karena itu layanan mikro yang besar harus dihindari.

Dalam beberapa kasus, mengoptimalkan ukuran CLA mengarah pada kompromi dengan pengukuran lain. Misalnya, jumlah layanan mikro yang lebih kecil yang lebih besar dapat menyebabkan *coupling* yang lebih kuat (CBM) dan frekuensi panggilan eksternal yang lebih tinggi (FEC).

#### **3.3 Jumlah kelas yang diduplikasi (DUP)**

Jejak eksekusi sering memiliki sub-jalur yang sama, yaitu, beberapa kelas dan metode umum untuk beberapa jejak eksekusi. Jika jejak harus diimplementasikan dalam layanan mikro yang berbeda, salah satu cara untuk meningkatkan kemandirian adalah dengan menduplikasi sebagian kode ke beberapa layanan mikro. Misalnya, metode j dari kelas E (Gambar 4\) digunakan oleh dua jejak eksekusi. Dalam contoh itu, opsi dekomposisi 1 memiliki satu kelas yang diduplikasi, sementara opsi 2 tidak memerlukan kelas untuk diduplikasi. Kelas yang diduplikasi meningkatkan ukuran sistem dan mempersulit proses pemeliharaan.

#### **3.4 Frekuensi panggilan eksternal (FEC)**

Panggilan antar layanan mikro secara komputasi jauh lebih berat daripada panggilan di dalam layanan mikro. Dengan demikian, mengurangi frekuensi panggilan eksternal mengoptimalkan kinerja dan penundaan. Karena pendekatan kami didasarkan pada analisis file log, kami memiliki informasi frekuensi yang tersedia.

Kami menggunakan frekuensi panggilan yang disajikan di 3 sebagai masukan untuk ukuran Frekuensi Panggilan Eksternal (FEC) relatif:

FEC\_MS \= (Jumlah Instans Panggilan) / (Jumlah Kelas dalam Layanan Mikro)

Sebagai contoh, pertimbangkan jalur eksekusi dan opsi dekomposisi pada Gambar 4\. Untuk tujuan contoh, kita asumsikan bahwa:

* Jalur A.a() \-\> A.b() \-\> B.c() \-\> B.d() dipanggil 200 kali  
* Jalur C.e() \-\> C.f() \-\> D.g() \-\> D.h() dipanggil 200 kali.  
* Jalur C.e() \-\> C.f() \-\> F.j() \-\> D.g() \-\> D.h() dipanggil 50 kali  
* Jalur E.i() \-\> E.j() \-\> F.k() \-\> F.l() dipanggil 100 kali.

Dengan data masukan tersebut, kita dapat menghitung jumlah panggilan internal, panggilan eksternal, dan FEC per setiap layanan mikro. Pada tabel 2 kami juga menunjukkan jumlah total panggilan internal di layanan mikro (internal C), jumlah total panggilan antar layanan mikro (external C) dan beban komputasi relatif (load). Dalam contoh ini kami mengasumsikan bahwa panggilan eksternal 1000 kali lebih berat daripada panggilan internal.

Tabel 2\. Contoh analisis frekuensi panggilan antar layanan mikro  
| Pemisahan MS | internal c | external c | load | FEC\_MS1 | FEC\_MS2 | FEC\_MS3 |  
|---|---|---|---|---|---|---|  
| 0: A+B, C+D, E+F | 1150 | 100 | 101550 | 0 | 25 | 25 |  
| 1: A+B, C+D+E.j, E+F | 1650 | 0 | 1650 | 0 | 0 | 0 |  
| 2: A+B, C+D+E+F | 1650 | 0 | 1650 | 0 | 0 | |

### **4\. Kerangka Dekomposisi**

Di Bagian ini, kami menjelaskan kerangka dekomposisi yang menggunakan data dari analisis jalur eksekusi untuk menemukan pemisahan optimal menjadi layanan mikro. Deskripsi tingkat atas dari kerangka kerja diberikan pada Gambar 2\.

*Gambar 2\. Proses Dekomposisi (Dari \[36\])*

Ketika file log tersedia, proses dekomposisi yang didefinisikan dalam (Gambar 2\) dapat dimulai. Proses ini terdiri dari enam langkah yang diuraikan dalam sub-bagian berikut.

#### **4.1 Langkah 1: Analisis Jalur Eksekusi.**

Karena pendekatan kami bertujuan untuk mengoptimalkan sistem untuk urutan panggilan yang sering digunakan, langkah pertama dari pendekatan kami adalah mengidentifikasi jalur panggilan yang paling sering dieksekusi dari log. Salah satu cara untuk melakukannya adalah dengan menggunakan alat penambangan proses. Dalam kasus kami, kami menggunakan DISCO⁶ untuk secara grafis merepresentasikan proses bisnis yang ditemukan dalam file log. Alat serupa lainnya dapat digunakan sebagai gantinya. Hasil dari langkah 1 adalah representasi grafis dari proses dan grafik panggilan. Salah satu contoh diagram grafis tersebut disajikan pada Gambar 3\. Diagram menunjukkan jalur panggilan antara kelas, metode, dan basis data dengan panah. Gambar ini memberikan informasi berikut kepada pengguna:

* Jalur panggilan yang benar-benar dieksekusi dalam sistem. Jalur yang mungkin tetapi tidak pernah dieksekusi tidak ditampilkan dalam gambar ini.  
* Dependensi antar-kelas dalam sistem. Dependensi divisualisasikan dengan panah antara metode dan kelas. Dependensi eksternal ke pustaka atau layanan web juga divisualisasikan.  
* Frekuensi penggunaan setiap jalur. Alat penambangan proses dapat menyajikan frekuensi dengan ketebalan panah atau dalam tabel terpisah seperti pada Tabel 3\.  
* Cabang dan dependensi sirkular. Jika sistem memiliki dependensi sirkular atau cabang di jalur panggilan, itu dapat dengan mudah ditemukan dari visualisasi.

Jalur panggilan, yang ditunjukkan dengan rantai panah pada Gambar 3, membentuk kandidat untuk proses bisnis yang nantinya digunakan dalam dekomposisi menjadi layanan mikro. Misalnya, jalur yang didokumentasikan dalam Tabel 1 divisualisasikan dalam proses bisnis yang ditunjukkan pada Gambar 3\.

*Gambar 3\. Contoh Proses yang Disederhanakan (Dari \[36\])*

Tabel 3\. Analisis frekuensi setiap jalur eksekusi (Dari \[36\])  
| Path | Freq. |  
|---|---|  
| A.a(); A.b(), B.b(), C.c(), DB.query, Table A, Table B.... | 1000 |  
| A.b(); A.c(), B.a(), C.c(), DB.query, Table A, Table B,.. | 150 |

#### **4.2 Langkah 2: Analisis Frekuensi Jalur Eksekusi.**

Dalam pendekatan kami, frekuensi panggilan adalah kontributor utama untuk rekomendasi yang dihasilkan. Oleh karena itu frekuensi harus dipelajari dan dianalisis. Untuk inspeksi visual, alat analisis proses dapat membantu. Misalnya, di alat DISCO, ketebalan panah mencerminkan frekuensi panggilan. Selain inspeksi visual, kami menggunakan data numerik konkret untuk semua jalur eksekusi dengan frekuensi penggunaannya. Jadi, output dari langkah ini adalah tabel yang mirip dengan Tabel 3\.

Langkah Analisis Frekuensi membantu arsitek untuk memilih opsi dekomposisi potensial. Angka-angka tersebut digunakan untuk menghitung ukuran yang disajikan di Bagian 3 dan digunakan di langkah 6 (lihat Sub-bagian 4.5).

#### **4.3 Langkah 3: Penghapusan Dependensi Sirkular**

Pada langkah ini, pertama-tama kita menemukan dependensi sirkular dengan menganalisis jalur eksekusi yang dilaporkan dalam tabel yang dihasilkan pada Langkah pertama (misalnya Tabel 3). Ini dapat dilakukan dengan algoritma sederhana untuk menemukan siklus dalam jalur eksekusi. Dalam kasus dependensi sirkular, arsitek perangkat lunak harus berdiskusi dengan tim pengembangan bagaimana cara memutus siklus ini. Salah satu contoh pola yang dapat diterapkan untuk memutus siklus adalah Inversion of Control \[17\]. Namun, setiap dependensi siklik bisa memerlukan solusi pemutusan yang berbeda yang harus dianalisis dengan cermat. Hasilnya adalah versi yang disempurnakan dari tabel jalur eksekusi (lihat Tabel 3 sebagai contoh).

Meskipun langkah ini bukan bagian dari dekomposisi, penting untuk mempertimbangkan dependensi siklik untuk menghindari kemungkinan kebuntuan (deadlock), dan untuk merancang arsitektur sistem yang lebih baik.

#### **4.4 Langkah 4: Identifikasi Opsi Dekomposisi**

Pada langkah ini, jalur eksekusi dari Langkah 3 digunakan untuk mengidentifikasi berbagai peluang dekomposisi. Inspeksi visual dari grafik panggilan seperti yang ditunjukkan pada Gambar 4 digunakan. Kami mengandalkan dekomposisi manual berbasis ahli, tetapi algoritma untuk membuat dekomposisi yang berbeda dapat dikembangkan.

*Gambar 4\. Contoh Proses yang Disederhanakan (Dari \[36\])*

Jalur eksekusi dapat bergabung menjadi sub-jalur umum atau terpecah menjadi beberapa cabang. Hal ini mengarah pada solusi dekomposisi alternatif. Hal ini ditunjukkan pada Gambar 4\. Jika enam file sumber yang masing-masing menyediakan implementasi kelas ditugaskan ke tiga layanan mikro yang berbeda sebagai A.java+B.java, C.java+D.java dan E.java+F.java, panggilan dari C.f() ke E.j() dan E.j() ke D.g() adalah panggilan antar-layanan. Panggilan ini adalah operasi yang lebih berat daripada panggilan lokal dan memperluas antarmuka eksternal dari layanan mikro. Jika penggunaan panggilan eksternal tidak memungkinkan, ada dua alternatif lain yang dapat diusulkan. Opsi pertama adalah menggunakan tiga layanan mikro sehingga kelas E (atau setidaknya fungsi j() darinya) diduplikasi di dua layanan mikro. Opsi lainnya adalah menguraikan menjadi dua layanan mikro seperti yang ditunjukkan di bagian paling kanan Gambar 4\. Tentu saja, ada juga alternatif untuk mengizinkan panggilan eksternal dan memiliki tiga layanan mikro tanpa duplikasi.

Semua opsi ini memiliki kelebihan dan kekurangan, dan tim harus mendiskusikan alternatif dari berbagai sudut pandang. Pertimbangan dapat mencakup fungsionalitas perangkat lunak jika jalur-jalur tersebut secara logis saling terkait, dan proses pengembangan—apa konsekuensi duplikasi bagi tim pengembangan. Selain itu, frekuensi panggilan harus diperhitungkan. Misalnya dalam kasus pemisahan dan penggabungan di atas, tim harus mempertimbangkan baik upaya pengembangan maupun biaya run-time untuk membuat dua panggilan menjadi eksternal. Metrik yang dibahas di 3 membantu dalam menganalisis biaya run-time.

#### **4.5 Langkah 5: Peringkat berbasis metrik dari opsi dekomposisi**

Pada langkah ini, kami menerapkan ukuran yang diidentifikasi dalam Kerangka Pengukuran (Bagian 3), untuk membantu arsitek perangkat lunak menilai kualitas opsi dekomposisi. Terkadang optimalisasi ukuran saling bertentangan. Saat ini, kami mengusulkan penggunaan penilaian tim, tetapi di masa depan pendekatan seperti optimasi Pareto \[5\] dapat digunakan.

#### **4.6 Langkah 6: Pemilihan solusi dekomposisi**

Pada langkah terakhir, alternatif dekomposisi yang diidentifikasi pada Langkah 4 dan ukuran yang dikumpulkan pada Langkah 5 digunakan oleh arsitek perangkat lunak untuk memutuskan solusi mana yang akan diambil.

Pendekatan kami tidak secara otomatis memberi peringkat solusi ke urutan apa pun. Arsitek perangkat lunak harus mempertimbangkan rekomendasi dan pengukuran yang diberikan sebelum memilih solusi. Tim harus membahas relevansi perbedaan dalam kasus mereka.

### **5\. Diskusi**

Dalam pekerjaan ini kami mengusulkan kerangka pengukuran layanan mikro dan kami menerapkannya dalam proses dekomposisi yang kami usulkan sebelumnya \[36\].

Kerangka pengukuran didasarkan pada ukuran statis dan dinamis yang dikumpulkan saat runtime. Manfaat utama dari menganalisis informasi runtime adalah ketersediaan data tentang penggunaan setiap komponen, bersama dengan analisis dinamis dependensi. Ukuran dinamis memungkinkan untuk lebih memahami perilaku sistem, dan untuk menganalisis *coupling* dinamis. Selain itu, berkat ukuran dinamis yang dikumpulkan, seperti frekuensi penggunaan setiap metode, arsitek perangkat lunak dapat lebih memahami fitur mana yang lebih banyak digunakan, kami memprioritaskan pengembangan dan pemisahan sistem monolitik secara berbeda.

Perusahaan dapat mengambil manfaat dari pelajaran yang kami pelajari, dengan menerapkan kerangka kerja yang kami usulkan untuk menguraikan sistem monolitik mereka, tetapi juga untuk evaluasi dan pemantauan perilaku runtime dari layanan mikro yang ada untuk terus memahami kemungkinan masalah. Selain itu, kerangka pengukuran layanan mikro akan memungkinkan arsitek perangkat lunak untuk secara jelas mengevaluasi opsi dekomposisi yang berbeda, dengan penggunaan ukuran yang dapat diulang dan objektif.

Meskipun pendekatan ini sangat bermanfaat di perusahaan kasus kami, hasilnya bisa memiliki dampak yang berbeda pada perusahaan lain. Peneliti dapat mengambil manfaat dari pendekatan ini dan mengembangkannya lebih lanjut. Metrik optimasi baru dapat didefinisikan, dan secara teori, akan mungkin untuk mengusulkan pendekatan dekomposisi otomatis yang akan mengidentifikasi pemisahan dengan memaksimalkan metrik yang diidentifikasi. Algoritma genetik bisa menjadi solusi yang mungkin untuk ide ini.

### **6\. Karya Terkait**

Fritzsch dkk \[8\] menyajikan klasifikasi untuk pendekatan refactoring. Pendekatan kami harus dikategorikan sebagai *Workload-Data aided* dalam klasifikasi ini karena kami menggunakan data operasional, yaitu data dinamis, dalam dekomposisi dan analisis.

Bogner dkk telah melakukan tinjauan literatur tentang metrik pemeliharaan layanan mikro \[1\]. Laporan tersebut merangkum beberapa metrik yang mengkhususkan diri pada sistem berbasis layanan alih-alih metrik yang dirancang untuk sistem berorientasi objek. Meskipun penelitian tersebut hanya mengasumsikan penggunaan info statis, metrik ini seharusnya menarik bagi kami dalam penelitian di masa depan.

Satu kasus refactoring sistem warisan menjadi sistem berbasis layanan telah dilaporkan oleh Khadka dkk. \[12\]. Kasus mereka memiliki kesamaan substansial dengan pendekatan dan kasus kami. Mereka juga menekankan pentingnya dan kesulitan menemukan set layanan yang tepat. Mereka juga menganalisis jalur panggilan untuk menemukan titik panas (hotspot) dalam kode. Namun, mereka tidak menyajikan proses yang sistematis dan dapat diulang untuk dekomposisi. Sebenarnya, hanya sejumlah terbatas karya penelitian yang mengusulkan pendekatan sistematis bagi pengembang dalam menguraikan sistem mereka menjadi set layanan mikro yang optimal.

Chris Richardson \[24\] menempatkan skalabilitas sebagai fokus dan mengusulkan pendekatan dekomposisi berdasarkan "kubus skalabilitas" di mana aplikasi dapat diskalakan berdasarkan sumbu X, Y, atau Z. Penskalaan sumbu X dan sumbu Z terdiri dari menjalankan beberapa salinan aplikasi di belakang penyeimbang beban (load balancer). Penskalaan sumbu Y adalah pendekatan dekomposisi layanan mikro yang sebenarnya, yang mengusulkan untuk membagi aplikasi menjadi beberapa layanan yang berbeda. Setiap layanan bertanggung jawab atas satu atau lebih fungsi yang terkait erat. Dekomposisi kemudian didasarkan pada dua pendekatan: menguraikan berdasarkan kata kerja yang digunakan dalam deskripsi layanan atau menguraikan berdasarkan kata benda yang membuat layanan bertanggung jawab atas semua operasi yang terkait dengan entitas tertentu seperti manajemen pelanggan. Richardson juga merekomendasikan untuk menggunakan kombinasi dekomposisi berbasis kata kerja dan berbasis kata benda bila diperlukan.

Richardson \[23\] juga menyebutkan pendekatan ini dalam dua strategi dekomposisinya:

* "Dekomposisi berdasarkan kapabilitas bisnis dan definisikan layanan yang sesuai dengan kapabilitas bisnis";  
* "Dekomposisi berdasarkan sub-domain desain berbasis domain";

Dalam versi lama halaman ini \[23\] (2017), Richardson mengusulkan dua pola lain:

* "Dekomposisi berdasarkan kata kerja atau 'kasus' penggunaan dan definisikan layanan yang bertanggung jawab atas tindakan tertentu";  
* "Dekomposisi berdasarkan kata benda atau sumber daya dengan mendefinisikan layanan yang bertanggung jawab atas semua operasi pada entitas/sumber daya dari jenis tertentu".

Kecskemeti dkk. \[11\] mengusulkan pendekatan dekomposisi berdasarkan optimasi kontainer. Tujuannya adalah untuk meningkatkan elastisitas aplikasi skala besar dan kemungkinan untuk mendapatkan komposisi yang lebih fleksibel dengan layanan lain.

Kemungkinan dekomposisi lain adalah memulai dari sistem monolitik dan secara progresif bergerak menuju arsitektur berbasis layanan mikro \[39\] atau mengirimkan layanan mikro terpisah dengan membagi tim pengembangan menjadi tim yang lebih kecil yang bertanggung jawab atas kelompok layanan mikro yang terbatas.

Vresk dkk. \[38\] mendefinisikan konsep dan platform IoT berdasarkan orkestrasi komponen sistem IoT yang berbeda, seperti perangkat, sumber data, pemroses data, dan penyimpanan. Mereka merekomendasikan pendekatan yang mirip dengan yang diusulkan oleh Kubus Skalabilitas Richardson \[24\] yang menggabungkan pendekatan dekomposisi berbasis kata kerja dan berbasis kata benda. Pendekatan yang diusulkan menyembunyikan kompleksitas yang berasal dari variasi properti perangkat akhir berkat penerapan pendekatan seragam untuk memodelkan perangkat dan layanan IoT fisik dan logis. Selain itu, ini dapat mendorong interoperabilitas dan ekstensibilitas menggunakan beragam protokol komunikasi ke dalam komponen layanan mikro proksi.

Gysel dkk. \[9\] mengusulkan pendekatan algoritma pengelompokan berdasarkan 16 kriteria *coupling* yang berasal dari analisis literatur dan pengalaman industri. Pendekatan ini adalah kerangka kerja alat yang dapat diperluas untuk dekomposisi layanan sebagai kombinasi dari metode yang didorong oleh kriteria. Ini mengintegrasikan algoritma pengelompokan grafik dan fitur penilaian prioritas dan sembilan jenis analisis dan spesifikasi desain. Selain itu, pendekatan ini memperkenalkan konsep kartu kriteria *coupling* menggunakan 16 instance berbeda yang dikelompokkan ke dalam empat kategori: Kohesivitas, Kompatibilitas, Kendala, dan Komunikasi. Pendekatan ini dievaluasi dengan mengintegrasikan dua algoritma pengelompokan grafik yang ada, menggabungkan penelitian tindakan dan investigasi studi kasus, dan uji beban. Hasilnya menunjukkan manfaat potensial bagi para praktisi, juga dikonfirmasi oleh umpan balik pengguna.

Chen dkk. \[2\] mengusulkan pendekatan dekomposisi berorientasi layanan mikro berbasis data dari diagram alir data dari logika bisnis. Pendekatan mereka dapat memberikan hasil yang lebih rasional, objektif, dan mudah dipahami berkat operasi objektif dan data yang diekstraksi dari logika bisnis dunia nyata. Demikian pula, kami mengadopsi penambangan proses untuk menganalisis proses bisnis dari sistem monolitik.

Alwis dkk. \[4\] mengusulkan heuristik untuk memisahkan sistem monolitik menjadi layanan mikro berdasarkan subtipe objek (yaitu, granularitas terendah perangkat lunak berdasarkan properti struktural) dan pemisahan fungsional berdasarkan fragmen eksekusi umum di seluruh perangkat lunak (yaitu, granularitas terendah perangkat lunak berdasarkan properti perilaku). Pendekatan ini adalah yang paling dekat dengan pekerjaan kami. Namun, mereka menganalisis sistem melalui analisis statis tanpa menangkap perilaku dinamis sistem dan mereka tidak mengusulkan ukuran untuk mengevaluasi kualitas solusi pemisahan yang diusulkan.

Taibi dkk. \[28\] \[33\] \[34\], mengusulkan serangkaian pola dan anti-pola yang harus dipertimbangkan dengan cermat selama dekomposisi layanan mikro \[28\] \[33\] merekomendasikan untuk menghindari serangkaian praktik berbahaya seperti dependensi siklik dan titik akhir yang di-hardcode tetapi juga untuk mempertimbangkan anti-pola kritis dan *code smells* \[27\] yang dapat dihasilkan dalam sistem monolitik.

### **7\. Kesimpulan**

Dekomposisi sistem monolitik menjadi layanan mikro adalah tugas yang sangat kompleks dan rawan kesalahan, yang umumnya dilakukan secara manual oleh arsitek perangkat lunak.

Dalam pekerjaan ini, kami pertama-tama mengusulkan kerangka pengukuran layanan mikro baru berdasarkan 4 ukuran: *coupling*, jumlah kelas per layanan mikro, jumlah kelas yang diduplikasi, dan frekuensi panggilan eksternal. Tujuan dari kerangka kerja kami adalah untuk mendukung arsitek perangkat lunak untuk membandingkan dekomposisi layanan mikro yang berbeda, melalui serangkaian ukuran yang objektif dan dapat diulang.

Kami menginstansiasi kerangka pengukuran kami dalam konteks pendekatan dekomposisi berbasis penambangan proses yang diusulkan sebelumnya \[36\].

Tujuan kami bukanlah pemisahan otomatis sistem monolitik tetapi untuk memberikan dukungan ekstra kepada arsitek perangkat lunak, untuk membantu mereka dalam mengidentifikasi opsi pemisahan yang berbeda, mengurangi subjektivitas, dan untuk mengukur serta membandingkan solusi yang berbeda secara objektif.

Kerangka pengukuran layanan mikro dapat diadopsi secara independen dari proses dekomposisi yang digunakan. Sebagai contoh, arsitek perangkat lunak mungkin secara manual mengidentifikasi dua opsi dekomposisi untuk sistem monolitik. Kerangka pengukuran akan mendukung mereka dalam perbandingan opsi dekomposisi mereka.

Kami merekomendasikan perusahaan untuk menerapkan kerangka pengukuran kami secara berkala juga dalam kasus sistem berbasis layanan mikro yang ada. Analisis historis evolusi sistem mungkin memberikan informasi yang berguna tentang kualitas sistem dan juga menjadi pemicu untuk refactoring di masa depan.

Pekerjaan di masa depan mencakup validasi kerangka kerja, baik dalam konteks dekomposisi manual maupun saat menggunakan pendekatan berbasis penambangan proses. Selain itu, kami ingin mengevaluasi penerapan pendekatan kami dalam pengembangan alat untuk memfasilitasi identifikasi proses, perhitungan otomatis metrik, dan identifikasi ukuran lain untuk mengevaluasi kualitas dekomposisi. Kami sudah mulai mengembangkan alat untuk secara otomatis mengidentifikasi dependensi antar layanan mikro \[21\] dan kami menerbitkan dataset yang berisi analisis 20 proyek \[22\].

Kami juga berencana untuk lebih lanjut memvalidasi pendekatan ini secara empiris dengan perusahaan lain dan untuk memasukkan ukuran dinamis untuk mengevaluasi kualitas sistem saat runtime \[16\] \[37\]. Di masa depan, kami juga berencana untuk mengadopsi teknik penambangan repositori perangkat lunak untuk mengidentifikasi area yang berubah secara bersamaan di masa lalu, untuk membantu pengembang memahami bagian-bagian kode yang terhubung satu sama lain.

Pekerjaan masa depan lain yang mungkin adalah memasukkan identifikasi migrasi parsial, yaitu, migrasi dari serangkaian proses terbatas dari sistem monolitik. Akhirnya, kami juga mempertimbangkan untuk memperluas pekerjaan ini dengan mengusulkan tidak hanya opsi dekomposisi yang berbeda tetapi juga serangkaian pola untuk menghubungkan layanan mikro berdasarkan pola layanan mikro umum yang ada \[19\] \[32\] dan anti-pola \[28\]\[33\]\[34\].

### **Referensi**

(Daftar referensi lengkap dari 1 hingga 39 seperti yang tercantum dalam dokumen asli.)

¹ Structure101 Software Architecture Environment \- http://www.structure101.com  
² http://schemaspy.sourceforge.net/  
³ The Elastic APM Libraries. https://www.elastic.co/solutions/apm  
⁴ Dynatrace https://www.dynatrace.com  
⁵ Datadog https://www.datadoghq.com  
⁶ https://fluxicon.com/disco/
