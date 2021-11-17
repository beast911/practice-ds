/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let start = 0;
    let end = 0;
    let result = 0;
    let deleted = false;
    while (end < nums.length) {
        if (nums[end] === 1) {
            end++;
        } else if (!deleted && nums[end] === 0) {
            deleted = true;
            end++;
        } else {
            // boundary has been reached, means have to check the current length and update
            const currentLength = end - start - 1;
            result = Math.max(result, currentLength);
            while (nums[start] === 1) {
                start++;
            }
            start++;
            // console.log(start, end);
            deleted = false;
        }
    }
    result = Math.max(result, end - start - 1);
    return result;
};

console.log(longestSubarray([0, 1, 1]))