/**
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
 */

 /**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root){
        return root;
    }
    connectTwoNode(root.left,root.right);
    return root;
};

var connectTwoNode= function(node1,node2){
    if(node1==null||node2==null){
        return;
    }
    node1.next = node2;

    // 连接相同父节点的两个子节点
    connectTwoNode(node1.left, node1.right);
    connectTwoNode(node2.left, node2.right);
    // 连接跨越父节点的两个子节点
    connectTwoNode(node1.right, node2.left);
}