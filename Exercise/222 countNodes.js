
/**
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 */

 /**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    var l = root, r = root;
    // 记录左、右子树的高度
    var hl = 0, hr = 0;
    while (l != null) {
        l = l.left;
        hl++;
    }
    while (r != null) {
        r = r.right;
        hr++;
    }
    // 如果左右子树的高度相同，则是一棵满二叉树
    if (hl == hr) {
        return Math.pow(2, hl) - 1;
    }
    // 如果左右高度不同，则按照普通二叉树的逻辑计算
    return 1 + countNodes(root.left) + countNodes(root.right);
};