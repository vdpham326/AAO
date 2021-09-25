function fizzBuzz(max) {
    //create an empty array to hold the values
    //create a loop that will iterate up to the max value
    //check if the index value is divisible by 3 and not by 5
        //if it is then add it to the array
        //else check if index value is divisible by 5 
            //if it is then add to array
    //return the array
    let arr = [];
    for (let i = 1; i < max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            arr.push(i);
        } else if (i % 5 === 0) {
            arr.push(i);
        }
    }

    //another way
    for (let i = 1; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0 )) {
            arr.push(i);
        }
    }

    return arr;
};

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]