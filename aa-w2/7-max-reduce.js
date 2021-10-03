let maxWithReduce = function(nums) {
    let largest = nums.reduce(function(accum, ele) {
        if (ele > accum) {
            return ele;
        } else { 
            return accum;
        }
    });

    return largest;


};

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3
