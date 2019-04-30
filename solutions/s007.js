/*
 * Solution to Project Euler problem 7 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 7:
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

let primeNumbers = [2, 3];

for (let count = primeNumbers.length; count < 10001; count++) {
  let number = primeNumbers[primeNumbers.length - 1] + 2;
  while (isDivisibleBy(number, primeNumbers)) number += 2;
  primeNumbers.push(number);
}

function isDivisibleBy(number, divisors) {
  for (let index = 0; index < divisors.length; index++) {
    if (number % divisors[index] === 0) return true;
  }
  return false;
}

let solution = primeNumbers.pop();

console.log(solution);
