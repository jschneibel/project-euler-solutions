/*
 * Solution to Project Euler problem 10 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 10:
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

let primeNumbers = [2, 3];
let sum = 5;

while (primeNumbers[primeNumbers.length - 1] < 2000000) {
  let number = primeNumbers[primeNumbers.length - 1] + 2;
  while (isDivisibleBy(number, primeNumbers)) number += 2;
  primeNumbers.push(number);
  sum += number;
}
sum -= primeNumbers.pop();

function isDivisibleBy(number, divisors) {
  for (let index = 0; index < divisors.length; index++) {
    if (number % divisors[index] === 0) return true;
  }
  return false;
}

let solution = sum;

console.log(solution);
