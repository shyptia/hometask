/*
Task
Write function which validates an input string. If the string is a perfect square return true,false otherwise.

What is perfect square?
* We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
* Perfect squares must have same width and height -> cpt.Obvious
* Squares of random sizes will be tested!
Function input:
perfectSquare = "...\n...\n...";    

// This represents the following Perfect Square:

`...
 ...
 ...`
                               
notPerfect = "..,\n..\n...";

// This is not a Perfect Square:

`..,
 ..
 ...`
*/

function perfectSquare(string){
  const pattern = /\.+/g;
  const parts = string.match(pattern);
  
  return parts === null
    ? false 
    : parts.every(part => part.length === parts.length);
}

console.log(perfectSquare("..\n.."));
console.log(perfectSquare("...\n...\n..."));
console.log(perfectSquare("...\n,..\n..."));
console.log(perfectSquare(",,,\n,,,\n,,,"));
