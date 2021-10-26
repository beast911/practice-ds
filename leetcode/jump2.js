/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let start = 0;
    let dp = [];
    function jumpLength(s) {
        if (s >= nums.length - 1) {
            return 1;
        }
        let i = 0;
        while (i < nums[s]) {
            dp[s][i] = jumpLength(i + 1);
            i++;
        }
    }
    return jumpLength(start);
};

console.log(jump([2, 3, 1, 1, 4]))