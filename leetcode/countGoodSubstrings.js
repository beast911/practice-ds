/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  // fixed window size of 3
  let st = 0;
  let set = new Set();
  let result = [];
  // iterate and check if every sub str is happy
  for (let e = 2; e < s.length; e++) {
    const currSubstr = s.substring(st, e + 1);
    // add all keys to set
    [...currSubstr].forEach(k => { set.add(k); });
    if (set.size === 3)
    {
      result.push(currSubstr);
    }
    set.clear();
    st++;
  }
  return result;
};

console.log(countGoodSubstrings('aababcabc'))