// > const userBase = new UserBase(users);

// > userBase.count();
// 3

// > userBase.getNames();
// [ 'Uma', 'Josh', 'Ollie' ]

// > userBase.getIntroductions();
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]

class UserBase {

    // A constructor, to give initial arguments.
    constructor(users) {

      // We can define attributes stored on the instance with `this`
    this.users = users;
    }

    // A method.
    count() {
        return this.users.length;
    }
    getNames() {
        return this.users.map(user => user.getName());
    }
    getIntroductions() {
        return this.users.map(user => user.getIntroduction());
    }
    
}

module.exports = UserBase;