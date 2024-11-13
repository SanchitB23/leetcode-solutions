/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    let res = 1;
    let stuff = new Set();
    [...s].forEach(char => {
        if (stuff.has(char)) {
            res += 1;
            stuff = new Set()
        } 
        stuff.add(char)
    })
    return res;
};