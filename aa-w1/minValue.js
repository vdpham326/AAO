let minValue = function(nums) {
    let smallest = nums[0];
    if (nums.length === 0) {
        return null;
    } else {
        for (let i = 1; i < nums.length; i++) {
            if (smallest > nums[i]) {
                smallest = nums[i];
            }
        }
    }
    return smallest;

};

//2nd way
let minValue = function(nums2) {
    let min = null;

    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i];
        if (min === null || num < min) {
            min = num;
        }
    }
    return min;
};

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null