// add function adds two numbers and returns the sum

const multiply = require("./multiply");

function add(a, b) {
    return a + b;
}

module.exports = add

// using a function inside another function
// Using the multiply function and the add function

multiply(2, add(4,4));

// when adding or multiplying or anything with multiple numbers you need a , in between

// var is a legacy keyword to declare a variable
var total1 = 120;

// equivalent to
let total = 120;

// The function word can be used to create a function
function add(a, b) {
    return a + b;
}
  // equivalent to
const add = (a, b) => {
    return a + b;
}

  // also equivalent to
var add = function (a, b) {
    return a + b;
}