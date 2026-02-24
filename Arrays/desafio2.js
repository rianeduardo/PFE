// Rian & Larissa

const prompt = require("prompt-sync")();

notas = [];
alunos = [];

function cadastrarAluno(alunos) {
  nome = prompt("Informe o nome do aluno: ");
  alunos.push(nome);
}

function cadastrarNotas(alunos, notas) {
  alunos.forEach((aluno) => {
    let notasIndividuais = [];
    let notaIndexMat = Number(
      prompt(`Informe a nota de matemática do aluno ${aluno}: `),
    );
    let notaIndexPt = Number(
      prompt(`Informe a nota de português do aluno ${aluno}: `),
    );
    let notaIndexCie = Number(
      prompt(`Informe a nota de ciências do aluno ${aluno}: `),
    );

    notasIndividuais.push(notaIndexMat, notaIndexPt, notaIndexCie);

    notas.push(notasIndividuais);
  });
}

function tirarMedia(alunos, notas) {
  for (let i = 0; i < notas.length; i++) {
    let soma = 0;
    for (let j = 0; j < notas[i].length; j++) {
      soma = soma + notas[i][j];
      if (j + 1 == notas[i].length) {
        console.log(`A média do aluno ${alunos[i]} foi: ${Math.round(soma / 3.0)}`);
        if (soma / 3.0 >= 7.0) {
          console.log(`Portanto o aluno ${alunos[i]} foi aprovado`);
        } else {
          console.log(`Portanto o aluno ${alunos[i]} foi reprovado`);
        }
      }
    }
  }
}

function exibirTabela(alunos, notas) {
  for (let i = 0; i < notas.length; i++) {
    console.log("[" + notas[i] + "]" + " | " + alunos[i]);
  }
}

let qntdAlunos = Number(prompt("Quantos alunos deseja cadastrar? "));

for (let i = 0; i < qntdAlunos; i++) {
  cadastrarAluno(alunos);
}

console.log("\n\n");

cadastrarNotas(alunos, notas);

console.log("\n\n");

exibirTabela(alunos, notas);

console.log("\n\n");

tirarMedia(alunos, notas);