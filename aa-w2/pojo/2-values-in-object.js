function valuesInObject(obj) {
    //return Object.values(obj);
    let values = [];

    for (let key in obj) {
        let value = obj[key];
        values.push(value);
    }

    return values;
}

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
console.log(valuesInObject(animals)); // => ["Wolfie", "Jet", "Bilbo"]
console.log(valuesInObject(foods)); // => ["tart", "sour", "sweet"]