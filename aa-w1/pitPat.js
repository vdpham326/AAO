let pitPat = function(max) {
    //creat an empty array
    //create a for loop that loops up to max inclusive
    //check if number is divisible by 4 but not by 6
        //if divisible by 4 and not 6 then add to array
        //else if not divisible by 4 and is divisible by 6 then add the array
    //return the array
    let evens = [];

    // for (let i = 1; i <= max; i++) {
    //     if ((i % 4 === 0) && !(i % 6 === 0)) {
    //         evens.push(i);
    //     } else if (i % 6 === 0) {
    //         evens.push(i);
    //     }
    // }
    //1st way
    for (let i = 1; i <= max; i++) {
        if ((i % 4 === 0 || i % 6 === 0) && !(i % 4 === 0 && i % 6 ===0)){
            evens.push(i);
        }
    }

    //2nd way
    for (let i = 1; i <= max; i++) {
        if ((i % 4 === 0 || i % 6 === 0) && i % 12 !== 0) {
            nums.push(i);
        }
    }

    return evens;
};

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]