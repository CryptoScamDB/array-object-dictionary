const dictionary = require('./src/index'); // const dictionary = require('@cryptoscamdb/array-object-dictionary');

const cats = [{
    name: "Kitty",
	age: 4
},{
    name: "Tiger",
	age: 4
},{
    name: "Misty",
	age: 6
}]

console.log(dictionary(cats));
