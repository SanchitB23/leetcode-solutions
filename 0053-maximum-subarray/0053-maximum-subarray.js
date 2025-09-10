/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let m = Number.MIN_SAFE_INTEGER, l = nums.length, sm = m;
    while (l--) {
        sm = Math.max(nums[l], sm + nums[l])
        m = Math.max(sm, m)
    }
    return m
};
