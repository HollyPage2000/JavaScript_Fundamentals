// In JavaScript, to use a function outside of the file it is defined in, we need to "export" it using module.exports:
const sayHello = (name) => {
    return 'Hello ' + name + '!';
};

// Add this at the end of the file
module.exports = sayHello;