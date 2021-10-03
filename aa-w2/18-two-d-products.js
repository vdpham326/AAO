let twoDimensionalProduct = function(array) {
    //us the reduce method to iterate over the return
    let product = 1;

    array.forEach(function(subArr) {
        subArr.forEach(function(num) {
            product *= num;
        });
    });

    return product;
};


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88