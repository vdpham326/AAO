function spreadItOut(array1, array2) {
    return [...array1, ...array2];
}

console.log(spreadItOut([3,5,6], [1,2,3])); // => [3,5,6,1,2,3];
console.log(spreadItOut([], [1,2,3])); // => 14;
console.log(spreadItOut(["apple", "banana"], [1,2,3])); // => ["apple", "banana", 1, 2, 3];