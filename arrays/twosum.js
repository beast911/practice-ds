/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let prev = nums[0];
    let minVal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(prev > nums[i]) {
            minVal = nums[i];
            return minVal;
        } else {
            prev = nums[i];
        }        
    }
    return minVal;
};