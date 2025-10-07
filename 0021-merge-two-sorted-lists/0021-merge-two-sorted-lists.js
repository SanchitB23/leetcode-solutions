/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let l3 = new ListNode(), l3t = l3;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            l3t.next = list1
            list1 = list1.next
        } else {
            l3t.next = list2
            list2 = list2.next
        }
        l3t = l3t.next
    }
    if (list1) l3t.next = list1
    if (list2) l3t.next = list2
    return l3.next
};