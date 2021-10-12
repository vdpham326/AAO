function characterCount(string) {
    let obj = {};
    let letters = string.split(" ");

    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        let keys = Object.keys()
        if (obj[letter] === letter) {
            obj[letter]
        }
    }
}

function characterCount(string) {
    const countObj = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] in countObj) {
            countObj[string[i]] += 1;
        } else {
            countObj[string[i]] = 1;
        }
    }
    return countObj
}
