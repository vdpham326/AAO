let atMost = function(array, max, cb) {
    //loop through the array
    //create counter variable
    //use cb in each iteration
        //check if it's true
            //it it's true the increase counter
    //compare counter to max if it's less than or equal to then return true
    //else return false
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (cb(ele)) {
            counter++;
        }
    }
    return counter <= max;
};

//2nd way using forEach
function atMost(array, max, cb) {
    let count = 0;
    array.forEach(function (el) {
        if (cb(el)) {
            count++;
        }
    });
    return count <= max;
}

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false