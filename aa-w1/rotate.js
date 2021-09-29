let rotate = function (array, num) {
    if (num > 0) {
        //rotate right
        //remove the number of element (num) at position (array.length - num)
        for (let i = 0; i < num; i++) {
            let el = array.pop(); //remove value at end of array
            array.unshift(el); //add that value to the front
        }
    } else {
        for (let i = 0; i < -num; i++) {
            let el = array.shift(); //remove the first element of array
            array.push(el); //add the first element to the end
        }
    } 
};



let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]


let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]