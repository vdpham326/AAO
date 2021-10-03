let hasThreeVowels = function(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = vowels.reduce(function(acc, vowel) {
        if (string.includes(vowel)) {
            acc++;
        }
        return acc;
    }, 0);

    return count >= 3;
};


// using forEach
// let hasThreeVowels = function(string) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     vowels.forEach(function(vowel) {
//         if (string.includes(vowel)) {
//             count++;
//         }
//     });

//     return count >= 3;
// };

// using filter
// let hasThreeVowels = function(string) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelWords = vowels.filter(function(vowel) {
//         return (string.includes(vowel));
//     });

//     return vowelWords.length >= 3;
// };
