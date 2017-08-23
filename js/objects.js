(function(){
    "use strict";

    var person = {};  // literal object representation

    person.firstName = "Luis";
    person.lastName = "Montealegre";

    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    }; // literal function representation

    console.log(person.sayHello());

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // 3. loop
    // for loop
    // foreach function
    for (var i = 0; i < shoppers.length; i++) {
        var shopper = shoppers[i]; // current shopper
        console.log(buildReceipt(shopper));
    }

    shoppers.forEach(function (shopper) {
        console.log(buildReceipt(shopper));
    });


    function buildReceipt(shopper) {
        var discount = 0;
        var totalAfterDiscount = shopper.amount;
        // 2. Conditionals
        if (shopper.amount > 200) {
            discount = .1;
            totalAfterDiscount = shopper.amount - shopper.amount * discount;
        }
        return shopper.name
            + " has to pay $" + shopper.amount
            + ", it has a discount of $" + discount
            + ", the total to pay after the discount is $" + totalAfterDiscount
        ;
    }

    var books = [
        {
            title: "97 Things Every Programmer Should Know",
            author: {firstName: "Kevlin", lastName: "Henney"}
        },
        {
            title: "Growing Object-Oriented Software Guided by Tests",
            author: {firstName: "Steve", lastName: "Freeman"}
        },
        {
            title: " Working Effectively with Legacy Code",
            author: {firstName: "Michael", lastName:  "Feathers"}
        },
        {
            title: "Refactoring",
            author: {firstName: "Martin", lastName: "Fowler"}
        },
        {
            title: "The Pragmatic Programmer",
            author: { firstName: "Andy", lastName: "Hunt"}
        }
    ];

    console.log(books);

    books.forEach(function (book, i) {
        console.log("Book #" + (i + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    });

})();
