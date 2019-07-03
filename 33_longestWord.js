//Longest word
/*Have the function LongestWord(sen) take the sen parameter being passed and return 
the largest word in the string. If there are two or more words that are the same length, 
return the first word from the string with that length. Ignore punctuation and assume sen 
will not be empty. */

function longestWord(sentence) {
    let returnArray = [''];
    sentence = sentence.replace(/[^\w\s]|_/g, '').split(' ');

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].length > returnArray[0].length) {
            returnArray.push(sentence[i]);
            returnArray.shift();
        }
    }
    return returnArray[0];
}

let assert = require('assert');

describe('Should return the longest word', () => {
    it('Should return the longest word', () => {
        assert.equal(longestWord('A b c d YEET'), 'YEET');
    });

    it('Should return the longest word with punctuation ignored', () => {
        assert.equal(longestWord(`i'd like if you didn't help me`), 'didnt');
    });

    it('Should return the longest word that appears first', () => {
        assert.equal(longestWord('Baby fish kill dead guys'), 'Baby');
    });
});
