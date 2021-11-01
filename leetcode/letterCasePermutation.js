/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const combinations = new Set();
  const findCombos = (str, baseStr) => {
    combinations.add(baseStr + str);
    if (str.length === 0) {
      return;
    }
    // process string
    // pick first
    const element = str[0];
    if (/[a-zA-Z]/.test(element)) {
      // find combos for upper and lowercase
      findCombos(str.substring(1), baseStr + element.toLowerCase());
      findCombos(str.substring(1), baseStr + element.toUpperCase());
    } else {
      // add number to baseStr and move on
      findCombos(str.substring(1), baseStr + element);
    }
  }
  combinations.add(s);
  findCombos(s, '');
  return Array.from(combinations);
};

console.log(letterCasePermutation('3z4'))