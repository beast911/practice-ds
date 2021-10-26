/**
 * 
 * @param {string} val string of characters example "babad"
 */
const longestPalindrome = (val) => {
    let s = 0;
    let l = 0;
    let max = 0;
    while (s < val.length) {
        
    }
    return max;
}

function checkPalindrome(str) {
    if (str.length < 1) {
        return 0;
    }
    if (str.length < 2) {
        return 1;
    }
    let j = str.length - 1;
    for (let i = 0; i < str.length; i++) {
        if (i === j) {
            break;
        }
        const elementS = str[i];
        const elementE = str[j];
        if (elementS !== elementE) {
            return 0;
        }
        j--;
    }
    return str.length;
}

console.log(checkPalindrome("bab"))