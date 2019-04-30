/*
 * Solution to Project Euler problem 3 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 3:
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

let primeFactor = 2;
let number = 600851475143;

while (primeFactor < number) {
  if (number % primeFactor == 0) {
    number /= primeFactor;
    primeFactor = 2;
  }
  else primeFactor++;
}

let solution = primeFactor;

console.log(solution);
