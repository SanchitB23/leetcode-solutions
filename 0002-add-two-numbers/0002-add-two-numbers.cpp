/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* res = new ListNode();
        ListNode* t = res;
        int carry = 0;
        while (l1 != NULL || l2 != NULL || carry) {
            int l1val = 0, l2val = 0;
            if (l1) {
                l1val = l1->val;
                l1 = l1->next;
            }
            if (l2) {
                l2val = l2->val;
                l2 = l2->next;
            }

            int sum = l1val + l2val + carry;
            carry = sum / 10;
            t->next = new ListNode(sum % 10);
            t = t->next;
        }

        return res->next;
    }
};