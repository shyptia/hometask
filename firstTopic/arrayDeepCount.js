/*
You are given an array.Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/

function deepCountRecursion(a){
  let count = 0;
  
  for (const item of a) {
    count++;
    
    if (Array.isArray(item)) {
      count += deepCount(item);
    }
  }
  
  return count;
}

function deepCountQueue(a){
  let count = 0;
  const queue = [...Object.values(a)];

  while (queue.length) {
    const item = queue.shift();

    if (Array.isArray(item)) {
      queue.push(...Object.values(item));
    }

    count++;
  }
  
  return count;
}

console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));

console.time('recursion')
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.timeEnd('recursion')

console.time('queue')
console.log(deepCountQueue([1, 2, [3, 4, [5]]]));
console.timeEnd('queue')
