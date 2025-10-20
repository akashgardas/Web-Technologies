'use strict';

// 1. Factorial

let n = 5

function fact(n) {
    if (n == 0 || n == 1) {
        return 1;
    }

    return n * fact(n-1);
}

console.log(fact(n));

// 2. Fibonacci
function getFibo(n) {
    if ( n==0 )
        return 0;
    if (n == 1)
        return 1;
    return getFibo(n-1) + getFibo(n-2);
}

const fibonacci = function (n) {
    for(let i = 1; i <= n; i ++) {
        console.log(getFibo(i));
    }
}

fibonacci(10);

// 3. Array methods
const myarr = ['akash', 39]
console.log(myarr);
myarr.push('gardas');
console.log(myarr);
myarr.unshift(true);
console.log(myarr);
myarr.shift();
console.log(myarr);


myarr.sort()
console.log(myarr);
myarr.reverse()
console.log(myarr);

console.log(myarr.length);
console.log(myarr.indexOf('akash'));