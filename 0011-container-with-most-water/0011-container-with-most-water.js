/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0, r = height.length - 1, m = 0;
    while (l < r) {
        const lh = height[l]
        const rh = height[r]
        m = Math.max(m, (r - l) * Math.min(lh, rh))
        if (lh < rh) l++
        else r--;

    }
    return m
};