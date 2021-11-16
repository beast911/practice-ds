/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  // initialize
  let start = 0;
  let end = 0;

  while (end < nums.length) {
    if (nums[end] === 0) {
      k--;
    }
    if (k < 0) {
      if (nums[start] === 0) {
        k++;
      }
      start++;
    }
    end++;
  }
  return end - start;
};

console.log(longestOnes([ 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1 ], 3));