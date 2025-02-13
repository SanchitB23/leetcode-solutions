/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = j = 0
    while (j < nums.length) {
        if (nums[i] !== nums[j]) { i++; nums[i] = nums[j] }
        j++
    }
    return i + 1
};