/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;

  let res = 0;
  let count = {};
  while (end < s.length) {
    count[s[end]] = count[s[end]] ? count[s[end]] + 1 : 1;
    while (count[s[end]] > 1) {
      count[s[start]]--;
      start++;
    }
    res = Math.max(res, end - start + 1);
    end++;
  }
  return res;
};

console.log(lengthOfLongestSubstring('pwwkeww'));
