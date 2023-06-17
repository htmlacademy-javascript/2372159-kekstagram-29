const { checkLength, isPalindrome1 } = require('../../js/functions');

//##2.29 Нужно больше функций checkLength
it('returns true if Cтрока короче 20 символов', () => {
  expect(checkLength('Wir schaffen das', 20)).toBe(true);
});

it('returns true if Длина строки ровно 18 символов', () => {
  expect(checkLength('Leider nicht heute', 18)).toBe(true);
});


it('returns false if Строка длиннее 10 символов', () => {
  expect(checkLength('Ich verstehe', 10)).toBe(false);
});


//##2.29 Нужно больше функций isPalindrome_1
it("Строка является палиндромом", () => {
  expect(isPalindrome1("топот")).toBe(true);
});
it('Несмотря на разный регистр, тоже палиндром', () => {
  expect(isPalindrome1('ДовОд')).toBe(true);
});
it("Это не палиндром", () => {
  expect(isPalindrome1("Кекс")).toBe(false);
});
it("Это палиндром", () => {
  expect(isPalindrome1("Лёша на полке клопа нашёл ")).toBe(false);
});


