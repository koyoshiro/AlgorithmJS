/**
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */

var isSameTree = function (p, q) {
  function traversal(root1, root2) {
    // 左树或右树存在空值则不相同
    if (root1 === null && root2 !== null) {
      return false;
    } else if (root1 !== null && root2 === null) {
      return false;
    } 
    //  左树和右树都为空值则相同
    else if (root1 === null && root2 === null) {
      return true;
    } 
    //  左右树都不为空值时，判断具体值，再递归各子树情况
    else {
      return root1.val === root2.val && traversal(root1.left, root2.left) && traversal(root1.right, root2.right);
    }
  }
  return traversal(p, q);
};
