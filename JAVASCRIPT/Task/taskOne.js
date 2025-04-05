/* console.log(a);
var a = 10; */

/* var x = 5;
if (true) {
  let x = 10;
}
console.log(x); */
/* 
const username = "vishal";
//  username="chauhan"//Type Error

const obj = {
  name: "vishal",
};

obj.name = "chauhan";
console.log(obj.name); */

/* obj = {
  name: "vishal chauhan",
}; */ // Type Error

/* let a = 5;
let a = 10;
console.log(a); */ // Syntax Error

/* +++++++++++Data Types +++++++++++ */

/* console.log(typeof null === "object"); //true
console.log(null === "object"); //false
let x = "10";
let y = 10;
console.log(x == y);
console.log(x === y);

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

console.log(+"123");
console.log(Number("123")); */

/* let a;
console.log(a); 
// console.log(b);// reference error
let b = 10;
 */
/* ++++++++++++Operator++++++++++++++ */

/* let a = 10;
let b = "10";
console.log(a + b);
console.log(a - b);

let numOne = 10;
let numTwo = 30; */

/* numOne = numOne + numTwo; //40
numTwo = numOne - numTwo; //10
numOne = numOne - numTwo;//30

console.log(numOne);
console.log(numTwo); */
/* console.log(numOne);
console.log(numTwo);
[numOne, numTwo] = [numTwo, numOne];
console.log("After swapping");
console.log("numOne is ", numOne);
console.log("numTwo is", numTwo);

console.log(5 + true);
console.log(5 + false);
console.log(5 + null);

let num1 = 5;
let num2 = "5";

console.log(num1 != num2);
console.log(num1 !== num2);
 */

// let num = 12;
let num = 12;

//++++++++ Even Odd ++++++++++++

if (num % 2 == 0) console.log("Number is Even");
else console.log("Number is odd");

console.log(num % 2 == 0 ? "Even" : "Odd");

// ++++++++++ Positive / Negative / Zero +++++++++++
// if (!Number(num)) console.log("Please enter a valid number");
if (typeof num !== "number") console.log("Please enter a valid number");
else if (num < 0) console.log("Number is Negative");
else if (num > 0) console.log("Number is Positive");
else console.log("Number is zero");

// +++++++ Number is divisble by 3 and 5++++
num = 15;
if (num % 3 === 0 && num % 5 === 0) {
  console.log(`Yes ${num} is divisible by  both 3 and 5`);
} else if (num % 3 === 0) {
  console.log(`${num} is only divisible by 3`);
} else if (num % 5 === 0) {
  console.log(`${num} is only divisible by 5`);
} else {
  console.log("Enter a valid number");
}

/* Output */
let x = 10;

if ((x = 5)) {
  console.log("Yes");
} else {
  console.log("No");
}
console.log(x);

/* Leap Year */
let year = 2023;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

console.log(5 + undefined);
