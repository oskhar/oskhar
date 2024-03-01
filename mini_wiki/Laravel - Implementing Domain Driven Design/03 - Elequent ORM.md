Salah satu komponen penting yang termasuk dalam bahasa definisi data (DDL) bertentangan dengan praktik dan nilai dalam DDD. Penyertakan Eloquent ORM (yang diperbolehkan hanya dengan sedikit melengkungkan saran DDD untuk tidak menggunakannya) akan memungkinkan kita melakukan banyak hal menarik.

- Mengaitkan domain events kita dengan siklus hidup Eloquent, memungkinkan model kita secara otomatis menghasilkan domain events tertentu atau ketika terjadi sesuatu yang penting bagi kita.
- Membuat hubungan antara model dengan mudah, memungkinkan kita membuat dan mengelola model domain kita serta mengambil data dari database dengan sintaks yang ekspresif sehingga interaksinya menjadi langsung.
- Menyiapkan entitas dan model kita untuk pembaruan berantai (model-model terkait yang telah dimodifikasi selama pembaruan model tertentu juga akan diperbarui).
- Memperluas kelas Model Eloquent, memungkinkan kita mewarisi sejumlah fitur keren yang disertakan dengan Eloquent.
- Pemberian massal
- Ruang lingkup kueri
- Pemuatan rakus
- Koleksi
- Acara model
- Pengamat model
- Komponen validasi yang memastikan model kita berada dalam keadaan yang valid dan konsisten dan memiliki batasan yang tepat untuk mencegah penggunaan yang keliru.

Salah satu alat terpenting untuk mengembangkan desain berbasis domain di Laravel (di "sisi kode") adalah Eloquent. Eloquent adalah ORM berbasis active record yang menawarkan sejumlah fitur dan alat keren yang sudah ada (dan memang gratis dalam Laravel). Ini adalah beberapa hal kunci yang sangat kita butuhkan untuk mencapai tujuan aplikasi DDL kita.

Dalam pemrograman modern, kecenderungan berkembang menuju memisahkan data objek dan perilakunya. Cara ini dicapai dengan memisahkan data mentah yang dimiliki objek ke dalam kelas khusus yang disebut objek transfer domain (DTO). Meskipun kita akan membahas DTO secara rinci nanti di buku ini, saat ini pahami bahwa itu adalah objek dasar dengan metode getter dan setter untuk setiap properti yang ada pada objek yang perlu diambil atau disimpan. Ini hanya menyimpan data dan tidak perilaku.

Saya tahu ini akan terdengar aneh dan mungkin bertentangan dengan segala sesuatu yang dikatakan programmer batin Anda benar, tetapi dalam Eloquent, entitas dan DTO mereka kurang lebih dicampur secara praktis dan gratis dalam setiap objek PHP yang memperluas kelas Model Eloquent. Itu bukan berarti Anda tidak dapat memiliki lapisan DTO independen antara lapisan persistensi dan ORM, tetapi itu benar-benar akan menjadi upaya yang tidak perlu karena yang Anda lakukan hanyalah menulis ulang fitur yang sudah ada dalam kelas Model abstrak Eloquent. Jika Anda pernah menginginkan representasi database mentah dari model, Anda hanya perlu mengakses lapangan yang sesuai langsung dari model. Namun, jika Anda ingin daftar semua properti yang ada pada objek Model dan nilai mentah mereka yang tidak dimodifikasi oleh aksesornya (serupa dengan yang Anda temukan di DTO), Anda hanya perlu menggunakan metode toArray() dari Eloquent.
### Contoh Model Elequent
> `Note`:  Kita akan melewatkan kenyataan bahwa desain model dalam contoh ini kurang baik dan bisa didekati dengan cara yang lebih metodis daripada yang saya gambarkan di sini, tetapi ini berfungsi sebagai demonstrasi yang baik untuk konteks saat ini.

Misalkan Anda memiliki model Customer (dan tabel pelanggan yang sesuai di database, yang memiliki kolom telepon (berisi nomor telepon pelanggan) dan kolom phone_type, berisi 1 untuk menunjukkan telepon rumah, 2 untuk telepon seluler, atau 3 untuk telepon kantor. Menggunakan Eloquent, kita bisa mengimplementasikan kelas yang ditunjukkan dalam Listing 1-1 untuk merepresentasikan objek Customer.

Daftar 1-1. Contoh Implementasi Class Constumer
```
<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Customer extends Model
{
	public $table = 'customers';
	protected $fillable = [‘name’, ‘phone’, ‘phone_type'];
}
```


Secara dasarnya, di sini kita memiliki properti $table yang memberi tahu Eloquent tabel MySQL yang sesuai di mana objek dari kelas ini akan mewakili satu baris tabel database. Properti $fillable adalah daftar bidang pada tabel tersebut yang ingin Anda aktifkan untuk fitur yang disebut mass assignment, yang akan kita bahas lebih lanjut di bab-bab selanjutnya.

Tabel 1-1 memberikan beberapa contoh rekaman dalam database.

| id | name | phone | phone_type |
| ---- | ---- | ---- | ---- |
| 1 | Jesse Griffin | 619779125 | 1 |
| 2 | Eric Evans | 9998887777 | 2 |
| 3 | Taylor Otwell | 777888999 | 3 |
Daftar 1-2. Contoh Kode Mengambil Catatan Pelanggan dari Database dan
Bertindak berdasarkan Itu
```
<?php
use App\Models\Customer;

$customer = Customer::first(); //gets the first in the db
	//(with the lowest id)

echo $customer->phone;
//returns "6197779125"

echo $customer->phone_type;
//returns "1"
```

> `Note`: Kelas Model abstrak Eloquent memiliki banyak metode kenyamanan seperti first(), load(), intersect(), makeHidden(), only(), dan banyak lainnya. Kita akan menjelajahi fitur-fitur ini di Bab 14, tetapi untuk daftar metode-metode tersebut yang tersedia untuk Anda, lihat http://laravel.com/docs/6.x/eloquent-collections#available-methods.

