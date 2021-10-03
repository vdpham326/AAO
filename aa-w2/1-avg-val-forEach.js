function avgVal(arr) {
    //check if array is empty and return null if it is
    //create a variable to hold the sum
    //iterate through the array using the forEach and add each element to the sum
    //divide the sum by the length of the array and return it
    if (arr.length  <= 0) {
        return null;
    }

    let total = 0;

    arr.forEach(function(ele) {
        total += ele;
    });

    return total / arr.length;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null