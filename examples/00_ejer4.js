console.log('ejer04');



const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

let evenNumbers = []; // Array para almacenar números pares
let oddNumbers = [];  // Array para almacenar números impares

for (const number of numbers) {
    if (!number) {
        //numbers.indexOf(number); 
        //numbers.splice(number, 1) 
    }else if (number % 2 === 0) {
        evenNumbers = [...evenNumbers, number];
    } else {
        oddNumbers = [...oddNumbers, number];
    }
}

console.log(evenNumbers, oddNumbers);