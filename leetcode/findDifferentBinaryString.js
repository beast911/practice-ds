/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  const length = nums[0].length;
  const findMissingString = (str) => {
    if (str.length === length && nums.indexOf(str) === -1) {
      // console.log(str);
      return str;
    }
    // generate combinations
    if (str.length < length) {
      const left = findMissingString(str + '0');
      const right = findMissingString(str + '1');
      return left || right;
    }
  }
  return findMissingString('');
};

console.log(findDifferentBinaryString(["111", "011", "001"]))