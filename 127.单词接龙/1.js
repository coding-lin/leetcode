/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  const queue = [];
  queue.push([beginWord, 1]);

  while(queue.length) {
    const [word, level] = queue.shift();  // 当前出列的单词
    if (word == endWord) return level;
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);  // 拼接成新单词
        if (wordSet.has(newWord)) {  // 单词表中有这个新单词
          queue.push([newWord, level + 1]);  // 作为下一层的词入列
          wordSet.delete(newWord);  // 避免该词重复入列
        }
      }
    }
  }

  return 0;  // BFS结束，没有遇到终点，返回0
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))  // 5 