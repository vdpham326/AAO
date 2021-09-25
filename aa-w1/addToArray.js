function addToArray(location, element, arr) {
    if (location === "FRONT") {
        arr.unshift(element);
        return arr;
    } else if (location === "BACK") {
        arr.push(element);
        return arr;
    } else {
        return arr;
    }
}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]
