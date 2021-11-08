/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let maxGold = Number.MIN_SAFE_INTEGER;
  const width = grid.length;
  const height = grid[0].length;

  const maxPathFromPoint = (rIdx, cIdx, visited) => {
    if (rIdx < 0 || cIdx < 0 || rIdx >= width || cIdx >= height || grid[rIdx][cIdx] === 0 || visited.has(`${rIdx}_${cIdx}`)) {
      return 0;
    }
    visited.add(`${rIdx}_${cIdx}`);
    const a = maxPathFromPoint(rIdx - 1, cIdx, visited);
    const b = maxPathFromPoint(rIdx + 1, cIdx, visited);
    const c = maxPathFromPoint(rIdx, cIdx + 1, visited);
    const d = maxPathFromPoint(rIdx, cIdx - 1, visited);
    let currPathMax = Math.max(a, b, c, d) + grid[rIdx][cIdx];

    //console.log(visited)
    return currPathMax;
  }

  // console.log(maxPathFromPoint(2, 1, new Set()))
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // find
      if (grid[i][j]) {
        // start dfs from this position
        // console.log(i, j, maxPathFromPoint(i, j, {}, 0))
        maxGold = Math.max(maxPathFromPoint(i, j, new Set(), 0), maxGold);
      }
    }
  }
  return maxGold;
};

console.log(getMaximumGold(
  [[0, 6, 0],
  [5, 8, 7],
  [0, 9, 0]]));