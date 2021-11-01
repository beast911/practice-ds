/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const resultSet = new Set();
  const baseStrs = "abc";
  const generateStrings = (str, validStrs) => {
    if (str.length === n) {
      return;
    }
    // console.log(validStrs);
    for (let i = 0; i < validStrs.length; i++) {
      const element = validStrs[i];
      const currStr = str + element;
      if (currStr.length === n) {
        resultSet.add(currStr);
      }
      // remove the currentStr from valid ones
      const idx = baseStrs.indexOf(element);
      generateStrings(currStr, baseStrs.substring(0, idx) + baseStrs.substring(idx + 1))
    }
  }
  generateStrings("", baseStrs);
  // sort lexicographically
  const res = Array.from(resultSet).sort((a, b) => {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  })[k - 1];
  return res ? res : "";
};

console.log(getHappyString(10, 100));