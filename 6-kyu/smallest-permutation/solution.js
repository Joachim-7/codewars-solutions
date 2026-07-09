function minPermutation(n) {
    if (n === 0) return 0;

    const sign = n < 0 ? -1 : 1;
    const digits = String(Math.abs(n)).split('').sort();

    if (digits[0] === '0') {
        const firstNonZero = digits.findIndex(digit => digit !== '0');
        [digits[0], digits[firstNonZero]] = [digits[firstNonZero], digits[0]];
    }

    return sign * Number(digits.join(''));
}