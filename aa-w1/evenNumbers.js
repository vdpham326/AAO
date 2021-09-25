let evenNumbers = function(max) {
    //create an array to hold all the positive even numbers that are less than max
    //create a loop that will iterate every num up to but less than max
    //create a variable to hold the value at each iteration 
    //check if the value is an even number (%) 
        //if its even then add it to the array
    //return the array
    let array = [];
    for (let i = 1; i < max; i += 1) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    return array;
};

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]