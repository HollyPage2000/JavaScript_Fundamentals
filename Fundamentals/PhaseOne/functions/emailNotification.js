//You've previously learned how to declare a function, and you've also seen that a function can be assigned just like a variable. 
//To complete this exercise, you'll have to pass a function as an argument to another function.
// Declare a function notifyByEmail that accepts an email address as argument and returns the string 'Email sent to: <EMAIL>'.
function notifyByEmail(email) {
    return "Email sent to: " + email
}

// Declare a function notifyByText that accepts a phone number (as a string) as argument and returns the string 'Text sent to: <PHONE NUMBER>'.
function notifyByText(phoneNumber) {
    return "text sent to: " + phoneNumber
}

// Now declare a generic function notify that accepts a first string argument (either an email or a phone), and the function to use in second argument. 
//This function should only rely on calling the function passed in second argument, not declare a string by itself.
function notify(notification, functionName) {
return functionName(notification);
};

// Use the function notify with the two previous functions to:
// send an email to hello@makers.tech.test and get the expected output.
console.log(notify('hello@makers.tech.test', notifyByEmail));

// send a text to +10000000000 and get the expected output.
console.log(notify('+10000000000', notifyByText));