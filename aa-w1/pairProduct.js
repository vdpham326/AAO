let pairProduct = function(numbers, product) {
    //check is input value is an array
    //loop through the numbers array
        //create an inner loop that starts at 1
        //multiply the value at the outer times the inner and check to see if it's equal to the product
            //if it's equal then return true
        //else return false;
    if (!Array.isArray(numbers)) {
        throw "Not an array!";
    }

    for (let i = 0; i < numbers.length; i++) {
        let firstNum = numbers[i];
        for (let j = 1; j < numbers.length; j++) {
            let secondNum = numbers[j];
            if (firstNum * secondNum === product) {
                return true;
            }
        }
    }

    return false;ß
};


console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false