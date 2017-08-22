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
})();
