console.log('09');

const sum = (operation, ...params) => {
    let result = 0;
    for(const param of params) {
        if (operation === 'suma') result += param;
        else if (operation === 'resta') result -= param;
    }
    return result
};


console.log(sum('suma', 1,2,3));
console.log(sum('resta', 1,2,3));