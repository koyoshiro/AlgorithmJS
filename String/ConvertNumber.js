/* 
字符串转换整数
输入: "42
输出: 42

输入: "-42"
输出: -42 
*/

// 方法一 正则匹配  时间复杂度：O(1);空间复杂度: O(1)

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
  // 提取需要的字符
  const result = str.trim().match(/^(-|\+)?\d+/g);
  return result
    ? Math.max(
        Math.min(Number(result[0]), Math.pow(2, 31) - 1),
        -Math.pow(2, 31)
      )
    : 0;
};

//   方法二 逐个判断 时间复杂度：O(1);空间复杂度: O(1)
/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
  const news = str.trim();
  if (parseInt(news)) {
    return retrunNum(parseInt(news));
  } else {
    return 0;
  }
};
const retrunNum = function (num) {
  if (num >= -Math.pow(2, 31) && num <= Math.pow(2, 31) - 1) {
    return num;
  } else {
    return num > 0 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
  }
};
