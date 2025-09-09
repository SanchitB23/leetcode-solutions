/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let i = 0, j = i + 1, len = prices.length, max = 0;
    while (j < len) {
        const diff = prices[j] - prices[i];
        max = Math.max(diff, max);
        if (diff < 0)
            i = j;
        j++;
    }
    return max;
};