let matriz = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

let matrizMista = [
  ["João", 25, "19-999944390"],
  ["Maria", 22, "11-77123432"],
  ["Joana", 18, "12-987234321"],
];


console.log(matrizMista[1][0]);

console.log(matrizMista[2][2]);

for(let i=0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j])
    }
}
