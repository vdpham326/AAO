function dynamicModulus(num) {
    return function(mod) {
        return mod % num;
    }
}


function dynamicModulus(num) {
    return num2 => num2 % num;
}


    const modulusTwo = dynamicModulus(2); // returns a function
    console.log(modulusTwo(5)); // prints 1

    const modulusTen = dynamicModulus(10); // returns a function
    console.log(modulusTen(13)); // prints 3

    const modulusNine = dynamicModulus(9); // returns a function
    console.log(modulusNine(30)); // prints 3
