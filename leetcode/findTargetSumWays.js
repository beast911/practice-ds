/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let ways = 0;
  const process = (position, sum) => {
    if (position >= nums.length) {
      if (sum === target) {
        ways++;
      }
      return;
    }
    process(position + 1, sum + nums[position]);
    process(position + 1, sum - nums[position]);
  };
  process(0, 0);
  return ways;
};

console.log(findTargetSumWays([ 1, 1, 1, 1, 1 ], 3))