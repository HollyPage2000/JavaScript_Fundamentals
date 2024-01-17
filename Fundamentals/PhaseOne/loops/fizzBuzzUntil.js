function fizzBuzzUntil(number) {
    const fizz = require("../conditionals/fizzBuzz");
    
    for (let i = 0 ; i <= number; i++) {
        result = console.log(fizz(i));
    };
    return result;
};

fizzBuzzUntil(20);
module.exports = fizzBuzzUntil;