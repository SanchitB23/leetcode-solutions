/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    const map = new Map()
    let c = 0
    for (n of arr) {
        const bit = n.toString(2)
        const len1 = [...bit].filter(e => e == "1").length;
        if (map.has(len1)) map.set(len1, [...map.get(len1), n]);
        else map.set(len1, [n])
        c = Math.max(c, len1)
    }
    let bucket = new Array(c)
    map.forEach((v, k) => {
        bucket[k] = v.sort((a, b) => a - b)
    })
    return bucket.flat()
};