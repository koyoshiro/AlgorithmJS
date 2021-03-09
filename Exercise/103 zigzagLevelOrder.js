/**
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) {
    return [];
  } else {
    var result = [];

    var arrayOrder = function (root, depth) {
      if (root != null) {
        if (result[depth] == undefined) {
          result[depth] = [];
        }
        if (depth & 1) {
          result[depth].unshift(root.val);
        } else {
          result[depth].push(root.val);
        }

        arrayOrder(root.left, depth + 1);
        arrayOrder(root.right, depth + 1);
      }
    };
    arrayOrder(root, 0);
    return result;
  }
};
