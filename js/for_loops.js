"use strict";
var i;
var number = prompt("Enter a number between 1 and 10");

for (i = 1; i <= 10; i++) {
    console.log(number + "x" + i + "=" + number * i );
}

for (i = 1; i <= 10; i++) {
    var number = Math.floor(Math.random() * 180) + 20;
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}

for (i = 1; i <= 10; i++) {
    console.log((i % 10).toString().repeat(i));
}

var j, repeated;
for (i = 1; i <= 10; i++) {
    repeated = "";
    for (j = 1; j <= i; j++) {
        repeated += i % 10;
    }
    console.log(repeated);
}
