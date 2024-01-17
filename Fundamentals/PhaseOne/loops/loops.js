// JavaScript has the same basic kinds of loops than in other languages, such as while and for:
// For all numbers from 0 to 10
// for (let i = 0 ; i <= 10 ; i++) {
//     console.log(i);
// }

//   // A 'while' loop doing the same thing
// let i = 0

// while (i <= 10) {
//     console.log(i);

//     i += 1;
// }
const getParity = (i) => {
    if (i % 2 === 0){
        return(" is even");
    } else {
        return(" is odd");
    }
}

for (let i = 0 ; i <= 20 ; i++) {
    const parity = getParity(i);
    console.log(i + parity);
}

module.exports = getParity;
