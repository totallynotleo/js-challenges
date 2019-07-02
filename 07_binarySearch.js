/*
Write a method which will act as a binary search which will find the 
position of a number in a sorted array and the number of steps required 
to find the position. 
When the array has an even number of values, the midpoint index should 
be rounded up.

Example:
    sortedArray = [1,5,8,12,20,21,35]
    searchValue = 8

    In this case the index returned would be 2 and it should take 3 steps. 
    In the first step, 3 is the midpoint index (value = 12). 
    In the second step 1 is the midpoint index (value = 5). 
    In the third and final step we are only left with 8 at index 2.

*/
function getMidpoint(array) {
    return Math.floor(array.length / 2);
}

function binarySearch(sortedArray, searchValue) {
    counter = 0;
    getMidpoint(sortedArray);
    counter += 1;
    
    //Edge Cases & invalid arrays. 
    if (sortedArray.length) == 0 {
        return false
    } elsif (sortedArray.length) == 1 {
        return [1,1]
    }

    
    //splice the half of the array that doesn't include the value
    //do until you find the searchvalue, then return the index number of the thing
}

let assert = require('assert');

describe('Count loops', function() {
    it('Should count one step when search values is in the middle', function() {
        assert.deepEqual([3, 1], binarySearch([1, 3, 7, 10, 14, 19, 31], 10));
    });
    it('Should count one step when search value is only value', function() {
        assert.deepEqual([0, 1], binarySearch([1], 1));
    });
    it('Should count length divided by two steps when value is at beginning', function() {
        assert.deepEqual([0, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 1));
    });
    it('Should count half the array length when value is at an end', function() {
        assert.deepEqual([6, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 31));
    });
});
