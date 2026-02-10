const prompt = require("prompt-sync")();

function calcular(tamanho) {
  for (i = 0; i <= tamanho; i++) {
    if (i === 0) {
      console.log("PAR: " + i);
    } else if (i % 2 === 0) {
      console.log("PAR: " + i);
    }
  }
}

tamanho = prompt("Qual número iterar: ");
calcular(tamanho);
