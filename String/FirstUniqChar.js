/* 
字符串中的第一个唯一字符
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
 */

// 方法一 库函数 时间复杂度：O(n^2);空间复杂度：O(1) ;没有开辟额外的空间
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i += 1) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

// 方法二 哈希  时间复杂度：O(n);空间复杂度：O(1) ;开辟空间大小不随输入的变量变化
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const hash = {};
  for (let i = 0; i < s.length; i += 1) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]] += 1;
    }
  }
  for (let i = 0; i < s.length; i += 1) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
