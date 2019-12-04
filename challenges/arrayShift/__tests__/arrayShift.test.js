const { insertShiftArray } = require('../array-shift.js');

describe('validator module', () => {
  describe('01 validation', () => {
    it('should add a number into the middle index of an array', () => {
      expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
      expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
    });
  });
});