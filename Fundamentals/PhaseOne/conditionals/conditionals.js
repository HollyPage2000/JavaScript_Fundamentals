
// Conditionals work in the same way as other languages
// Need () to enclose the conditionals
// Need {} to enclose the code body executed following this conditional


// if (a === 10) {
//   do these things
// } else if (a === 20) {
//   something else?
// } else {
//   whatever
// }

function getNumberSign(number) {
if (number === 0) {
    return ("zero");
} else if (number > 0) {
    return ("positive");
} else {
    return ("negative");
}
}


console.log(getNumberSign(1));
console.log(getNumberSign(-1));



module.exports = getNumberSign;