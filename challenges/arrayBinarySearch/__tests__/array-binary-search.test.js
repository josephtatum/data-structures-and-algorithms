const { binarySearch } = require('../array-binary-search.js');

describe('validator module', () => {
    describe('01 validation', () => {

        it('rreturns the index of a number if it finds it in an array', () => {
            expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
        });

        it('returns -1 if it finds no match', () => {
            expect(binarySearch([4, 8, 15, 16, 23, 42], 9)).toEqual(-1);
        });
    });
});
