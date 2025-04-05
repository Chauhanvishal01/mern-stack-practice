/* E-commerce Discount System:
Apply a discount based on the total purchase amount:

    ₹5000 or more → 20% discount

    ₹2000 to ₹4999 → 10% discount

    Below ₹2000 → No discount */

let purchaseAmount = 2000;
if (purchaseAmount >= 5000)
  console.log(`You got discount  of 20% means ${purchaseAmount / 20} ruppes`);
else if (purchaseAmount <= 4999 && purchaseAmount >= 2000) {
  console.log(`You got discount  of 10% means ${purchaseAmount / 10} ruppes`);
} else if (purchaseAmount < 2000 && purchaseAmount > 0) {
  console.log(`Discount is available on shopping upto 2000 and more`);
} else console.log("Enter a valid price");

/* Traffic Light System:
Simulate a traffic light system where:

    "red" → stop

    "yellow" → ready

    "green" → go */

let lightColor = "red";
if (lightColor == "red") console.log("stop");
else if (lightColor == "yellow") console.log("ready");
else if (lightColor == "green") console.log("go");
else console.log("enter a valid color");

/* Movie Ticket Pricing:
Set movie ticket prices based on age:

    Below 12 → ₹100

    Between 12 and 60 → ₹200

    Above 60 → ₹150 */

let age = 23;

if (age < 12) console.log("Ticket price is ₹100");
else if (age >= 12 && age < 60) console.log("Ticket price is ₹200");
else if (age >= 60) console.log("Ticket price is ₹150");
else console.log("enter valid age");

/* Login System with Role Check:
Verify a user’s role (admin, user, guest) and grant appropriate access. */

let role = "admin";
switch (role) {
  case "admin":
    console.log("You got full access");

    break;

  case "user":
    console.log("Welcome back user");
    break;

  case "guest":
    console.log("Welcome as guest Please login First");
    break;

  default:
    console.log("enter a valid role");

    break;
}

/* ATM Cash Withdrawal Simulation:
Dispense denominations of ₹500, ₹200, and ₹100 based on the withdrawal amount. */

let amount = 2300;

if (amount < 0 || amount % 100 !== 0) {
  console.log("Please enter a valid amount");
} else {
  let numberOf500 = Math.floor(amount / 500);
  let remainingAmunt = amount % 500;

  let numberOf200 = Math.floor(remainingAmunt / 200);
  remainingAmunt = remainingAmunt % 200;

  let numberOf100 = Math.floor(remainingAmunt / 100);

  console.log(`Amount is ${amount}`);
  if (numberOf500 > 0)
    console.log(`500 X ${numberOf500} = ${500 * numberOf500}`);
  if (numberOf200 > 0)
    console.log(`200 X ${numberOf200} =  ${200 * numberOf200}`);
  if (numberOf100 > 0)
    console.log(`100 X ${numberOf100} = ${100 * numberOf100}`);
}

/* Generate Password Suggestions: */
let string =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&?><|+1234567890";
// let specialChar = "";
for (let i = 0; i < 6; i++) {
  let randomStr = "";
  for (let i = 0; i <= 6; i++) {
    let randomIndex = Math.floor(Math.random() * string.length);
    randomStr += string[randomIndex];
  }

  console.log(`Password suggestion = ${randomStr}`);
}

/* 
Billing System:
Calculate the total amount after applying tax (18%) on items purchased by a customer.
*/

let totalAmount = 4000;

if (totalAmount <= 0) console.log("Please enter a valid aount");
else {
  let amountAfterTax = totalAmount + Math.floor((totalAmount * 18) / 100);
  console.log(`Total amount after applying tax (18%) is ${amountAfterTax}`);
}

/* 
Hashtag Generator:
Create a hashtag from a sentence ("hello world" → #helloworld). */

let sentenceOne = "Hello my name is vishal";
sentenceOne = "javascript is fun";
sentenceOne = "123 numbers";
sentenceOne = "i love coding";

let hashGen = "#" + sentenceOne.replaceAll(" ", "");
console.log(hashGen);

/* Cart Total Calculator:
Calculate the total price of items added to a shopping cart. */

let cartItmesPrice = [123, 43, 56, 87, 23, 23, -35];
let sum = 0;

for (let elem of cartItmesPrice) {
  sum += elem;
}
console.log(`Total price of items: ${sum}`);

/* let obj = {};

let name = "pizza";
let price = 250;

obj[name] = price;

console.log(obj);
 */

/* Restaurant Menu System:
Add, update, or remove menu items dynamically from a menu object. */

let menu = {};

// add item
function addItme(name, price) {
  if (!menu[name]) {
    menu[name] = price;
    console.log(`Item added: ${name} - ${price}`);
  } else {
    console.log(`${name} already exists in the menu`);
  }
}
//update item
function updateItem(name, newPrice) {
  if (menu[name]) {
    menu[name] = newPrice;
    console.log(`Item updated: ${name} - ${newPrice}`);
  } else {
    console.log(`Item not found. `);
  }
}
//remove item

function removeItem(name) {
  if (menu[name]) {
    delete menu[name];
    console.log(`Item removed ${name}`);
  } else {
    console.log(`Item not found!`);
  }
}
addItme("pizza", 250);
addItme("burger", 150);
console.log(menu);

updateItem("pizza", 300);
console.log(menu);

removeItem("burger");
console.log(menu);
