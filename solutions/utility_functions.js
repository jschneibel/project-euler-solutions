/*
 * Utility functions often used in the solutions.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/tiny-tune
 */

function countDigits(number) {
  let digits = 1;
  while (number >= Math.pow(10, digits - 1)) digits++;
  return digits - 1;
}

function isPalindrome(number) {
  number = number + '';
  numberReversed = number.split('').reverse().join('');
  if (number === numberReversed) return true;
  else return false;
}

function numberOfDivisors(number) {
  let count = 2;
  for (let divisor = 2; divisor <= Math.floor(Math.sqrt(number)); divisor++) {
    if (number % divisor === 0) count += 2;
  }
  return count;
}
