// # A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. We will restrict ourselves to decimal (base 10).

// # For example, take 153 (3 digits):

// #     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// # and 1634 (4 digits):

// #     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// # The Challenge:

// # Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// # Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

function narcissisticNumber(number) {
    // Create an Array
    var numberArray = number
        .toString()
        .split('')
        .map(Number);

    //Create a counter
    let numberCheck = 0;
    for (let i = 0; i < numberArray.length; i++) {
        // Increment counter based on value ^ array.length
        numberCheck += Math.pow(numberArray[i], numberArray.length);
    }
    return numberCheck == number;
}

let assert = require('assert');

describe('Not a narcissistic number', () => {
    it('Should return false for 12', () => {
        assert.equal(narcissisticNumber(12), false);
    });
    it('Should return false for 123', () => {
        assert.equal(narcissisticNumber(123), false);
    });
});
describe('A narcissistic number', () => {
    it('Should return true for 153', () => {
        assert.equal(narcissisticNumber(153), true);
    });
    it('Should return true for 1634', () => {
        assert.equal(narcissisticNumber(1634), true);
    });
});
