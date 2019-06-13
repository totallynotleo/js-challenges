/*
Find Last Index
Iterate through an array in reverse, returning the index closest
to the end where the predicate truth test passes.

Try adding some tests.
One example could be what if the object is not found in the array
at all.

Example:
const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Matthew', 'last': 'McConaughey'},
             {'id': 4, 'name': 'Kanye', 'last': 'West'}];
_.findLastIndex(users, {
  name: 'Kanye'
});
=> 3
*/

// for (let i = 0; i < array.length; i++) {
//     if (reversedArray[i] == needle) {
//         return array.findIndex(reversedArray[i]);
//     } else if (reversedArray[i].needle) {
//         return array.findIndex(reversedArray[i]);
//     }
// }
const findLastIndex = (array, needle) => {
    let reversedArray = array.reverse();
    let keyToFind = Object.keys(needle)[0];
    let valueToFind = Object.values(needle)[0];
    object = { keyToFind: valueToFind };
    for (let i = 0; i < reversedArray.length; i++) {
        for (key in reversedArray[i]) {
            if (key == keyToFind) {
                obj.value = valueToFind;
                return array.findIndex(reversedArray[i]);
            }
        }
    }
    return null;
};

// Check your solution by running these tests: mocha last_index.js
const assert = require('assert');

describe('Find Last Index', () => {
    it('finds the last index', () => {
        const objects = [
            { a: 0, b: 0 },
            { a: 1, b: 1 },
            { a: 2, b: 2 },
            { a: 0, b: 0 }
        ];
        const result = findLastIndex(objects, { a: 0 });
        assert.equal(result, 3);
    });
    it('returns null if not found', () => {
        const malcolm = [{ yes: 1, no: 0 }, { yes: 0, no: 1 }];
        const result = findLastIndex(malcolm, { maybe: 1 });
        assert.equal(result, null);
    });
});
