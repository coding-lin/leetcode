function insert(intervals: number[][], newInterval: number[]): number[][] {
  const res: number[][] = [];
  let len = intervals.length;
  let i = 0;

  while (i < len && intervals[i][1] < newInterval[0]) {  // 左边不重叠的区间
    res.push(intervals[i]);
    i++;
  }

  while (i < len && intervals[i][0] <= newInterval[1]) {  // 有重叠的区间
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);  // 左端取较小者，更新区间的左端
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);  // 右端取较大者，更新区间的右端
    i++;
  }
  res.push(newInterval);  // 循环结束后，将新区间加入 res

  while (i < len) {  // 右边不重叠的区间
    res.push(intervals[i]);
    i++;
  }
  
  return res;
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))  // [[1, 2], [3, 10], [12, 16]]