/**
 * 翻转一棵二叉树。
 */

var invertTree = function(root) {
    if (!root) {
        return root;
    }
    var nodeTmp = root.left;
    root.left = root.right;
    root.right = nodeTmp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};