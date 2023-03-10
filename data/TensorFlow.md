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