/*

A pangram is a sentence that contains every single letter of the 
alphabet at least once. For example, the sentence "The quick brown 
fox jumps over the lazy dog" is a pangram, because it uses the 
letters A-Z at least once.

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not.

If the given string has any uppercase or numbers, it should return false

*/
function isPangram(string) {
    //creates the alphabet
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //iterate through the array, checking if the letter appears in the string
    for (let i = 0; i < 26; i++) {
        //checks each letter of the alphabet for to see if the index number exists within the string, and if not returns false
        if (string.indexOf(alphabet[i]) < 0) return false;
    }
    return true;
}

const assert = require('assert');

describe('Pangram Challenge', function() {
    it('The phrase "the quick brown fox jumps over the lazy dog" should return true', function() {
        assert.equal(
            isPangram('the quick brown fox jumps over the lazy dog'),
            true
        );
    });
    it('The phrase "the five boxing kanye west wizards jump quickly" should return true', function() {
        assert.equal(
            isPangram('the five boxing kanye west wizards jump quickly'),
            true
        );
    });
    it('The phrase "take the dog for a walk" should return false', function() {
        assert.equal(isPangram('take the dog for a walk'), false);
    });
    it('The phrase "alright alright alright" should return false', function() {
        assert.equal(isPangram('alright alright alright'), false);
    });
    it('Should return false if numbers are included in place of letters', function() {
        assert.equal(isPangram('abcdefghijk1mn0pqrstuvwxyz'), false);
    });
    it('Should return false if only numbers are included', function() {
        assert.equal(isPangram('1,2,3,4'), false);
    });
    it('Should return false for uppercase', function() {
        assert.equal(isPangram('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), false);
    });
});

// let alphabet = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z'
// ];
