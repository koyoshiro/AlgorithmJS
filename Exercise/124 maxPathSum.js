/**
 * 路径     被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。
 *         同一个节点在一条路径序列中 至多出现一次 。
 *         该路径 至少包含一个 节点，且不一定经过根节点。
 * 路径和   是路径中各节点值的总和。
 * 
 * 题目：给你一个二叉树的根节点 root ，返回其 最大路径和 。
 */

const maxPathSum = (root) => {
    let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和

    const dfs = (root) => {
        if (root == null) { // 遍历到null节点，收益0
           return 0;
        }
        const left = dfs(root.left);  // 左子树提供的最大路径和
        const right = dfs(root.right); // 右子树提供的最大路径和

        // Tips：目的是计算内部路径和
        const outputMaxSum = root.val + Math.max(left, right); // 当前子树对外提供的最大和

        // Tips：路径和为负是可以接受的
        const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和
        maxSum = Math.max(maxSum, innerMaxSum);      // 挑战最大纪录


        if (outputMaxSum < 0) { // 对外提供的路径和为负，直接返回0
            return 0;
        }                      
        return outputMaxSum; // 非负，则正常返回
    };

    dfs(root); // 递归的入口
    return maxSum; // 得出最大纪录
};