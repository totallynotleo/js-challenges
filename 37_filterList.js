//List Filtering
/* In this kata you will create a function that takes a list of non-negative integers and strings
 and returns a new list with the strings filtered out.
 filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filterList(array) {
    return array.filter(element => typeof element === 'number').join(', ');
}

// NOTE: Because you can't compate arrays i've created the tests to reflect array.join(', ')

let assert = require('assert');

describe('Should return a filtered list without strings', () => {
    it('Should return 1, 2', () => {
        assert.equal(filterList([1, 2, 'a', 'b']), '1, 2');
    });
    it('Should return 1, 0, 15', () => {
        assert.equal(filterList([1, 'a', 'b', 0, 15]), '1, 0, 15');
    });
    it('Should return 1, 2, 123', () => {
        assert.equal(filterList([1, 2, 'aasf', '1', '123', 123]), '1, 2, 123');
    });
});
