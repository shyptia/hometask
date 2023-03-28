/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
*/

function kebabize(str) {
  let string = str.replace(/\d/g, '');
  string = string.charAt(0).toLowerCase() + string.slice(1);

  string = string.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());
  return string;
}

console.log(kebabize('myCamelCasedString'));
console.log(kebabize('myCamelHas3Humps'));
console.log(kebabize('CAMEL'));
