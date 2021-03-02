/**
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  var res = [];

  var inorder = function (root) {
    if (!root) return null;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
    return root;
  };
  inorder(root);
  return res;
};
