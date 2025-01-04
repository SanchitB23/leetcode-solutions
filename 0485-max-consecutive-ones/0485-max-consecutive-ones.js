/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = -Infinity, i = 0
    nums.forEach(val => {
        if (val === 1) i++
        else i = 0
        max = Math.max(max, i)
    })
    return max
};