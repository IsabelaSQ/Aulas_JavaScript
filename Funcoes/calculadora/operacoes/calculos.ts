export function somar(numero1: number, numero2: number) : number{
    return numero1 + numero2
}

export function subtrair(numero1: number, numero2: number) : number{
    return numero1 - numero2
}

export function multiplicar(numero1: number, numero2: number) : number{
    return numero1 * numero2
}

export function dividir(numero1: number, numero2: number) : number | null{
    let resultado = numero1 / numero2;
    return (resultado != Infinity ? resultado: null);
}

export function turma14() : void{
    console.log("Calculadora desenvolvida pela turma14");
}