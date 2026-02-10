// Tipos de operadores básicos

// OPERADORES ARITMÉTICOS (+, -, *, /, %)
console.log("OPERADORES ARITMÉTICOS:");
var x = 5;
var y = 3;

// Adição
console.log("Adição: " + (x + y));

// Subtração
console.log("Subtração: " + (x - y));

// Multiplicação
console.log("Multiplicação: " + x * y);

// Divisão
console.log("Divisão: " + x / y);

// Módulo
console.log("Módulo: " + (x % y));

// OPERADORES RELACIONAIS
console.log("\nOPERADORES RELACIONAIS:");
var x = 10;
var y = 5;
var z = 5;
var c = "5";

// Maior que
console.log("10 maior que 5: " + (x > y));

// Menor que
console.log("5 menor que 5: " + (z < y));

// Maior ou igual que
console.log("10 maior ou igual que 5: " + (x >= y));

// Menor ou igual que
console.log("5 menor ou igual que 5: " + (z <= y));

// Igual
console.log("String 5 igual a 5: " + (c == y));

// ESTRITAMENTE igual
console.log("String 5 estritamente igual a 5: " + (c === y));

// Diferente
console.log("5 diferente de String 5: " + (y != c));

// ESTRITAMENTE diferente
console.log("5 estritamente diferente de String 5: " + (y !== c));

// OPERADORES LÓGICOS (AND, OR, NOT)
console.log("\nOPERADORES LÓGICOS:");
var nota1 = 5;
var nota2 = 8;

// AND
console.log("Aprovação: " + (nota1 > 7 && nota2 > 7));

// OR
console.log("Aprovação: " + (nota1 > 7 || nota2 > 7));

// NOT
console.log("Negação: " + !true);
