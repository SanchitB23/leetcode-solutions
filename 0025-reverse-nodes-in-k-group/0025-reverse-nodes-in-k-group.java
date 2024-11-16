/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || k == 1)
            return head;
        ListNode dummy = new ListNode(), temp = dummy, ht = head;
        for (int i = 0; i < k; i++) {
            if (ht == null) {
                return head;
            }
            ht = ht.next;
        }
        dummy = reverseLL(head, ht);
        head.next = this.reverseKGroup(ht, k);
        return dummy;
    }

    public ListNode reverseLL(ListNode head, ListNode ht) {
        ListNode t1 = null, t2 = null;
        while (head != ht) {
            t2 = head.next;
            head.next = t1;
            t1 = head;
            head = t2;
        }
        return t1;

    }
}