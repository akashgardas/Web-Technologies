'use strict';

let str = 'Hello World';

console.log(str.length);
console.log(str.concat('hello'));
console.log(str.split(' '));
console.log(str.replace('He', 'D'))
console.log(str.slice(2, 4));
console.log(str.lastIndexOf('o'))
console.log(str.startsWith('H'))
console.log(str.padEnd(15, '#'))
console.log(str.repeat(2))

str = '     hello   ';
console.log(str.trim())
