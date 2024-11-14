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
        ListNode *res = new ListNode(), *t1;
        t1 = res;
        int carry=0,sum=0;
        while(l1 || l2||carry){
            int l1v=0,l2v=0;
            if(l1){
                l1v=l1->val;
                l1=l1->next;
            }
            if(l2){
                l2v=l2->val;
                l2=l2->next;
            }
            sum = l1v+l2v+carry;
            carry = sum/10;
            ListNode *t2 = new ListNode(sum%10);
            t1->next=t2;
            t1=t1->next;
        }
        return res->next;
    }
};