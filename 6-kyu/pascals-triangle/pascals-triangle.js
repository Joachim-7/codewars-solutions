function pascalsTriangle(n) {
  const result = [];
  let row = [1];
​
  for (let i = 0; i < n; i++) {
    result.push(...row);
​
    const nextRow = [1];
​
    for (let j = 1; j < row.length; j++) {
      nextRow.push(row[j - 1] + row[j]);
    }
​
    nextRow.push(1);
    row = nextRow;
  }
​
  return result;
}