const multiply = require("./multiply");

describe('multiply', () => {
    it('multiplies 2 and 2', () => {
    expect(multiply(2,2)).toBe(4);// TODO: write test
    });
    it('multiplies 2 and 3', () => {
    expect(multiply(2,3)).toBe(6);// TODO: write test
    });
    it('multiplies 3 and 3', () => {
    expect(multiply(3,3)).toBe(9);// TODO: write test
    });
});