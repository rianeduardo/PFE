// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// OPERAÇÕES AVANÇADAS COM ARRAYS

let valores = [10, 20, 30, 40, 50];

// MAP -> Mapeia os valores, transformando em uma nova array

let valoresDobro = valores.map((x) => x * 2);
console.log(valoresDobro); // 20,40,60,80,100

// FILTER -> filtra valores

let valoresFilter = valores.filter((x) => x > 25);
console.log(valoresFilter); // 30,40,50

// REDUCE -> Soma valores

let soma = valores.reduce((soma, index) => soma + index);
console.log(soma); // 150

// SORT -> Ordena a array em ordem crescente

let aleatorio = [7, 4, 2, 9, 1, 5, 8, 6, 3];
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
