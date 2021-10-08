let myFilter = function(array, cb) {
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (cb(ele) === true) {
            filtered.push(ele);
        }
    }
    return filtered;
};

//2nd way

function myFilter(array, cb) {
    let filtered = [];
    array.forEach(function(ele, i) {
        if (cb(ele)) {
            filtered.push(ele)
        }
    });
    return filtered;
}

let result1 = myFilter([5,7, 4, 3, 8], function(n) {
    return n % 2 === 0;
});

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']

console.log(result1);