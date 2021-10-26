const digitMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return []
    }
    const digitList = digits.split('');
    let result = [];
    for (let d of digitList) {
        if (d === '1') {
            continue;
        }
        const chars = digitMap[d];
        if (result.length === 0) {
            // base case
            result = result.concat(chars);
        } else {
            const inter = [];
            // iterate over the chars
            let len = result.length;
            let idx = 0;
            let count = 0;
            while (count < len) {
                const mChar = result[idx]
                for (let apChar of chars) {
                    inter.push(mChar + apChar);
                }
                count++;
                result.shift();
            }
            result = result.concat(inter);
        }
    }
    console.log(result);
};

letterCombinations("5");