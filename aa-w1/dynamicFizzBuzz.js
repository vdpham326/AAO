let dynamicFizzBuzz = function(max, num1, num2) {
    //create an empty array
    //loop from 0 to max
        //check if the value is divisible by num1 or num2 but not both
            //if it is then push to the empty array
    //return the array
    let fizzBuzz = [];

    for (let i = 0; i < max; i ++) {
        if ((i % num1 === 0 || i % num2 === 0) && !(i % num1 === 0 && i % num2 === 0)) {
            fizzBuzz.push(i);
        }
    }

    return fizzBuzz;
};

console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]