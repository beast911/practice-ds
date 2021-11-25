/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  let end = 0;
  let resultSet = 0;
  let uniqueSet = new Map();
  while (end < nums.length) {
    // increase start and validate
    if (uniqueSet.has(nums[end])) {
      uniqueSet.set(nums[end], uniqueSet.get(nums[end]) + 1);
    } else {
      uniqueSet.set(nums[end], 1);
    }
    // console.log(uniqueSet)
    if (uniqueSet.size === k) {
      resultSet++;
    }
    let start = 0;
    const innerMap = new Map(uniqueSet);
    while (start < end) {
      if (end - start + 1 < k) {
        break;
      }
      if (innerMap.has(nums[start])) {
        if (innerMap.get(nums[start]) === 1) {
          innerMap.delete(nums[start]);
        } else {
          innerMap.set(nums[start], innerMap.get(nums[start]) - 1);
        }
      }
      if (innerMap.size === k) {
        resultSet++;
      }
      start++;
    }
    end++;
  }
  return resultSet;
};


console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));