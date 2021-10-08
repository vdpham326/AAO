let reject = function(array, cb) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (!cb(ele)) {
            newArr.push(ele);
        }
    }
    return newArr;
};


//2nd way
function reject(array, cb) {
  let items = [];
  array.forEach(function(el, i) {
    if (cb(el) === false) {
      items.push(el);
    }
  });
  return items;
}

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]