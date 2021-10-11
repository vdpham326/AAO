const arrowMyMap = (array, cb) => {
    let newArr = [];
    array.forEach(function(ele) {
        newArr.push(cb(ele));
    })
    return newArr;
};

let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]