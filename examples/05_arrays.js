console.log('05');

const firstProductName = 't-shirt';
const capProductName = 'Cap';

const products = ['Tshirt', capProductName, 'shoes', 'TV'];
const prices = [1, 2, 3, 5]


//acceder a los elementos
console.log(products[0])
//con template
console.log(`
    Producto1: ${products[0]}
    Producto2: ${products[2]}
`);

//añadir a lista
products.push('PS5') //añade un elemento al final de la lista
console.log(products);
products.unshift('PS4') //anade un elemnto al inicio de la lista
console.log(products);

//borrar
products.pop(); // borra el ultimo elemento de la lista
products.shift(); // borra el primer elemento de la lista

//modificar la lista
console.log(products.reverse()); // da la vuelta a la lista
console.log(products.includes('Cap')); // devuelve un boolean
console.log(products.indexOf('Cap')); // devuelve la posicion del elemento buscado

const shoesPosition = products.indexOf('shoes');
products.splice(shoesPosition); // borra un elemento concreto de la lista 
console.log(products);


const csvItem = 'PS5,Switch,Xbox,PC,PSP';
const csvProducts = csvItem.split(',') // separa un str en una array dividida por donde digas 
console.log(csvProducts);


/*
IMPORTANTE
*/

const productsUser1 = ['TV', 'PS5', 'PC'];
//... Esta funcion crea un nuevo array y le suma los elementos que le pasas 
let productsUser2 = [...productsUser1]; // =  [].concat(productUser1) -> ['TV', 'PS5', 'PC']

const addproduct = (newProduct, productList) => {
    const newProductLsit = [...productList];
    newProductLsit.push(newProduct);
    return newProductLsit;
};

productsUser2 = addproduct('Cap', productsUser2);

console.log('2', productsUser2);
console.log('1', productsUser1);