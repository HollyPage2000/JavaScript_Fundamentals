// A callback is a function: 
// But we don't use the name "callback" for any function. 
// Usually, we can say a function is used as "callback" when it's given to another function, to be called later.

// Let's have a look at the native function setTimeout — it allows us to delay the execution of some code after a certain time.
const printMessage = () => {
    console.log('Hello there');
}

setTimeout(printMessage, 2000);
// It gets two arguments:
// the function to execute after the delay
// the delay (in milliseconds, so in the previous example, 2 seconds)

// The function given is the same, but it's not
// assigned to a name before using the `const` keyword.
setTimeout(() => {
    console.log('Hello there');
}, 2000);

function printHello() {
    console.log('Hello!');
};

setTimeout(printHello, 3000);