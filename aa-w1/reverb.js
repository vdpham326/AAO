let reverb = function(word) {
    if (typeof word !== "string") {
        return null;
    }
    //create an empty string variable
    //create a variable that is a string "aeiou"
    //loop through the word string backwards
        //check each letter to see if it's a vowel
        //if it's a vowel, get the index and slice the word from that index
        //add the word plus the slice string and return it
    let vowels = "aeiou";
    for (let i = word.length - 1; i >= 0; i--) {
        let letter = word[i];
        if (vowels.includes(letter.toLowerCase())) {
            return word + word.slice(i);
        }
    }

    return word;
};

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null