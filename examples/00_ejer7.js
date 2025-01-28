console.log('07');


/*Dado este listado de valores, crea una función que devuelva los números pares e impares en dos arrays diferentes. 
Y luego mostrar el resultado de esa funcion que devuelve dos arrays haciendo destructuring. 
*/

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];



const evenOddNumbers = (numbers) => {
    const evenNumbers = numbers.filter(number => number % 2 === 0 && number);
    const oddNumbers = numbers.filter(number => number % 2 !== 0 && number);
    return [
        evenNumbers,
        oddNumbers,
    ]
};

const[even, odd] = evenOddNumbers(numbers);
console.log(even, odd)


