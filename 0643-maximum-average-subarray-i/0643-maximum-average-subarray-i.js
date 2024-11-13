/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let l = 0, maxAvg = Number.MIN_SAFE_INTEGER;
    let sum = 0
    for (let r = 0; r < nums.length; r++) {
        sum += nums[r]
        if (r - l + 1 == k) {
            maxAvg = Math.max(maxAvg, (sum) / k)
            sum -= nums[l]
            l++
        }
    }
    return maxAvg
};