// Declare a function lowercaseMessage that returns the lowercase version of the given string.
function lowercaseMessage(message) {
    return message.toLowerCase();
}
// Declare a function transform that behaves like the one above:
// takes one string and one function as arguments
// calls the function on the given string.
function transform(message, transformFunction) {
    return transformFunction(message);
}
// Call transform by giving it the string 'WHY ARE YOU SHOUTING?' and the function lowercaseMessage. 
// It should return a lowercase version of the message ('why are you shouting?')
console.log(transform('WHY ARE YOU SHOUTING?', lowercaseMessage));