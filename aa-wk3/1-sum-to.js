function sumToN(num) {
    if (num < 0) {
        return null;
    }
    if (num <= 1) return num;

    return num + sumToN(num - 1);
}

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null

console.log(sumToN(5));
console.log(sumToN(1));
console.log(sumToN(9));
