// 1. Sum of an array
const sum = (arr) => arr.reduce((total, n) => total + n, 0);
console.log(sum([1, 2, 3, 4])); // 10

// 2. Keep only even numbers
const evens = (arr) => arr.filter((n) => n % 2 === 0);
console.log(evens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// 3. Square every number, then find the largest
const squares = (arr) => arr.map((n) => n * n);
console.log(squares([1, 2, 3])); // [1, 4, 9]
console.log(Math.max(...squares([1, 2, 3]))); // 9