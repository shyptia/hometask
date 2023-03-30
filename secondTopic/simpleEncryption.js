/*
Implement a pseudo - encryption algorithm which given a string S and an integer N concatenates all the odd - indexed characters of S with all the even - indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
  let count = n;
  let stringToEncrypt = text;
  
  while (count > 0) {
    const letters = stringToEncrypt.split('');
    let even = '';
    let odd = '';

    for (let i = 0; i < letters.length; i++) {
      if (i % 2 === 0) {
        even += letters[i];
      } else {
        odd += letters[i];
      }
    }
    
    stringToEncrypt = odd + even;
    count--;
  }
  
  return stringToEncrypt;
}

console.log(encrypt("This is a test!", 0));
console.log(encrypt("hsi  etTi sats!", 1));
console.log(encrypt("s eT ashi tist!", 2));
console.log(encrypt(" Tah itse sits!", 3));
console.log(encrypt("This is a test!", 4));
console.log(encrypt("This is a test!", -1));
console.log(encrypt("hskt svr neetn!Ti aai eyitrsig", 1));
