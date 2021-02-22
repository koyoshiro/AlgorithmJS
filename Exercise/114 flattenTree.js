/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 */

var flatten = function(root) {
    if(!root){
        return root;
    }

    // 暂存左右子节点
    var tmpRightNode = root.right;
    var tmpLeftNode = root.left;

    // 按题意拉成链条
    root.right=tmpLeftNode;
    root.left = null;

    // 获得变更后的最新根节点
    var currentRoot = root;
    // 递归到最新根节点下的最后右子节点
    while(currentRoot.right!=null){
        currentRoot = currentRoot.right;
    }
    // 赋值到最后右子节点的右子节点
    currentRoot.right = tmpRightNode;

    flatten(root.left);
    flatten(root.right);
    
    return root;
};