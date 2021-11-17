const hasAll = (str) => {
  return str.includes('a') && str.includes('b') && str.includes('c')
}
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let start = 0;
  let end = 2;
  let total = 0;
  while (end < s.length) {
    if (hasAll(s.substring(start, end + 1))) {
      const possibleCombos = s.length - end;
      total += possibleCombos;
      start++;
    } else {
      end++;
    }
  }
  return total;
};

console.log(numberOfSubstrings("abcabc"))