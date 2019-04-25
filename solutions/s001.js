/*
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/tiny-tune
 */

let sum = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) sum += i;
}

let solution = sum;

console.log(solution);
