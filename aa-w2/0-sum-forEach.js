let sumForEach = function(arr) {
    let sum = 0;

    arr.forEach(function(value) {
        sum += value;
    });

    return sum;
};

console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0
