function maxValue(nums) {
    //create a variable to hold the largest value
    //if array length is 0 then return null
    //loop through the array and compare the value at each index to the largest variable
        //if the value is greater than the largest variable then set it to be the value of largest
    //return the largest variable
    if (nums.length === 0) {
        return null;
    }
    let largest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}

//2nd way

let maxValue2 = function(nums) {
    let max = null;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        //check if max is null or if num is greater than max
            //if it's null then set max equal to num 
        if (max === null || num > max) {
            max = num;
        }
    }
    return max;
}

console.log(maxValue([4, 6, 3, 5, 42, 4]));
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null