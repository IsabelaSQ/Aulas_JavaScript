import readline from "readline-sync";
import { dividir, somar, multiplicar, subtrair } from "./operacoes/calculos.ts";

let resultadoDivisor: number | null;

let numero1 = readline.questionFloat("Digite o primeiro numero: ");
let numero2 = readline.questionFloat("Digite o segundo numero: ");

console.log("O resultado de soma é " + somar(numero1,numero2));

console.log("O resultado de subtracao é " + subtrair(numero1,numero2));

console.log("O resultado de multiplicacao é " + multiplicar(numero1,numero2));

console.log("O resultado da divisao é: " + dividir(numero1,numero2));

resultadoDivisor = dividir(numero1, numero2);

if(resultadoDivisor !== null){
    console.log(`O resultado da divisão é: ${resultadoDivisor}`);
}else {
    console.log("Não é possivel dividir por zero!");
}