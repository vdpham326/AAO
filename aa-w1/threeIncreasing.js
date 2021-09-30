let threeIncreasing = function(numbers) {
    for (let i = 0; i < numbers.length - 2; i++) {
        let first = numbers[i];
        let second = numbers[i + 1];
        let third = numbers[i + 2];
        if ((first + 1) === second && (second + 1) === third) {
            return true;
        }
    }

    return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false