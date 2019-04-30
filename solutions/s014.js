/*
 * Solution to Project Euler problem 14 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 14:
 * The following iterative sequence is defined for the set of positive integers:
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 * Using the rule above and starting with 13, we generate the following
 * sequence:
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1)
 * contains 10 terms. Although it has not been proved yet (Collatz Problem), it
 * is thought that all starting numbers finish at 1.
 * Which starting number, under one million, produces the longest chain?
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

// index: starting number of a sequence
// value: number of terms in a sequence
let sequenceLengths = Array(1000000);

// the longest sequence found
let maxLength = 1;
let maxLengthTerm = 1;

for (let i = 1; i < 1000000; i++) {
  // start a new sequence with number i
  let terms = [i];
  // the counts array counts the number of terms and gets reversed at the end
  let counts = [1];

  // while the end of the sequence has not been reached
  while (terms[terms.length - 1] !== 1) {
    // add the next term to the sequence
    if (terms[terms.length - 1] % 2 === 0)
      terms[terms.length] = terms[terms.length - 1] / 2;
    else
      terms[terms.length] = 3 * terms[terms.length - 1] + 1;

    // increase the count by 1
    counts[counts.length] = counts[counts.length - 1] + 1;

    // if the new term is already part of sequenceLengths
    if (typeof sequenceLengths[terms[terms.length - 1]] === 'number') {
      // add the stored sequence length of the term to counts
      counts = counts.map(
                x => x - 1 + sequenceLengths[terms[terms.length - 1]]);
      // the rest of the sequence doesn't have to be calculated anymore
      break;
    }
  }

  // reverse, because the starting term has the longest sequence
  counts.reverse();

  // track longest sequence found so far
  if (maxLength < counts[0]) {
    maxLength = counts[0];
    maxLengthTerm = terms[0];
  }

  // store the newly calculated lengths in sequenceLengths
  terms.forEach((term, index) => sequenceLengths[term] = counts[index]);
}

let solution = maxLengthTerm;

console.log(solution);
