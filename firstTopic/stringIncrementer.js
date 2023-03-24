/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
  const pattern = /[\d]+$/;
  const match = strng.match(pattern) || '';
  const numString = match[0] || '';
  const number = String(+numString + 1).padStart(numString.length, '0');

  return strng.slice(0, match.index) + number;
}

console.log(incrementString('foobar'));
console.log(incrementString('foobar000'));
console.log(incrementString('foobar999'));
console.log(incrementString('foobar00999'));
