//time convert
/* Have the function TimeConvert(num) take the num parameter being passed 
    and return the number of hours and minutes the parameter converts to (ie. if 
    num = 63 then the output should be 1:3). 
    Separate the number of hours and minutes with a colon. 
    */

function timeConvert(num) {
    return `${Math.floor(num / 60)}:${num % 60}`;
}

let assert = require('assert');

describe('Should return the time in hours', () => {
    it('Should return 1:3 for 63', () => {
        assert.equal(timeConvert(63), '1:3');
    });
    it('Should return 2:0 for 120', () => {
        assert.equal(timeConvert(120), '2:0');
    });
    it('Should return 0:45 for 45', () => {
        assert.equal(timeConvert(45), '0:45');
    });
    it('Should return 0:0 for 0', () => {
        assert.equal(timeConvert(0), '0:0');
    });
});
