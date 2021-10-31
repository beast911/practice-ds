/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const buildList = (list) => {
    let head = new ListNode(list[0]);
    let ptr = head;
    for (let i = 1; i < list.length; i++) {
        const node = new ListNode(list[i]);
        ptr.next = node;
        ptr = ptr.next;
    }
    return head;
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (list) {
    let head = buildList(list);
    let prev = head;
    let curr = head.next;
    let next = head.next.next;
    let finalState = [];
    let idx = 2;
    while (next !== null) {
        if (prev.val > curr.val && curr.val < next.val) {
            finalState.push(idx);
        } else if (prev.val < curr.val && curr.val > next.val) {
            finalState.push(idx);
        }
        idx++;
        prev = curr;
        curr = curr.next;
        next = next.next;
    }

    if (finalState.length === 2) {
        return [finalState[1] - finalState[0], finalState[1] - finalState[0]]
    }
    // prefix min sum
    if (finalState.length > 2) {
        let minSum = Number.MAX_SAFE_INTEGER;
        for (let i = 1; i < finalState.length; i++) {
            const diff = finalState[i] - finalState[i - 1];
            minSum = Math.min(minSum, diff);
        }
        return [minSum, finalState[finalState.length - 1] - finalState[0]];
    }
    return [-1, -1];
};

console.log(nodesBetweenCriticalPoints([1, 3, 2, 2, 3, 2, 2, 2, 7]))