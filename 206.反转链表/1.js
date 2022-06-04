// 链表由节点组成
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 前驱 后继
const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

function reverseList(head) {
    // 如果空链表 或者 只有一个头节点
    if (!head || !head.next) return head;

    // 头变尾  前驱节点变后继节点
    // 链表 线性结构
    let cur = head;  // 当前节点
    let pre = null;  // 前驱节点

    while (cur) {  // 尾部 null 时退出
        const next = cur.next;  // 当前节点的下一个节点 后继
        cur.next = pre;
        pre = cur;  // 前驱结点 为成为下一轮的后继节点 存值
        cur = next;  // 遍历
    }
    return pre;
}

console.log(reverseList(a1));