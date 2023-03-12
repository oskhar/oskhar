```js
class ChessNeuron {
  constructor() {
    this.weights = [
      // baris 1
      [1, 1, 1, 1, 1, 1, 1, 1],
      // baris 2
      [1, 1, 1, 1, 1, 1, 1, 1],
      // baris 3
      [0, 0, 0, 0, 0, 0, 0, 0],
      // baris 4
      [0, 0, 0, 0, 0, 0, 0, 0],
      // baris 5
      [0, 0, 0, 0, 0, 0, 0, 0],
      // baris 6
      [0, 0, 0, 0, 0, 0, 0, 0],
      // baris 7
      [-1, -1, -1, -1, -1, -1, -1, -1],
      // baris 8
      [-1, -1, -1, -1, -1, -1, -1, -1]
    ];
  }

  evaluate(board) {
    let sum = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        sum += board[i][j] * this.weights[i][j];
      }
    }
    return sum;
  }

  getBestMove(possibleMoves) {
    let bestMove = possibleMoves[0];
    let bestScore = -Infinity;
    for (let i = 0; i < possibleMoves.length; i++) {
      let move = possibleMoves[i];
      let score = this.evaluate(move.board);
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }
    return bestMove;
  }
}
```

Contoh penggunaannya
```js
// Input posisi awal permainan catur
const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

// Inisialisasi neural network dan hitung best move
const neuralNet = new ChessNeuron();
const bestMove = neuralNet.getBestMove(fen);

// Output hasil best move
console.log('Best move:', bestMove);
```