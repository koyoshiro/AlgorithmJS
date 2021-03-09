/**
 * 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) {
    return [];
  } else {
    var result = [];

    var arrayOrder = function (root, depth) {
      if (root != null) {
        if (result[depth] == undefined) {
          result[depth] = [];
        }
        result[depth].push(root.val);
        arrayOrder(root.left, depth + 1);
        arrayOrder(root.right, depth + 1);
      }
    };
    arrayOrder(root, 0);
    return result.reverse();
  }
};
