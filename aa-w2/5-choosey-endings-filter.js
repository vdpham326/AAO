let chooseyEndings = function(words, suffix) {
    if (!Array.isArray(words)) {
        return [];
    }
    let newWords = words.filter(function(word) {
        return word.endsWith(suffix);
    })

    return newWords;
};


console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]
console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily')); //[]