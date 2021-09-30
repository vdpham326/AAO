let sillyStrings = function(word) {
    //create an empty string variable
    //create a vowels string "aeiou"
    //loop through each character of the string word
    //check if each character is a vowel
        //if it's a vowel then use slice to add to the empty string from slice(0, i) + "b" + i + slice(i + 1);
    //return the string
    let vowels = "aeiou";
    let newWord = "";

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            newWord += letter + "b" + letter; 
        } else {
            newWord += char;
        }
        
    }
    
    return newWord;
};

let sillyString = function(word) {
    let vowels = "aeiou";
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (vowels.includes(char)) {
        newWord += char + "b" + char;
      } else {
        newWord += char;
      }
    }
    return newWord;
};


console.log(sillyStrings('stop'));       // stobop
console.log(sillyStrings('that'));       // thabat
console.log(sillyStrings('can'));        // caban
console.log(sillyStrings('cats'));       // cabats
console.log(sillyStrings('italy'));      // ibitabaly
console.log(sillyStrings('scooter'));    // scobooboteber
