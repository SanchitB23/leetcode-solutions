/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    return dfs(root, 0)
};

const dfs = (curr, num) => {
    if (!curr) return 0;
    let sum = num << 1 | curr.val
    if (!curr.left && !curr.right) return sum
    return dfs(curr.left, sum) + dfs(curr.right, sum)
}