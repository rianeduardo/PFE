const prompt = require("prompt-sync")()

function cadastrarNome() {
    let nome = prompt(`Informe o nome do aluno: `)
    return nome
}

function cadastrarNotas(nome, lista) {
    let numNotas = prompt("Informe a quantidade de notas: ")
    for(let i = 0; i < numNotas; i++) {
        lista[i] = prompt(`Informe a nota n°${i+1} do aluno ${nome}: `)
    }
}

function calcularMedia(lista) {
    let soma = lista.reduce((soma, index) => soma + index)
    let numNotas = lista.length
    return (soma / numNotas)
}

let continuar = true
let nome = "Nome_Padrão"
let lista = []

do {
    console.log("===========================");
    console.log("| 1. Cadastrar Nome       |");
    console.log("| 2. Cadastrar Notas      |");
    console.log("| 3. Calcular Média       |");
    console.log("| 4. Sair                 |");
    console.log("===========================");

    let op = prompt("Escolha: ").toString()

    switch (op) {
        case "1":
            nome = cadastrarNome()
            break;
        case "2":
            cadastrarNotas(nome, lista)
            break;
        case "3":
            media = calcularMedia(lista)
            break;
        case "4":
            continuar = false
            console.log("[Saindo...]")
        default:
            console.log("Operação inválida!")
            break;
    }
} while(continuar)