/*
 * Solution to Project Euler problem 19 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 19:
 * You are given the following information, but you may prefer to do some
 * research for yourself.
 *
 * 1 Jan 1900 was a Monday.
 * Thirty days has September,
 * April, June and November.
 * All the rest have thirty-one,
 * Saving February alone,
 * Which has twenty-eight, rain or shine.
 * And on leap years, twenty-nine.
 * A leap year occurs on any year evenly divisible by 4, but not on a century
 * unless it is divisible by 400.
 *
 * How many Sundays fell on the first of the month during the twentieth century
 * (1 Jan 1901 to 31 Dec 2000)?
 */

// number of days per month in a year
let daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Sunday is 0, Monday is 1, Tuesday is 2, and so on
let weekdayOfFirstOfMonth = 1; // start on 1 Jan 1900, which is a Monday (= 1)
let sundaysCount = 0;

for (let year = 1900; year <= 2000; year++) {
  // leap year if divisible by 4 and not by 100, or if divisible by 400
  if ((year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0)
    daysPerMonth[1] = 29;
  else
    daysPerMonth[1] = 28;

  daysPerMonth.forEach(function(daysThisMonth) {
    if (weekdayOfFirstOfMonth === 0 && year >= 1901)
      sundaysCount++;
    weekdayOfFirstOfMonth = (weekdayOfFirstOfMonth + daysThisMonth) % 7;
  });
}

let solution = sundaysCount;

console.log(solution);
