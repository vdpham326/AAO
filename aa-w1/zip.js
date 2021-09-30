let zip = function(arr1, arr2) {
    //create an empty array
    //loop through arr1 
        //create a new array that contains the value at the index of both arr1 and arr2
        //push that new array into the empty array
    //return the array
    let zip = [];

    for (let i = 0; i < arr1.length; i++) {
        let subArr = [arr1[i], arr2[i]];
        zip.push(subArr);
    }

    return zip;
}


console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]