/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[right] === val) {
            if (nums[right + 1] !== val) {
                nums[left] = nums[right + 1];
                left++;
                continue;
            } else {
                right++;
                continue;
            }
        } else {
            left++;
            right++;
        }
    }
    return nums;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));