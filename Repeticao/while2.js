import leia from 'readline-sync';
 
const senhaCorreta = "1234";
let senhaDigitada = "";
let contador = 0;
 
while (senhaDigitada !== senhaCorreta) {
    contador++;
    senhaDigitada = leia.question("Digite a senha: ");

    if (contador === 3) {
        console.log('Acabou as tentativas!Acesso negado.');
        break;
    }

     if (senhaDigitada !== senhaCorreta) {
    console.log('Senha incorreta.Tente novamente.')
    }

    if (contador === 3) {
        console.log('Acabou as tentativas! Acesso negado.');
        break;
    }
}
 
if (senhaDigitada === senhaCorreta) {
    console.log("Acesso liberado")
}