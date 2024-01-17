// Just printing a literal string
console.log('Hello there');

// Declaring a new variable `age`
age = 25;

// We can concatenate strings with variables using the + operator
console.log('I am ' + age + ' years old');

// Assigning a new value
age = 27;
console.log('I am now ' + age + ' years old!');

//const means that the variable will not be reassigned
const name = 'Charlie';

// 1. This function accepts no arguments
const printMessage1 = () => {
    console.log('Hi there!');
}

  // 2. This function accepts one parameter
const printMessage2 = (message) => {
    console.log(message);
}
  // 3. So far nothing is printed to the console. A function must be called before it runs:
printMessage2('Hi there!');

// If you ever see this syntax, with parentheses followed by that little arrow =>, you are seeing a function being created. 
// Currently this function is unnamed. It's known as an anonymous function.
() => {
    console.log('Hi there!');
};

// If we want to use it later, we need to give it a name by storing it in a variable:
// 1. This function accepts no arguments
const printMessage3 = () => {
    console.log('Hi there!');
}
  // 2. This function accepts one parameter
const printMessage4 = (message) => {
    console.log(message);
}
  // 3. So far nothing is printed to the console. A function must be called before it runs:
printMessage2('Hi there!');

// Note: We use the return keyword to return a value from the function. Be careful - in JavaScript, we have to use return, otherwise our function will return undefined.
const getName = () => {
    return 'Léo';
};

  getName(); // returns 'Léo'

  // 4. Here, we forgot to use `return`.
const getName2 = () => {
    'Léo'
};

  getName(); // returns undefined

// Note: In JavaScript, you must use parentheses () to execute a function, even if it doesn't take any arguments.

// In JavaScript, to use a function outside of the file it is defined in, we need to "export" it using module.exports:
const hello = () => {
    console.log('Hello!');
};

// Add this at the end of the file
module.exports = hello;