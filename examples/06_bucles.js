console.log('06');

const products = ['Cap', 'T-shirt', 'Shoes'];

const showProduct = (product) => {
    console.log(`Producto: ${product}`);
};
/*
for(), while(), do while()
*/ 
/*
for (let index = 0; index < 10; index = index + 1){
    console.log('Dentro del for');
}
*/

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    showProduct(product);
}

let counter = 0
while (counter < 10) {
    console.log('Dentro del while');
    if (counter > 5) {
        counter = counter + 2;
    } else {
        counter = counter + 1;
    }
    //counter++;
}

for (const product of products) {
    console.log(product)
}

const numbers = [1,2,3,4,5,6]
let doubleNumbers = [];
for (const number of numbers) {
    doubleNumbers = [...doubleNumbers, number * 2];
    //doubleNumbers.push(number * 2);
}
console.log(doubleNumbers)

const users = [
    'user1@keepcoding',
    'user2@discord',
    'user3@keepcoding',
    'user4@keepcoding',
];

let hideEmailsKeepcoding = [];
let keepCodingUsers = [];

for (const user of users){
    if (user.includes('@keepcoding')){
        keepCodingUsers = [...keepCodingUsers, user];
        hideEmailsKeepcoding = [...hideEmailsKeepcoding, user.replace('@keepcoding', '****')];
    } else {
        hideEmailsKeepcoding = [...hideEmailsKeepcoding, user];
    }
}

console.log(hideEmailsKeepcoding, keepCodingUsers);

console.log('finalScrip');
//showProduct(products[0]);
//showProduct(products[1]);

//console.clear();


const productsDisponiblesPromo = [
    ['T-shirt',2,'Descuento del 10%'],
    ['Cap',3,'Tercera gorra gratis']
];

const promo1 = productsDisponiblesPromo[0];
console.log(promo1[2])

console.log(productsDisponiblesPromo[1][2]);


const data = [
    ['PS5', 'TV'],
    ['Cap', 'T-shirt'],
    ['TV', 'iPhone']
];

 let message = '';
for (const userProducts of data) {
    message = `${message}Productos:`
    for (const product of userProducts) {
        message = `${message} ${product}`
    }
    message = `${message}\n`
}
console.log(message)

/*
Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo

--*--
--*--
--*--

*/

//console.clear();

const arbol = [
    ['-','-','*','-','-'],
    ['-','*','*','*','-'], 
    ['*','*','*','*','*'], 
];

let printArbol = '';

for (const elementList of arbol) {
    for (const element of elementList){
        printArbol = `${printArbol}${element}`
    }
    printArbol = `${printArbol}\n`
}
console.log(printArbol);


