function exponent(num, power) {
    if (power < 0) {
        return (1 / (exponent(num, Math.abs(power))));
    }
    if (power === 1) return num;

    return num * exponent(num, power - 1);
}

console.log(exponent(3, 2));
console.log(exponent(2, -2));