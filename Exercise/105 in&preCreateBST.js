/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 注意:
 * 假设树中没有重复的元素。
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null;
  // 前序遍历的第一项永远是Root
  const node = new TreeNode(preorder[0]);
  // 在中序遍历中寻找该Root的index值
  const index = inorder.indexOf(preorder[0]);
  // 中序遍历中index值的左边为左子树序列
  const inLeft = inorder.slice(0, index);
  // 中序遍历中index值的右边为右子树序列
  const inRight = inorder.slice(index + 1);
  /** 中序遍历中该Root的index值 意味着 左子树有多少个节点
   *  前序遍历中由于去除了Root，故从1开始取到index+1个数 为左子树序列
   */
  const preLeft = preorder.slice(1, index + 1);
  // 前序遍历中index+1开始为右子树序列
  const preRight = preorder.slice(index + 1);
  // 构建左子树
  node.left = buildTree(preLeft, inLeft);
  // 构建右子树
  node.right = buildTree(preRight, inRight);
  // 返回完整BST
  return node;
};
