/*
Complete the solution so that it returns true if it contains any duplicate argument values.Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true
*/

function solution(...args){
  const items = [];

  for (const arg of args) {
    if (items.includes(arg)) {
      return true;
    }

    items.push(arg);
  }

  return false;
}

function solutionWithSet(...args){
  const set = new Set(args);

  return set.size !== args.length;
}

console.log(solution(1,2,3));
console.log(solution(1, 2, 3, 6, 5, 6));
console.time('for');
console.log(solution('a', 'b', 'c', 'a'));
console.timeEnd('for');
console.log(solution(1, 2, 3, 'a', 'b'));

console.log(solutionWithSet(1,2,3));
console.log(solutionWithSet(1, 2, 3, 6, 5, 6));
console.time('set');
console.log(solutionWithSet('a', 'b', 'c', 'a'));
console.timeEnd('set');
console.log(solutionWithSet(1,2,3,'a','b'));
