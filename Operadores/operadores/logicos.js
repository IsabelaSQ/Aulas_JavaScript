let x = 10;
let y = 5;
let propoicao1;
let propoicao2;
let propoicao3;
let propoicao4;

proposicao1 = x > y;
console.log(`\n proposicao 1: ${proposicao1}`);
 
proposicao2 = x < y;
console.log(`\n proposicao 2: ${proposicao2}`);
 
proposicao3 = x != y;
console.log(`\n proposicao 3: ${proposicao3}`);
 
proposicao4 = x == y;
console.log(`\n proposicao 4: ${proposicao4}`);
 
console.log("\n conjuncao")

resposta = proposicao1 && proposicao3;
console.log("\nproposicao_01 e proposicao_03: " + resposta);

resposta = proposicao2 && proposicao4;
console.log("\nproposicao_02 e proposicao_04: " + resposta);

resposta = proposicao1 && proposicao2;
console.log("\nproposicao_01 e proposicao_02: " + resposta);

resposta = proposicao3 && proposicao4;
console.log("\nproposicao_03 e proposicao_04: " + resposta);