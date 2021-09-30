let adjacentSums = function(numbers) {
    //create an empty array variable
    //loop through the array
        //add the 1st value to the next value and push it to the empty array
    //return the new array
    if (!Array.isArray(numbers)) {
        throw "Not an array!";
    }
    
    let newNums = [];

    for (let i = 0; i < numbers.length - 1 ; i++) {
        let sum = numbers[i] + numbers[i + 1];
        newNums.push(sum);
    }

    return newNums;
};


console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]
