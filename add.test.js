// describe('add', () => {
//     // test cases
// });

// add(2, 2);

const add = require('./add');

describe('add', () => {
    it('adds 2 and 2', () => {
    expect(add(2,2)).toBe(4);// TODO: write test
    });
    it('adds 2 and 3', () => {
    expect(add(2,3)).toBe(5);// TODO: write test
    });
    it('adds 3 and 3', () => {
    expect(add(3,3)).toBe(6);// TODO: write test
    });
});
