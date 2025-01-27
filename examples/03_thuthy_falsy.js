console.log('03')


const value1 = undefined;

if(value1) {
    console.log('Condicion true');
}  else {
    console.log('Condicion false')
}

const  message = value1 ? 'Existe el calue1' : 'No existe';
console.log(message);


const street = 0; // Posible variable con pront 

const shopAdress = street || 'No incluido';

const shopNumber = street ?? 'No tiene numero'

//console.log(shopAdress);

const str = 'Hola mundo!';
//console.log(str.length);
console.log(str.includes('Hola')); // includes devuelve un boolean
console.log(str.endsWith('!')); // endsWhith devuelve el mismo boolean con el final del string

let username = 'KeVin     ';
let email = 'KeepCoding@Test.com';
/*
username = username.trim(); // trim quita los espacios de la variable
username = username.toLocaleLowerCase(); // pasa el string a minusculas
*/


//username = username.trim().toLocaleLowerCase().
//email = email.trim().toLocaleLowerCase().

console.log(username);

if (username === 'Kevin' && email === 'KeepCoding@Test.com'){
    console.log('Tienes acceso');
} else {
    console.log('No tienes acceso');
}

email = email.replaceAll('e', '*');
console.log(email);

const promptPrice = prompt('Dame un precio del producto');

const promtPrice = parseInt(promptPrice);
console.log(price);

const price = Number(price ?? 0);

