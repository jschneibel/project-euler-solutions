/*
 * Solution to Project Euler problem 4 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 4:
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

// The largest palindrome smaller than 999*999 = 998001 is 997799.
let palindrome = 997799;

// Assumption: The solution has 6 digits.
// Only palindromes with 6 digits are checked.
while(palindrome > 100000) {
  if (isProductOfTwoNumbers(palindrome, 100, 999)) break;
  else palindrome = nextLowerPalindrome(palindrome);
}

// Works only on palindromes with 6 digits.
function nextLowerPalindrome(palindrome) {
  // Set first three digits to next lower value.
  palindrome -= 1000;
  palindrome = palindrome.toString(10).split('');

  // Remove last three digits then mirror.
  palindrome.splice(3, 3, palindrome[2], palindrome[1], palindrome[0]);
  palindrome = parseInt(palindrome.join(''), 10);

  return palindrome;
}

function isProductOfTwoNumbers(product, minNumberToCheck, maxNumberToCheck) {
  for (let number1 = minNumberToCheck; number1 <= maxNumberToCheck; number1++) {
    let number2 = product / number1;
    if (number2 >= minNumberToCheck
      && number2 <= maxNumberToCheck
      && number2 % 1 === 0) return true;
  }
  return false;
}

let solution = palindrome;

console.log(solution);
