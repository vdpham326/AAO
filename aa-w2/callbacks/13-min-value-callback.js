function minValueCallback(array, cb) {
    let min = null;
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (ele < min || min === null) {
            min = ele;
        }
    }
    if (cb === undefined) {
        return min;
    } else {
        return cb(min);
    }
}
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3