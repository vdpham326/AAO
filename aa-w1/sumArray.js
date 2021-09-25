let sumArray = function(array) {
    //declare a variable to hold the sum and set it to zero
    //iterate through the array and add the value in the array to the sum 
    //return the sum value
    let sum = 0;
    let index = 0;
    while (index < array.length) {
        sum += array[index];
        index++;
    }
    return sum;
};

console.log(sumArray([5, 6, 4]));
console.log(sumArray([7,3, 9, 11]));
