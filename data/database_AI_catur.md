<h1>Database SQL untuk AI Catur</h1>
    <p>
        Database SQL adalah sistem manajemen basis data relasional yang digunakan untuk menyimpan, mengakses, dan mengelola data dalam suatu sistem. Dalam hal ini, kita akan menggunakan database SQL untuk menyimpan dataset papan catur yang dapat digunakan untuk melatih model AI catur.
    </p>
    <h2>Struktur Tabel</h2>
    <h3>Tabel 1: <code>ai_model</code></h3>
    <p>
        Tabel ini digunakan untuk menyimpan informasi tentang model AI catur yang telah dilatih.
    </p>
    <table>
        <thead>
            <tr>
                <th>column_name</th>
                <th>data_type</th>
            </tr>
        </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>int</td>
        </tr>
    <tr><td>model_name</td>
    <td>text</td>
    </tr>
    <tr><td>description</td>
    <td>text</td>
    </tr>
    <tr><td>created_at</td>
    <td>timestamp</td>
    </tr>
    </tbody>
    </table>
    <p>Catatan:</p>
    <ul><li>Kolom <code>id</code>
     digunakan sebagai kunci utama untuk tabel <code>ai_model</code>
    .</li>
    <li>Kolom <code>created_at</code>
     digunakan untuk menyimpan tanggal dan waktu saat model dibuat.</li>
    </ul>
    <h3>Tabel 2: <code>game_play</code>
    </h3>
    <p>Tabel ini digunakan untuk menyimpan informasi tentang permainan catur antara dua pemain.</p>
    <table><thead><tr><th>column_name</th>
    <th>data_type</th>
    </tr>
    </thead>
    <tbody><tr><td>id</td>
    <td>int</td>
    </tr>
    <tr><td>player_1</td>
    <td>text</td>
    </tr>
    <tr><td>player_2</td>
    <td>text</td>
    </tr>
    <tr><td>move_number</td>
    <td>int</td>
    </tr>
    <tr><td>position</td>
    <td>text</td>
    </tr>
    </tbody>
    </table>
    <p>Catatan:</p>
    <ul><li>Kolom <code>id</code>
     digunakan sebagai kunci utama untuk tabel <code>game_play</code>
    .</li>
    <li><code>player_1</code>
     dan <code>player_2</code>
     digunakan untuk menyimpan nama pemain yang terlibat dalam permainan.</li>
    <li>Kolom <code>move_number</code>
     digunakan untuk menyimpan nomor langkah dalam permainan.</li>
    <li>Kolom <code>position</code>
     digunakan untuk menyimpan representasi papan catur dalam bentuk string.</li>
    </ul>
    <h3>Tabel 3: <code>ai_vs_ai</code>
    </h3>
    <p>Tabel ini digunakan untuk menyimpan informasi tentang permainan catur antara dua model AI.</p>
    <table><thead><tr><th>column_name</th>
    <th>data_type</th>
    </tr>
    </thead>
    <tbody><tr><td>id</td>
    <td>int</td>
    </tr>
    <tr><td>ai_id_1</td>
    <td>int</td>
    </tr>
    <tr><td>ai_id_2</td>
    <td>int</td>
    </tr>
    <tr><td>move_number</td>
    <td>int</td>
    </tr>
    <tr><td>position</td>
    <td>text</td>
    </tr>
    </tbody>
    </table>
    <p>Catatan:</p>
    <ul><li>Kolom <code>id</code>
     digunakan sebagai kunci utama untuk tabel <code>ai_vs_ai</code>
    .</li>
    <li><code>ai_id_1</code>
     dan <code>ai_id_2</code>
     digunakan untuk menyimpan ID model AI yang terlibat dalam permainan.</li>
    <li>Kolom <code>move_number</code>
     digunakan untuk menyimpan nomor langkah dalam permainan.</li>
    <li>Kolom <code>position</code>
     digunakan untuk menyimpan representasi papan catur dalam bentuk string.</li>
    </ul>
    <h2>Kesimpulan</h2>
    <p>
        Dengan menggunakan database SQL, Anda dapat menyimpan dan mengelola dataset papan catur dengan mudah. Setiap tabel yang dijelaskan di atas memungkinkan Anda untuk menyimpan informasi yang berbeda tentang permainan catur, baik antara pemain manusia atau antara model AI. Selain itu, pastikan untuk memilih tipe data yang tepat untuk setiap kolom dalam tabel agar efisien dan hemat ruang penyimpanan.
    </p>
    </div>
