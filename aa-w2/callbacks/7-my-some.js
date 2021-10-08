// let mySome = function(array, cb) {
//     array.forEach(function(ele, i) {
//         if(cb(ele, i)) {
//             return true;
//         }
//     });
//     return false;
// };


function mySome(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (cb(ele, i)) {
            return true;
        }
    }
    return false;
}

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true