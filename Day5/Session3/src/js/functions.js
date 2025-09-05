// Different ways to define functions and scope in JavaScript
// 1. Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Vedant")); // Hello, Vedant!

// 2. Function Expression
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 3)); // 8

// 3. Arrow Function
const multiply = (x, y) => x * y;

console.log(multiply(4, 6)); // 24

// 4. Block Scope (let/const vs var)
function scopeExample() {
  if (true) {
    var functionScoped = "I am var (function scoped)";
    let blockScoped = "I am let (block scoped)";
    const alsoBlockScoped = "I am const (block scoped)";
    console.log(blockScoped);
    console.log(alsoBlockScoped);
  }
  console.log(functionScoped); // Works
  // console.log(blockScoped); // ❌ ReferenceError
}

scopeExample();
