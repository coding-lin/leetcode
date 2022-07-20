/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board.length;
  let n = board[0].length;
  const used = new Array(m);  // 定义二维矩阵 used，记录是否已访问
  for (let i  = 0; i < m; i++) {
    used[i] = new Array(n);
  }

  const canFind = (row, col, i) => {  // row, col 为当前点的坐标，i 为 word 索引
    if (i == word.length) return true;
    if (row < 0 || row >= m || col < 0 || col >= n) return false;  // 坐标越界，返回 false
    if (board[row][col] != word[i] || used[row][col]) return false;  // 当前坐标已访问或非目标点，返回 false
    used[row][col] = true;  // 记录当前坐标已访问
    // 基于当前点，能否找到剩余字符的路径
    if (
      canFind(row + 1, col, i + 1) ||
      canFind(row - 1, col, i + 1) ||
      canFind(row, col + 1, i + 1) ||
      canFind(row, col - 1, i + 1)
    ) return true;
    used[row][col] = false;  // 不能为剩余字符找到路径，撤销当前点的访问状态 true -> false
    return false;
  }

  for (let i = 0; i < m; i++) {  // 遍历找起点，即单词的第一个字母，作为递归入口
    for (let j = 0; j < n; j++) {
      // 若找到起点且递归结果为真，返回 true
      if (board[i][j] == word[0] && canFind(i, j, 0)) return true;
    }
  }

  return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE'))  // true