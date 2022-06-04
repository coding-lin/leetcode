/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // 1. 将字符串数组反转后再变为字符串与原字符串比较
    // return x.toString() === x.toString().split('').reverse().join('');

    // 2. 反转一半数字
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};

console.log(isPalindrome(12321));