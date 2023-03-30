const text = 'Hello Mike. Here is my phone number +38 (098) 330-00-03, my wife phone number 068-339-09-09 and my sun number 0683390791. Please use same country code +38 to have opportunity to call me'

// [ '38 (098) 330-00-03', '068-339-09-09', '0683390791' ]

const pattern = /(\+?)\d+[\d\s\(\)\-]+\d/g;
const matches = text.match(pattern);
console.log(matches);
