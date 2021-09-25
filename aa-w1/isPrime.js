function isPrime(number) {
    //check if number is prime - if it's only divible by 1 and itself 
    //if it's prime then return true
    //else return false
    //if number is less than 2 then it's not prime
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

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true