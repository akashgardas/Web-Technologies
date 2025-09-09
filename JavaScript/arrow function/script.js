'use strict';
// Arrow functions

const calcAge = birthYear => {
    let year = new Date().getFullYear();
    return year - birthYear;
};

console.log(calcAge(2005));
