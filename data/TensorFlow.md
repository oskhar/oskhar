## Pengertian TensorFlow dan TensorFlow.js
TensorFlow adalah opensource library untuk Machine Learning yang dikembangkan oleh team google brain.

awalnya untuk python, tapi beberapa karyawan Google ada yang mengimplementasikannya dalam javascript waktu itu namanya masih deeplearning.js, dari sinilah tensorflow.js tercipta

## Alasan menggunakan TensorFlow.js
Karna javascript suport multi device, jadi TensorFlow.js yang berjalan di dalam javascript, jadi itu memungkinkan untuk berbagai defice

## Tensor
Tensor adalah kumpulan angka dalam format n-Dimensi (Scalar, Vector, Matrix, Tensor)

### Scalar
    var a = 0;

### Vector
    var a = [1, 2, 3, 4, 5]

### Matrix
    var a = [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ]

### Tensor
    var a = [
        [
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4]
        ],
        [
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4]
        ],
        [
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4]
        ]
    ]

## TensorFlow
Dari data tensor diatas kita buat flow untuk mengolah data yang nantinya bisa menghasilkan result atau best prediction.


### Contoh program pada catur
```js
// Import TensorFlow.js dan model catur
const tf = require('@tensorflow/tfjs');
const chess = require('chess.js');
const { ChessModel } = require('./chess_model');

// Buat model catur baru
const model = new ChessModel();

// Inisialisasi game catur
const game = new chess.Chess();

// Fungsi untuk mendapatkan pemain saat ini
function getCurrentPlayer() {
  return game.turn() === 'w' ? 'white' : 'black';
}

// Fungsi untuk melakukan prediksi langkah selanjutnya
async function predictMove() {
  // Dapatkan representasi FEN dari papan saat ini
  const fen = game.fen();

  // Konversi FEN menjadi tensor
  const inputTensor = tf.tensor2d([[...fenToBoard(fen)]]);

  // Lakukan prediksi dengan model
  const predictions = await model.predict(inputTensor).data();

  // Cari langkah dengan probabilitas tertinggi
  const legalMoves = game.moves();
  let bestMove = null;
  let bestScore = -Infinity;
  for (const move of legalMoves) {
    const [from, to] = move.split('-');
    const score = predictions[to] - predictions[from];
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  // Kembalikan langkah terbaik
  return bestMove;
}

// Fungsi untuk menjalankan game catur
async function runGame() {
  while (!game.game_over()) {
    // Dapatkan langkah dari pemain saat ini
    const currentPlayer = getCurrentPlayer();
    const move = currentPlayer === 'white' ? await predictMove() : await promptMove();

    // Lakukan langkah
    game.move(move);

    // Cetak papan catur
    console.log(game.ascii());
  }

  // Cetak hasil permainan
  console.log('Game over:', game.result());
}

// Jalankan game catur
runGame();
```

### Program pembuatan model
```js
const tf = require('@tensorflow/tfjs');
const fs = require('fs');

// Fungsi untuk mengonversi format FEN menjadi representasi papan catur
function fenToBoard(fen) {
  const rows = fen.split(' ')[0].split('/');
  const board = [];
  for (const row of rows) {
    const rowArray = [];
    for (const char of row) {
      if (/\d/.test(char)) {
        rowArray.push(null);
      } else {
        rowArray.push(char);
      }
    }
    board.push(rowArray);
  }
  return board;
}

// Fungsi untuk mengonversi representasi papan catur menjadi format yang dapat diproses oleh TensorFlow.js
function boardToTensor(board) {
  const tensor = tf.zeros([8, 8, 12]);
  const pieces = ['p', 'n', 'b', 'r', 'q', 'k', 'P', 'N', 'B', 'R', 'Q', 'K'];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const piece = board[i][j];
      if (piece) {
        const index = pieces.indexOf(piece);
        tensor[i][j][index].assign(1);
      }
    }
  }
  return tensor;
}

// Baca dataset dari file CSV
const dataset = fs.readFileSync('chess_data.csv', 'utf-8').split('\n');
const X = [];
const y = [];
for (const row of dataset) {
  const [fen, move] = row.split(',');
  const board = fenToBoard(fen);
  const tensor = boardToTensor(board);
  const moveIndex = parseInt(move);
  X.push(tensor);
  y.push(moveIndex);
}

// Buat model
const model = tf.sequential();
model.add(tf.layers.conv2d({ inputShape: [8, 8, 12], filters: 64, kernelSize: 3, activation: 'relu' }));
model.add(tf.layers.conv2d({ filters

```