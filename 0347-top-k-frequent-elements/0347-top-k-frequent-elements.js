/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const m = new Map()
    const bucket = (new Array(nums.length + 1)).fill([])
    const res = []
    nums.forEach(n =>
        m.set(n, (m.get(n) || 0) + 1)
    )
    m.forEach((v, k) =>
        bucket[v] = [...bucket[v], k])
    return bucket.flat().filter(e => Number.isInteger(e)).slice(-k)
};