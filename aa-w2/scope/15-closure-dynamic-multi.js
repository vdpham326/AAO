function dynamicMultiply(num) {
    return function(num2) {
        return num * num2;
    }
}
//2nd style 

function dynamicMultiply(num) {
  let multiplier = num;

  return function(factor) {
    return multiplier * factor;
  };
}

const doubler = dynamicMultiply(2); // returns a functions
doubler(5); // returns 10

const tripler = dynamicMultiply(3);
tripler(5); // returns 15

const multiplyByFive = dynamicMultiply(5);
console.log(multiplyByFive(5)); // returns 25
