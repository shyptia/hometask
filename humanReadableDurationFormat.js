/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human - friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/


function formatDuration (seconds) {
  if (seconds === 0) {
    return 'now';
  }

  let countSeconds = seconds;
  const MINUTE = 60;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const YEAR = 365 * DAY;

  const parts = [];

  const years = Math.floor(countSeconds / YEAR);

  if (years !== 0) {
    parts.push(years === 1 ? '1 year' : `${years} years`);
    countSeconds -= years * YEAR;
  }

  const days = Math.floor(countSeconds / DAY);

  if (days !== 0) {
    parts.push(days === 1 ? '1 day' : `${days} days`);
    countSeconds -= days * DAY;
  }

  const hours = Math.floor(countSeconds / HOUR);

  if (hours !== 0) {
    parts.push(hours === 1 ? '1 hour' : `${hours} hours`);
    countSeconds -= hours * HOUR;
  }

  const minutes = Math.floor(countSeconds / MINUTE);

  if (minutes !== 0) {
    parts.push(minutes === 1 ? '1 minute' : `${minutes} minutes`);
    countSeconds -= minutes * MINUTE;
  }

  if (countSeconds !== 0) {
    parts.push(countSeconds === 1 ? '1 second' : `${countSeconds} seconds`);
  }

  return parts.length === 1
    ? parts[0]
    : parts.slice(0, -1).join(', ') + ' and ' + parts.slice(-1);
}

console.log(formatDuration(62));
console.log(formatDuration(3662));
