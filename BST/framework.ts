interface ITreeNode {
  val: number;
  left: ITreeNode;
  right: ITreeNode;
}

function BSTFramework(root: ITreeNode, target: any) {
  if (root.val == target) {
    // 匹配成功，此处实现逻辑
  }
  if (root.val < target) {
    BSTFramework(root.right, target);
  }
  if (root.val > target) {
    BSTFramework(root.left, target);
  }
}

function delBSTNode(root: ITreeNode, key: number): null | ITreeNode {
  if (root == null) return null;
  if (root.val == key) {
    if (root.left == null && root.right == null) {
      // 恰好是末端节点，两个子节点都为空，直接删除
      return null;
    } else {
      // 只有一个子节点，那么它要让该节点接替被删除的节点。
      if (root.left == null) return root.right;
      if (root.right == null) return root.left;
    }
    // 有两个子节点
    const minNode: ITreeNode = getMin(root.right);
    root.val = minNode.val;
    root.right = delBSTNode(root.right, minNode.val);
  } else if (root.val > key) {
    root.left = delBSTNode(root.left, key);
  } else if (root.val < key) {
    root.right = delBSTNode(root.right, key);
  }
  return root;
}

function getMin(node: ITreeNode): ITreeNode {
  // BST 最左边的就是最小的
  while (node.left != null) node = node.left;
  return node;
}
