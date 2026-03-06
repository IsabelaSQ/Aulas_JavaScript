import readlinesync = require ("readline-sync");
 
//const pessoas: string[] = [] //array de strings iniciado vazio
 
const alunos: Array<number>=[]; // mesma coisa que a linha 3
 
const notas = new Array<number>(5);
 
for (let i = 0; notas.length ; i++){
    notas[i] = readlinesync.questionFloat("Digite a nota: ");
}
 
console.table(notas);
 
/*notas
0 = vazio
1 = vazio
2 = vazio
3 = vazio
4 = vazio
*/