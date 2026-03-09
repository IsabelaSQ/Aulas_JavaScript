tipoProduto(5);

function tipoProduto(tamanho: number | string) : void{
    if(typeof tamanho === "number"){
        console.log("\nO tamanho é um numero");
    }else{
        console.log("\nO tamanho é uma string");
    }
}