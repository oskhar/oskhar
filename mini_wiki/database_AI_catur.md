<h1>Database SQL untuk AI Catur</h1>
    <p>
        Database SQL adalah sistem manajemen basis data relasional yang digunakan untuk menyimpan, mengakses, dan mengelola data dalam suatu sistem. Dalam hal ini, kita akan menggunakan database SQL untuk menyimpan dataset papan catur yang dapat digunakan untuk melatih model AI catur.
    </p>
    <h2>
        Struktur Tabel
    </h2>
    <h3>
        Tabel 1: <code>play_vs_ai</code>
    </h3>
    <p>
        Tabel ini digunakan untuk menyimpan informasi tentang permainan catur antara user (manusia) dengan model AI.
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
            <tr>
                <td>player</td>
                <td>text</td>
            </tr>
            <tr>
                <td>evaluate</td>
                <td>text</td>
            </tr>
            <tr>
                <td>code_room</td>
                <td>varchar</td>
            </tr>
            <tr>
                <td>move</td>
                <td>text</td>
            </tr>
            <tr>
                <td>board</td>
                <td>text</td>
            </tr>
        </tbody>
    </table>
    <p>Catatan:</p>
    <ul>
        <li>
            Kolom <code>id</code> digunakan sebagai kunci utama untuk tabel <code>user_vs_ai</code>.
        </li>
        <li>
            <code>player</code> digunakan untuk menyimpan nama pemain yang terlibat dalam permainan.
        </li>
        <li>
            <code>evaluate</code> digunakan untuk menyimpan keunggulan dalam catur, seperti poin pemain, penguasaan arena, dan keamanan raja.
        </li>
        <li>
            Kolom <code>code_room</code> digunakan untuk menyimpan kode dari room tempat bermain agar tidak tercampur dengan arena permainan yang lain.
        </li>
        <li>
            Kolom <code>move</code> digunakan untuk menyimpan nomor langkah dalam permainan.
        </li>
        <li>
            Kolom <code>board</code> digunakan untuk menyimpan representasi papan catur dalam bentuk string.
        </li>
    </ul>
    <h3>
        Tabel 2: <code>game_play</code>
    </h3>
    <p>
        Tabel ini digunakan untuk menyimpan informasi tentang permainan catur antara dua pemain.
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
            <tr>
                <td>player_1</td>
                <td>text</td>
            </tr>
            <tr>
                <td>player_2</td>
                <td>text</td>
            </tr>
            <tr>
                <td>evaluate</td>
                <td>text</td>
            </tr>
            <tr>
                <td>code_room</td>
                <td>varchar</td>
            </tr>
            <tr>
                <td>move</td>
                <td>text</td>
            </tr>
            <tr>
                <td>board</td>
                <td>text</td>
            </tr>
        </tbody>
    </table>
    <p>Catatan:</p>
    <ul>
        <li>
            Kolom <code>id</code> digunakan sebagai kunci utama untuk tabel <code>game_play</code>.
        </li>
        <li>
            <code>player_1</code> dan <code>player_2</code> digunakan untuk menyimpan nama pemain yang terlibat dalam permainan.
        </li>
        <li>
            <code>evaluate</code> digunakan untuk menyimpan keunggulan dalam catur, seperti poin pemain, penguasaan arena, dan keamanan raja.
        </li>
        <li>
            Kolom <code>code_room</code> digunakan untuk menyimpan kode dari room tempat bermain agar tidak tercampur dengan arena permainan yang lain.
        </li>
        <li>
            Kolom <code>move</code> digunakan untuk menyimpan nomor langkah dalam permainan.
        </li>
        <li>
            Kolom <code>board</code> digunakan untuk menyimpan representasi papan catur dalam bentuk string.
        </li>
    </ul>
    <h3>
        Tabel 3: <code>ai_vs_ai</code>
    </h3>
    <p>
        Tabel ini digunakan untuk menyimpan informasi tentang permainan catur antara dua model AI.
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
            <tr>
                <td>ai_1</td>
                <td>int</td>
            </tr>
            <tr>
                <td>ai_2</td>
                <td>int</td>
            </tr>
            <tr>
                <td>evaluate</td>
                <td>text</td>
            </tr>
            <tr>
                <td>code_room</td>
                <td>varchar</td>
            </tr>
            <tr>
                <td>move</td>
                <td>text</td>
            </tr>
            <tr>
                <td>board</td>
                <td>text</td>
            </tr>
        </tbody>
    </table>
    <p>Catatan:</p>
    <ul>
        <li>
            Kolom <code>id</code> digunakan sebagai kunci utama untuk tabel <code>ai_vs_ai</code>.
        </li>
        <li>
            <code>ai_id_1</code> dan <code>ai_id_2</code> digunakan untuk menyimpan ID model AI yang memiliki berbagai bentuk dan terlibat dalam permainan.
        </li>
        <li>
            <code>evaluate</code> digunakan untuk menyimpan keunggulan dalam catur, seperti poin pemain, penguasaan arena, dan keamanan raja.
        </li>
        <li>
            Kolom <code>code_room</code> digunakan untuk menyimpan kode dari room tempat bermain agar tidak tercampur dengan arena permainan yang lain.
        </li>
        <li>
            Kolom <code>move</code> digunakan untuk menyimpan nomor langkah dalam permainan.
        </li>
        <li>
            Kolom <code>board</code> digunakan untuk menyimpan representasi papan catur dalam bentuk string.
        </li>
    </ul>
    <h3>
        Tabel 4: <code>model_ai</code>
    </h3>
    <p>
        Tabel ini digunakan untuk menyimpan informasi tentang bentuk dari model AI yang tersedia.
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
            <tr>
                <td>model_name</td>
                <td>text</td>
            </tr>
            <tr>
                <td>parameter</td>
                <td>text</td>
            </tr>
            <tr>
                <td>win</td>
                <td>int</td>
            </tr>
            <tr>
                <td>lose</td>
                <td>int</td>
            </tr>
            <tr>
                <td>duration</td>
                <td>int</td>
            </tr>
        </tbody>
    </table>
    <p>Catatan:</p>
    <ul>
        <li>
            Kolom <code>id</code> digunakan sebagai kunci utama untuk tabel <code>model_ai</code>.
        </li>
        <li>
            Kolom <code>model_name</code> digunakan untuk menyimpan nama dari model yang digunakan.
        </li>
        <li>
            Kolom <code>parameter</code> digunakan untuk menyimpan berbagai parameter yang digunakan sebagai eksperimen.
        </li>
        <li>
            Kolom <code>win</code> digunakan untuk menyimpan seberapa banyak kemenangan yang dimiliki model.
        </li>
        <li>
            Kolom <code>lose</code> digunakan untuk menyimpan seberapa banyak kekalahan yang dimiliki model.
        </li>
        <li>
            Kolom <code>duration</code> digunakan untuk menyimpan seberapa lama durasi rata rata dalam satu permainan.
        </li>
    </ul>
    <h2>Kesimpulan</h2>
    <p>
        Dengan menggunakan database SQL, Anda dapat menyimpan dan mengelola dataset papan catur dengan mudah. Setiap tabel yang dijelaskan di atas memungkinkan Anda untuk menyimpan informasi yang berbeda tentang permainan catur, baik antara pemain manusia atau antara model AI. Selain itu, pastikan untuk memilih tipe data yang tepat untuk setiap kolom dalam tabel agar efisien dan hemat ruang penyimpanan.
    </p>
    </div>
