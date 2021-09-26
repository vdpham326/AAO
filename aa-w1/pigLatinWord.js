let pigLatinWord = function(word) {
    //loop through the string
        //if letter start with a vowel then add "yay" and return the new string
        //else if letter doesn't start with a vowel but there's a vowel in word
            //use slice to cut the letters up to the vowel
            //then slice the letter from the vowel to the end
            //combine the 2 strings together and return it
        //if no vowel then return the string 
    let vowels = "aeiou";
    if (vowels.includes(word[0])) {
        return word + "yay";
    }

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            let removeLetters = word.slice(0, i);
            //console.log(removeLetters);
            let vowelsLetters = word.slice(i, word.length);
            //console.log(vowelsLetters);
            return vowelsLetters + removeLetters + "ay";
        }
    }
    return word;
};


console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"