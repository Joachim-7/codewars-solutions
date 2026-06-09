function sumStrings(a, b) {
  a = a.replace(/^0+/, '') || '0';
  b = b.replace(/^0+/, '') || '0';
  
  let result = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
​
  while (i >= 0 || j >= 0 || carry) {
    const sum = (i >= 0 ? +a[i--] : 0)
              + (j >= 0 ? +b[j--] : 0)
              + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
​
  return result || '0';
}