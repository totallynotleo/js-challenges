/*
1. Given an array of numbers, determine whether the sum
of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).
2. What other edge cases should you consider? Add at least 2 more tests
for edge cases.
*/

// if (finalScore % 2 === 0) {
//     console.log(finalScore);

//     return 'even';
// } else (finalScore % 2 === 1) {
//     console.log(finalScore);

//     return 'odd';
// }

function oddOrEven(array) {
    let finalScore = 0;
    for (let i = 0; i < array.length; i++) {
        finalScore += array[i];
    }
    return finalScore % 2 === 0 ? 'even' : 'odd';
}

var assert = require('assert');

describe('oddOrEven', function() {
    it('Should "odd" or "even" depending on the number', function() {
        assert.equal(oddOrEven([0]), 'even');
        assert.equal(oddOrEven([1]), 'odd');
        assert.equal(oddOrEven([]), 'even');
    });
    it('Even tests', function() {
        assert.equal(oddOrEven([0, 1, 5]), 'even');
        assert.equal(oddOrEven([0, 1, 3]), 'even');
        assert.equal(oddOrEven([1023, 1, 2]), 'even');
    });
    it('Negative Even tests', function() {
        assert.equal(oddOrEven([0, -1, -5]), 'even');
        assert.equal(oddOrEven([0, -1, -3]), 'even');
        assert.equal(oddOrEven([-1023, 1, -2]), 'even');
    });
    it('Odd tests', function() {
        assert.equal(oddOrEven([0, 1, 2]), 'odd');
        assert.equal(oddOrEven([0, 1, 4]), 'odd');
        assert.equal(oddOrEven([1023, 1, 3]), 'odd');
    });
    it('Negative Odd tests', function() {
        assert.equal(oddOrEven([0, -1, 2]), 'odd');
        assert.equal(oddOrEven([0, 1, -4]), 'odd');
        assert.equal(oddOrEven([-1023, -1, 3]), 'odd');
    });
});
