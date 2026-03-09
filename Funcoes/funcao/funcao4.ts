console.log(somar(8,5,2));

function somar(numero1: number, numero2: number, numero3?: number): number{
    if(numero3 != undefined)
        return numero1 + numero2 + numero3;
    
    return numero1 + numero1;
}