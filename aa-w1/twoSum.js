let twoSum = function(arr, target) {
    //for loop through the arr array
    //nest another for loop and start at index 1
    //iterate through the for loop and add the value of the outer for loop with the inner
    //create a variable to hold the sum
    //compare the sum to see if it's equal to the target value 
        //if it is then return true 
    //return false once iteration of outer and inner loop doesn't return a sum equal to target
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            //console.log(sum);
            if (sum === target) {
                return true;
            }
        }
    }
    return false;

};

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 4], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 5], 11)); // false