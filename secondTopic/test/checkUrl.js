function checkUrl(url) {
  const pattern = /^http(s?):\/\/(\w+\.?)\w+([\-]+)?\.[a-z]{2,16}$/

  return pattern.test(url);
}

console.log(checkUrl('https://api......com'));
