function canConstruct(ransomNote: string, magazine: string): boolean {
  const strArr: number[] = new Array(26).fill(0);

  for (let i = 0; i < magazine.length; i++) {
    strArr[magazine.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    let index: number = ransomNote.charCodeAt(i) - 97;
    if (!strArr[index]) return false;
    strArr[index]--;
  }

  return true;
};

console.log(canConstruct("aa", "aab"))  // true