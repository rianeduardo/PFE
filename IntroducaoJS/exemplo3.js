// ESTRUTURAS DE DADOS

// ESTRUTURAS CONDICIONAIS

// Condicional intermediária (else if)
var idade = 25;

if (idade >= 18) {
  console.log("Maior de idade!\n");
} else if (idade >= 60) {
  console.log("Muito velho!\n");
} else {
  console.log("Menor de idade!\n");
}

// Condicional simples
var precoProduto = 150;

if (precoProduto >= 100) {
  console.log("Valor a pagar: " + precoProduto * 0.9);
} else {
  console.log("Valor a pagar: " + precoProduto);
}

var caso = 2;

switch (caso) {
  case 1:
    console.log("\nDomingo");
    break;
  case 2:
    console.log("\nSegunda");
    break;
  case 3:
    console.log("\mTerça");
    break;
  case 4:
    console.log("\nQuarta");
    break;
  case 5:
    console.log("\nQuinta");
    break;
  case 6:
    console.log("\nSexta");
    break;
  case 7:
    console.log("\nSábado");
    break;
  default:
    console.log("\nDomingo");
    break;
}

// ESTRUTURAS DE REPETIÇÃO

// FOR (CONTÁVEL)
for (let i = 0; i <= 5; i++) {
  console.log("\n" + i);
}

// WHILE (INCONTÁVEL)
var continuar = true;
var numEscolhido = 3;
var contador = 0;
while (continuar) {
  contador++;
  let numeroSorteado = Math.round(Math.random() * 10);
  if (numeroSorteado == numEscolhido) {
    continuar = false;
    console.log("Acertou Miseravi");
    console.log("Tentativas = " + contador);
  }
}

// FUNÇÕES

function ola(nome) {
  return "Olá," + nome;
}

function hello(nome) {
  console.log("Hello, " + nome);
}

console.log(ola("Diogo"));

hello("Diogo");
