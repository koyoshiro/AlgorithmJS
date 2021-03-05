/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  var isSame = function (root1, root2) {
    if (root1 == null && root2 == null) return true;
    if (root1 && root2) {
      return root1.val == root2.val && isSame(root1.left, root2.right) && isSame(root1.right, root2.left);
    }
    return false;
  };

  if (root == null) return true;
  return isSame(root.left, root.right);
};
