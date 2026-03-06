import leia from 'readline-sync';
 
let ingresso;
let idade;
let nome;
 
ingresso = leia.keyInYN("Tem ingresso?");
idade = leia.questionInt("Qual a idade?");
 
if(ingresso && idade >= 18){
   console.log("Bem vindo!");
   nome = leia.question("Qual seu nome?");
   console.log(`Olá ${nome}`);
}else if (ingresso && idade >= 14){
    console.log('Entrada somente acompanhada.Bem vindo!')
}else{
    console.log("Não pode entrar");
}
 