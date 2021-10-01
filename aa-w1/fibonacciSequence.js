let fibonacciSequence = function(length) {
    if (length === 0) {
        return [ ];
    } else if (length === 1) {
        return [ 1 ];
    }

    let seq = [1, 1];
    while (seq.length < length) {
        let last = seq[seq.length - 1];
        let secondLast = seq[seq.length - 2];
        let next = last + secondLast;
        seq.push(next);
    }
    return seq;
};

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
