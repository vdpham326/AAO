let stringConverter = function(string) {
    //split the string into an array
    // iterate of the array
    let strObj = {};

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (strObj[letter] === undefined) {
            strObj[letter] = 1;
        } else {
            strObj[letter] += 1;
        }
    }

    return strObj;
};

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}