// CALCULADORA SIMPLES EM JavaScript
var prompt = require("prompt-sync")();

// FUNÇÕES DE CÁLCULO

// SOMA
function soma(a, b) {
  return a + b;
}
// SUBTRAÇÃO
function sub(a, b) {
  return a - b;
}
// MULTIPLICAÇÃO
function multi(a, b) {
  return a * b;
}
// DIVISÃO
function div(a, b) {
  return a / b;
}

function pedirNumeros() {
  numero1 = Number(prompt("Digite o 1º Número: "));
  numero2 = Number(prompt("Digite o 2º Número: "));
}

// MENU E OPERAÇÕES
function menu() {
  let operacao;
  let numero1;
  let numero2;
  let resultado;
  console.log("===Calculadora Simples===");
  console.log("| 1. Soma                ");
  console.log("| 2. Subtração           ");
  console.log("| 3. Multiplicação       ");
  console.log("| 4. Divisão             ");
  console.log("=========================");
  console.log("===Escolha a Operação====");
  operacao = prompt();

  // CONDICIONAIS
  switch (operacao) {
    case "1":
      pedirNumeros();
      resultado = soma(numero1, numero2);
      console.log("Resultado = " + resultado);
      break;
    case "2":
      pedirNumeros();
      resultado = sub(numero1, numero2);
      console.log("Resultado = " + resultado);
      break;
    case "3":
      pedirNumeros();
      resultado = multi(numero1, numero2);
      console.log("Resultado = " + resultado);
      break;
    case "4":
      pedirNumeros();
      if (numero2 == 0) {
        console.log("Não Dividirás por Zero");
        resultado = null;
        break;
      } else {
        resultado = div(numero1, numero2);
        console.log("Resultado = " + resultado);
        break;
      }
      break;

    default:
      console.log("Operação Inválida");
      resultado = null;
      break;
  }
}

var continuar = true;
do {
  menu();
  console.log("\n\n1. Continuar | 2. Sair");
  let escolha = prompt();
  if (escolha == 2) {
    continuar = false;
    console.log("\nSaindo...");
  }
} while (continuar);
