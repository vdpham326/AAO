function interrupter(interruptingWord) {
  return function (sentence) {
    let words = sentence.split(" ");
    let newString = "";

    for (let index = 0; index < words.length; index++) {
      let word = words[index];
      if (index === words.length - 1) {
        newString += word;
      } else {
        newString += word + " " + interruptingWord + " ";
      }
    }

    return newString;
  };
}


let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"