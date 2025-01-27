// comentarios 
/*
comentario para mas lineas 

muchas lineas 
*/



const product = 'T-shirt';
const quantity = 10;

const secondProduct = 'Cap';

/*
cammelCase
snake_case
PaskalCase
kebap-case
*/


console.log(product);
console.log(quantity);


let secondProductQuantity = 20;
console.log(secondProductQuantity);

secondProductQuantitys = 10;
console.log(secondProductQuantity);

let message = 'Hola keepcoding'
message = "Hola Keepcoding";
message = "I don't know";
console.log(message);

const template = `
Producto: ${product}
Quantity: ${quantity}
`;
console.log(template);

/*const noTemplate = '\nProducto: ' + product + '\nQuantity: ' + quantity;
console.log(noTemplate);
*/

const discount = 2.25;
console.log(typeof discount);

const soldOut = true; //boolean
console.log(typeof soldOut);

let stock = null;
const noProduct = undefined;

console.log(typeof stock, typeof noProduct);
stock = Infinity;
// Symbol 

//para errores
const notANumber = NaN;
console.log(typeof notANumber);


// Operadores: ;Modulo Comparacion Lógicos

const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 10;


const capProductName = 'Cap';
const capProductPrice = 35;
const capProductQuantity = 2;


//sunma
const totalSumaProduct = firstProductPrice + capProductPrice;
console.log(totalSumaProduct);
//multiplicacion
const totalFirstProcut = firstProductPrice * firstProductQuantity
console.log(totalFirstProcut);

console.clear();

console.log(true + true); //2
console.log(20 % 2); // 0
console.log(12 == 12); // true
console.log('12' === 12); // false
console.log('12' !== 12); // true
console.log(1 <= 2); //true
console.log(firstProductPrice > capProductPrice); // false
const invalidPrice = NaN;
console.log(isNaN(invalidPrice)); // true

// && AND
// || OR

// === tipo y valor 
console.log(totalFirstProcut < capProductPrice || firstProductName === capProductName); // false las cadenas no tienen el mismo tamaño

const thirdProduct = 'Pants', thirdProductPrice = 12, thirdProductQuantity = 1;
/*
const thirdProduct = 'Pants'; 
const thirdProductPrice = 12; 
const thirdProductQuantity = 1;
*/

//negacion

const isOnline = true;
console.log(!isOnline); // false






