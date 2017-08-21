// Create an instance of the Array Object, (Create a copy of)
var array = new Array();

// Create an instance of the Object Object, (Create a copy of)
var carRyan = new Object();

// Shorthand for creating instances of an Object
var luisCar = {};

var honkFx = function(){
    alert("Honk honk!");
};

// Shorthand for creating instances of an Object and it's properties
var myCar = {
    make: "Nissan",
    year: 2014,
    // Array in an object
    service_dates: ["03-05-2017","09-05-2017"],
    // An object inside of another object
    insurance: {
        policy_no: "ASDSA345345ASD",
        exp_date: "01-01-2018",
        drivers: ["Fernando Mendoza", "Luis Montes"]
    },
    // It uses the var honkFx to create the honk property with the function.
    honk: honkFx,
    openMoonRoof: function(){
        console.log("The "+ this.year + " "+ this.make + " opened the moon roof");
    }
};

// This creates the properties for the car obj. in line.
carRyan.make = "Honda";
carRyan.year = 2017;
carRyan.service_dates = ["03-05-2017","09-05-2017"];
carRyan.insurance = null;
// It uses the var honkFx to create the honk property with the function.
carRyan.honk = honkFx;

// This also creates the make property for the car obj. using an array convention
luisCar["make"] = "chevy";
luisCar["year"] = 2016;
luisCar["service_dates"] = ["03-05-2017","09-05-2017"];
// It uses the var honkFx to create the honk property with the function.
luisCar["honk"] = honkFx;
luisCar["openMoonRoof"] = function(){
    console.log("The "+ this.year + " "+ this.make + " opened the moon roof");
}


// Displays the whole objects structure
console.log(carRyan);
console.log(myCar);
console.log(luisCar);

// Creates an Array with all the 3 car objects i have
var cars = new Array(carRyan, myCar, luisCar);

// Go by the whole cars list one by one
cars.forEach(function(car){

    // Checks if the car has the openMoonRoof property
    if(car.hasOwnProperty("openMoonRoof")) {
        car.openMoonRoof();
    }
    // Display the insurance policy number if there's any.
    if(car.insurance != undefined && car.insurance != null){
        console.log("The policy No: " + car.insurance.policy_no);
    } else {
        console.log("The car is not insured");
    }
});