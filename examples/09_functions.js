console.log('09');

const sum = (operation, ...params) => {
    let result = 0;
    for(const param of params) {
        if (operation === 'suma') result += param;
        else if (operation === 'resta') result -= param;
    }
    return result
};


//console.log(sum('suma', 1,2,3));
//console.log(sum('resta', 1,2,3));

const counter = () => {
    let count = 0;

    const increment = () => {
        count = count +1
    };

    const log = () => {
        return count;
    };

    return {
        increment: increment,
        obtenerCuenta: log,
    };
};

const player1Score = counter(); // {increment, mostrarPorPantalla}

player1Score.increment();
player1Score.increment();
player1Score.increment();
player1Score.increment();
const player1Value = player1Score.obtenerCuenta();
console.log(player1Value)


const player2Score = counter();
const player2Value = player2Score.obtenerCuenta();
console.log(player2Value)


const products = [
    {id: 'p001', name: 'T-shirt', price: 30, quantity: 2},
    {id: 'p002', name: 'Cap', price: 5, quantity: 1},
    {id: 'p003', name: 'Jeans', price: 40, quantity: 1},
];

const cart = () => {
    let products = [];

    const addProduct = (product) => {
        products = [...products, product]
    };

    const listProducts = () => {
        return products;
    };

    return {
        addProduct,
        listProducts,
    };
};

const user1 = cart()
user1.addProduct(products[1]);

const user2 = cart();

for (const product of products) {
    if (product.price <= 20) {
        user2.addProduct(product);
    };
};

console.log(
    user1.listProducts(),
    user2.listProducts(),
);

console.clear();

const operations = (num1, num2, operation = 'suma') => {
    if (operation === 'suma') return num1 + num2;
    else if (operation === 'resta') return num1 - num2;

};


console.log(operations(1, 2)) // 3
console.log(operations(1, 2, 'resta')) // -1

const suma = (num1, num2) => num1 + num2;

const resta = (num1, num2) => num1 - num2;

const operationsV2 = (num1, num2, operation) => {
    return operation(num1, num2)
};

let result = operationsV2(1, 5, suma);
result = operationsV2(2, 4,(num1, num2) => num1 - num2);

console.log(result);