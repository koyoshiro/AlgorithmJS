/**
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
 *
 * 按照 BST 的定义，如果整数 i 作为根节点，则整数 1 ~ i-1 会去构建左子树，i+1 ~ n 会去构建右子树
 * 以 i 为根节点的 BST 种类数 = 左子树 BST 种类数 * 右子树 BST 种类数
 * 所以，不同的 i 之下，左右 BST 子树任意搭配出不同的组合，就构成了不同的 BST
 */

const generateTrees = (n) => {
  if (n == 0) return [];

  const getAllBSTs = (low, high) => {
    // 组成上下级的树节点颠倒，返回null,如 3>2
    if (low > high) return [null];
    // 组成上下级的树节点相等，返回自身，如 1=1
    if (low == high) return [new TreeNode(low)];
    const res = []; // 结果集

    for (let i = low; i <= high; i++) {
      // 生成所有可能的左子树
      const leftBSTs = getAllBSTs(low, i - 1);
      // 生成所有可能的右子树
      const rightBSTs = getAllBSTs(i + 1, high);
      // 以i为根节点的总数 = 左子树* 右子树
      for (const leftBST of leftBSTs) {
        for (const rightBST of rightBSTs) {
          const root = new TreeNode(i);
          root.left = leftBST;
          root.right = rightBST;
          res.push(root); // 推入结果集
        }
      }
    }
    return res;
  };

  return getAllBSTs(1, n);
};
