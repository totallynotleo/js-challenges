// //Count the divisible numbers
// Problem Description: Write function divisibleCount(x, y, z) that takes in 3 numbers x, y and z, and returns the number
// of integers within the range [x..y] that are divisible by z i.e.:
// For example:
// x = 6, y = 11 and z = 2, your function should return 3, because there are three numbers divisible by 2 within the
// range [6..11], namely 6, 8 and 10.

function divisibleCount(x, y, z) {
    let returnArray = [];
    for (x; x <= y; x++) {
        if (x % z === 0) {
            returnArray.push(x);
        }
    }
    return returnArray.length;
}

let assert = require('assert');

describe('Should return a correct result with example given', () => {
    it('should return 3', () => {
        assert.equal(divisibleCount(6, 11, 2), '3');
    });
});

describe('Should return 0 if range does not contain a factor', () => {
    it('should return 0', () => {
        assert.equal(divisibleCount(1, 3, 10), '0');
    });
});
