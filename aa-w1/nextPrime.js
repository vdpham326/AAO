function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function nextPrime(number) {
    //create an starting index
    let index = 0;
    let nearestPrime = 0;

    while (true) {
        if (isPrime(index) && index > number) {
            nearestPrime = index;
            break;
        }
        index++;
    }

    return nearestPrime;
}

//anther way
let nextPrime = function(num) {
    let i = num; //set the starting value to be the num
    while (true) {
        i++; 
        if (isPrime(i)) {
            return i;
        }
    }
};

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101

