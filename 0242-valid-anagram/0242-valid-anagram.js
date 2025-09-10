/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const sm = {}
    const tm = {}
    for (i = 0; i < s.length; i++) {
        const si = s[i], ti = t[i];
        sm[si] = (sm[si] ?? 0) + 1
        tm[ti] = (tm[ti] ?? 0) + 1
    }
    return !Object.entries(sm).filter(([k, v]) =>
        tm[k] !== v
    ).length
};