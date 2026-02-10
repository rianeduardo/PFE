var prompt = require("prompt-sync")();

var continuar = true;

do {
  var acertou = false;
  var segredo = Math.round(Math.random() * 100);
  var contador = 0;
  var listaChutes = [];

  while (acertou == false) {
    console.log("Tentativas: " + contador + " | Chutes: " + listaChutes);
    var chute = Number(prompt("Chute um número: "));

    if (chute < segredo) {
      console.log("\n\nERROU! Seu chute foi MENOR que o número secreto!\n\n");
      listaChutes.push(chute);
      contador++;
    } else if (chute > segredo) {
      console.log("\n\nERROU! Seu chute foi MAIOR que o número secreto!\n\n");
      listaChutes.push(chute);
      contador++;
    } else {
      console.log("\n\nACERTOU! O número secreto era " + segredo);
      acertou = true;
    }
  }
  console.log("Deseja jogar outra rodada?\n1. Sim\n2. Não\n\n");
  var op = prompt("Escolha: ");

  if (op == 1) {
    continuar = true;
    segredo = Math.round(Math.random() * 100);
    contador = 0;
    acertou = false;
  } else {
    continuar = false;
    console.log("Saindo...");
  }
} while (continuar);
