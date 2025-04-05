/* 1. Function Declaration

    Create a function named greet that prints "Hello Vishal"

    Write a function addNumbers that takes two numbers and returns their sum.

    Declare a function isEven that checks if a number is even.

    Create a function square that returns the square of a given number.

    Write a function printTable that prints the multiplication table of a number up to 10. */

function greet() {
  console.log("Hello Vishal");
}
greet();

function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(2, 3));

function isEven(num) {
  return num % 2 === 0 ? true : false;
}
console.log(isEven(4));
console.log(isEven(5));

function square(num) {
  return num * num;
}
console.log(square(4));
console.log(square(10));

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}
printTable(5);
printTable(9);

/* 2. Function Expression

    Assign a function to a variable sayHi that logs "Hi there!"

    Create a function expression multiply that returns the product of two numbers.

    Write a function expression isOdd to check if a number is odd.

    Store a function getFullName in a variable that takes first and last name and returns full name.

    Create a function expression that finds the cube of a number. */

let sayHi = function () {
  console.log("Hi there!");
};
sayHi();

let multiply = function (num1, num2) {
  return num1 * num2;
};
console.log(multiply(3, 4));

let isOdd = function (num) {
  return num % 2 != 0 ? `${num} is Odd` : `${num} is not odd`;
};
console.log(isOdd(2));
console.log(isOdd(3));
console.log(isOdd(5));

let getFullName = function (firstName, lastName) {
  //   return firstName + " " + lastName;
  return `${firstName} ${lastName} `;
};
console.log(getFullName("vishal", "chauhan"));

let cubeOfNumber = function (num) {
  return num ** 3;
};
console.log(cubeOfNumber(3));
console.log(cubeOfNumber(4));

/* 3. Arrow Function

    Write an arrow function double that doubles a number.

    Create an arrow function isPositive to check if a number is positive.

    Write an arrow function greetUser that takes a name and returns "Hello, [name]".

    Create an arrow function getLength that returns the length of a string.

    Make an arrow function that returns the max of two numbers. */

let double = (num) => num * 2;
console.log(double(3));
console.log(double(2));

let isPositive = (num) =>
  num > 0 ? "Number is +ve" : "Number is either -ve or zero";

console.log(isPositive(5));
console.log(isPositive(0));
console.log(isPositive(-4));

let greetUser = (name) => `Hello, ${name}`;
console.log(greetUser("vishal"));

let getLength = (str) => str.length;
console.log(getLength("vishal"));

let maxOfTwoNum = (num1, num2) =>
  num1 < num2 ? `${num2} is max` : `${num1} is max`;

console.log(maxOfTwoNum(3, 4));
console.log(maxOfTwoNum(53, 43));
/* 
4. Anonymous Function

1. Triangle Pattern of *

Question: Create an anonymous function to print a triangle pattern of * with n rows.
Example (n = 4):

*
**
***
****

2. Square Pattern of *

Question: Use an anonymous function to print a square pattern of * of size n x n.
Example (n = 3):

***
***
***

3. Right-Aligned Triangle of *

Question: Create an anonymous function to print a right-aligned triangle pattern of *.
Example (n = 4):

   *
  **
 ***
****

4. Number Pyramid

Question: Use an anonymous function to print a number pyramid up to n.
Example (n = 4):

1
12
123
1234

5. Reverse Triangle Pattern of *

Question: Create an anonymous function that prints a reverse triangle pattern of *.
Example (n = 4):

****
***
**
* */

let pattern = function (n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
};
pattern(4);
pattern(5);
console.log("+++++++++++++Next++++++++++++++");

let squarePattern = function (n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= n; j++) {
      star += "*";
    }
    console.log(star);
  }
};

squarePattern(3);
squarePattern(5);
console.log("+++++++++++++Next++++++++++++++");

let rightAlignedTriangle = function (n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = i; j < n; j++) {
      star += " ";
    }
    for (let k = 1; k <= i; k++) {
      star += "*";
    }
    console.log(star);
  }
};

rightAlignedTriangle(5);
rightAlignedTriangle(4);
console.log("+++++++++++++Next++++++++++++++");

let numberPyramid = function (n) {
  for (let i = 1; i <= n; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
      num += j;
    }
    console.log(num);
  }
};

numberPyramid(4);
console.log("+++++++++++++Next++++++++++++++");

let reverseTriangle = (n) => {
  for (let i = n; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
};

reverseTriangle(4);
