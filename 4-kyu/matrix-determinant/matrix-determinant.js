function determinant(matrix) {
  const n = matrix.length;
  
  if (n === 1) return matrix[0][0];
  if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  
  return matrix[0].reduce((sum, val, col) => {
    const minor = matrix.slice(1).map(row => row.filter((_, i) => i !== col));
    return sum + val * (col % 2 === 0 ? 1 : -1) * determinant(minor);
  }, 0);
}