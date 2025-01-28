console.log('06');
/*
Calculadora con closures

Crear una calculadora con las siguientes funciones:

*/



const calculadora = () => {
    let resultado = 0;

    function sumar (numero) {
        resultado += numero;
    } 
    function restar (calculo) {
        resultado -= numero;
    } 
    function multiplicar (calculo) {
        resultado *= numero;
    } 
    function dividir (calculo) {
        resultado /= numero;
    } 
    const total = () => {
        return resultado
    }
    return {
        sumar,
        restar,
        multiplicar,
        dividir,
        total,
    }
};

const miCalculadora = calculadora(5);

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16