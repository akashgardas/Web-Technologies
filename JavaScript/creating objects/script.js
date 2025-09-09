'use strict';

// creating objects
const obj1 = {
    'name': 'akash gardas',
    'birthYear': 2005,
    printDetails: function() {
        console.log(`Name: ${this.name}`)
        console.log(`Birth Year: ${this.birthYear}`)
    }
}

obj1.printDetails()

const obj2 = new Object();
obj2.name = 'Akash Gardas';
obj2.birthYear = 2005;
obj2.printDetails = function() {
        console.log(`Name: ${this.name}`)
        console.log(`Birth Year: ${this.birthYear}`)
};

obj2.printDetails()

function Obj(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
    this.printDetails = function() {
        console.log(`Name: ${this.name}`)
        console.log(`Birth Year: ${this.birthYear}`)
    }
}

const obj3 = new Obj('Akash', 2005);
obj3.printDetails()