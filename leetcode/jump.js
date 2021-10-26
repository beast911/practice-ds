/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length < 2) {
        return true;
    }
    let s = nums.length - 2;
    let e = nums.length - 1;
    function canDoJump(start, end) {
        const jump = end - start;
        if (start === 0) {
            return nums[start] >= jump ? true : false;
        }
        if ((nums[start]) >= jump) {
            // can jump
            // update end
            return canDoJump(start - 1, end - jump);
        } else {
            return canDoJump(start - 1, end);
        }
    }
    let val = canDoJump(s, e);
    console.log(val)
};

canJump([2, 3, 5, 1]);