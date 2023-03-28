const arr = [{value: 1}, {value: 2}, 5, 6, 7, 'test', 'test2', 'test3', 'test4', false, null, undefined, [123], [456], new Date("2021-06-22"), new Date("2022-02-01")];

function sortByType(arr) {
  return arr.reduce((acc, item) => {
    let type = typeof item;

    if (Array.isArray(item)) {
      type = 'array'
    }

    if (item === null) {
      type = 'null';
    }

    if (item?.constructor === Date) {
      type = 'date';
    }

    if (!acc[type]) {
      acc[type] = [];
    }

    acc[type].push(item);

    return acc;
  }, {});
}

console.log(sortByType(arr));

/*
Очікуваний результат
{
  object: [ { value: 1 }, { value: 2 } ],
  number: [ 5, 6, 7 ],
  string: [ 'test', 'test2', 'test3', 'test4' ],
  boolean: [ false ],
  null: [ null ],
  undefined: [ undefined ],
  array: [ [ 123 ], [ 456 ] ],
  date: [new Date("2021-06-22"), new Date("2022-02-01")]
}
*/
