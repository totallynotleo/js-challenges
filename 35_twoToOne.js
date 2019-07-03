//Two to One
/* 
Problem Description:Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the 
longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.
Examples:
let a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
function longest(s1, s2) {
    let sentence = [...(s1 + s2)];
    sentence = Array.from(new Set(sentence));
    return sentence.sort().join('');
}

let assert = require('assert');

describe('Should return the longest possible string of distinct letters, sorted', () => {
    it('Should return the longest sorted string', () => {
        assert.equal(
            longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'),
            'abcdefklmopqwxy'
        );
    });
    it('Should return the longest sorted string', () => {
        assert.equal(
            longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'),
            'abcdefghijklmnopqrstuvwxyz'
        );
    });
});
