/* 
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
输入: s = "anagram", t = "nagaram"
输出: true 
*/

// 方法一 Sort 时间复杂度：O(nlogn)；空间复杂度： O(n)
const isAnagram = (s, t) => {
    const sArr = s.split('');
    const tArr = t.split('');
    const sortFn = (a, b) => {
      return a.charCodeAt() - b.charCodeAt();
    };
    sArr.sort(sortFn);
    tArr.sort(sortFn);
    return sArr.join('') === tArr.join('');
  };

  // 方法二 计数累加 时间复杂度：O(n)；空间复杂度：O(1)
  const isAnagram2 = (s, t) => {
    if (s.length !== t.length) {
      return false;
    }
    const hash = {};
    for (const k of s) {
      hash[k] = hash[k] || 0;
      hash[k] += 1;
    }
    for (const k of t) {
      if (!hash[k]) {
        return false;
      }
      hash[k] -= 1;
    }
    return true;
  };
