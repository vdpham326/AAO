let isPrime = function (num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

let choosePrimes = function (nums) {
    //create an empty array
    //loop through the array that's passed in
        //check if the value at each index is prime by calling the helper function isPrime
            //if it's prime then push the value to the new array
    //return the new array
    if (!Array.isArray(nums)) {
        throw "Not an array!";
    }

    let primes = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
};




console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]