let count = function(array, cb) {
    let count = 0;
    array.forEach(function(ele) {
        if (cb(ele)) {
            count++;
        }
    });

    return count;
};

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1