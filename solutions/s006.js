/*
 * Solution to Project Euler problem 6 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 6:
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * Hence the difference between the sum of the squares of the first ten natural
 * numbers and the square of the sum is 3025 − 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred
 * natural numbers and the square of the sum.
 */

let squareOfSum = Math.pow((100 + 1) * 100 / 2, 2);

let sumOfSquares = 0;

for (let i = 1; i <= 100; i++) {
  sumOfSquares += i*i;
}

let difference = squareOfSum - sumOfSquares;

let solution = difference;

console.log(solution);
