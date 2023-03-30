/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
*/

function kebabize(str) {
  const string = str.charAt(0).toLowerCase() + str.slice(1);

  return string.replace(/[A-Z0-9]/g, (match) => {
    if (!isNaN(match)) {
      return '';
    }

    return "-" + match.toLowerCase();
  });
}

console.log(kebabize('myCamelCasedString'));
console.log(kebabize('myCamelHas3Humps'));
console.log(kebabize('CAMEL'));
