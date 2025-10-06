/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let l = r = mf = res = 0
    let car = Array(26).fill(0)

    while (r < s.length) {
        let c = s.charCodeAt(r) - 65
        car[c]++
        mf = Math.max(mf, car[c])

        while (r - l + 1 - mf > k) {
            c = s.charCodeAt(l) - 65
            car[c]--
            l++
        }
        res = Math.max(res, r - l + 1)
        r++
    }
    return res
};