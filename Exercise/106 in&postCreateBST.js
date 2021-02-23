/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 注意:
 * 假设树中没有重复的元素。
 */

 /**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!postorder.length) return null;
        // 后序遍历的最后一项永远是Root
        const node = new TreeNode(postorder[postorder.length-1]);
        // 在中序遍历中寻找该Root的index值
        const index = inorder.indexOf(postorder[postorder.length-1]);
        // 中序遍历中index值的左边为左子树序列
        const inLeft = inorder.slice(0, index);
        // 中序遍历中index值的右边为右子树序列
        const inRight = inorder.slice(index + 1);
        /** 中序遍历中该Root的index值 意味着 左子树有多少个节点
         *  后序遍历中从0至index前一项 为左子树序列
         */
        const postLeft = postorder.slice(0, index);
        // 后序遍历中index开始至最后第二项为右子树序列
        const postRight = postorder.slice(index ,postorder.length-1);
        // 构建左子树
        node.left = buildTree( inLeft,postLeft);
        // 构建右子树
        node.right = buildTree(inRight,postRight);
        // 返回完整BST
        return node;
};