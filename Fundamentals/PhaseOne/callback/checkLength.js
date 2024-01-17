// Declare a function checkLength that takes a phone number (as a string) as argument, 
// and returns true if this phone number contains 10 characters or less.

function checkLength(numbers) {    
    if (numbers.length <= 10) {
        return true;
    } else {
        return false;
    }
}

// Now declare a function filterLongNumbers that takes an array of phone numbers. 
//This function should return only numbers that contain 10 characters or less. 
// It should make use of the function checkLength written previously.

function filterLongNumbers(numbers) {
    return numbers.filter(checkLength);
}

module.exports = filterLongNumbers;