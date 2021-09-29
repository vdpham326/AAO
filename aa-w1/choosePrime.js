let isPrime = function(num) {
    //check if number passed in is a prime number
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

let choosePrime = function(nums) {
    //iterate through the array
    //create an empty array
    //call the isPrime method to check if the number at each iteration is a prime 
        //if it's prime then push the number into the new array
    //return the new array
    let prime = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (isPrime(num)) {
            prime.push(num);
        }
    }
    return prime;
};

console.log(choosePrime([36, 48, 9, 13, 19]));
console.log(choosePrime([5, 6, 4, 11, 2017]));