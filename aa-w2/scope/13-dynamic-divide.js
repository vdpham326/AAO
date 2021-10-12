function dynamicDivide(divisor) {
    return function(num) {
        return num / divisor;
    };
}


const halfer = dynamicDivide(2); // returns a function
console.log(halfer(20)); // returns 10

const divideByThree = dynamicDivide(3);
divideByThree(30); // returns 10

const  divideByFive = dynamicDivide(5);
divideByFive(50); // returns 10