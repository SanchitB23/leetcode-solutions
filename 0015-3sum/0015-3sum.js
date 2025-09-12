/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const res = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i != 0 && nums[i] == nums[i - 1]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const t = nums[i] + nums[l] + nums[r]
            if (t < 0) l++;
            else if (t > 0) r--;
            else {
                res.push([nums[i], nums[l], nums[r]])
                l++; r--;
                while (nums[l] == nums[l - 1] && l < r) l++;
            }
        }
    }
    return res
};