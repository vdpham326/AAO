let getFullName = function(person) {
    let fnValue = person.firstName;
    let lnValue = person.lastName;

    return fnValue + " " + lnValue;
};

let p1 = {firstName: 'John', lastName: 'Doe'};
console.log(getFullName(p1)); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
console.log(getFullName(p2)); // => 'Charlie Brown'