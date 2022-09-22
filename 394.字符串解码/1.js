/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let numStack = [];
  let strStack = [];
  let num = 0;
  let res = '';
  
  for (let char of s) {
    if (!isNaN(char)) {  // 如果 char 为数字
      num = num * 10 + Number(char);
    } else if (char === '[') {  // 进栈
      strStack.push(res);
      res = '';
      numStack.push(num);
      num = 0;
    } else if (char === ']') {  // 出栈
      let repeatTimes = numStack.pop();
      res = strStack.pop() + res.repeat(repeatTimes);
    } else {
      res += char;
    }
  }

  return res;
};

console.log(decodeString('abc3[cd]xyz'));  // abccdcdcdxyz