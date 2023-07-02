// npx mocha tests/5_16_tests.mjs
import assert from 'assert';
import { checkLength, isPalindrome1, strMk1, test10 } from '../js/functions.js';

console.log(test10);

describe('checkLength', function() {
  it('should return true when length is less than or equal to limit', function() {
    assert.strictEqual(checkLength('Hello', 5), true);
  });

  it('should return false when length is greater than limit', function() {
    assert.strictEqual(checkLength('Hello', 3), false);
  });
});
