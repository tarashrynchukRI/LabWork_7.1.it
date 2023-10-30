// lab_7.1
// Гринчук Тарас
// Лабораторна робота № 7.1
// Пошук заданих елементів та впорядкування рядків / стовпчиків матриці
// Варіант №4

function generateMatrix(rows, cols, min, max) {
   const matrix = [];
   for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
         matrix[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
      }
   }
   return matrix;
}

function printMatrix(matrix) {
   for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join("\t"));
   }
}

function processElements(matrix) {
   let count = 0;
   let sum = 0;
   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
         if (!(matrix[i][j] % 2 !== 0 && (i + j) % 7 == 0)) {
            count++;
            sum += matrix[i][j];
            matrix[i][j] = 0;
         }
      }
   }
   return { count: count, sum: sum };
}

const matrix = generateMatrix(7, 6, 9, 61);
console.log("Сформована матриця: ");
printMatrix(matrix);
const result = processElements(matrix);
console.log("К-ть елементів які задовольняють критерії: " + result.count);
console.log("Сума елементів які задовольняють критерії: " + result.sum);
console.log("Матриця після обробки елементів:");
printMatrix(matrix);