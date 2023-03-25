/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/

String.prototype.camelCase = function () {
  if (this.trim() === '') {
    return '';
  }
  
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('');
}

console.log("camel Case method".camelCase());
console.log("test case".camelCase());
console.log("say hello".camelCase());
console.log("camel case word".camelCase());
console.log("".camelCase());
