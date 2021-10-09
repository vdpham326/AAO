function one(array, cb) {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (cb(ele, i)) {
            count++;
        }
    }
    return count === 1;
}


//2nd way using forEach

function one(array, cb) {
  let count = 0;
  array.forEach(function(el, i) {
    if (cb(el, i, array) === true) {
      count++;
    }
  });
  return count === 1;
}

let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true