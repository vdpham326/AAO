function firstIndex(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (cb(ele)) {
            return i;
        }
    }
    return -1;
}


// let firstIndex = function(array, cb) {
//     array.forEach(function(ele, i) {
//         if(cb(ele, i)) {
//             return i;
//         }
//     });
//     return -1;
// }

let result1 = firstIndex([3, 7, 8, 10], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 2

let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result2); // 0

let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result3); // -1

