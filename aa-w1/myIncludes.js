function myIncludes(arr, target) {
    //iterate throught the array with a for loop
    //compare each value of the array to the target value
        //if the value in the array equal the target value 
            //return true
        //else return false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        } 
    }
    return false;  
}

console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false