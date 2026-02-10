const agora = new Date(); // Data e hora exata do momento
const dataEspecifica = new Date("2025-12-25");
const opcoes = { year: "numeric", month: "long", day: "numeric" };

console.log(agora.toLocaleDateString("pt-BR", opcoes));
console.log(dataEspecifica.toLocaleDateString("pt-BR", opcoes));

// EXEMPLO AULA:
console.log(agora);

console.log(agora.toLocaleDateString());
console.log(agora.getFullYear());

let data1 = new Date("2026-02-10");
let data2 = new Date("2026-12-18");

let diferenca = data2 - data1;

console.log((diferenca / 1000) * 60 * 60 * 24);
