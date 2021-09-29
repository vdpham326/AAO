let productWithReduce = function (nums) {
    let productTotal = 1;
    //iterate through array
    //multiply the productTotal by the value at each index
    //return the variable
    for (let i = 0; i < nums.length; i++) {
        productTotal *= nums[i];
    }
    return productTotal;
};

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12