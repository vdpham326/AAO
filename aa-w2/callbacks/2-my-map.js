function myMap(array, cb) {
    let mapped = [];
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        mapped.push(cb(ele));
    }
    return mapped;
}
let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]