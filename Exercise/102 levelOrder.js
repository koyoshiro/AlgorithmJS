/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
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
    return result;
  }
};
