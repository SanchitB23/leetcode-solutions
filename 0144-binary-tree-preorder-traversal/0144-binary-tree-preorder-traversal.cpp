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
//  RtLR
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> res;
        stack<TreeNode*> s;
        if (root) {
            s.push(root);
            res.push_back(root->val);
        }

        while (!s.empty()) {
            TreeNode* t = s.top();

            if (t->left) {
                s.push(t->left);
                res.push_back(t->left->val);
                t->left = NULL;
                continue;
            }
            if (t->right) {
                s.push(t->right);
                res.push_back(t->right->val);
                t->right = NULL;
                continue;
            }
            s.pop();
        }
        return res;
    }
};