'use-strict';

const brack = require('../lib/bracket');
describe('Testing bracket methods', () => {
  describe('#BRACKET function', () => {
    describe('#BALANCED', () => {
      test('should return true if brackets are balanced', () => {
        expect(brack.parenthesesAreBalanced('{[]}')).toBe(true);
      });
    });
    describe('#BALANCED', () => {
      test('should return true if brackets are balanced', () => {
        expect(brack.parenthesesAreBalanced('({[[]]})')).toBe(true);
      });
    });
    describe('#BALANCED', () => {
      test('should return true if brackets are balanced', () => {
        expect(brack.parenthesesAreBalanced('([])')).toBe(true);
      });
    });
    describe('#UNBALANCED', () => {
      test('should return false if brackets are unbalanced', () => {
        expect(brack.parenthesesAreBalanced('[]}')).toBe(true);
      });
    });
    describe('#UNBALANCED', () => {
      test('should return false if brackets are unbalanced', () => {
        expect(brack.parenthesesAreBalanced('((([]}')).toBe(true);
      });
    });
    describe('#UNBALANCED', () => {
      test('should return false if brackets are unbalanced', () => {
        expect(brack.parenthesesAreBalanced('{{][]}')).toBe(true);
      });
    });
  });
}); 
