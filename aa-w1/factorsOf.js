function factorsOf(num) {
    //create an empty array variable
    //use a loop and iterate up to the num variable
        //if value of i is divisble by num then add that value to the array
        //return the array
    let array = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
           array.push(i);
        }
    }
    return array;
}


console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]