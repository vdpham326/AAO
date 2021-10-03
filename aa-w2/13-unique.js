let unique = function(array) {
    //create an empty array
    //loop through the input array and use the filter method to check for unique values
    //return the unique values 
    let uniqueArr = []; 
    
    //using forEach
    array.forEach(function(num) {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
        }
    })

    return uniqueArr;
};

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']