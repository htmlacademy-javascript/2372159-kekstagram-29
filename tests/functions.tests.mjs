//const { checkLength, isPalindrome1, strMk1, test10 } = require('../../js/functions');
//import { checkLength, isPalindrome1, strMk1, test10 } from '../../js/functions.js';
//console.log(test10);

/*
describe('MyFunction', () => {
  it('should return the sum of two numbers', () => {
    expect(MyFunction(2, 3)).toEqual(5);
  });
});
npx mocha tests/functions.tests.mjs
*/

function checkLength(str = '', limit = 0) {
  if (str.length <= limit) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome1(str = '') {
  const normalizedStr = str.toString().replaceAll(' ', '').toLowerCase();
  let reversedStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  return normalizedStr === reversedStr;
}


function strMk1(str = '') {
  const result = str.toString().split('').filter(char => (!isNaN(char) && char !== ' ')).join('');
  return result === '' || isNaN(result) ? NaN : Number(result);
}

describe('module3', () => {

  ///*
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
  it('Строка является палиндром', () => {
    expect(isPalindrome1('топот')).toBe(true);
  });
  it('Несмотря на разный регистр, тоже палиндром', () => {
    expect(isPalindrome1('ДовОд')).toBe(true);
  });
  it('Это не палиндром', () => {
    expect(isPalindrome1('Кекс')).toBe(false);
  });
  it('Это палиндром', () => {
    expect(isPalindrome1('Лёша на полке клопа нашёл ')).toBe(true);
  });

  //##2.29 Дополнительное задание
  it('должна вернуть 2023', () => {
    expect(strMk1('2023 год')).toBe(2023);
  });
  it('должна вернуть 2022', () => {
    expect(strMk1('ECMAScript 2022')).toBe(2022);
  });
  it('должна вернуть 105', () => {
    expect(strMk1('1 кефир, 0.5 батона')).toBe(105);
  });
  it('должна вернуть 7', () => {
    expect(strMk1('агент 007')).toBe(7);
  });
  it('должна вернуть NaN', () => {
    expect(strMk1('а я томат')).toBe(NaN);
  });
  it('должна вернуть 2023', () => {
    expect(strMk1(2023)).toBe(2023);
  });
  it('должна вернуть 1', () => {
    expect(strMk1(-1)).toBe(1);
  });

  it('должна вернуть 15', () => {
    expect(strMk1(1.5)).toBe(15);
  });
  //*/
});


describe('module5', () => {

  ///*
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

});
