function suffixCipher(sentence, cipher) {
  let words = sentence.split(" ");
  let newWords = words.map(function(word) {
    for (let suffix in cipher) {
      if (word.endsWith(suffix)) {
        let cb = cipher[suffix];
        return cb(word);
      }
    }
    return word;
  });
  return newWords.join(" ");
}
