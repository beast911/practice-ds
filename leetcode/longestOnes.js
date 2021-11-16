/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  // initialize
  let start = 0;
  let end = 0;
  let maxWindowSize = Number.MIN_SAFE_INTEGER;
  while (end < nums.length) {
    let zeroes = 0;
    let currentWindowSize = 0;
    // iterate from start to end
    for (let i = start; i <= end; i++) {
      if (nums[i] === 0) {
        zeroes++;
        if (zeroes > k) {
          // console.log(currentWindowSize, end)
          start++;
          end = start;
          break;
        }
      }
      currentWindowSize++;
    }
    maxWindowSize = Math.max(maxWindowSize, currentWindowSize);
    end++;
  }
  return maxWindowSize;
};

console.log(longestOnes([ 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1 ], 3));