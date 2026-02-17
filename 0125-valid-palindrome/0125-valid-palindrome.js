/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    let i = 0, j = cleanStr.length - 1;
    while (i < j) {
        if (cleanStr[i] !== cleanStr[j]) return false;
        i++; j--;
    }
    return true
};