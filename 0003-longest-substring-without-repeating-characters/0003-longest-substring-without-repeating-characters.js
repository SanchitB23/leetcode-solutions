/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = j = m = 0, set = new Set();
    while (j < s.length) {
        if (set.has(s[j])) {
            set.delete(s[i])
            i++
        }
        else {
            set.add(s[j])
            j++
        }
        m = Math.max(m, j - i)
    }
    return m
};