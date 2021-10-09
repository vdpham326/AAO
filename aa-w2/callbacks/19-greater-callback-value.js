let greaterCallbackValue = function(value, cb1, cb2) {
    if (cb1(value) > cb2(value)) {
        return cb1(value);
    } 
    return cb2(value);
};


console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18