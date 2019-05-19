/*
 * Solution to Project Euler problem 17 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 17:
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 * then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out
 * in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
 * forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
 * letters. The use of "and" when writing out numbers is in compliance with
 * British usage.
 */

// count the letters of all words required

let oneToNine = ["one", "two", "three", "four", "five", "six", "seven",
                "eight", "nine"];
oneToNine.forEach(function(e, i, a) {
  a[i] = e.length;
});

let tenToNineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen",
                    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
tenToNineteen.forEach(function(e, i, a) {
  a[i] = e.length;
});

let twentyToNinety = ["twenty", "thirty", "forty", "fifty", "sixty",
                      "seventy", "eighty", "ninety"];
twentyToNinety.forEach(function(e, i, a) {
  a[i] = e.length;
});

let hundred = "hundred";
hundred = hundred.length;

let and = "and";
and = and.length;

let count = 0;

// go through all the numbers from 0 to 999
// by going through all three digits from 0 to 9
for (let hundreds = 0; hundreds < 10; hundreds++) {
  for (let tens = 0; tens < 10; tens++) {
    for (let ones = 0; ones < 10; ones++) {

      if (hundreds >= 1) {
        count += oneToNine[hundreds - 1];
        count += hundred;
        if (tens > 0 || ones > 0)
          count += and;
      }

      if (tens >= 2) {
        count += twentyToNinety[tens - 2];
        if (ones >= 1)
          count += oneToNine[ones - 1];
      }

      if (tens === 1)
        count += tenToNineteen[ones];

      if (tens === 0 && ones >= 1)
        count += oneToNine[ones - 1];
    }
  }
}

count += "onethousand".length; // one thousand

let solution = count;

console.log(solution);
