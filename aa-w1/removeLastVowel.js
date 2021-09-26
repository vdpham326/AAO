function removeLastVowel (word) {
    //create a variable that holds the string "aeiou"
    //create a new string variable that will hold the new string wit vowel removed
    //loop through the word string backwards
    //check if the letter in the strong word has a vowel
        //if there is a vowel use the slice() method to remove that letter
        //
    let vowels = "aeiou";
  
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i]; //letter
        if (vowels.includes(char)) {
            console.log(word.slice(0, i), word.slice(i+1));
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    //else if no vowels just return the word unchanged
    return word;
};

console.log(removeLastVowel("enemeiti"));
console.log(removeLastVowel('bootcampe')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'