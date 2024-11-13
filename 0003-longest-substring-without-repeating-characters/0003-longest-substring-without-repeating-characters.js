/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    const st = new Set()
    let l = 0;
    for (let r = 0; r < s.length; r += 1) {
        rChar = s[r]
        while (st.has(rChar)) {
            st.delete(s[l])
            l += 1
        }
        st.add(rChar)
        max = Math.max(max, r - l + 1)
    }
    return max
};