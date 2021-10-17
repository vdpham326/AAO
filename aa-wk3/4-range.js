function range(start, end) {
    if (end <= start) return [];
    return [start].concat(range(start + 1, end));

}
range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []

console.log(range(1, 5));
//console.log(range(3, 4));
//console.log(range(7, 6));