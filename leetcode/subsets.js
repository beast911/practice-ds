/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
  const combos = [];
  const process = (curr, prefix) => {
    if (curr.length === 0) {
      combos.push(prefix);
      return;
    }

    const el = curr.shift();
    process([...curr], [...prefix]);
    process([...curr], [...prefix, el]);
  }
  process(nums, [])
  return combos;
};

console.log(subsets([1, 2, 3]))