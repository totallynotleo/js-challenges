/*
Create a function which will take a value and multiply it a
specific number of times. 

If the times parameter is not a valid number the code should
return null.

Examples:
valueAndTimes(9,2) == 9 * 2 == 18
valueAndTimes("[alright]",3) == "[alright]" + "[alright]" + "[alright]" == "[alright][alright][alright]"
valueAndTimes(5,["kanye west"]) == null

If your feeling confident add more tests below.
*/

const valueAndTimes = (value, times) => {
    // check that times is valid else return null
    if (typeof times != 'number') {
        return null;
    }
    //check if value is a string and if so concatenate the value and decrement times
    if (typeof value == 'string') {
        returnValue = '';
        while (times > 0) {
            times--;
            returnValue += value;
        }
        return returnValue;
    }
    // otherwise just return value * times
    return value * times;
};

let assert = require('assert');

describe('Multiply tests', () => {
    it('Should multiply the values and times when both are numbers', () => {
        assert.equal(valueAndTimes(9, 2), 18);
        assert.equal(valueAndTimes(9.5, 2.1), 19.95);
    });
    it('Should multiply when the value is a string', () => {
        assert.equal(
            valueAndTimes('[alright]', 3),
            '[alright][alright][alright]'
        );
    });
    it('Should return null when the times is not a number', () => {
        assert.equal(valueAndTimes(4, '[kanye west]'), null);
        assert.equal(valueAndTimes(2, 'taylor swift'), null);
        assert.equal(valueAndTimes(7, { a: 'matthew mcconaughey' }), null);
    });
});
