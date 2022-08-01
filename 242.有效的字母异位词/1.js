/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const resSet = new Array(26).fill(0);
  let base = "a".charCodeAt();  // 返回字符的 Unicode 编码  a 97

  for(let i of s) {
    resSet[i.charCodeAt() - base]++;
  }
  for(let i of t) {
    if (!resSet[i.charCodeAt() - base]) return false;
    resSet[i.charCodeAt() - base]--;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"))