//Ones and Zeroes
/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
*/

function binaryConvert(binArray) {
    return parseInt(binArray.join(''), 2);
}

let assert = require('assert');

describe('Should return a decimal number from a binary array of 4 digits', () => {
    it('Should return 1 from [0, 0, 0, 1]', () => {
        assert.equal(binaryConvert([0, 0, 0, 1]), 1);
    });
    it('Should return 2 from [0, 0, 1, 0]', () => {
        assert.equal(binaryConvert([0, 0, 1, 0]), 2);
    });
    it('Should return 5 from [0, 1, 0, 1]', () => {
        assert.equal(binaryConvert([0, 1, 0, 1]), 5);
    });
    it('Should return 9 from [1, 0, 0, 1]', () => {
        assert.equal(binaryConvert([1, 0, 0, 1]), 9);
    });
});

describe('Should return a decimal number from a different sized binary array', () => {
    it('Should return 1 from [0, 0, 0, 0, 0, 1]', () => {
        assert.equal(binaryConvert([0, 0, 0, 0, 0, 1]), 1);
    });
    it('Should return somethign from [1, 1, 1, 1, 1]', () => {
        assert.equal(binaryConvert([1, 1, 1, 1, 1]), 31);
    });
    it('Should return 2 from [1, 0]', () => {
        assert.equal(binaryConvert([1, 0]), 2);
    });
    it('Should return 213 from [0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1]', () => {
        assert.equal(binaryConvert([0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1]), 213);
    });
});
