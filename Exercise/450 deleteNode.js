/**
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。
 * 返回二叉搜索树（有可能被更新）的根节点的引用。
 */

 /**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root == null) return null;
    if (root.val == key) {
        // 恰好是末端节点，两个子节点都为空
        if (root.left == null && root.right == null){
            return null;
        }
        // 只有一个非空子节点，那么它要让这个孩子接替自己的位置
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;
        // 有两个子节点，必须找到左子树中最大的那个节点，或者右子树中最小的那个节点来接替自己。
        let minNode = getMin(root.right);
        root.val = minNode.val;
        root.right = deleteNode(root.right, minNode.val);
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    }
    return root;
}

var getMin = function(node) {
    // BST 最左边的就是最小的
    while (node.left != null) node = node.left;
    return node;
} 