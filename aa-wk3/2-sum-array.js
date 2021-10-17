function sumArray(array) {
    if (array.length === 0) {
        return 0;
    }

    return array[0] + sumArray(array.slice(1));
}

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

console.log(sumArray([1, 2, 3]));
