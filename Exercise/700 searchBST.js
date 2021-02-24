/**
 * 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let resRoot = null;

  var traverse = function (root, val) {
    if (!root) return;

    if (root.val == val) {
      resRoot = root;
    }
    if (root.val < val) {
      traverse(root.right, val);
    }
    if (root.val > val) {
      traverse(root.left, val);
    }
  };
  traverse(root, val);
  return resRoot;
};
