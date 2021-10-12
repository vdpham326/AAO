let arrowReverseString = str => {
  
    let newSentence = [];
    
    for (let i = str.length - 1; i >= 0; i--) {
        let ele = str[i];

        newSentence.push(ele);
    }

    return newSentence.join("");
};

//2nd simpler way 
let reverseStr = (str) => str.split("").reverse().join("");

let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"
console.log(result1);
console.log(result2);