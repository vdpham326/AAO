let primeFactors = function(number) {
    //create an empty array to hold the return values
    //create a for loop that loops up to the number
        //check if each value of i is a prime number using the helper function
        //if it's prime then check if it's divisible by the number
            //if it is then push it to the array
    //return the array
    let primes = [];

    for (let i = 0; i <= number; i++) {
        if (isPrime(i) && number % i === 0) {
            primes.push(i);
        }
    }

    return primes;
};

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
};


console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]

