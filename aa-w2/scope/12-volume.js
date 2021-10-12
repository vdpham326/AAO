function recVolume(num1) {
    return function(num2) {
        return function(num3) {
            return num1 * num2 * num3;
        }
    }
}

function recVolume(height) {
  let dimensions = [height];
  const _measure = (num) => {
    if (dimensions.length < 3) {
      dimensions.push(num);
    }
    if (dimensions.length === 3) {
      let sum = dimensions.reduce((acc, el) => (acc *= el));
      return sum;
    } else {
      return _measure;
    }
  };
  return _measure;
}

let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6