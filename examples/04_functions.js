console.log('04');

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;
const precioTotalA = productAPrice * productAQuantity

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;
const precioTotalB = productBPrice * productBQuantity


const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;
const precioTotalC = productCPrice * productCQuantity

const firstProductPrice = productAPrice * productAQuantity
const secondProductPrice = productBPrice * productBQuantity
const precioTotal = precioTotalA + precioTotalB + precioTotalC

//funciones 

/*
1. Definicion
2. Lo que retorna
3. Parametros
*/

function saludo () {
    console.log('Hello world!!!');
    
}   

// arrow function


const greeting = () => {
    console.log('Hello');
}
/*
greeting();
saludo();
*/

const calc = (price, quantity) =>  price * quantity; // Las arrow fuction tienen un return incorporado

const calcOneLine = (price = 0, quantity = 0) => (
    price * quantity
);

const resultFirstProduct = calc(productAPrice, productAQuantity)
console.log(resultFirstProduct)
const resultSecondProduct = calc(productBPrice, productBQuantity)
console.log(resultSecondProduct)
const resultNoProduct = calcOneLine();
console.log(calcOneLine());
