let firstVowel = function(str) {
    //create a string varible the holds the vowels aeiou
    //loop through the str value 
        //check to see if the letter in the string is a vowel by comparing it to the vowels variable
        //if it's vowel return the vowel
        //else return null
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return str[i];
        }
    }
    return null;
};

console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null