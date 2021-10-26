
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var driverCode = function (m, n) {
    let dp = {};
    var uniquePaths = function (m, n) {
        if (m === 1 || n === 1) {
            return 1;
        }
        if (dp[`${m}_${n}`]) {
            return dp[`${m}_${n}`];
        }
        dp[`${m}_${n}`] = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
        return dp[`${m}_${n}`];
    };
    return uniquePaths(m, n)
}
console.log(driverCode(3, 7))