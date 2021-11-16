/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  let st = 0;
  let res = [];
  const targetSum = threshold * k;
  // calc base sum
  let baseSum = 0;
  for (let i = 0; i < k; i++) {
    baseSum += arr[i];
  }
  if (baseSum >= targetSum) {
    res.push(baseSum);
  }
  for (let en = k; en < arr.length; en++) {
    // calc average
    baseSum -= arr[st];
    baseSum += arr[en];
    if (baseSum >= targetSum) {
      res.push(baseSum);
    }
    st++;
  }
  return res;
};

console.log(numOfSubarrays([ 11, 13, 17, 23, 29, 31, 7, 5, 2, 3 ], 3, 5))