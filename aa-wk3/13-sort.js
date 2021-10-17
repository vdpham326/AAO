
function sort(nums, sorted = []) {

    // Base case: all numbers are in the sorted array
    if (nums.length == 0) {
        return sorted;
    }

    // Find the smallest number in the nums array
    let minIndex = 0;
    for (let i = 1 ; i < nums.length ; i++) {
        if (nums[i] < nums[minIndex]) {
            minIndex = i;
        }
    }

    // Add the smallest number to the end of the sorted array
    sorted.push(nums[minIndex]);

    // Remove the smallest number from the nums array
    nums.splice(minIndex, 1);

    // Recursively call sort with the new array
    return sort(nums, sorted);
}

console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7])