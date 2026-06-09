function minPermutation(n) {
  if (n === 0) return 0;
​
  const negative = n < 0;
  const digits = String(Math.abs(n)).split('').sort((a, b) => a - b);
​
  const firstNonZero = digits.findIndex(d => d !== '0');
  [digits[0], digits[firstNonZero]] = [digits[firstNonZero], digits[0]];
​
  return parseInt((negative ? '-' : '') + digits.join(''));
}