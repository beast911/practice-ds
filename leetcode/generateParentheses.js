/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const valid = new Set();
  const generate = (prefix, open, close) => {
    if (prefix.length === 2 * n) {
      if (open === close) {
        valid.add(prefix);
      }
      return;
    }
    const curr1 = prefix + '(';
    generate(curr1, open + 1, close - 1);
    if (open !== 0) {
      const curr2 = prefix + ')';
      generate(curr2, open - 1, close + 1);
    }
  }
  generate('', 0, 0);
  return Array.from(valid);
};

console.log(generateParenthesis(5));