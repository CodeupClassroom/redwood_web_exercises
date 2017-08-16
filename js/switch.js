"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
// 1. Variable declaration. 2. Assignment
var colors;  // Not an expression
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; // It is an expression
// 1. Variable declaration. 2. Assignment
// arithmetic operation is an expression
// a function call is an expression IF it return a value
var color = colors[Math.floor(Math.random()*colors.length)]; //NOT an expression

console.log(color); // Not an expression

// Sequential statements

// Compound statement, or composite statement

switch (color) {  // 1 statement, not an expression
    case "red": // start of the case block
        console.log("color red");
        break; // end of the case block
    case "orange":
        console.log("color orange");
        break;
    case "yellow":
        console.log("color yellow");
        break;
    case "green":
        console.log("color green");
        break;
    case "blue":
        console.log("color blue");
        break;
    default:
        console.log("I do not know anything by that color");
} // end of block for switch statement

var number;
// to represent values
number = 1 > 2 /* any boolean expression*/ ? /* any expression*/ 3 : 4 /* any expression */;
// x = (boolean expression) ? value a : value b;

// to represent procedures
if (1 > 2 /* any boolean expression */) { // consequence 1 o r many statements
    //I get the discount
    //Finish the rest of the functionality to give discounts
    number = 3;
} else { // alternative, 1 or many statements
    number = 4;
}

// input ->  procedure -> output
// input -> how much each person bought?
var cameronTotal = 180;
var ryanTotal = 250;
var georgeTotal = 320;
// process -> use conditional to determine if the discount should be applied

// Cameron case
var minSale = 200;
var discountCameron;
var discountRyan;
var discountGeorge;

if (cameronTotal > minSale) {
    discountCameron = .9 * cameronTotal;
} else {
    discountCameron = cameronTotal;
}

if (ryanTotal > minSale) {
    discountRyan = .9 * ryanTotal;
} else {
    discountRyan = ryanTotal;
}

if (georgeTotal > minSale) {
    discountGeorge = .9 * georgeTotal;
} else {
    discountGeorge = georgeTotal;
}

// output -> Price before, price after for each person
console.log("The total for Cameron is $" + cameronTotal + ", after discount it is $" + discountCameron);
console.log("The total for Ryan is $" + ryanTotal + ", after discount it is $" + discountRyan);
console.log("The total for George is $" + georgeTotal + ", after discount it is $" + discountGeorge);

// Flip a coin exercise

// Input
var flipACoin = Math.floor(Math.random()* 2);

// Process
var message;
if (flipACoin === 0) { // then
    message = "Buy a car";
} else { // otherwise
    message = "Buy a house";
}

var message2;
message2 = flipACoin === 0 ? "Buy a car" : "Buy a house";

// output
console.log(message);
console.log(message2);

// Lucky number
// input
var receipt = 60;
var luckyNumber = Math.floor(Math.random()* 6);

// process
var total, discount;
switch (luckyNumber) {
    case 0:
        discount = 0;
        total = receipt;
        break;
    case 1:
        discount = 10;
        // total = receipt - (receipt * .1);
        total = .9 * receipt;
        break;
    case 2:
        discount = 25;
        total = .75 * receipt;
        break;
    case 3: // 30%
        discount = 30;
        total = .7 * receipt;
        break;
    case 4:
        discount = 50;
        total = .5 * receipt;
        break;
    case 5:
        discount = 100;
        total = 0;
        break;
}

// output
console.log("You got a " + discount + "% discount. Your total to pay is " + total);


var maybe = confirm("Do you want to enter a number?");

if (maybe === true) {
    var probablyANumber = prompt("Enter a number");
    if (isNaN(probablyANumber)) {
        alert("That was not a number");
    } else {
        if (probablyANumber % 2 === 0) { // it's even
            alert("Your number is even");
        } else {
            alert("Your number is odd");
        }
        alert(Number(probablyANumber) + 100);
        if (probablyANumber > 0) {
            alert("Your number is positive :)");
        } else {
            alert("Your number is negative :|");
        }
    }
}
