/**
 * @param {number[][]} envelopes
 * @return {number}
 */
 var maxEnvelopes = function(envelopes) {
    // 如果信封宽度相同，高度降序排列  如果宽度不相同，宽度升序排列 
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    const stack = [];
    const find = (target) => {
        // 定义 left 和 right 指针
        let left = 0, right = stack.length;
        while(left < right) {
            const mid = left + ((right - left) >> 1);
            if (stack[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
    for (let i = 0; i < envelopes.length; i++) {
        // 定义 c 为信封高度
        const c = envelopes[i][1];
        if (!stack.length || c > stack[stack.length - 1]) {
            stack.push(c);
        } else {
            const index = find(c);
            stack[index] = c;
        }
    }
    return stack.length;
};

console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));  // [2,3] [5,4] [6,7]  3