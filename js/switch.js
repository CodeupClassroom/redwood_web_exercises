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

// Cameron case
var sale;
sale = 180;
var minSale = 200;
