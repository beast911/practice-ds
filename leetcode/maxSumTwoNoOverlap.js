/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
  const prefixSum = new Array(nums.length);
  prefixSum[0] = 0;
  let result = 0;
  let result2 = 0;
  for (let i = 1; i < prefixSum.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  // max l sum
  prefixSum.unshift(0);
  let maxLSum = 0;
  let maxRSum = 0;

  for (let p = firstLen + secondLen; p < prefixSum.length; p++) {
    const rangeLSum = prefixSum[p - secondLen] - prefixSum[p - secondLen - firstLen];
    console.log(rangeLSum);
  }

  for (let j = firstLen; j < prefixSum.length; j++) {
    const currSum = prefixSum[j] - prefixSum[j - firstLen];
    result = Math.max(result, currSum);
  }
  console.log(result);

  // max r sum
  for (let k = secondLen; k < prefixSum.length; k++) {
    const currSum = prefixSum[k] - prefixSum[k - secondLen];
    result2 = Math.max(result2, currSum);
  }
  console.log(result2);
  return prefixSum;
};

console.log(maxSumTwoNoOverlap([ 3, 8, 1, 3, 2, 1, 8, 9, 0 ], 3, 2))