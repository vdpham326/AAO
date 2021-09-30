let snakeToCamel = function(str) {
    //create an empty array
    let words = str.split("_");
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        let newWord = word[0].toUpperCase() + word.slice(1);
        newWords.push(newWord);
    }

    return newWords.join("");
};

//console.log('snakes_go_hiss'.split("_"));

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'