let keyInObjectArray = function(objArray, keyString) {
  
    
    objArray.forEach(function(obj) {
        for (let key in obj) {
            if (key === keyString) {
                keyFound = true;
            }
        }
    });

    //2nd way
    objArray.forEach(function(obj) {
        if (obj[keyString] !== undefined) {
            keyFound = true;
        }   
    });

    return keyFound;

    
};

let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false