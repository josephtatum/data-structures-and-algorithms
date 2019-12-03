const { reverseArray } = require('../arrayReverse.js');

describe('validator module', () => {
    describe('01 validation', () => {
        it('reverses an array that is passed into it', () => {
            expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
            expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
        });
    });
});
