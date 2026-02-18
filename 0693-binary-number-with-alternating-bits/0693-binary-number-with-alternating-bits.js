/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    const b = n.toString(2)
    for (let i = 1; i < b.length; i++)
        if (b[i] === b[i - 1]) return false
    return true
};