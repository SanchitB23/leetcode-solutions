/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    return arr.sort((a, b) => {
        const ba = [...a.toString(2)].filter(e => e == "1").length;
        const bb = [...b.toString(2)].filter(e => e == "1").length;
        if (ba !== bb) return ba - bb
        return a - b
    })
};