/*
 * Solution to Project Euler problem 12 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/tiny-tune
 */

/*
 * Problem 12:
 * The sequence of triangle numbers is generated by adding the natural numbers.
 * So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 * Let us list the factors of the first seven triangle numbers:
 *     1: 1
 *     3: 1,3
 *     6: 1,2,3,6
 *    10: 1,2,5,10
 *    15: 1,3,5,15
 *    21: 1,3,7,21
 *    28: 1,2,4,7,14,28
 * We can see that 28 is the first triangle number to have over five divisors.
 * What is the value of the first triangle number to have over five hundred divisors?
 */

let triangleNumbers = [0, 1, 3];
let number = 3;
let count = 2;

while (count <= 500) {
  triangleNumbers[triangleNumbers.length] =
    (triangleNumbers.length + 1) * triangleNumbers.length / 2;

  number = triangleNumbers[triangleNumbers.length - 1];
  count = 2;
  for (let divisor = 2; divisor <= Math.floor(Math.sqrt(number)); divisor++) {
    if (number % divisor === 0) count += 2;
  }
}

let solution = number;

console.log(solution);