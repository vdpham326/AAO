function rotateRight(array, num) {
    //create a variable to hold the new arr values
    //
    let newArr = [];
    let backArr = array.slice(-num); 
    let frontArr = array.slice(0, array.length - num); 
    newArr = backArr.concat(frontArr);

    return newArr;
};

//2nd way
let rotateRight = function(array, num) {
    //make a copy of the array
    let copy = array.slice();
    //for loop up to the num value
    for (let i = 0; i < num; i++) {
        let el = copy.pop(); //variable to hold the value removed at the end of the array
        copy.unshift(el); //add the value removed to the front of the array
    }

    return copy; //return the copyc
};

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]