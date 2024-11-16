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
    public boolean isPalindrome(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode t1 = null, t2 = null;
        while (slow != null) {
            t2 = slow.next;
            slow.next = t1;
            t1 = slow;
            slow = t2;
        }
        while (t1 != null) {
            if (head.val != t1.val)
                return false;
            head = head.next;
            t1 = t1.next;
        }
        return true;
    }
}