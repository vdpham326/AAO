function mapMutator(array, cb) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        array[i] = (cb(ele, i));
        newArr.push(array[i]);
    }
    return newArr;
}


let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el) {
    return el * 2;
});
console.log(arr1);  // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
    return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]