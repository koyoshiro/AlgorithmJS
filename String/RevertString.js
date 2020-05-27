/* 
反转字符串
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"] 
*/

// 方法一 首尾替换法  时间复杂度：O(n)；空间复杂度：O(1)；没有新开辟的内存空间
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  return s;
};

// 方法二 中间变量首尾替换法  时间复杂度：O(n)；空间复杂度：O(1)；1个临时变量
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    const a = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = a;
  }
};
