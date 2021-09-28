function popper(array, num) {
    //create an empty array
    //use the splice method to 
    let newArr = array.splice(array.length - num);
    return newArr;
}

//2nd way using for loops
let popper2 = function(array, num) {
    let removed = [];

    for(let i = 0; i < num; i++) {
        let el = array.pop(); //remove the last value of the array
        removed.push(el); //add the last value that was removed to the removed array
    }
    return removed; //return the removed array. 
}

let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]