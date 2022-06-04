/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    return String(BigInt(digits.join('')) + 1n).split("");
};

console.log(plusOne([1,2,3]));