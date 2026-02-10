const prompt = require("prompt-sync")();

function tabuada(produto) {
  for (i = 1; i <= 10; i++) {
    var aux = produto * i;
    console.log(produto + " x " + i + " = " + aux);
  }
}

produto = prompt("Digite um produto para ver a tabuada dele: ");
console.log("Tabuada do " + produto + ": ");
