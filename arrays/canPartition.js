/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const halfSum = nums.reduce((prev, curr) => prev + curr) / 2;
};

console.log(canPartition([1, 2, 3, 4, 5, 6, 7]));