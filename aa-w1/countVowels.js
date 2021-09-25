function countVowels(word) {
    //create a string witth the value of all the vowels "aeiou"
    //create a variable to hold the number of vowels in the string word
    //iterate over the string word
        //if letter is a vowel 
            //then increase the number by 1
    //return the number value
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count += 1;
        }
    }
    return count;
};


console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2