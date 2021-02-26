/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 */

 /**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // base case
    if (root == null) return null;
    // root本身就是p或者q，显然root就是最近公共祖先
    if (root == p || root == q) return root;

    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    // 如果p和q都在以root为根的树中，那么left和right一定分别是p和q
    if (left != null && right != null) {
        return root;
    }
    // 如果p和q都不在以root为根的树中，直接返回null
    if (left == null && right == null) {
        return null;
    }
    // 如果p和q只有一个存在于root为根的树中，函数返回该节点
    return left == null ? right : left;
};