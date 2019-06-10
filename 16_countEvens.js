/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array. 

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes. 

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

const countEvens = arr => {
    var counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            counter += 1;
        }
    }
    return counter;
};

// Your tests here
var assert = require('assert');
describe('countEvens', function() {
    it('Should return 0 for an empty array', function() {
        assert.equal(countEvens([]), 0);
    });
    it('Should return 0 for an array with no even numbers', function() {
        assert.equal(countEvens([1, 5]), 0);
        assert.equal(countEvens([17, 9, 83]), 0);
        assert.equal(countEvens([1, 3, 5, 7]), 0);
    });
    it('Should return correct number for simple number arrays', function() {
        assert.equal(countEvens([1, 2, 3, 4, 5, 6]), 3);
        assert.equal(countEvens([2]), 1);
        assert.equal(countEvens([2, 4]), 2);
    });
    it('Should return correct number for number arrays with negatives', function() {
        assert.equal(countEvens([1, -2, 3, -4]), 2);
        assert.equal(countEvens([2, -2]), 2);
        assert.equal(countEvens([-2]), 1);
    });
    it('Should return for arbitrarily large numbers', function() {
        assert.equal(countEvens([1000000000, 5, 12317298712]), 2);
    });
    it('Should return for arrays with the same number for multiple times', function() {
        assert.equal(countEvens([2, 2, 2, 2, 2, 2, 2, 4, 4]), 9);
    });
});
