/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */

// null, 3, null, 2, 1
// null, 1, 3, 2, null
// 1, null,2,3,null/
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        this.inorder(root, res);
        return res;
    }

    public void inorder(TreeNode t, List<Integer> arr) {
        if (t == null)
            return;

        inorder(t.left, arr);
        arr.add(t.val);
        inorder(t.right, arr);
    }
}