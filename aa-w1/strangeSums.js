let strangeSums = function(numbers) {
    if (!Array.isArray(numbers)) {
        throw "Not an array!";
    }
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        let firstNum = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let secondNum = numbers[j];
            if (firstNum + secondNum === 0) {
                count++;
            }
        }
    }

    return count;
}

console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0