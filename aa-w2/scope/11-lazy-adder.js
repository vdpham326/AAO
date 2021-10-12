function lazyAdder(num) {
    return function(secondNum) {
        return function(thirdNum) {
            return num + secondNum + thirdNum;
        };
    };
    
};
