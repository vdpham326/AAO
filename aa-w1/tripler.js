let tripler = function(nums) {
    //create a new array to hold the new 3x values
    //for loop through the org array
        //create a variable to hold each value of the org array
        //mulitple the variable by 3 and push it into the new array
    //return the new array
    let triplerArr = [];
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i] * 3;
        triplerArr.push(val);
    }
    return triplerArr;
};


console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]