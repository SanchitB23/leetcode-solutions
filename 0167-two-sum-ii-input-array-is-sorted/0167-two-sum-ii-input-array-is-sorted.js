/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0, j = numbers.length - 1
    while (i < j) {
        if (target > (numbers[i] + numbers[j])) { i++; continue; }
        if (target < (numbers[i] + numbers[j])) { j--; continue; }
        return [i + 1, j + 1]
    }
};