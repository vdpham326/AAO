let keysInObject = function(obj) {
    let keys = [];

    // for (let key in obj) {
    //     keys.push(key);
    // }

    keys = Object.keys(obj);
    return keys;

};

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]
console.log(keysInObject(foods)); // => ["apple", "lemon", "mango"]