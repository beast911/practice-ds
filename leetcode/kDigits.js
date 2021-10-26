/**
 * Given string num representing a non-negative integer num, and an integer k,
 * return the smallest possible integer after removing k digits from num.
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    const stack = [];
    for (let i = 0; i < num.length; i++) {
        while (k > 0 && stack.length > 0 && num[i] < stack[stack.length-1]) {
            stack.pop();
            k--;
        }
        stack.unshift(num[i])
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    console.log(stack)
};

removeKdigits("10200", 1)