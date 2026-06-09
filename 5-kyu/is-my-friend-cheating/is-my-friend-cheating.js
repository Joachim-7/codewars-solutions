function removeNb(n) {
  const total = n * (n + 1) / 2;
  const result = [];
​
  for (let a = 1; a <= n; a++) {
    const b = (total - a) / (1 + a);
    if (b === Math.floor(b) && b >= 1 && b <= n && b !== a) {
      result.push([a, b]);
    }
  }
​
  return result;
}