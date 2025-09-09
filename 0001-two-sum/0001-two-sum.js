/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        const complement = target - n;
        if (map.hasOwnProperty(complement)) {
            return [i, map[complement]]
        } else {
            map[n] = i;
        }
    }
};