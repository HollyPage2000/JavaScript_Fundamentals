// Create an array of all numbers from 1 to 10. Calculate the sum of all these numbers by looping through the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach((number) => {return sum += number});

console.log(sum);

// for (let i = 0; i < numbers.length; i++) {
// sum += numbers[i];
// }