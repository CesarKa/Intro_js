console.log("07")

const firstProductName = 'T-shirt';
const firstProductCuantity = 12;
const firstProductPrice = 15;

const secondProductName = 'Cap';
const secondProductCuantity = 12;
const secondProductPrice = 12;

const firstProduct = {};
console.log(firstProduct, typeof firstProduct)

firstProduct.name = firstProductName;
firstProduct.quantity = 12;
firstProduct.price = 15;

//console.log(firstProduct)

const secondProduct = {
    name: secondProductName,
    quantity: secondProductCuantity,
    price: secondProductPrice,
    'county-city': 'ES/Madrid', // Necesitamos las comillas para js acepte el nombre de la propiedad dentro del obj ya que tiene un guion y entra en conflicto con la sintaxis de js
};


const getProductInfo = (product, attr) => {
    return product[attr]
}

console.log(getProductInfo(secondProduct, 'name'));
getProductInfo(secondProduct, 'price');

//console.log(secondProduct.name, secondProduct['price']);

const thirdProduct = {
    name: 'Shoes',
    quantity: 12,
    price: 60,
    sizes: ['S', 'M', 'L'],
    attributes: {
        color: 'red',
        brand: 'Nike'
    },
};



console.log(thirdProduct.sizes.join('-'));
console.log(thirdProduct.attributes.brand)


const shows = [
    {
        id: 1,
        name: 'Under the done',
        generes: ['Drama', 'Science-Fiction'],
        rating: 2,
    },
    {
        id: 2,
        name: 'Game of thrones',
        generes: ['Drama'],
        rating: 8,
    },
    {
        id: 3,
        name: 'Friends',
        generes: ['Comedy'],
        rating: 5,
    },
];


console.log(shows);
console.log(shows[0].rating + shows[1].rating)

let ratingTotal = 0;
for(const show of shows) {
    //console.log(show.rating);
    ratingTotal = ratingTotal + show.rating;
}

const renderShow = (show) => {
    return `
    <h2>${show.name}</h2>
    <p>${show.generes.join(', ')}</p>
    `;
};

let template = '';
for (const show of shows) {
    template = template + renderShow(show);
}

document.write(template);

const user = {
    email: 'test@test.com',
    role: 'USER',
    app: 'keepCoding',
    modules: ['js', 'html', 'react'],
    test: undefined,
    info: {
        name: 'admin',
        surname: 'surename'
    }
};

const admin = user;

admin.email = 'admin@test.com';
admin.role = 'ADMIN';

