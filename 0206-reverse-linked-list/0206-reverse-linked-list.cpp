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
    ListNode* reverseList(ListNode* head) {
        ListNode *l1 = NULL, *l2 = NULL;
        while (head != NULL) {
            l2 = head->next;
            head->next = l1;
            l1 = head;
            head = l2;
        }
        return l1;
    }
};