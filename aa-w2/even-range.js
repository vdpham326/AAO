function evenRange(start, end) {
    //create an empty array
    //create a for loop min = start and max = end
    //loop through the index values and check if it's even
        //if it's even then push the value to the empty array
    //return the array
    let even = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            even.push(i);
        }
    }

    return even;
};