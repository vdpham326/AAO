function advancedExponent(b, n) {
  if (n === 0) return 1;
  if (n === 1) return b;
  if (n === 2) return 2 * b;

  if (n % 2 === 0) {
    const halfExp = advancedExponent(b, n/2);
    return halfExp * halfExp;
  } else {
    const halfExp = advancedExponent(b, (n - 1) / 2);
    return b * halfExp * halfExp;
  }
}