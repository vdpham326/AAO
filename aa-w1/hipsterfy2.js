let hipsterfy = function(sentence) {
    //split the sentence into an array
    //create a string variable with the vowels "aeiou"
    //loop through the array at each word
        //create a helper function that will remove the last vowel in every word
    //join the array into a new sentence and return it
    let words = sentence.split(" ");
    let newSentence = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        newSentence.push(removeLastVowel(word));
    }

    return newSentence.join(" ");
};

let removeLastVowel = function(word) {
    //create a string vowels variable that will hold "aeiou"
    //loop through the word by each character backwards
        //if a vowel is encountered use the slice method the slice from 0 up to the index of the vowel found
            //add that string that starts from the index + 1 and return it
    let vowels = "aeiou";
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
};

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'