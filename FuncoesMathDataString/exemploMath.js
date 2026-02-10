// FUNÇÕES MATEMÁTICAS (MATH)

// SQRT (Square Root) x POW (Power)
console.log("FAZENDO RAÍZES E POTÊNCIAS: ");
console.log(Math.sqrt(25)); // RAIZ DE 25 = 5
console.log(Math.pow(25, 2)); // 25² = 625
console.log(Math.pow(7, 3)); // 7³ = 343

// Arredondando
console.log("\n\nARREDONDANDO NÚMEROS: ");
console.log(Math.round(9.7)); // Arredonda normalmente para 10
console.log(Math.ceil(9.1)); // Arredonda sempre para cima (10)
console.log(Math.floor(9.7)); // Arredonda sempre para baixo (9)

// Random - Gera um número pseudo-aleatório entre 0 e 1
console.log("\n\nRANDOMIZANDO NÚMEROS: ");
console.log(Math.random()); // Entre 0 e 1 (Sem arredondar)
console.log(Math.round(Math.random() * 10)); // Entre 0 e 10 (Arredondando)
console.log(Math.round(Math.random() * 100)); // Entre 0 e 100 (Arredondando)

// Valores ABS - Módulo do valor (Sempre positivo)
console.log("\n\nMODULARIZANDO NÚMEROS NEGATIVOS: ");
console.log(Math.abs(-5)); // Retorna 5
console.log(Math.abs(5)); // Retorna 5

// MAX & MIN - Maior/Menor número de um conjunto
console.log("\n\nSEPARANDO MENORES/MAIORES VALORES: ");
console.log(Math.min(2, 3, 4, 5, 2, 5, 1)); // Retorna o menor valor (1)
console.log(Math.max(2, 3, 4, 5, 2, 5, 1)); // Retorna o maior valor (5)
