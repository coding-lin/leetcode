/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    // 将链表数组存放到队列中
    const queue = [...lists];
    // 至少要有两个数组，才对队列进行操作
    // 1.将队头前两个数组取出
    // 2.对前两个数组进行合并
    // 3.将合并后的数组加入队尾
    while (queue.length >= 2) {
        const l1 = queue.shift();
        const l2 = queue.shift();
        const l3 = merge(l1, l2);
        queue.push(l3);
    }
    return queue[0];
};
// 进行升序合并
function merge(l1, l2) {
    const head = new ListNode();
    let p = head;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if (l1) {
        p.next = l1;
    } 
    if (l2) {
        p.next = l2;
    }

    return head.next;
}