/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
  let start = 0;
  let end = 0;
  let resultSet = 0;
  let uniqueSet = new Map();
  while (end < nums.length) {
    if (uniqueSet.has(nums[end])) {
      uniqueSet.set(nums[end], uniqueSet.get(nums[end]) + 1);
    } else {
      uniqueSet.set(nums[end], 1);
    }
    if (uniqueSet.size === k) {
      resultSet++;
    }

    // console.log(start, end);
    // increase start and validate
    let s = start + 1;
    const innerMap = new Map(uniqueSet);
    while (end - s >= k) {
      // console.log(uniqueSet);
      if (innerMap.has(nums[s])) {
        if (innerMap.get(nums[s]) > 0) {
          innerMap.set(nums[s], innerMap.get(nums[s]) - 1);
        } else {
          innerMap.delete(nums[s]);
        }
      }
      if (innerMap.size === k) {
        resultSet++;
      }
      s++;
    }

    end++;
  }
  return resultSet;
};

function isDistinctK() { }

console.log(subarraysWithKDistinct([ 1, 2, 1, 2, 3 ], 2));