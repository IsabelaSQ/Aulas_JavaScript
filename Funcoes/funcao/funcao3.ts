console.log(divisao(10,2));

function divisao(numero1: number, numero2: number): number | null{
    let resultado = numero1 / numero2;
    return (resultado != Infinity ? resultado : null);
}