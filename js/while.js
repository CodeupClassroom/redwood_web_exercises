"use strict";

var limit = 65536;
/* part of my condition */
var powersOfTwo = 2; // accumulator

while (powersOfTwo <= limit) {
    console.log(powersOfTwo);
    // powersOfTwo = powersOfTwo * 2;
    powersOfTwo *= 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
var cones;
do {
    cones = Math.floor(Math.random() * 5) + 1;
    if (cones > allCones) {
        console.log("Cannot sell you " + cones + " cones I only have " + allCones + "...");
        continue;
    }
    allCones -= cones; // allCones = allCones - cones;
    console.log(cones + " cones sold...");
} while (allCones > 0);
console.log("Yay! I sold them all!");
