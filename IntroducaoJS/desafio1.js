const prompt = require("prompt-sync")();

idade = prompt("Digite sua idade: ");

if (idade >= 18) {
  console.log("Maior de idade!");
} else {
  console.log("Menor de idade!");
}
