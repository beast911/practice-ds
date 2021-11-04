/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let maxGold = Number.MIN_SAFE_INTEGER;
  const width = grid[0].length;
  const height = grid.length;

  const maxPathFromPoint = (rIdx, cIdx, visited, currPathMax) => {
    if (rIdx < 0 || cIdx < 0 || rIdx >= width || cIdx >= height || grid[rIdx][cIdx] === 0) {
      return currPathMax;
    }
    if (!visited[`${rIdx}_${cIdx}`]) {
      visited[`${rIdx}_${cIdx}`] = true;
      const a = maxPathFromPoint(rIdx - 1, cIdx, visited, currPathMax + grid[rIdx][cIdx]);
      const b = maxPathFromPoint(rIdx + 1, cIdx, visited, currPathMax + grid[rIdx][cIdx]);
      const c = maxPathFromPoint(rIdx, cIdx + 1, visited, currPathMax + grid[rIdx][cIdx]);
      const d = maxPathFromPoint(rIdx, cIdx - 1, visited, currPathMax + grid[rIdx][cIdx]);
      currPathMax = Math.max(a, b, c, d);
    }
    return currPathMax;
  }

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      // find
      if (grid[i][j]) {
        let visited = {};
        // start dfs from this position
        console.log(maxPathFromPoint(i, j, visited, 0));
      }
    }
  }
  return maxGold;
};

console.log(getMaximumGold([[1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20]]));