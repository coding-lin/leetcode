/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return root;
  // 找到最小的节点
  let getMin = (node) => {
    // BST 最左边的就是最小的
    while (node.left) {
      node = node.left;
    }
    return node;
  };

  if (root.val === key) {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    let minNode = getMin(root.right);
    root.val = minNode.val;
    // 找到最小的顶替它之后还要删除这个最小的节点
    root.right = deleteNode(root.right, minNode.val);
  } else if (root.val > key) {  // 如果当前 root 的值大于 key，向左子树查找
    root.left = deleteNode(root.left, key);
  } else {  // 否则向右子树查找
    root.right = deleteNode(root.right, key);
  }

  return root;
};