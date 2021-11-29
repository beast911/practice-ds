function checkPatternExists(testStrMap, patternMap) {
  for (let i = 0; i < patternMap.length; i++) {
    if (patternMap[i] !== 0 && testStrMap[i] < patternMap[i]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (str, pattern) {
  if (str.length < pattern.length) {
    return '';
  }
  /* const str = s.toLowerCase();
  const pattern = t.toLowerCase(); */
  let minWin = Number.MAX_SAFE_INTEGER;
  let finalStr = '';

  const patternMap = new Array(52).fill(0);
  [...pattern].forEach((char, idx) => {
    const charIdx = char.charCodeAt() - 'A'.charCodeAt();
    patternMap[charIdx]++;
  });
  const matchMap = new Array(52).fill(0);

  let start = 0;
  let end = 0;

  while (end < str.length) {
    const currCharIdx = str[end].charCodeAt() - 'A'.charCodeAt();
    matchMap[currCharIdx]++;
    // console.log(matchMap, patternMap)
    if (checkPatternExists(matchMap, patternMap)) {
      let lastStart = start;
      // console.log(start, end);
      const val = str.substring(start, end + 1);
      console.log(start, end);
      if (end - start < minWin) {
        minWin = end - start;
        finalStr = val;
      }
      // console.log(val);
      while (start <= end) {
        if (
          pattern.indexOf(str[start]) !== -1 &&
          str[start] !== str[lastStart]
        ) {
          break;
        }
        matchMap[str[start].charCodeAt() - 'A'.charCodeAt()]--;
        start++;
      }
    }
    end++;
  }
  return finalStr;
};

console.log(minWindow('adobecodebancbbcaa', 'abc'));
