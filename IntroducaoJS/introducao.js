// Introdução JS - Tipos de dados primitivos

var nome = "João"; // String
nome = "Rian"; // Reatribuição de valor
var nome = "Ronaldo"; // Redeclaração do valor

let idade = 25; // Number
idade = 40; // Reatribuindo
// Redeclaração do valor = NÃO PERMITIDA USANDO LET

const PI = 3.141519;
// PI = 3; = IMPOSSIVEL REATRIBUIR VALOR A UMA CONSTANTE, ELA NÃO PODE MUDAR (IMUTAVEL)
// const PI = 5; = TAMBÉM NÃO PODE REDECLARAR

let aprovado = true; // Boolean
let media; // Undefined
let info = null; // Null

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("PI: " + PI);
console.log("Aprovado: " + aprovado);
console.log("média: " + media);
console.log("Informação: " + info);
