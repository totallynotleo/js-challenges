/*
Find the unique string in an array, which should all contain letters.

Example:
uniqueString(["alright", "isod", "Alright", "ALRIGHT"]) => "isod"

Test your solution:
mocha 22_uniqueString.js
*/

function uniqueString(array) {
    words = array[0].split('').map(v => v.toLowerCase()).sort()
    for (let i = 0; i < array length; i++) {
        let temp = array[i].split('').sort()
        if () {

        }
    }
}

const assert = require('assert')

describe('Unique string challenge', function() {
    it('Should return the unique string', function() {
        assert.deepEqual(uniqueString(['aa', 'AaA', 'aaaa', 'bBbB', 'aAaA', 'a']), 'bBbB')
        assert.deepEqual(uniqueString(['kios', 'foo', 'ikos', 'ikso', 'kois', 'kiso']), 'foo')
        assert.deepEqual(uniqueString(['abc', ' ', '  ']), 'abc')
    })
})