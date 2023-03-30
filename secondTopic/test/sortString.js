const data = ['abc', 'def', 'xzy', 'yz', 'fgh'];

//результат функции 'abcdefghxyz'

function sortString(array) {
  const string = array.join('');
  const object = {};

  for (let i = 0; i < string.length; i++) {
    const code = string[i].charCodeAt();
    object[code] = string[i];
  }

  return Object.values(object).join('');
}

console.log(sortString(data));
