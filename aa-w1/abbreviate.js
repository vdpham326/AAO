let abbreviate = function(word) {
    let vowels = "aeiou";
    let newWord = "";

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!vowels.includes(char.toLowerCase())) {
            newWord += char;
        }
    }

    return newWord;
};


console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'