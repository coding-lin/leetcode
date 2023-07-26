/**
 * 将零移动到数组后面
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const n = nums.length;
  let left = 0, right = 0;
  while (right < n) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
};

/**
 * 将零移动到数组前面
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes_ = function(nums) {
  const n = nums.length;
  let left = n - 1, right = n - 1;
  while (right >= 0) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left--;
    }
    right--;
  }
  return nums;
};

console.log(moveZeroes([-1,0,1,0,3,0,12]));  // [-1,1,3,12,0,0,0]
console.log(moveZeroes_([-1,0,1,0,3,0,12]));  // [0,0,0,-1,1,3,12]