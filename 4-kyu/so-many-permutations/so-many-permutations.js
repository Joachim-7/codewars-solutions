function permutations(str) {
  if (str.length <= 1) return [str];
​
  const result = new Set();
​
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
​
    for (const perm of permutations(remaining)) {
      result.add(char + perm);
    }
  }
​
  return [...result];
}