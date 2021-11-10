/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

const areAllElemsEq = (list) => {
    let state = true;
    for (let j = 0; j < list.length - 1; j++) {
        const element = list[j];
        const element2 = list[j + 1];
        if (element !== element2) {
            state = false;
            break;
        }
    }
    return state;
}
var canPartitionKSubsets = function (nums, k) {
    let res = false;
    const process = (currentPos, state) => {
        if (currentPos >= nums.length) {
            // collect the result
            res = areAllElemsEq(state);
            return;
        }
        for (let i = 0; i < k; i++) {
            state[i] += nums[currentPos];
            process(currentPos + 1, state);
            state[i] -= nums[currentPos];
        }
    }
    process(0, new Array(k).fill(0));
    return res;
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));