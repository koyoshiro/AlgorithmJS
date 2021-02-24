/**
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let index = 0;
  let res = 0;
  // BST中序排列的结果为顺序
  var traverse = function (root, k) {
    if (!root) return;
    traverse(root.left, k);
    index++;
    if (index == k) {
      res = root.val;
      return;
    }
    traverse(root.right, k);
  };
  traverse(root, k);
  return res;
};
