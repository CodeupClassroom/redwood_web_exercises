'use strict';

// -------- if / else -----------------

// console.log('before the if statement');
//
// var userWantsToParticipate = confirm('Would you like to answer some questions about your voting behavior?');
//
// if (userWantsToParticipate) {
//     var numberOfTimesIVotedForTheSeatingChart = parseInt(prompt('How many times did you vote?'));
//
//     if (numberOfTimesIVotedForTheSeatingChart === 1) {
//         console.log('good job!');
//     } else if (numberOfTimesIVotedForTheSeatingChart > 1 && numberOfTimesIVotedForTheSeatingChart < 100) {
//         console.log('what do you think you\'re doing?');
//     } else if (numberOfTimesIVotedForTheSeatingChart > 100) {
//         console.log('You must have written a script to break the site');
//     } else if (numberOfTimesIVotedForTheSeatingChart === 0) {
//         console.log('why didn\'t you vote?');
//     } else {
//         console.log('None of the above');
//     }
// }

// console.log('after the if statement');

// ------------------------------------------------------------------

// ternary operator

// (/* condition */) ? 'value if true' : 'value if else';

// if (1 > 2) {
//     'math is broken'
// } else {
//     'everything is fine'
// }

// var message = (1 > 2) ? 'math is broken' : 'everything is fine';
//
// console.log(message);

// you can use a ternary when you see this pattern

// var message;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
//
// // rewritten with a ternary operator
// var message = (sucess) ? 'Operation was successful.' : 'Oops, something went wrong.';

// -------------------------------------------------------------

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else if (pizzaPreference === "anchovies") {
//     alert('You monster!');
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}

// switch case used when we want to compare a variable to multiple different literals

// // general syntax
// switch (/* variable we want to look at */) {
//     case /* a literal value */:
//         // statements
//         break;
// }

// var myNumber = 42;
//
switch (myNumber) {
    case 1:
        alert('the number is one!');
        break;
    case 2:
        alert('the number is two');
        break;
    case 3:
        alert('the number is three!');
        break;
    default:
        alert('none of the above');
        break;
}


switch (3) {
    case 1:
        // ...
        break;
    case 3:
        if (someCondition) {
            switch (someOtherVariable) {
                case: 'one':

                    break;
                case 'two':

                    break;
            }
        } else {

        }
        break;
    default:
        // ...
        break;
}


















