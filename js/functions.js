"use strict";

// functions AKA sub-programs
// Function definition
// input -> process -> output
function sayHello(name) { // parameters are the input for functions
    return "Hello, " + name + "!"; // output
} // block -> function body -> process

// pattern -> function signature
// functionName(type parameters...) : returnType
// sayHello(string name): string

var myName = "Luis";
var helloMessage = sayHello(myName); // functions are expression if they return something (value)
//log(string messages...): void  (undefined)
console.log(helloMessage);

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

/**
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */
// isOdd(number number): string
function isOdd(number) {
    return number % 2 === 1 ? number + " is  odd!" : number + " is not odd!";
}

isOdd(5);  // number = 5
isOdd(random);  // number = random


/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */

function calculateTip(percentage, total){
    var tip = (percentage / 100) * total;
    return tip;
}

console.log(calculateTip(18, 100));


/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

function askForCheck(){
    var total = prompt("Give me the total");
    var percentage = prompt("Give me the tip %");
    var tip = calculateTip(percentage, total);
    console.log("Your tip is: " + tip);
}