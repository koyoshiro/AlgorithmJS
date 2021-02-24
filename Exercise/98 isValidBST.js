/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    // 中序遍历后的树结果
  var bstArray = [];
  // 中序遍历
  var traverse = function (root) {
    if (!root) return;

    traverse(root.left);

    bstArray.push(root.val);

    traverse(root.right);
  };

  traverse(root);

  let isValid = true;
  // 比较中序遍历后的前后值，应该为顺序排列，出现非顺序时为异常
  for (let i = 0; i < bstArray.length - 1; i++) {
    if (bstArray[i] >= bstArray[i + 1]) {
      isValid = false;
    }
  }
  return isValid;
};
