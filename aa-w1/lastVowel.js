let lastVowel = function(str) {
    //create a variable to hold the vowel.
    //use the string toLowerCase method to lower case the argument
    //create a variable that holds the last index position
    //create a variable that holds the string vowel aeiou
    //loop backwards through the str 
        //check if the str has a vowel
            //if its a vowel then return the value
        //if there's no vowel return null
    //return the letter of the str variable at the latest index position
    let vowels = 'aeiou';

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        if (vowels.includes(char.toLowerCase())) {
            return char;
        }
    }

    return null;

};

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null