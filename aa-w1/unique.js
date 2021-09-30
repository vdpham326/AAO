let unique = function(array) {
    //create an empty array
    //loop through the array argument
        //create a variable to hold the value at each index
            //check if the empty array has the value
                //if it doesn't then push the value to the empty array
    //return the array
    let unique = [];

    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (!unique.includes(value)) {
            unique.push(value);
        }
    }

    return unique;
};

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']