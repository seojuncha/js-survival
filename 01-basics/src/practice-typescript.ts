// Primitive Types
let x: number = 10;
let check: boolean = true;

function foo(a: number) {
  console.log(a);
}

// Array
let myNumArr: number[] = [];
myNumArr[0] = 1;
// myArr[1] = '1';

let myStrArr: string[] = ["apple", "grape", "pineapple"];
myStrArr.forEach((item) => {
  console.log(item.toUpperCase());
});

// Tuple
let myTuple: [number, string] = [1, "one"];

// Enum
enum Size {
  Small = 1,
  Medium,
  Large,
}
