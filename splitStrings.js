/*
Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
  const stringToSplit = str.length % 2 === 1
    ? str + '_'
    : str;
  const regexp = /\w{2}/g;

  return stringToSplit.match(regexp) || [];
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution(""));


// function solution(str){
//    const stringToSplit = str.length % 2 === 1
//     ? str + '_'
//     : str;
//   const resultArray = [];
  
//   for (let i = 0; i < stringToSplit.length - 1; i += 2) {
//     resultArray.push(stringToSplit.slice(i, i + 2));
//   }
  
//   return resultArray;
// }
