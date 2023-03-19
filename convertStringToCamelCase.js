/*
Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
  const words = str
    .split(/[-_]/)
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      
      return word[0].toUpperCase() + word.slice(1);
    });

  return words.join('');
}

console.log(toCamelCase('the_stealth_warrior'));
console.log(toCamelCase('The-Stealth-Warrior'));
console.log(toCamelCase('A-B-C'));
console.log(toCamelCase('a-cat_was-kawaii'));
console.log(toCamelCase('A-cat_Was_Savage'));
console.log(toCamelCase('A_Pippi-Is-pippi'));
console.log(toCamelCase('the-Pippi_Is_Pippi'));