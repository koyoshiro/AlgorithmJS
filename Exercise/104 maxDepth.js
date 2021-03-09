/**
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  var depth = 0;
  var preOrder = function (root, dep) {
    if (!root) return;
    if (depth < dep) {
      depth = dep;
    }
    preOrder(root.left, dep + 1);
    preOrder(root.right, dep + 1);
  };
  preOrder(root, 1);
  return depth;
};
