/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
// Global
// Local (function level)
var name = "Luis"; // Global

// Variable hiding / shadowing
// Functions should be unaware of its context
function sayHello(name) { // Local name(local) = name (global) // copy of the original value
    var greet = "Hello"
    name = "Fernando";
    return greet + ", " + name + "!";
}

// console.log(greet); // This won't let the rest of the code to be executed
alert(sayHello(name));   // var copyName = name; call('sayHello', copyName);
console.log(sayHello(name));

console.log(name);