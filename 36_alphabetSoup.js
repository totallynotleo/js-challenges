//alphabet soup
/* Have the function AlphabetSoup(str) take the str string parameter being passed 
and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
Assume numbers and punctuation symbols will not be included in the string. 
*/

function alphabetSoup(string) {
    return string
        .split('')
        .sort()
        .join('');
}

let assert = require('assert');

describe('Should do the alphabet soup thing', () => {
    it('Turn hello into ehllo', () => {
        assert.equal(alphabetSoup('hello'), 'ehllo');
    });

    it('Turn yeet into eety', () => {
        assert.equal(alphabetSoup('yeet'), 'eety');
    });

    it('Turn this sucks into somethign', () => {
        assert.equal(alphabetSoup('thissucks'), 'chikssstu');
    });
});
