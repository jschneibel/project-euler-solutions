/*
 * Solution to Project Euler problem 21 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 21:
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n
 * which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and
 * each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44,
 * 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4,
 * 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10000.
 */

// index is n, value is d(n)
let numbers = [];

// go through all the numbers and calculate the sum of divisors for each number
for (let n = 1; n <= 10000; n++) {
  let sumOfDivisors = 0;

  for (let divisor = 1; divisor <= Math.floor(Math.sqrt(n)); divisor++) {
    if (n % divisor === 0) {
      sumOfDivisors += divisor;

      if (n / divisor !== n) {
        sumOfDivisors += n / divisor;
      }
    }
  }

  numbers[n] = sumOfDivisors;
}

let sum = 0;

// check if d(d(n)) = n and d(n) != n (if true, n is an amicable number)
// and calculate the sum of amicable numbers
for (let n = 1; n <= 10000; n++) {
  if (numbers[numbers[n]] === n && numbers[n] !== n) {
    sum += n;
  }
}

let solution = sum;

console.log(solution);
