/*
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
count_vowels("The quick brown fox") should return ["e","u","i","o","o"]
count_vowels("Hello World") should return ["e","o","o"]

Check your solution by running the tests:
mocha 12_vowels.js
*/

function vowels2(string) {
    vowelArray = Array.from(string);
    returnArray = [];
    // console.log(vowelArray);
    for (let i = 0; i < vowelArray.length; i++) {
        if (
            vowelArray[i].toLowerCase() === 'a' ||
            vowelArray[i].toLowerCase() === 'e' ||
            vowelArray[i].toLowerCase() === 'i' ||
            vowelArray[i].toLowerCase() === 'o' ||
            vowelArray[i].toLowerCase() === 'u'
        ) {
            returnArray.push(vowelArray[i]);
        }
    }
    return returnArray;
}

//using REGEX (shout-out to Rhys for the idea)
function vowels(string) {
    let a = string
        .split('')
        .filter(eachLetter => eachLetter.match(/([aeiou])/gi));
    return a;
}

var assert = require('assert');

describe('vowels', function() {
    it('Should return the vowels from a string', function() {
        assert.deepEqual(vowels('The quick brown fox'), [
            'e',
            'u',
            'i',
            'o',
            'o'
        ]);
        assert.deepEqual(vowels('Hello World'), ['e', 'o', 'o']);
    });
    it('Test vowels casing', function() {
        assert.deepEqual(vowels('cAse tEst'), ['A', 'e', 'E']);
    });
});
