/**
 * 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 * 两棵树重复是指它们具有相同的结构以及相同的结点值。
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  // 记录所有子树以及出现的次数
  var count = new Map();
  // 记录重复的子树根节点
  var res = [];

  var traverse = function (root) {
    if (root == null) {
      return '#';
    }

    var left = traverse(root.left);
    var right = traverse(root.right);

    // 判断重复用的唯一码
    var key = left + ',' + right + ',' + root.val;

    if (count.has(key)) {
      count.set(key, count.get(key) + 1);
    } else {
      count.set(key, 1);
    }
    // 发现重复时
    if (count.get(key) === 2) {
      res.push(root);
    }
    return key;
  };
  traverse(root);
  return res;
};
