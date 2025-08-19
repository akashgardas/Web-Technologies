'use strict';

// scientific calculator
const a = 10;
const b = 3;

const add = (a, b) => {
	return a + b;
};
 
const sub = (a, b) => {
	return a - b;
};

const div = (a, b) => {
	return a / b;
};

const prod = (a, b) => {
	return a * b;
};

const sroot = n => {
    return Math.sqrt(n);
}

const square = n => {
    return n*n;
}

console.log(add(a, b));
console.log(sub(a, b));
console.log(div(a, b));
console.log(prod(a, b));
console.log(sroot(23));
console.log(square(5));

