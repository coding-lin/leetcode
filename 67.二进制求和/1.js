/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    // 1.巧妙解法
    var a = '0b' + a;
    var b = '0b' + b;
    var sum = BigInt(a) + BigInt(b);
    return sum.toString(2);

    // 2.传统解法
    // let i = a.length - 1;
	// let j = b.length - 1;
    // let res = [];
	// let up = 0;  // up 表示进位
	
	// while (i >= 0 || j >= 0) {
	// 	let cur1 = a.charAt(i) - '0';  // string -> number
	// 	let cur2 = b.charAt(j) - '0';  // string -> number
	// 	let temp = cur1 + cur2 + up;
	// 	if (temp >= 2) {
	// 		up = 1;
	// 		temp -= 2;
	// 	} else {
	// 		up = 0;
	// 	}
	// 	i--;
	// 	j--;
	// 	res.unshift(temp + '');  // 在数组开头添加字符串类型的 temp
	// }

	// if (up !== 0) {
	// 	res.unshift(up + '');  // 如果进位不为 0，添加到数组开头
	// }

	// return res.join('');  // 将数组元素转为字符串
};

// addBinary('10111', '100000');
console.log(addBinary('101', '11'));