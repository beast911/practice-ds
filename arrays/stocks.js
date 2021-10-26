/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let maxprofit = 0;
    let minprice = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < prices.length; j++) {
        if (prices[j] < minprice) {
            minprice = prices[j];
        } else if ((prices[j] - minprice) > maxprofit) {
            maxprofit = prices[j] - minprice;
        }
    }
    return maxprofit;
};
