/*
Write code which will return the common characters found in
two different strings. You should only need to return the
characters once.

Examples:
commonCharacters("efg", "feg") => "efg"
commonCharacters("We are both dragon energy", "I am God's vessel") => "eaodg"
commonCharacters("Alright alright alright", "") => ""

*/

const commonCharacters = (string1, string2) => {
    //create 2 arrays
    let array1 = string1.match(/[a-z]/gim);
    let array2 = string2.match(/[a-z]/gim);

    //check for null arrays
    if (array1 == null || array2 == null) {
        return '';
    }

    //create the return array and iterates through to check for shared values.
    let returnarray = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            returnarray.push(array1[i]);
        }
    }
    returnarray = Array.from(new Set(returnarray));

    return returnarray.join('');
};

// Your Code Should Pass:
const chai = require('chai');
const should = chai.should();

describe('Common Characters', () => {
    it('returns commons characters', () => {
        commonCharacters('abc', 'abc').should.equal('abc');
    });

    it('returns common characters', () => {
        commonCharacters('What is love?', "Baby don't hurt me").should.equal(
            'hatoe'
        );
    });

    it('returns common characters', () => {
        commonCharacters(
            'Riding on a buffalo makes me more approachable',
            'so what'
        ).should.equal('oash');
    });

    it('returns empty string', () => {
        commonCharacters('', 'No more').should.equal('');
    });

    it('returns empty string', () => {
        commonCharacters('No more', '').should.equal('');
    });

    it('returns empty string', () => {
        commonCharacters('', '').should.equal('');
    });
});
