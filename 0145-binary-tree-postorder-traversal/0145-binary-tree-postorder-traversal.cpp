/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        stack<TreeNode*> s;
        vector<int> res;
        if (root)
            s.push(root);
        while (!s.empty()) {
            TreeNode* temp = s.top();
            if (temp->left) {
                s.push(temp->left);
                temp->left = NULL;
                continue;
            }

            if (temp->right) {
                s.push(temp->right);
                temp->right = NULL;
                continue;
            }
            res.push_back(temp->val);
            s.pop();
        }
        return res;
    }
};