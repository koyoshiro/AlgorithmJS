/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 遍历到底还没有发现高度差超过 1 的左右子树，那么这个子树肯定符合平衡二叉树的规范
  if (!root) {
    return true;
  }

  function getHeight(root) {
    if (!root) {
      return 0;
    }
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
  }

  // 判断左右子树的高度差，如果超过 1 那么立即返回 false
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false;
  }
  // 分别递归左右子树
  return isBalanced(root.left) && isBalanced(root.right);
  // 获取某个子树的高度
  
};
