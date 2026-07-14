function spiralize(n) {
  const a = Array.from({ length: n }, () => Array(n).fill(0));
​
  for (let t = 0; t < n; t += 2) {
    let l = Math.max(0, t - 2);
    let r = n - 1 - t;
    let b = n - 1 - t;
​
    if (l > r || t > b) break;
​
    for (let i = l; i <= r; i++) a[t][i] = 1;
    for (let i = t + 1; i <= b; i++) a[i][r] = 1;
​
    if (b - t < 2) continue;
​
    for (let i = r - 1; i >= (t ? l + 2 : l); i--) a[b][i] = 1;
​
    let c = t ? l + 2 : l;
    for (let i = b - 1; i > t + 1; i--) a[i][c] = 1;
  }
​
  return a;
}