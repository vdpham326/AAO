let tripletTrue = function(str) {
    for (let i = 0; i < str.length - 2; i++) {
        let first = str[i];
        let second = str[i + 1];
        let third = str[i + 2];
        if ( first === second && first === third) {
            return true;
        }
    }

    return false;
};

 
console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false