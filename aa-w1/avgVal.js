function avgVal(arr) {
    //create a variable to hold the sum
    //check if arr length is 0 if it's zero then return null
    //for loop up to the arr length
        //add the value to the sum
    //create an average variable
    //divide the sum by the length of the array and set it to be the average variable
    //return the average variable
    let sum = 0;
    let average = 0;
    if (arr.length === 0) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average = sum / arr.length;
    return average;
}
console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
