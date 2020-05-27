/* 
翻转整数
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21 
*/

// 方法1 时间复杂度：O(1) ;空间复杂度:O(1)
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  // 非空判断
  if (typeof x !== "number") {
    return;
  }
  // 极值
  const MAX = 2147483647;
  const MIN = -2147483648;
  let rest = x > 0 ? String(x) : String(x).split(1);
  // 识别数字剩余部分并翻转
  rest = rest.split("").reverse().join("");

  // 转换为正常值，区分正负数
  const result = x > 0 ? parseInt(rest, 10) : 0 - parseInt(rest, 10);

  // 边界情况
  if (result >= MIN && result <= MAX) {
    return result;
  }
  return 0;
};


// 方法2 欧几里得算法 时间复杂度：O(n) ;空间复杂度:O(1)
/**
 * @param {number} x
 * @return {number}
 */
const reverse2 = (x) => {
    // 获取相应数的绝对值
    let int = Math.abs(x);
    // 极值
    const MAX = 2147483647;
    const MIN = -2147483648;
    let num = 0;
  
    // 遍历循环生成每一位数字
    while (int !== 0) {
      // 借鉴欧几里得算法，从 num 的最后一位开始取值拼成新的数
      num = (int % 10) + (num * 10);
      // 剔除掉被消费的部分
      int = Math.floor(int / 10);
    }
    // 异常值
    if (num >= MAX || num <= MIN) {
      return 0;
    }
    if (x < 0) {
      return num * -1;
    }
    return num;
  };