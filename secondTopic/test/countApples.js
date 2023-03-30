const str = 'Hello team. Today I bought a lot of  :apple::apple::apple: and I would like to share them with you.  <@Viktor/><@kate/>received:apple::apple::apple:, <@max/>:apple:<@Kate/>:apple:<@Max />:apple:<@Kate />:apple: <@viktor /><@Max /><@Kate /> also got rest:apple::apple:. <@Viktor /><@Kate /><@Max /> Thank you all. <@Max /> you are cool guy. <@Kate /> do not use :apple, apple, apple: and : apple :'

// expected result
// {
//     viktor: 5,
//     kate: 7,
//     max: 4
// }

function countApples(str) {
  const pattern = /(?<=@)\w+|:apple:/g;
  const matches = str.match(pattern);
  let countApple = 0;

  return matches.reduceRight((acc, item, index) => {
    if (item === ':apple:') {
      countApple++;
    } else {
      const name = item.toLowerCase();

      if (!acc[name]) {
        acc[name] = 0;
      }

      acc[name] += countApple;

      if (matches[index - 1] === ':apple:') {
        countApple = 0; 
      }
    }

    return acc;
  }, {})
}

console.log(countApples(str));
