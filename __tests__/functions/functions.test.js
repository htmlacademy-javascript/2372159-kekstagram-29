const { checkLength } = require('../../js/functions');

it('returns true if Cтрока короче 20 символов', () => {
  expect(checkLength('Wir schaffen das', 20)).toBe(true);
});

it('returns true if Длина строки ровно 18 символов', () => {
  expect(checkLength('Leider nicht heute', 18)).toBe(true);
});


it('returns false if Строка длиннее 10 символов', () => {
  expect(checkLength('Ich verstehe', 10)).toBe(false);
});
