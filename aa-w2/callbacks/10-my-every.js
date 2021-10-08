function myEvery(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if(cb(array[i]) === false) {
            return false;
        }
    }
    return true;
}


let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false