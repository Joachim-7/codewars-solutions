function dblLinear(n) {
  let i2 = 0, i3 = 0;
  const u = [1];
​
  for (let k = 0; k < n; k++) {
    const y = 2 * u[i2] + 1;
    const z = 3 * u[i3] + 1;
​
    if (y < z)       { u.push(y); i2++; }
    else if (z < y)  { u.push(z); i3++; }
    else             { u.push(y); i2++; i3++; } // duplicate, advance both
  }
​
  return u[n];
}