/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    nums.sort((a, b) => {
        if (a < b) {
            return -1;
        } else {
            return 1;
        }
    })
};

nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);
