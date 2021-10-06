function appleCounter(appleObj) {
    let keys = Object.keys(appleObj);
    let counter = 0;

    keys.forEach(function(key) {
        if (key.toLowerCase().includes("apple")) {
            counter++;
        }
    })

    //2nd way
    for (let key in appleObj) {
    key = key.toLowerCase();
    if (key.indexOf("apple") > -1) {
      counter += 1;
    }
  }

    return counter;
}


let obj = { banana: "yay!" };
console.log(appleCounter(obj)); // => 0

let obj1 = { crabapple: "yum!" };
console.log(appleCounter(obj1)); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
console.log(appleCounter(obj2)); // => 2
