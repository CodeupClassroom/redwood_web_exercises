"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isNegative(number) {
    return number < 0;
}

function average(numbers) {
    var sum = 0;
    numbers.forEach(function (number) {
        sum += number;
    });
    return sum / numbers.length;
}

function countOdds(numbers) {
    var odds = 0;
    numbers.forEach(function (number) {
        odds += number % 2 !== 0 ? 1 : 0;
    });
    return odds;
}

function convertNameToObject(name) {
    var parts = name.split(" ");
    return {
        firstName: parts[0],
        lastName: parts[1]
    };
}

function fiveTo(limit) {
    var numbers = [];
    var isLessThan5 = limit < 5;
    var increment = isLessThan5 ? -1 : 1;
    for (var i = 5; isLessThan5 ? i >= limit : i <= limit; i += increment) {
        numbers.push(i);
    }
    return numbers;
}

function upperCaseLastNames(people) {
    var correctedNames = [];
    people.forEach(function (person) {
        correctedNames.push({
            firstName: person.firstName,
            lastName: person.lastName[0].toUpperCase() + person.lastName.substring(1)
        })
    });
    return correctedNames;
}
