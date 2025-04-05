/*++++++++++++++++++++++ ✅ Conditional Statements ++++++++++++++++++ */

// Check if a number is positive, negative, or zero.

let num = 12;
if (num < 0) console.log("Number is -ve");
else if (num > 0) console.log("Number is +ve");
else if (num == 0) console.log("number is zero");
else console.log("Enter a valid number");

// Determine whether a year is a leap year or not.

let year = 2000;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
  console.log(`${year} is a leap year`);
else console.log(`${year} is not a leap year`);

// Create a grading system that assigns grades based on marks.

let marks = 78;
if (marks <= 100 && marks >= 90) console.log("A Grade");
else if (marks <= 89 && marks >= 80) console.log("B Grade");
else if (marks <= 79 && marks >= 60) console.log("C Grade");
else if (marks <= 59 && marks >= 44) console.log("D Grade and Pass");
else if (marks < 44 && marks >= 0) console.log("Fail");
else console.log("Enter a valid marks");

// Check if a given character is a vowel or a consonant.

let char = "A";
let vowels = "aeiouAEIOU";
if (vowels.includes(char)) console.log(`${char} is vowel`);
else console.log(`${char} is consonant`);

// Implement a simple login system where the username and password are verified.

let username = "admin";
let password = "12345678";

if (!username || !password) console.log("Both fileds are required!");
else if (username !== "admin" || password !== "12345678")
  console.log("Incorrect username or password");
else if (username == "admin" && password == "12345678") {
  console.log("Login Successful! welcome");
} else console.log("Invalid credentials!");

/* 🔄 Looping Statements  */

// Print all even numbers between 1 and 50.
/* for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) console.log(i);
} */

// Find the sum of digits of a given number.
let digits = 12345;
let strNum = digits.toString();
let sum = 0;
for (let i = 0; i < strNum.length; i++) {
  sum += +strNum[i];
}

console.log(`sum of digits of number ${digits} is ${sum}`);

// Print the multiplication table of a number.

let i = 1;
let table = 9;
while (i <= 10) {
  console.log(`${table} X ${i} = ${table * i}`);
  i++;
}

// Reverse a given number using a loop.

let givenNumber = 123456;
let revNum = givenNumber.toString().split("").reverse().join("");
console.log(+revNum);

let strGivenNum = givenNumber.toString();
for (let j = strGivenNum.length - 1; j >= 0; j--) {
  console.log(+strGivenNum[j]);
}

// Check if a number is a prime number or not.

let givenNum = 3;
if (givenNum <= 1) {
  console.log(`${givenNum} is not a prime number`);
} else {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(givenNum); j++) {
    if (givenNum % j === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(
    isPrime
      ? `${givenNum} is prime number`
      : `${givenNum} is not a prime number`
  );
}

/* 🔤 String and String Methods */

// Count the number of vowels in a given string.
let str = "Education";
vowels = "aeiouAEIOU";
let count = 0;
for (let ch of str) {
  if (vowels.includes(ch)) {
    count++;
  }
}
console.log(`number of vowels in the given string "${str}" is = ${count}`);

// Reverse a given string without using built-in methods.

let givenStr = "vishal";
let revStr = "";
for (let i = givenStr.length - 1; i >= 0; i--) {
  revStr += givenStr[i];
}
console.log(` reverse string of ${givenStr} is ${revStr}`);

// Check if a string is a palindrome.

if (givenStr == revStr) console.log(`${givenStr} is palindrome`);
else console.log(`${givenStr} is not palindrome`);

// Replace all spaces in a string with hyphens (-).
let sentence = "Vishal Chauhan is the best";
console.log(sentence.replaceAll(" ", "-"));

/* 📚 Array and Array Methods */

// Find the largest and smallest elements in an array.

let arr = [1, 23, 98, 43, 56, 78, 0];
let max = arr[0];
let min = arr[0];
for (let elem of arr) {
  if (max < elem) {
    max = elem;
  }
  if (min > elem) {
    min = elem;
  }
}
console.log(`max element is ${max}`);
console.log(`min element is ${min}`);

// Remove duplicate elements from an array.

let arr2 = [1, 2, 34, 21, 1, 12, 231, 12, 231];
let afterRemoveDuplicateElem = [];
for (let elem of arr2) {
  if (!afterRemoveDuplicateElem.includes(elem)) {
    afterRemoveDuplicateElem.push(elem);
  }
}
console.log("original array", arr2);
console.log("after removing duplicate elements", afterRemoveDuplicateElem);

// Sort an array in ascending and descending order.

console.log(arr2.sort((a, b) => a - b));
console.log(arr2.sort((a, b) => b - a));

// Merge two arrays and remove duplicates.

let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [7, 8, 9, 1, 2];

/* let newArr = [...arrOne, ...arrTwo];
console.log(newArr,"yes"); */

let mergedArr = arrOne.concat(arrTwo);
let finalArr = [];
for (let elem of mergedArr) {
  if (!finalArr.includes(elem)) {
    finalArr.push(elem);
  }
}
console.log("final array after merge and remove duplicate elements", finalArr);

/* 🎭 Objects and Object Methods */

// Create an object representing a student with name, age, and marks, and display the details.

let student = {
  name: "vishal",
  age: 23,
  marks: 98,
};
console.log(student);

// Add, update, and delete properties of an object.

//Add
student.email = "vishal@gmail.com";
console.log(student);

//update
console.log(`Before updation the marks are ${student.marks}`);

student.marks = 99;
console.log(`After updation the marks are ${student.marks}`);

//delete
delete student.age;
console.log(student);

// Count the number of properties in an object.

let propertiesCount = 0;
for (let key in student) {
  propertiesCount++;
}
console.log(
  `Total number of peroperties available in the object student are ${propertiesCount}`
);
//another way
console.log(Object.keys(student).length);

// Check if a property exists in an object.
let keys = Object.keys(student);
console.log(keys.includes("name"));

//2nd way
console.log(student.hasOwnProperty("country"));

//3rd way

console.log("name" in student);
console.log("country" in student);

// Merge two objects and avoid duplicate properties.

let obj = {
  name: "vishal",
  age: 23,
  country: "India",
};

let mergedObj = { ...student, ...obj };
console.log(mergedObj);
