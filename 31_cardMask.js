//Credit Card Mask
/*
Problem Description: Usually when you buy something, you're asked whether your credit card number, phone number or 
answer to your most secret question is still correct. However, since someone could look over your shoulder, you 
don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("1233333") == "###3333"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "######################################man!"
*/

function maskify(input) {
    inputArray = input.split('');
    for (let i = 0; i < inputArray.length - 4; i++) {
        inputArray[i] = '#';
    }
    return inputArray.join('');
}

let assert = require('assert');
describe('maskify', () => {
    it('should mask all but the last 4', () => {
        assert.equal(maskify('123456789'), '#####6789');
    });
});
describe('maskify', () => {
    it('should mask all but the last 4 - only 4', () => {
        assert.equal(maskify('6789'), '6789');
    });
});
describe('maskify', () => {
    it('should return empty for empty', () => {
        assert.equal(maskify(''), '');
    });
});
describe('maskify', () => {
    it('Example Case 1', () => {
        assert.equal(maskify('1233333'), '###3333');
    });
});
describe('maskify', () => {
    it('Example Case 2', () => {
        assert.equal(maskify('64607935616'), '#######5616');
    });
});
describe('maskify', () => {
    it('Example Case 3', () => {
        assert.equal(maskify('1'), '1');
    });
});
describe('maskify', () => {
    it('Example Case 4', () => {
        assert.equal(maskify('Skippy'), '##ippy');
    });
});
describe('maskify', () => {
    it('Example Case 5', () => {
        assert.equal(
            maskify('Nananananananananananananananana Batman!'),
            '####################################man!'
        );
    });
});
