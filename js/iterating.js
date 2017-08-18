(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
     var names = new Array("Fer", "Luis", "Ryan", "Zach", "Justin");

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    for(var x = 0; x < names.length; x++){
        console.log(names[x]);
    }

    var printNmaes = function (element){
        console.log(element);
    }

    names.forEach( printNmaes );

})();
