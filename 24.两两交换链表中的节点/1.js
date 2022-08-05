/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    const next = head.next;  // 临时保存 head.next
    head.next = next.next;
    next.next = head;
    prev.next = next;

    prev = head;  // 更新指针
    head = head.next;  // 更新指针
  }

  return dummy.next;
};