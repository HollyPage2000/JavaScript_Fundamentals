// Colleague has asked you to debug their code

let isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length == validLength) {
    return true;
    } else {
    return false;
    }
}

console.log(isValidLength("1234567890"));

module.exports = isValidLength; 