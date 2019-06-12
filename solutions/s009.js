/*
 * Solution to Project Euler problem 9 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 9:
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for
 * which,
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

let a = 1;
let product = 0;

while (a < 333 && product === 0) {
  let b = a + 1;
  let c = 1000 - a - b;
  while (b < c && product === 0) {
    if (a * a + b * b === c * c) product = a * b * c;
    b++;
    c = 1000 - a - b;
  }
  a++;
}

let solution = product;

console.log(solution);
