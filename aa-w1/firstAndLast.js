let firstAndLast = function (numbers) {
    //get the array length and set it to a variable
    //check if the variable is even or odd
        //if it's even then add the first and last element and return it
        //else if it's odd then subtract the last element from the first element and return it
    let arrayLength = numbers.length;
    if(arrayLength % 2 === 0) {
        return numbers[0] + numbers[arrayLength - 1];
    } 
    //else
    return numbers[0] - numbers[arrayLength - 1];
};



console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4