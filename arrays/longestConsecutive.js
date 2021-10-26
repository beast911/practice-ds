/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length > 0) {
        const newnums = nums.sort((a, b) => a - b);
        // since list is sorted iterate again
        let currlongestSeq = 1; let previouslongestSeq = 0;
        for (let i = 0; i < newnums.length; i++) {
            if (newnums[i] + 1 === newnums[i + 1]) {
                currlongestSeq++;
            }
            else if (newnums[i] === newnums[i + 1]) {
                continue;
            }
            else {
                if (currlongestSeq > previouslongestSeq) {
                    previouslongestSeq = currlongestSeq;
                }
                currlongestSeq = 1;
            }
        }
        return previouslongestSeq;
    }
    return 0;
};

console.log(longestConsecutive([9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7]));