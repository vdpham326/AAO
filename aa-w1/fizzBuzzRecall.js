function fizzBuzz(max) {
    //create an empty array
    //loop from 0 to < max 
    //check each value if it's divisible by 3 or 5 but not both
        //if it is then add it to the empty array
    //return the new array
    let fizz = [];
    for (let i = 1; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            fizz.push(i);
        }
    }   
    return fizz;
}


console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]