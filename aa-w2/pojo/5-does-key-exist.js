function doesKeyExist(obj, key) {
    //for...in loop through the obj key 
    //check if key valuue is same
        //return true 
        //else return false
    for (let keyVal in obj) {
        if (keyVal === key) {
            return true;
        }
    }
    return false;

    //2nd way 
    return obj[key] !== undefined;
};

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
console.log(doesKeyExist(obj1, 'course')); // => true
console.log(doesKeyExist(obj1, 'name')); // => false