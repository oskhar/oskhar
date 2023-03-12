Berikut adalah contoh program Monte Carlo Tree Search untuk fungsi getBestMove dalam permainan catur:
```js
function getBestMove(board, player, maxDepth, maxTime) {
  const startTime = new Date().getTime();
  const endTime = startTime + (maxTime * 1000);
  const root = new Node(board, player);

  while (new Date().getTime() < endTime) {
    let node = root;

    // selection
    while (node.children.length > 0) {
      node = node.selectChild();
    }

    // expansion
    if (node.visits > 0) {
      node.expand();
      node = node.selectChild();
    }

    // simulation
    const simulationResult = node.simulate();

    // backpropagation
    while (node !== null) {
      node.update(simulationResult);
      node = node.parent;
    }
  }

  const bestChild = root.getBestChild(maxDepth);
  return bestChild.move;
}
```
Pada program di atas, Node merepresentasikan setiap state dalam permainan catur, sementara setiap child dari Node merepresentasikan setiap kemungkinan langkah selanjutnya dari state tersebut.

Pertama-tama, program ini menetapkan waktu maksimal yang diperbolehkan untuk melakukan pencarian langkah terbaik. Kemudian, program membuat root node dengan board saat ini dan player yang sedang bermain.

Selanjutnya, program melakukan loop selama waktu yang diperbolehkan untuk melakukan Monte Carlo Tree Search. Setiap loop terdiri dari empat tahap: selection, expansion, simulation, dan backpropagation.

Tahap selection memilih child node dengan nilai UCB (Upper Confidence Bound) terbaik. Tahap expansion menambahkan child node baru jika node saat ini belum dikunjungi sebelumnya. Tahap simulation memainkan game secara acak dari child node yang dipilih. Tahap backpropagation memperbarui nilai UCB untuk semua node yang telah dikunjungi.

Setelah pencarian selesai, program mencari child node dengan skor terbaik menggunakan metode getBestChild dan mengembalikan langkah terbaik.

program tersebut adalah implementasi dari algoritma Monte Carlo Tree Search (MCTS) untuk permainan strategi dua pemain. Tujuannya adalah untuk mencari gerakan terbaik yang mungkin dilakukan oleh pemain yang diberikan dalam papan permainan yang diberikan.

Algoritma MCTS bekerja dengan mengunjungi setiap simpul dalam pohon pencarian dan menghitung skor untuk setiap gerakan yang mungkin. Kemudian, algoritma akan memilih gerakan dengan skor tertinggi dan mengembalikannya sebagai gerakan terbaik yang dapat dilakukan oleh pemain yang diberikan.

Program ini menerima empat parameter input: papan permainan (board), pemain yang akan melakukan gerakan (player), kedalaman pencarian maksimum (maxDepth), dan waktu maksimum yang diizinkan untuk pencarian (maxTime).

Fungsi getBestMove pertama-tama membuat simpul awal (root) dari pohon pencarian dan mulai melakukan pencarian dengan melakukan loop sampai batas waktu maksimum (maxTime) tercapai. Selama loop, algoritma melakukan empat langkah: seleksi, ekspansi, simulasi, dan propagasi balik.

    Seleksi: algoritma mulai dari simpul awal dan melakukan pemilihan simpul turunan (child) yang akan diproses selanjutnya. Algoritma memilih simpul turunan berdasarkan perhitungan skor tertentu yang memperhitungkan kombinasi antara penjelajahan dan eksploitasi dari simpul tersebut.

    Ekspansi: jika simpul turunan yang dipilih telah dieksplorasi sebelumnya, algoritma akan mengekspansi simpul tersebut dengan menambahkan simpul turunan baru ke dalamnya. Kemudian, algoritma akan memilih simpul turunan baru yang ditambahkan sebagai simpul yang akan diproses selanjutnya.

    Simulasi: setelah simpul tujuan yang sesuai telah ditemukan, algoritma melakukan simulasi dengan mengambil gerakan secara acak pada papan permainan. Setiap gerakan akan memberikan skor tertentu, yang akan digunakan untuk memperbarui skor setiap simpul dalam jalur yang telah dilewati.

    Propagasi balik: setelah simulasi selesai, algoritma akan memperbarui skor setiap simpul yang dilewati selama seleksi dan ekspansi dengan menggunakan skor simulasi yang telah diperoleh. Hal ini dilakukan dengan menyesuaikan skor total dan frekuensi kunjungan setiap simpul dalam jalur tersebut.

