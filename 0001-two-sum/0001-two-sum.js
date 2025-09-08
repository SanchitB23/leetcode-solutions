/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i]
        if (map.hasOwnProperty(comp)) return [map[comp], i];
        else map[nums[i]] = i
    }
};