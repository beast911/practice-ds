/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const combos = new Set();
  const process = (curr, prefix) => {
    if (curr.length === 0) {
      return;
    }
    for (let i = 0; i < curr.length; i++) {
      const element = curr[i];
      if ([...prefix, element].length === nums.length) {
        combos.add([...prefix, element])
      }
      process([...curr.slice(0, i), ...curr.slice(i + 1)], [...prefix, element])
    }
  }
  process(nums, []);
  return Array.from(combos);
};

console.log(permute([1, 2, 3]));