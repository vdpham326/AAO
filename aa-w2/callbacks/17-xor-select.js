let xorSelect = function(array, cb1, cb2) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        let ele = array[i];
        if((cb1(ele) || cb2(ele)) && !(cb1(ele) && cb2(ele))) {
            newArr.push(ele);
        }
    }
    return newArr;
};  

//2nd way using array filter
let xorSelect = function(array, cb1, cb2) {
  let selected = array.filter(function(el) {
    return (cb1(el) || cb2(el)) && !(cb1(el) && cb2(el));
  });
  return selected;
};

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
