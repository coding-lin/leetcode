## 206. 反转链表

题目链接：https://leetcode.cn/problems/reverse-linked-list/

- 反转链表简单题如何回答？

> 在链表的遍历过程中，用 `pre` 保存当前节点的前驱节点，将前驱节点变为下次当前节点的后继节点，同时原有节点的 next 属性被 `next` 变量保存，不影响原遍历的情况下，完成反转。