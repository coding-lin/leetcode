function longestPalindrome(s: string): string {
  let max = '';
 
  for (let i = 0; i < s.length; i++) {
    helper(i, i);  // 长度为奇数的回文串 
    helper(i, i + 1);  // 长度为偶数的回文串
  }

  function helper(l: number, r: number) {
    while(l >= 0 && r < s.length && s[l] == s[r]) {
      l--;
      r++;
    }
    let maxStr = s.slice(l + 1, r);
    if (maxStr.length > max.length) {
      max = maxStr;
    }
  }

  return max;
};

console.log(longestPalindrome("babad"));  // bab