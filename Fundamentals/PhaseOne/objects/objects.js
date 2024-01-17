// in JavaScript, "object" usually refers to a type of key-value structure, similar to a Ruby hash. 
// Here's an example of a JavaScript object:

const person = { // name is a key-value pair (object), and
    name: 'Maxine',
    age: 32,
    address: 'London, E1 123'
};

  // both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);

// heres another example of a JavaScript object:

const bankAccount = {
    // simple value attributes
    accountNumber: 376782676,
    accountSortCode: 999999,

    // we can attach functions too (so they act like 'methods'):
    getBalance: () => {
        return 100;
    }
};

bankAccount.getBalance();