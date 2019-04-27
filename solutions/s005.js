/*
 * Solution to Project Euler problem 5 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/tiny-tune
 */

/*
 * Problem 5:
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

let product = 2520;
let remainder = 1;
let divisors = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];

while (remainder !== 0) {
  product++;
  remainder = 0;

  for (let index = 0; index < divisors.length; index++) {
    remainder = product % divisors[index];
    if (remainder !== 0) break;
  }
}

let solution = product;

console.log(solution);
