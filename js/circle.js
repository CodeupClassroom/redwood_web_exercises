(function() {
    "use strict";

    // constant -> variable -> conditional -> loop -> function

    /**
     * This application will print out the area of several circles
     * and we have 2 ways to display
     *
     * 1. With the complete value
     * 2. With a rounded value
     */
    var circle = {
        radius: 3,

        getArea: function () {
            var area = Math.PI * Math.pow(this.radius, 2);
            return area;
        },

        /**
         * doRounding is a boolean flag that will either round or not the area of a circle
         *
         * @param boolean doRounding
         */
        logInfo: function (doRounding) {
            var area;
            if (doRounding) { // consequence
                area = Math.round(this.getArea());
            } else { // alternative
                area = this.getArea();
            }

            console.log(
                "Area of a circle with radius: " + this.radius +
                ", is: " + area
            );
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false); // doRounding = false
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true); // doRounding = true
    // circle.logInfo(); // doRounding = undefined -> false

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
