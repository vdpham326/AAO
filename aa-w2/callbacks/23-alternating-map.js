let alternatingMap = function(array, cb1, cb2) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (i % 2 === 0) {
            newArr.push(cb1(ele));
        } else {
            newArr.push(cb2(ele));
        }
    }
    return newArr;
};

function alternatingMap(array, cb1, cb2) {
    let newArr = array.map(function(ele, i) {
        if (i % 2 === 0) {
            return cb1(ele);
        } else {
            return cb2(ele);
        }
    });
    return newArr;
}

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]