let hasDoubleLetter = function(str) {
    //check if the argument passed in is a string using the typeof operator
        //if it's not a string return null
    //loop through the string 
        //compare the 1st letter to the 2nd letter 
            //if they're the same then return true
        //else return false if the string doesn't have it
    if (typeof str !== "string") {
        return null;
    }

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        let nextLetter = str[i + 1];
        if (letter === nextLetter) {
            return true;
        }
    }
    return false;
    
};

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null