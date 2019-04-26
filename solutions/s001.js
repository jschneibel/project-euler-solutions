/*
 * Solution to Project Euler problem 1 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/tiny-tune
 */

/*
 * Problem 1:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

let sum = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) sum += i;
}

let solution = sum;

console.log(solution);
