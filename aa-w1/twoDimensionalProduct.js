let twoDimensionalProduct = function(array) {
    //create the variable that will hold the total of the product
    //Outer loop through 
        //inner loop and multiply the value of the outer loop by the value of the inner loop 
        //set it equal to the product variable 
    //return the product variable
    let productTotal = 1;

    for (let i = 0; i < array.length; i++) {
        let outerArr = array[i];
        //console.log(outerArr, "outer array");
        for (let j = 0; j < outerArr.length; j++) {
            //console.log(outerArr[j], "inner array");
            productTotal *= outerArr[j];
            //console.log(productTotal, "product total");
        }
    }
    return productTotal;
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