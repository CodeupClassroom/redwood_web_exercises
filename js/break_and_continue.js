console.log("Breaks!");
//

var number = 0;

while(true){
    // Asks a question
    number = prompt("Give me an odd number between 1 and 50 ");
    number = parseInt(number);

    if( (number >= 1 &&  number <= 50) && (number % 2 == 1)  ){
        console.log("Found an odd number between the range of 1 and 50");
        break;
    }

}

// We are looking for only odd numbers, that's why we use i+=2 in the for loop
for(var i = 1; i <= 50; i+=2 ){

    if(number === i){
        console.log("Number to skip is: " + i);
        continue;
    }

    console.log("Here is an odd number: " + i);


}