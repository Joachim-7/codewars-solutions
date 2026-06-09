function sumOfDivided(lst) {
  const maxAbs = Math.max(...lst.map(Math.abs));
  
  // get all primes up to maxAbs
  const primes = [];
  for (let i = 2; i <= maxAbs; i++) {
    if (primes.every(p => i % p !== 0)) primes.push(i);
  }
  
  return primes
    .map(p => {
      const divisibles = lst.filter(n => Math.abs(n) % p === 0);
      return divisibles.length ? [p, divisibles.reduce((a, b) => a + b, 0)] : null;
    })
    .filter(Boolean);
}