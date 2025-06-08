/**
 * Basic JavaScript Programs
 */

// 1. Print "Hello, World!"
console.log("Hello, World!");

// 2. Add two numbers
function add(a, b) {
    return a + b;
}
console.log("Sum of 5 and 3 is:", add(5, 3));

// 3. Check if a number is even or odd
function isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("4 is", isEven(4));

// 4. Find the largest of three numbers
function largest(a, b, c) {
    return Math.max(a, b, c);
}
console.log("Largest of 10, 20, 15 is:", largest(10, 20, 15));

// 5. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reverse of 'Playwright' is:", reverseString("Playwright"));