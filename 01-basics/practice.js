/**
 * Have to know:
 *   Difference between`let` and `const`
 *   Two kinds of Types: `primitive types` and `object types`
 *   `null` vs `undefined`
 *   What happend if an array index is overflowed.
 *   Objects are always passed by reference.
 *   `var` vs `let as a variable scrop perspective
 *   Problems and solution of callback chain
 *   About `promise` object
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

// Functions
function foo() {
  console.log("it's function foo");
}
function bar(p, q) {
  if (typeof p === "undefined") console.log("no p");
}

let ret = bar();
console.log(`ret = ${ret}`); // Unless there is a return statement, undefined is retured.

// Arrow functions
// Anonymous!
// like a lambda ??
let foo2 = () => {
  console.log("anonymous function foo");
};
let bar2 = (p, q) => {
  if (typeof p === "undefined") console.log("no p");
};

foo2();

// Objects
// Create a new object.
// others methods; new Object(), Object.create()
const car = {};

// Define constructor
function CreateCar(brand, model) {
  this.brand = brand;
  this.model = model;
}
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// const myCar = CreateCar("ford", "explorer");   // Invalid, use `new` keyword
const myCar = new CreateCar("ford", "explorer");
console.log(myCar);

const myCar2 = new Car("hyundai", "avante");
console.log(myCar2);

const anotherCar = {
  brand: "hyundai",
  model: "sonata",
  // Use a regular function as a class method because of this.
  printModel: function () {
    // Not arrow function!
    console.log(`model is ${this.model}`); // use this to capture the class object
  },
};
console.log(anotherCar);
anotherCar.printModel();

// JavaScript's class
// - Has a constructor method
// - Support inheritance also with 'extends' keyword.
class Person {
  constructor(name) {
    this.name = name;
    console.log("Person ctor with name:", this.name);
  }
  // No desctructor unlike C++

  // class method has no return type.
  hello(friend = "guys") {
    console.log("Hello,", friend, "my name is", this.name);
  }
}

const me = new Person("seojun");
me.hello();
me.hello("github");

// Asynchronous Programming
function timeoutCallback() {
  console.log("inside the timer callback function");
}
setTimeout(timeoutCallback);
console.log("right after calling setTimeout");

setTimeout(() => {
  console.log("inside the timer callback arrow function");
}, 1000);
console.log("right after calling setTimeout with arrow function");

const varScopeFunc = () => {
  if (true) {
    var data = "data";
  }
  console.log(data);
};
varScopeFunc();

const letScopeFunc = () => {
  if (true) {
    let data = "data";
  }
  // console.log(data);  // Reference Error: data is not defined.
};
letScopeFunc();

// const doSomething = (callback) => {
//   console.log("do something function");
//   const v = 10;
//   callback(v);
// };

// const doSomethingCallback = (number) => {
//   console.log("doSomethingCallback number:", number);
// };

const doSomething = (number) => {
  console.log(`number=${number}`);
};

doSomething(10);

const doSomethingPromise = new Promise((resolve, reoject) => {
  const success = true;
  if (success) resolve("ok");
  else rejects("fail");
});

doSomethingPromise.then((result) => {
  console.log("in then");
  console.log(result);
});

const doSomethingAsync = async () => {};