Setelah pencarian selesai, algoritma akan mencari simpul turunan dengan skor terbaik (yang paling sering dikunjungi selama pencarian) dengan kedalaman maksimum (maxDepth) dan mengembalikan gerakan yang diambil oleh simpul turunan tersebut.

```js
class Node {
  constructor(board, player) {
    this.board = board;
    this.player = player;
    this.parent = null;
    this.children = [];
    this.visits = 0;
    this.totalScore = 0;
    this.move = null;
    this.untriedMoves = this.getLegalMoves();
  }

  getLegalMoves() {
    // implementasi fungsi getLegalMoves()
  }

  selectChild() {

    let selectedNode = null;
    let bestScore = -Infinity;
    const C = 1.4;

    for (const child of this.children) {
        const score = (child.totalScore / child.visits) + C * Math.sqrt((2 * Math.log(this.visits)) / child.visits);
        if (score > bestScore) {
        selectedNode = child;
        bestScore = score;
        }
    }
    return selectedNode;

  }


  expand() {

    const possibleMoves = this.board.getPossibleMoves(this.player);
    for (const move of possibleMoves) {
        const newBoard = this.board.copy();
        newBoard.makeMove(move, this.player);
        const newPlayer = this.board.getNextPlayer(this.player);
        const newNode = new Node(newBoard, newPlayer, move, this);
        this.children.push(newNode);
    }

  }


  simulate() {

    const simBoard = this.board.copy();
    let simPlayer = this.player;

    while (!simBoard.isTerminal()) {
        const possibleMoves = simBoard.getPossibleMoves(simPlayer);
        const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        simBoard.makeMove(randomMove, simPlayer);
        simPlayer = simBoard.getNextPlayer(simPlayer);
    }

    const winner = simBoard.getWinner();
    if (winner === this.player) {
        return 1;
    } else if (winner === this.player.opponent) {
        return 0;
    } else {
        return 0.5;
    }

  }

  update(score) {
    this.visits++;
    this.totalScore += score;
  }

  getBestChild(maxDepth) {

    let bestChild = null;
    let bestScore = -Infinity;

    for (const child of this.children) {
        const score = child.getUCTScore();
        if (score > bestScore) {
        bestChild = child;
        bestScore = score;
        }
    }

    if (bestChild === null || maxDepth === 0) {
        return this;
    }

    return bestChild.getBestChild(maxDepth - 1);
  }

}
```

Pada program di atas, constructor adalah method yang digunakan untuk menginisialisasi objek dari kelas Node. Saat objek dibuat, parameter board dan player diambil sebagai input dan kemudian disimpan sebagai properti dari objek. Properti lain yang ditetapkan di awal adalah parent (induk), children (anak), visits (frekuensi kunjungan), totalScore (total skor), move (gerakan), dan untriedMoves (gerakan yang belum diuji).

Method-method lain yang ada di dalam kelas Node meliputi:

`getLegalMoves()`:
fungsi yang mengembalikan semua gerakan yang mungkin dari posisi saat ini pada papan permainan.

`selectChild()`:
fungsi yang memilih dan mengembalikan simpul turunan (child) yang akan diproses selanjutnya, berdasarkan kriteria tertentu yang memperhitungkan kombinasi antara penjelajahan dan eksploitasi dari simpul tersebut.

Pada method selectChild(), setiap simpul turunan (child) dari simpul yang sedang diproses akan diiterasi dan dinilai berdasarkan kriteria tertentu untuk menentukan simpul mana yang akan diproses selanjutnya.

Penilaian dilakukan berdasarkan rumus UCB (Upper Confidence Bound), yang memperhitungkan nilai eksplorasi dan eksploitasi. Setiap simpul dinilai berdasarkan nilai (child.totalScore / child.visits) yang merepresentasikan nilai eksploitasi, ditambah dengan nilai C * Math.sqrt((2 * Math.log(this.visits)) / child.visits) yang merepresentasikan nilai eksplorasi. Pada rumus ini, C adalah konstanta yang digunakan untuk mengontrol seberapa banyak perhatian yang diberikan pada eksplorasi.

Simpul turunan dengan nilai tertinggi setelah dinilai dengan rumus UCB akan dipilih sebagai simpul yang akan diproses selanjutnya dan dikembalikan sebagai nilai dari method selectChild().

