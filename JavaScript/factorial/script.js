'use strict';

// factorial of a number
const factorial = function(num) {
	if (num == 0 || num == 1)
		return 1;
	return num * factorial(num - 1);
};

const nums = [1, 2, 7, 10];
for (let i = 0; i < nums.length; i ++) 
	console.log(factorial(nums[i]));
