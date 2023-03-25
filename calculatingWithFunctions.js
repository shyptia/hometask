/*
This time we want to write calculations using functions and get the results.Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
*/

const zero = (operation) => operation ? operation(0) : 0;
const one = (operation) => operation ? operation(1) : 1;
const two = (operation) => operation ? operation(2) : 2;
const three = (operation) => operation ? operation(3) : 3;
const four = (operation) => operation ? operation(4) : 4;
const five = (operation) => operation ? operation(5) : 5;
const six = (operation) => operation ? operation(6) : 6;
const seven = (operation) => operation ? operation(7) : 7;
const eight = (operation) => operation ? operation(8) : 8;
const nine = (operation) => operation ? operation(9) : 9;

const plus = (firstDigit) => (secondDigit) => firstDigit + secondDigit;
const minus = (firstDigit) => (secondDigit) => secondDigit - firstDigit;
const times = (firstDigit) => (secondDigit) => firstDigit * secondDigit;
const dividedBy = (firstDigit) => (secondDigit) => Math.floor(secondDigit / firstDigit);

console.log(seven(times(five())));
