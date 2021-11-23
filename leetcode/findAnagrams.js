/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let start = 0;
  let end = 0;
  const result = [];
  /* while (end < s.length) {
    // keep incrementing end until
    // end - start is less than equal to p.length
    // once we do not have a match
    // increment start when there is a match
    if (p.includes(s[end])) {
      // candidate for pattern
      // keep incrementing start until
      // all values in pattern exist once in [start, end] string
      console.log(start, end);
      end++;
    } else {
      end++;
      start = end;
    }
  } */
  return result;
};

console.log(findAnagrams('cbebabacd', 'abc'))