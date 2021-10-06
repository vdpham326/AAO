let arrayConverter = function(array) {
    let obj = {}; 
    
    //iterate through the array 
    for (let i = 0; i < array.length; i++) {
        let val = array[i];
        if (obj[val] === undefined) {
            obj[val] = 1;
        } else {
            obj[val] += 1;
        }
    }

    return obj;
};

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}