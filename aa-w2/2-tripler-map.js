let tripler = function(nums) {
    let triplerArr = nums.map(function(ele) {
        return ele * 3;
    });

    return triplerArr;
};

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]