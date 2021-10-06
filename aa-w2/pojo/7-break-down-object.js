function breakDownObj(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);

    return [...keys, ...values];
};

let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
console.log(breakDownObj(object2)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]