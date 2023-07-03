// npx mocha tests/5_16_tests.mjs
import assert from 'assert';
import { function0516 } from '../js/functions.js';

//console.log(test10);

describe('function0516', function() {
  it('true, если запланированного рабочего дня хватит', function() {
    assert.strictEqual(function0516('08:00', '17:30', '14:00', 90), true);
  });

  it('true, если нет переработки', function() {
    assert.strictEqual(function0516('8:0', '10:0', '8:0', 120), true);
  });

  it('true, если нет переработки', function() {
    assert.strictEqual(function0516('08:00', '14:30', '14:00', 90), false);
  });

  it('true, если нет переработки', function() {
    assert.strictEqual(function0516('14:00', '17:30', '08:0', 90), false);
  });

  it('true, если нет переработки', function() {
    assert.strictEqual(function0516('8:00', '17:30', '08:00', 900), false);
  });

});
