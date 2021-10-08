function andSelect(array, cb1, cb2) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (cb1(ele) && cb2(ele)) {
            newArr.push(ele);
        }
    }
    return newArr;
}

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]
