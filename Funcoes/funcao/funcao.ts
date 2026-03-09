let resultado: number = 0;

console.log(somar(8,5)); // Imprimindo no console o retorno da funcao, que estamos passando 2 argumentos

resultado = somar(8,5); // atribuindo o retorno da funcao a uma variavel

let juros = resultado * 0.1;

console.log(juros);

function somar(numero1:number, numero2:number) : number{ // funcao que soma 2 numeros e retorna o resultado
    return numero1 + numero2;
}

// funcao dividir dois numeros

console.log("\nfuncao dividindo 2 numeros");
dividir(10,2);

let resultado2 = dividir(10, 2);
console.log(resultado2);

function dividir(numero1: number, numero2: number){ //funcao que divide dois numeros e retona o resultado
    return numero1 / numero2;

}