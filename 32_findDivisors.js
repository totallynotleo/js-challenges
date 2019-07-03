//Find the divisors!
/*
Problem Description: Create a function named divisors that takes an integer and returns an array with all of the 
integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime'
(use Either String a in Haskell).
Example:
divisors(12); //should return [2,3,4,6]
divisors(25); //should return [5]
divisors(13); //should return "13 is prime"
You can assume that you will only get positive integers as inputs.
*/

function divisors(integer) {
    let returnArray = [];
    for (let i = 2; i <= integer / 2; i++) {
        if (integer % i === 0) {
            returnArray.push(i);
        }
    }
    return returnArray.length == 0
        ? `${integer} is prime`
        : returnArray.join(', ');
}

let assert = require('assert');

describe('Should return the divisors of the input', () => {
    it('Should return the divisors of 10', () => {
        assert.equal(divisors(10), '2, 5');
    });

    it('Should return the divisors of 8', () => {
        assert.equal(divisors(8), '2, 4');
    });

    it('Should return the divisors of 12', () => {
        assert.equal(divisors(12), '2, 3, 4, 6');
    });

    it('Should return the divisors of 120', () => {
        assert.equal(
            divisors(120),
            '2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40, 60'
        );
    });
});
describe('Should return for prime number', () => {
    it("Should return '13 is prime'", () => {
        assert.equal(divisors(13), '13 is prime');
    });
});