`expand()`:
fungsi yang mengekspansi simpul yang sedang diproses dengan menambahkan simpul turunan baru ke dalamnya, berdasarkan gerakan yang belum diuji. Fungsi ini juga memilih simpul turunan baru yang ditambahkan sebagai simpul yang akan diproses selanjutnya.

Pada method expand(), simpul saat ini akan memeriksa semua kemungkinan langkah yang dapat dilakukan oleh pemain yang sedang bermain pada simpul tersebut. Setiap langkah yang mungkin akan digunakan untuk membuat papan baru yang dihasilkan dengan melakukan langkah tersebut pada papan saat ini.

Setelah membuat papan baru, pemain selanjutnya akan ditentukan menggunakan method getNextPlayer(), dan simpul baru akan dibuat dengan papan baru, pemain selanjutnya, dan simpul saat ini sebagai induk. Simpul baru ini akan ditambahkan ke dalam daftar turunan simpul saat ini menggunakan perintah this.children.push(newNode);. Dengan melakukan ini, simpul saat ini dianggap "diperluas" dengan menambahkan semua kemungkinan langkah yang mungkin.

`simulate()`:
fungsi yang melakukan simulasi dengan mengambil gerakan secara acak pada papan permainan. Setiap gerakan akan memberikan skor tertentu, yang akan digunakan untuk memperbarui skor setiap simpul dalam jalur yang telah dilewati.

Pada method simulate(), simulasi permainan dilakukan untuk memilih langkah secara acak dari posisi saat ini hingga akhir permainan (terminal state) tercapai. Langkah-langkah yang mungkin dilakukan oleh pemain yang bermain di simpul ini diambil menggunakan getPossibleMoves() pada papan saat ini, dan satu langkah diambil secara acak dari semua langkah yang mungkin.

Setiap langkah yang diambil akan diterapkan pada papan dengan menggunakan makeMove(), dan pemain selanjutnya ditentukan dengan getNextPlayer(). Proses ini berlangsung terus-menerus hingga papan mencapai keadaan terminal, yaitu saat salah satu pemain menang atau seri.

Setelah simulasi selesai, hasilnya akan dikembalikan sebagai angka 1 jika pemain yang bermain pada simpul saat ini menang, 0 jika lawan pemain menang, dan 0,5 jika permainan berakhir seri. Hasil ini akan digunakan untuk melakukan backpropagation pada simpul-simpul induknya.

`update(score)`:
fungsi yang memperbarui skor setiap simpul yang dilewati selama seleksi dan ekspansi dengan menggunakan skor simulasi yang telah diperoleh. Hal ini dilakukan dengan menyesuaikan skor total dan frekuensi kunjungan setiap simpul dalam jalur tersebut.

Pada method update(score), simpul saat ini akan diperbarui dengan skor yang diperoleh dari hasil simulasi permainan. Metode update(score) akan dipanggil setelah simulasi selesai untuk setiap simpul yang dilalui pada saat memilih dan memperluas pohon pencarian Monte Carlo.

Setiap kali metode ini dipanggil, jumlah kunjungan pada simpul saat ini akan ditambah satu, dan total skor pada simpul saat ini akan ditambahkan dengan skor yang diperoleh dari hasil simulasi. Skor ini akan digunakan untuk memperbarui nilai rata-rata simpul dengan membagi totalScore dengan visits.

`getBestChild(maxDepth)`:
fungsi yang mencari simpul turunan dengan skor terbaik (yang paling sering dikunjungi selama pencarian) dengan kedalaman maksimum (maxDepth) dan mengembalikan simpul turunan tersebut.

Pada method getBestChild(maxDepth), simpul saat ini akan memilih turunan dengan nilai UCT tertinggi. Untuk setiap turunan, nilai UCT dihitung menggunakan formula UCT dan disimpan di dalam properti uctValue turunan tersebut menggunakan method getUCTScore().

Simpul terbaik yang ditemukan akan ditetapkan sebagai bestChild. Jika tidak ada turunan, bestChild akan diatur menjadi null. Jika nilai maxDepth yang diberikan telah mencapai batas kedalaman yang ditentukan, maka simpul saat ini sendiri akan dikembalikan.

Terakhir, metode ini akan dipanggil secara rekursif pada simpul terbaik yang ditemukan jika maxDepth belum mencapai batas kedalaman yang ditentukan. Rekursi akan berlangsung sampai batas kedalaman tercapai atau tidak ada turunan yang ditemukan. Akhirnya, simpul terbaik yang ditemukan akan dikembalikan.