function plannedIntersect(firstArr) {
    return function(secondArr) {
        return secondArr.filter(ele => {
            if (firstArr.includes(ele)){
                return ele;
            }
        });
    }
}

function plannedIntersect(firstArr) {
  return (secondArr) => {
    let common = [];

    for (let i = 0; i < firstArr.length; i++) {
      let el = firstArr[i];
      if (secondArr.indexOf(el) > -1) {
        common.push(el);
      }
    }

    return common;
  };
}
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]