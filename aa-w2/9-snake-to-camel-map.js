let snakeToCamel = function(string) {
    //split the string into an array by "_"
    //map through the array and toLowerCase the word
    //uppercase the first letter then add it to the rest of the letters 
    //and push it back to the array
    let words = string.split("_");

    let camel = words.map(function(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })

    return camel.join("");
}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'