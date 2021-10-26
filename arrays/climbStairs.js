/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let memoizedList = [];
    memoizedList[0] = 1; memoizedList[1] = 1;
    for (let i = 2; i < n + 1; i++) {
        memoizedList[i] = memoizedList[i - 1] + memoizedList[i - 2];
    }
    return memoizedList[n];
};

console.log(climbStairs(4));