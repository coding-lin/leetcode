/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(grid, i, j));
      }
    }
  }

  return maxArea;
};
/**
 * @param {number[][]} grid
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
function dfs(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) return 0;
  let area = 1;
  grid[i][j] = 0;
  area += dfs(grid, i + 1, j);
  area += dfs(grid, i - 1, j);
  area += dfs(grid, i, j + 1);
  area += dfs(grid, i, j - 1);
  return area;
}

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
                             [0,0,0,0,0,0,0,1,1,1,0,0,0],
                             [0,1,1,0,1,0,0,0,0,0,0,0,0],
                             [0,1,0,0,1,1,0,0,1,0,1,0,0],
                             [0,1,0,0,1,1,0,0,1,1,1,0,0],
                             [0,0,0,0,0,0,0,0,0,0,1,0,0],
                             [0,0,0,0,0,0,0,1,1,1,0,0,0],
                             [0,0,0,0,0,0,0,1,1,0,0,0,0]
                            ]));  // 6
