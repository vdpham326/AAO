let hasVowel = function(str) {
    //create a string that contains all the vowels characters
    //iterate through the string str and check to see if each letter is a vowel
        // if there is a vowel in the string then return true
        //else return false
    let vowels = "aeiou";
    let index = 0;
    while (index < str.length) {
        if (vowels.includes(str[index])) {
            return true;
        }
        index++;
    }
    return false;
};



console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false