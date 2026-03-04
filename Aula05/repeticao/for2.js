import leia from 'readline-sync';

let nome, idade;
const lista = [];

for(let i = 0; i < 5; i++){

    nome = leia.question('Qual o seu nome? ');
    idade = leia.questionInt('Qual a sua idade? ');
    lista.push({nome,idade});

}

console.log(lista);