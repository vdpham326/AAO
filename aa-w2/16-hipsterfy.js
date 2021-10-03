let removeLastVowel = function(word) {
    let vowels = "aeiou";

    for (let i = word.length - 1; i >= 0; i--) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            return word.slice(0, i) + word.slice(i +1);
        }
    }
    //else return the word
    return word;
}

let hipsterfy = function(sentence) {
    //split the sentence into an array
    //iterate over the array using the map method
    //create an array that holds the vowels "aeiou"
    //create a helper function to remove the last vowel
    let words = sentence.split(" ");
    let filtered = words.map(function(word) {
        return removeLastVowel(word);
    })

    return filtered.join(" ");

    // alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };


};


//using forEach
let hipsterfy = function(sentence) {
    let newWords = [];
    let words = sentence.split(' ');

    words.forEach(function(word) {
        newWords.push(removeLastVowel(word));
    });

    return newWords.join(' ');
};

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'