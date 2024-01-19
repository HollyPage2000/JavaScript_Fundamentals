const fizzBuzz = require('./fizzBuzz.js');


describe('fizzbuzz', () => {
    it('divides 3 by 3 or 5', () => {
        expect(fizzBuzz(3)).toBe('Fizz');// TODO: write test
    });
    it('divides 5 by 3 or 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');// TODO: write test
    });
    it('divisdes 8 by 3 or 5', () => {
        expect(fizzBuzz(8)).toBe(8);// TODO: write test
    });
});