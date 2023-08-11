/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const dummy = new ListNode(); // Create a dummy node to simplify the merging logic
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Append the remaining nodes from either l1 or l2
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    return dummy.next; // Skip the dummy node to get the actual merged list
};

// Example usage:
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(list1, list2);

// Function to print the merged linked list
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

printList(mergedList);
