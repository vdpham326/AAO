let sumWithReduce = function(nums) {
    const initialVal = 0;

    return nums.reduce(function(accum, currentValue){
        return accum + currentValue;
    }, initialVal);

};

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0