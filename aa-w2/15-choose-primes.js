let isPrime = function(num) {
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

let choosePrimes = function(nums) {
    //iterate through the nums array using map function
        //check if the num is prime by calling the isPrime function
            //if it's prime then add it to array
    //return the array
    let primes = [];
    nums.forEach(function(num) {
        if (isPrime(num)) {
            primes.push(num);
        }
    });

    return primes;
};

//using array filter method// 
let choosePrimes = function(nums) {
    return nums.filter(isPrime);
}


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]