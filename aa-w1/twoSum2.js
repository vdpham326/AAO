let twoSum2 = function(arr, target) {
    //loop through the arr starts at i = 0
    //create inner loop that starts at index i + 1
        //add up the value, if its equal to the target value then return true
        //else return false
    for (let i = 0; i < arr.length; i++) {
        for (let j  = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum === target) {
                return true
            }
        }
    }
    return false;

};

console.log(twoSum2([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum2([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum2([4, 6, 2, 3], 8)); // true
console.log(twoSum2([4, 6, 2, 3], 11)); // false