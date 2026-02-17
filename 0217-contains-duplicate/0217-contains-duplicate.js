/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const s = new Set()
    for (n of nums ){
        if (s.has(n)) return true
        else s.add(n)
    }
    return false
};