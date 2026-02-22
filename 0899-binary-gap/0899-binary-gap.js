/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let m = 0,
mt = 0, nb = n.toString(2);
    for (e of nb) {
        if (e == 1) {
            m = Math.max(m, mt);
            mt = 0;
        }
        mt++
    }
    return m
};