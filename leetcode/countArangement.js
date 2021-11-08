/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  let count = 0;
  const processCombos = (pos, visited) => {
    if (pos > n) {
      count++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!visited[i] && (pos % i === 0 || i % pos === 0)) {
        visited[i] = true;
        processCombos(pos + 1, visited);
        visited[i] = false;
      }
    }
  }
  processCombos(1, []);
  return count;
};

console.log(countArrangement(6))