/*
 * Solution to Project Euler problem 20 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 20:
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 *
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is
 * 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 *
 * Find the sum of the digits in the number 100!
 */

// create array of 200 digits (the factorial has 200 digits at most)
let number = Array(200);
for (let digit = 0; digit < number.length; digit++) {
  number[digit] = 0
}

// set start value to 1
number[number.length - 1] = 1;

for (let factor = 2; factor <= 100; factor++) {
  let carry = 0;

  for (let digit = number.length - 1; digit >= 0; digit--) {
    number[digit] *= factor;
    number[digit] += carry;
    carry = Math.floor(number[digit] / 10);
    number[digit] %= 10;
  }
}

let sumOfDigits = 0;

for (let digit = 0; digit < number.length; digit++) {
  sumOfDigits += number[digit];
}

let solution = sumOfDigits;

console.log(solution);
