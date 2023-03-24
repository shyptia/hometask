/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  return a.filter(item => !b.includes(item));
}

function arrayDiffWithSet(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);

  for (const value of setB) {
    setA.delete(value);
  }

  return Array.from(setA);
}

console.log(arrayDiff([1, 2], [1]));
console.time('filter');
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.timeEnd('filter');

console.log(arrayDiffWithSet([1, 2], [1]));
console.time('set');
console.log(arrayDiffWithSet([1, 2, 2, 2, 3], [2]));
console.timeEnd('set');
