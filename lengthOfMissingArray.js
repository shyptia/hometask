/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
*/

function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return 0;
  }

  const sortedArray = arrayOfArrays.sort((a, b) => a.length - b.length);
  
  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i].length === 0 || !sortedArray[i]) {
      return 0;
    }
    
    if (sortedArray[i].length + 1 !== sortedArray[i + 1].length) {
      return sortedArray[i].length + 1;
    }
  }
}

console.log(getLengthOfMissingArray([
  [4, 3, 2, 0],
  [4, 1, 3, 1, 4, 3, 1],
  [2, 4, 1, 4, 1, 1, 4, 4],
  [1, 4, 1, 4, 2, 2]
]));
