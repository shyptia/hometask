const request = 1000000;

const ads = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.75, show: 0 },
  { name: 'ad3', price: 1.33, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },
];

function getRandom (list) {
  return list[Math.floor((Math.random()*list.length))];
}

function splitRequest(request, ads) {
  const sum = ads.reduce((acc, item) => acc + item.price, 0);

  ads.forEach((item, index) => {
    const prevIndex = index - 1;
    item.from = prevIndex < 0
      ? 0
      : ads[prevIndex].end;
    item.end = (item.from + item.price / sum);
  })
  
  for (let i = 1; i <= request; i++){
    const randomValue = Math.random();
    const foundAd = ads.find(ad => randomValue >= ad.from && randomValue <= ad.end);
    foundAd.show++;
  }

  return ads;
}

console.log(splitRequest(request, ads));
