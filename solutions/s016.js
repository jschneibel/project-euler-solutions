/*
 * Solution to Project Euler problem 16 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 16:
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 2^1000?
 */

let number = Array(1000);
for (let i = 0; i < 1000; i++) number[i] = 0
number[999] = 1;

for (let i = 0; i < 1000; i++) {
  for (let j = 1; j < 1000; j++) {
    number[j] *= 2;
    if (number[j] >= 10) {
      number[j-1]++;
      number[j] %= 10;
    }
  }
}

let sumOfDigits = 0;

for (let i = 0; i < 1000; i++) sumOfDigits += number[i];

let solution = sumOfDigits;

console.log(solution);
