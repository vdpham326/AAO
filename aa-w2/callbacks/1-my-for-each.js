function myForEach(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        cb(el, i, array);
    }
}

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']