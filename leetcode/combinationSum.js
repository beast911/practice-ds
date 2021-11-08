/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  const findCombo = (prefix, leftOverSum, start) => {
    if (prefix.length === k && leftOverSum === 0) {
      result.push(prefix);
    }

    for (let i = start; i < 10; i++) {
      //console.log(leftOverSum, i);
      if (leftOverSum > 0 && i < n && prefix.indexOf(i) === -1 && prefix.length < k && leftOverSum >= i) {
        // console.log([...prefix, i], leftOverSum - i);
        findCombo([...prefix, i], leftOverSum - i, i);
      }
    }
  }
  findCombo([], n, 1);
  return result;
};

console.log(combinationSum3(9, 45))