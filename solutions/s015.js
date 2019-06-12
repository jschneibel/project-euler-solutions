/*
 * Solution to Project Euler problem 15 using JavaScript.
 * Copyright (c) 2019 Jonathan Schneibel
 * MIT License: https://opensource.org/licenses/MIT
 * GitHub: https://github.com/jschneibel/project-euler-solutions
 */

/*
 * Problem 15:
 * Starting in the top left corner of a 2×2 grid, and only being able to move
 * to the right and down, there are exactly 6 routes to the bottom right corner.
 * - right, right, down, down
 * - right, down, right, down
 * - right, down, down, right
 * - down, right, right, down
 * - down, right, down, right
 * - down, down, right, right
 * How many such routes are there through a 20×20 grid?
 */

// Each route consists of exactly 20 "downs" and 20 "rights" to go from top left
// to bottom right. The question is, in how many distinct ways can these "downs"
// and "rights" be ordered?
// If, instead, the question involved 40 different labels (not just "down" and
// "right"), then the solution would be the 40*39*38*...*1 or the faculty of 40:
// n = 40!
// However, the order of all the "downs" among each other and the order of all
// the "rights" among each other does not matter. 20 distinct labels can be
// ordered in 20! distinct ways, which is 20! times more than the single way to
// order 20 identical labels. Therefore, the solution becomes:
// n = 40! / 20! / 20!
// This is equal to:
// n = 40*39*38*...*22*21 / 20!

let dividend = 1;
for (let i = 40; i > 20; i--) dividend *= i;

let divisor = 1;
for (let i = 1; i <= 20; i++) divisor *= i;

let numberOfRoutes = Math.round(dividend / divisor);

let solution = numberOfRoutes;

console.log(solution);
