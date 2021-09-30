let zanyZip = function(array1, array2) {
    let zipped = [];
    for (let i = 0; i < array1.length || i < array2.length; i++) {
        let el1 = array1[i];
        let el2 = array2[i];
        if (el1 === undefined ) {
            el1 = null;
        }
        if (el2 === undefined) {
            el2 = null;
        }
        zipped.push([el1, el2]);
    }
    return zipped;
};

