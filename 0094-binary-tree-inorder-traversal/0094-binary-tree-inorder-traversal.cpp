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

//  LRootR
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> res;
        TreeNode* temp = root;
        while (temp != NULL) {
            if (temp->left==NULL){
                res.push_back(temp->val);
                temp=temp->right;
            }else {
                TreeNode* t2=temp->left;
                while(t2->right!=NULL&&t2->right!=temp){
                    t2=t2->right;
                }
                if(t2->right==NULL){
                    t2->right=temp;
                    temp=temp->left;
                }
                else{
                    res.push_back(temp->val);
                    t2->right=NULL;
                    temp=temp->right;
                }
            }
        }
        return res;
    }
};