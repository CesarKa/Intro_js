console.log('10');


const numbers = [1,2,3,4,5];

numbers.forEach((value, index) => {
    console.log(value, index)
});

const forEach = (list, cb) => {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        cb(element, index);
    }
};


//map filter
const double = numbers.map((number, index) => {
    console.log('dentro map', number, index)
    return number + 2
});


const lowerThan5 = numbers.filter(number =>{
    return true;
});
console.log(lowerThan5)
console.log(double);


const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      year: 1967,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      year: 1997,
    },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
    { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
  ];

const titles2000 = books.filter(({year}) => year > 2000)
    .map(({title}) => title)
    .join(', ')
    
const twilight = books.find((book) => {
    return book,title === 'Twilight'
});

console.log(twilight, books)