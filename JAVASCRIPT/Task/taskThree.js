// 1. Write a program to check if a number is positive, negative, or zero using an if-else statement.

function chechNum(num) {
  if (num < 0) console.log(`${num} is -ve`);
  else if (num > 0) console.log(`${num} is +ve`);
  else console.log(`${num} is zero`);
}
chechNum(4);
chechNum(0);
chechNum(-1);

//Q2 Guess the output of the following code:
let x = 10;
if (x == "10") {
  console.log("Equal"); //Equal
} else {
  console.log("Not Equal");
}

//Q 3 Write a program using a switch statement to check the day of the week based on a number (1 = Monday, 7 = Sunday).

let day = 7;

switch (day) {
  case 1:
    console.log("Today is Monday");

    break;
  case 2:
    console.log("Today is tuesday");

    break;
  case 3:
    console.log("Today is wednesday");

    break;
  case 4:
    console.log("Today is thursday");

    break;
  case 5:
    console.log("Today is Friday");

    break;
  case 6:
    console.log("Today is Saturday");

    break;
  case 7:
    console.log("Today is Sunday");

    break;

  default:
    console.log("enter a valid number");

    break;
}

// 4. Write a program to print the first 10 even numbers using a for loop.

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}
for (let i = 0; i <= 10; i++) {
  console.log(i * 2);
}
// 5. Guess the output of the following code:
let i = 5;
while (i > 0) {
  console.log(i); //5 4 3 2 1
  i--;
}

// 6. What will be the output?

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // 0 1 2
}

// 7. Write a program to check if a given string is a palindrome (e.g., "madam" should return true).

function isPalindrome(str) {
  let revStr = str.split("").reverse().join("");
  if (revStr == str) console.log(`${str} is palindrome`);
  else console.log(`${str} is not palindrome`);
}
isPalindrome("madam");
isPalindrome("vishal");
isPalindrome("racecar");

// 8. What will be the output?
let str = "Hello World";
console.log(str.slice(0, 5)); //Hello
console.log(str.substring(0, 5)); //Hello

// 9. Write a program to count the number of vowels in a given string.

function checkVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let ch of str) {
    if (vowels.includes(ch)) count++;
  }
  console.log(`Total number of vowels in string "${str}" = ${count}`);
}

checkVowels("vishal");
checkVowels("education");
checkVowels("Vishal Chauhan");

// 10. What will be the output?
let str2 = "Hello";
console.log(str2.toUpperCase()); //HELLO
console.log(str2.toLowerCase()); //hello

// 11. Write a program to reverse a string without using the .reverse() method.

const revStr = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(`reverse of this string "${str}" is = ${rev}`);
};

revStr("vishal");
revStr("chauhan");

// 12. Write a program to find the largest number in an array.

function findLargest(arr) {
  let largest = arr[0];
  for (let elem of arr) {
    if (largest < elem) {
      largest = elem;
    }
  }
  console.log(`largest element in the array [${arr}] is = ${largest}`);
}

findLargest([1, 2, 3, 54, 5]);
findLargest([1, 200, 32, 34, 5]);

// 13. Guess the output of the following:
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(-2, 1)); //3 wrong => []
console.log(arr.slice(-2, 5)); //[4,5]
// if the end value is before the start then it simply return an empty array []

//Q 14 Write a program to remove duplicate values from an array.

function removeDuplicate(arr) {
  let newArr = [];
  for (let elem of arr) {
    if (!newArr.includes(elem)) {
      newArr.push(elem);
    }
  }
  console.log(
    `After removing duplicate values from this array [${arr}] the output is [${newArr}]`
  );
}
removeDuplicate([1, 2, 3, 2, 1, 2, 3, 4, 5]);

//Q 15 What will be the output?

let arr2 = [10, 20, 30];
arr2.push(40);
console.log(arr2); //10 20 30 40
arr2.pop();
console.log(arr2); // 10 20 30

//Q 16. Write a program to filter out numbers greater than 50 from an array using .filter().

let arr4 = [12, 34, 54, 67, 89, 32];

let filterdArr = arr4.filter((elem) => elem > 50);
console.log(filterdArr);

//Q 17 Write an object with properties name, age, and a method greet() that returns "Hello, my name is John!"

let obj = {
  name: "vishal chauhan",
  age: 23,
  greet: function (params) {
    return `Hello my name is ${this.name}`;
  },
};

console.log(obj.greet());

//Q 18 What will be the output?
let person = {
  name: "Alice",
  sayHello: function () {
    return a + b;
  },
};
//person.sayHello(); //Expression /wrong --> it gives reference error a is not defined

// 19. Write an arrow function that returns the square of a number.

const squareOfNumber = (num) => num * num;

console.log(squareOfNumber(5));
console.log(squareOfNumber(10));

//Q 20 Guess the output of the following code:
let str3 = " JavaScript ";
console.log(str3.trim().length); //10

// 21. Write a program to print the Fibonacci series up to n terms using a for loop.

let firstNum = 0;
let secondNum = 1;
let num = 10;

let fibbo = [];
fibbo.push(firstNum, secondNum);

for (let i = 2; i < num; i++) {
  let next = firstNum + secondNum;
  fibbo.push(next);
  firstNum = secondNum;
  secondNum = next;
}
console.log(fibbo);
//0 1 1 2 3 5 8 13 21 34
