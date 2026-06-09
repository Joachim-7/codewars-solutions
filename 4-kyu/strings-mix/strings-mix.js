function mix(s1, s2) {
  const count = (str, ch) => (str.match(new RegExp(ch, 'g')) || []).length;
  
  const results = [];
  
  for (let c = 97; c <= 122; c++) {
    const ch = String.fromCharCode(c);
    const n1 = count(s1, ch);
    const n2 = count(s2, ch);
    const max = Math.max(n1, n2);
    
    if (max <= 1) continue;
    
    const prefix = n1 > n2 ? '1' : n2 > n1 ? '2' : '=';
    results.push(`${prefix}:${ch.repeat(max)}`);
  }
  
  return results.sort((a, b) => {
    const lenDiff = b.length - a.length;
    if (lenDiff !== 0) return lenDiff;
    return a < b ? -1 : a > b ? 1 : 0;
  }).join('/');
}