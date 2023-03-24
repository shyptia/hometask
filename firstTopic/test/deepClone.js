const obj = {
  a: 1,
  x: null,
  k: [1, 2],
  b: 2,
  c: {
    d: 1,
    e: {
      s: {
        f: {
          v: 4
        }
      }
    }
  }
}

function deepClone(obj) {
  if (typeof obj !== 'object' && !Array.isArray(obj)) {
    return obj;
  }
  
  const clonedItem = Array.isArray(obj)
    ? []
    : {};

  const queue = [[clonedItem, Object.entries(obj)]];

  while (queue.length) {
    const [link, entries] = queue.shift();

    entries.forEach(item => {
      const [key, value] = item;

      if (value?.constructor === Object || value?.constructor === Array) {
        const cloned = Array.isArray(value)
          ? []
          : {};
        
        link[key] = cloned;
        queue.push([cloned, Object.entries(value)]);
      } else {
        link[key] = value;
      }
    });

  }

  return clonedItem;
}
