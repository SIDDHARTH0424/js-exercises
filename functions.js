// 6. Palindrome check
const isPalindrome = (str) => {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
};
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false

// 7. Factorial using recursion
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
console.log(factorial(5)); // 120