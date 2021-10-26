/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const bMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const bracks = s.split('');
    const stack = [];
    for (let b of bracks) {
        // if left sided, push on stack
        if (b === '[' || b === '{' || b === '(') {
            stack.push(b);
        } else {
            // peek the top most and check if match
            if (bMap[stack[stack.length - 1]] === b) {
                stack.pop();
            } else {
                stack.push(b);
            }
        }
    }
    if(stack.length > 0) {
        return false;
    }
    return true;
};

console.log(isValid(""));