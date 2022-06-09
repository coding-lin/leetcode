/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let f = obstacleGrid;
  let m = f.length;
  let n = f[0].length;

  if (f[0][0] === 1) {
    return 0;
  } else {
    f[0][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    (f[i][0] === 1) ? (f[i][0] = 0) : (f[i][0] = f[i - 1][0]);
  }

  for (let j = 1; j < n; j++) {
    (f[0][j] === 1) ? (f[0][j] = 0) : (f[0][j] = f[0][j - 1]);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      (f[i][j] === 1) ? (f[i][j] = 0) : (f[i][j] = f[i - 1][j] + f[i][j - 1]);    
    }
  }

  return f[m - 1][n - 1];
};