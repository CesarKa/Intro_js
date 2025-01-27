const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const capProductName = 'Cap';
const capProductPrice = 55;
const capProductQuantity = 2;


firstProductPrice  > capProductPrice // -> boolean

let message = '';
if (firstProductPrice < capProductPrice){
    message = `producto ${firstProductName} tiene mejor precio que el ${capProductName}`;
}else if (firstProductPrice === capProductPrice){
    message = `producto ${firstProductName} tiene el mismo precio ${capProductName}`;
} else {
    message = `producto ${firstProductName}es mas caro que ${capProductName}`
}

console.log(message);


const sameName = firstProductName < capProductName;
if (firstProductPrice < capProductPrice && !sameName){
    console.log('Prueba')
}


let day = '';

switch (day) {
    case 'Monday':
        console.log('Hay calse de Js');
        break;
    case 'Tuesday':
        console.log('Hay calse de Js');
        break;
    default:
        console.log('No hay clase de Js')
}

/*
if (day === 'Monday'){
    console.log('Hay clase de Js');
} else if (day === 'Tuesday') {
    console.log('Hay clase de Js');
} else {
    console.log('No hay clase de Js');
}
*/


let selectedProduct = prompt('Ingresa el nombre del producto');
let selectedQuantity = prompt('Ingresa la cantidad');

let mensaje = '';

selectedProduct = selectedProduct.trim().toLocaleLowerCase()
selectedQuantity = parseInt(selectedQuantity ?? 0)

if (selectedProduct === 't-shirt' && selectedQuantity >= 2) {
    mensaje = "¡Recibes un 10% de descuento en la segunda camiseta!";
} else if (selectedProduct === 'cap' && selectedQuantity >= 3) {
    mensaje = "¡Obtén una gorra gratis por la compra de 3!";
} else {
    mensaje = "No hay promociones para esta selección";
}
console.log(mensaje)


