// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let array = [];

let arrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Volkswagen", "Audi", "Bmw"];
let arrayMisto = [21, 22, 13, "Fiat", "Ford", false, true];

console.log("Tamanho de cada array respectivamente: \n");
console.log(
  array.length,
  arrayNumerico.length,
  arrayTexto.length,
  arrayMisto.length,
); // Tamanho de cada uma das arrays

console.log("\nÍndice 0 de cada array: \n");
console.log(array[0], arrayNumerico[0], arrayTexto[0], arrayMisto[0]); // Primeiro item de cada uma das arrays

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// ADICIONANDO ELEMENTOS (PUSH -> FINAL | UNSHIFT -> COMEÇO)

arrayTexto.push("Mercedes");
arrayTexto.unshift("Ferrari");
console.log(
  `\n\nAdicionando Mercedes no final e Ferrari no começo\n\n${arrayTexto}`, // Ferrari, Volkswagen, Audi, Bmw, Mercedes
);

// REMOVENDO ELEMENTOS (POP -> FINAL | SHIFT -> COMEÇO)

arrayTexto.pop();
arrayTexto.shift();
console.log(`\n\nTirando Mercedes e Ferrari\n\n${arrayTexto}`); // Volkswagen, Audi, Bmw

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// PERCORRENDO LISTAS COM FOR E FOREACH

for (let i = 0; i < arrayNumerico.length; i++) {
  console.log(`indice[${i}]= ${arrayNumerico[i]}`); // cada item da arrayNumerico
}

console.log("\n\n");

arrayMisto.forEach((index) => {
  console.log(index); // Cada item da arrayMisto
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// MÉTODOS ÚTEIS DE LISTAS

// indexOf -> PESQUISA ITEM NA LISTA E RETORNA O ÍNDICE DELE, CASO INEXISTENTE RETORNA -1

console.log("\n\n");
console.log(arrayNumerico.indexOf(5)); // 4
console.log(arrayNumerico.indexOf(1)); // 0
console.log(arrayNumerico.indexOf(20) + "\n\n"); // -1 (INEXISTENTE)

// splice -> REMOVE ELEMENTOS DE UMA POSIÇÃO

arrayMisto.splice(2, 1);
console.log("\n\n" + arrayMisto); // arrayMisto sem o índice 2 (13)
