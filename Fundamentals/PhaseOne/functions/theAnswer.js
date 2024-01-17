
// If we type the code below into the node REPL
const giveMeTheAnswer = () => {
    return 42
}

giveMeTheAnswer();

// The REPL will print the answer: 42

// But if you put that same code in a file called theAnswer.js and run it with it will print nothing

// in order for something to print to the terminal it needs console.log() otherwise it returns the value but does nothing with the returned value

// to fix this you could
const giveMeTheAnswer2 = () => {
    return 42
}

console.log(giveMeTheAnswer2());

