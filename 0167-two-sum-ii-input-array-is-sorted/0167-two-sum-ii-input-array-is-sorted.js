/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const m = {}
    for (let i = 0; i < numbers.length; i++) {
        const c = target - numbers[i]
        if (m.hasOwnProperty(c)) return [m[c] + 1, i + 1]
        else m[numbers[i]] = i
    }
};