/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var canPartitionKSubsets = function(nums, k) {
  nums = nums.sort((a, v) => v - a)
  // sum of each subset should be n/k
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  if (sum % k !== 0) {
    return false;
  }
  const sumOfEachSet = sum / k;
  // find all combinations of subsets and check if their sum leads to n/k
  const visited = new Array(nums.length).fill(false);
  const process = (start, k, subsetSum) => {
    if (k === 0) {
      return true;
    }
    if (subsetSum === sumOfEachSet) {
      return process(0, k - 1, 0);
    }
    for (let i = start; i < nums.length; i++) {
      if (visited[i] || (subsetSum + nums[i] > sumOfEachSet)) {
        continue;
      }
      visited[i] = true;
      if (process(i + 1, k, subsetSum + nums[i]))
        return true;
      visited[i] = false;
    }
    return false;
  };
  return process(0, k, 0);
};

console.log(canPartitionKSubsets([ 1, 2, 3, 4 ], 2));