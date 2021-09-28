function initials(name) {
    //split the name into a name array
    //create an empty string variable 
    //iterate of the array 
        //add the first letter of each word to the string variable. Make sure to upcase it
    let names = name.split(" ");
    let capInitials = "";

    for (let i = 0; i < names.length; i++) {
        let eachName = names[i].toUpperCase();
        capInitials += eachName[0];
    }
    return capInitials;
}

//2nd way using arrays
let initials = function(name) {
    let parts = name.split(' ');
    let firstLetters = [];

    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        firstLetters.push(part[0].toUpperCase());
    }

    return firstLetters.join('');
};


console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'