let setKeyInObject = function(obj, string, value) {
    obj[string] = value;
    return obj;
};

let obj = {}
console.log(setKeyInObject(obj, "apple", "yum")); // => {apple: "yum"}

let obj1 = {str: "hello"}
console.log(setKeyInObject(obj1, "num", 3)); // => {str: "hello", num: 3}