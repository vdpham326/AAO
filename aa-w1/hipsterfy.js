let removeLastVowel = function(word) {
    let vowels = "aeiou";

    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
};

let hipsterfy = function(sentence) {
    //split the sentence into an array
    //loop over the array
        //use the helper function to remove the last vowel in each word
    //join the array together to form a string
    //return the new string
    let words = sentence.split(" ");
    let newSentence = []
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        newSentence.push(removeLastVowel(word))
    }

    return newSentence.join(" ");
};

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
//console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
//console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'