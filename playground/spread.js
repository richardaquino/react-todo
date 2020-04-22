/* function add( a, b) {
    return a + b;
}

console.log(add(4, 1));

toAdd = [5, 4, 6];
console.log(add(...toAdd)); */

/* var groupA = ['Chard', 'Aquino'];
var groupB = ['KC'];
var number = [4, ...groupA];

console.log(number); */


var person = ['Richard', 25];
var personTwo = ['Shy', 23];

function greet(name, age) {
    console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Ned', 'Samantha'];
var final = ['Richard', ...names];

/* function hi(name) {
    console.log('Hi ' + name);
} */

final.forEach(function(name) {
     console.log('Hi ' + name + '!');
});