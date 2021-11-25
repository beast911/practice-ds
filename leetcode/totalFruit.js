/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let start = 0;
  let end = 0;
  let total = 0;
  let map = new Set();
  let flipIdx = 0;
  while (end < fruits.length) {
    if (!map.has(fruits[end])) {
      if (map.size >= 2) {
        console.log(flipIdx, end);
        map.delete(fruits[flipIdx - 1]);
        start = flipIdx;
      }
      flipIdx = end;
    } else {
      if (fruits[end] !== fruits[end - 1]) {
        flipIdx = end;
      }
    }
    map.add(fruits[end]);
    total = Math.max(total, end - start + 1);
    end++;
  }
  //console.log(map, flipIdx);
  return total;
};

console.log(totalFruit([1, 2, 1]));
