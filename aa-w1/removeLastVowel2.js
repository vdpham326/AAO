function removeLastVowel (word) {
    //split the word into an array
    //create a variable to hold the string "aeiou"
    //loop backwards from the array
    //check if the letter is a vowel 
    let vowels = "aeiou";

    for (let i = word.length - 1; i >= 0; i--) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;

}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'