/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    cs = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    let i = 0, j = cs.length - 1
    while (i < j) {
        if (cs[i] !== cs[j]) return false;
        i++; j--;
    }
    return true;
};