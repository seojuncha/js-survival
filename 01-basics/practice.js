/**
 * Have to know:
 *   Difference between`let` and `const`
 *   Two kinds of Types: `primitive types` and `object types`
 *   `null` vs `undefined`
 *   What happend if an array index is overflowed.
 *
 * Note:
 *   loosly typed language
 */

const num = 0;
console.log(`num= ${num}`);

// num = 1;   Error, it's constant
// let num = 10;  // Error, already declared

let lang; // declared and then,
lang = "javascript"; // assigned.
// let lang;  Error, duplicated declaration
lang = 99; // because of untyped variable(lang)

// Expressions
// same with C like language.
let number = 1;
console.log(number);
console.log(number++);
console.log(number--);
console.log(number + 10);
number += 1;
console.log(number);

// same with C like language.
if (true) {
  console.log("it's true");
}
if (true) console.log("it's true also."); // The braces are not mandatory.

number = -1;
if (number < 0) console.log("negative");
else if (number > 0) console.log("positive");
else console.log("zero!");

// Array, which is `objects`
// Create an empty array object.
const my_arr = [];
const my_arr2 = Array();

// Create an array with pre-fill
const fill_arr = [1, 2, 3];
const fill_arr2 = Array.of(1, 2, 3);
console.log(fill_arr, fill_arr2);
console.log("array length: ", fill_arr.length); // `length` is a property of Array object, fill_arr.

// TODO: Utilize Array object.
// shift, push, pop, and so on.

// String
let str = "test string";
console.log(str);
console.log(str.length); // TODO: String manipulation.
console.log(`number = ${number}`);

// Loops
// while, for, for..of
// `break` and `continue` are operated like C language.
// do..while also
const loop_arr = ["a", "b", "c"];
let i = 0;
while (i <= loop_arr.length) {
  console.log(`i=${i}, arr=${loop_arr[i]}`);
  i++;
}

// same with C
for (let i = 0; i < loop_arr.length; i++)
  console.log(`i=${i}, arr=${loop_arr[i]}`);

// C++'s for...in
// for (const value in loop_arr)
for (const value of loop_arr) console.log(value);
