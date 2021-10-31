/**
 * https://leetcode.com/contest/weekly-contest-265/problems/smallest-index-with-equal-value/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        const mod = i % 10;
        if (nums[i] === mod) {
            min = Math.min(i, min);
        }
    }
    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};

console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))