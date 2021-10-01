let isPrime = function(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

let prevPrime = function(number) {
    //for loop from the number - 1 down
    //check if the index value is a prime using the helper function
        //if it's prime 
    if (number <= 2) {
        return null;
    }

    for (let i = number - 1; i > 2; i--) {
        if (isPrime(i)) {
            return i;
        }
    }


};


console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null