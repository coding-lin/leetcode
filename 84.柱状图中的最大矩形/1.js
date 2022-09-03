/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = [];  // 新建一个栈
  heights = [0, ...heights, 0];  // 初始化 heights，两端加个 0

  for (let i = 0; i < heights.length; i++) {
    while(heights[i] < heights[stack[stack.length - 1]]) {  // 当前元素比栈顶元素矮
      let stackTopIndex = stack.pop();  // 栈顶元素出栈，并保存索引
      maxArea = Math.max(
        maxArea, 
        heights[stackTopIndex] * (i - 1 - stack[stack.length - 1])
      )
    }
    stack.push(i);
  }

  return maxArea;
};

console.log(largestRectangleArea([2,1,5,6,2,3]))  // 10