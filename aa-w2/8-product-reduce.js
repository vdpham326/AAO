let productWithReduce = function(nums) {
    return nums.reduce(function(product, ele) {
        return product * ele;
    });
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12