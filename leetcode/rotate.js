/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const left = nums.slice(0, k + 1);
  const right = nums.slice(k + 1, nums.length);
  nums = [...right, ...left];
  console.log(nums);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3)