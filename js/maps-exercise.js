/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";
(function () {
    var maps = document.getElementsByClassName("map");
    var options = {
        zoom: 15,
        center: {
            lat:  29.426791,
            lng: -98.489602
        }
    };
    var map = new google.maps.Map(maps[0] /* DOM Element */, options /* Object */);
    var address = {address: "Paloma Blanca, San Antonio"};
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode(
        /* Object */ address,
        /* Callback function */ addMarker
    );

    document.getElementById("zoom-in").addEventListener(
        "click" /*event name */,
        zoomIn /* callback function*/
    );
    document.getElementById("zoom-out").addEventListener("click", zoomOut);

    function zoomIn() {
        map.setZoom(map.getZoom() + 1);
    }

    function zoomOut() {
        map.setZoom(map.getZoom() - 1);
    }

    function addMarker(
        results /* Array of objects */,
        statusCode /* A string with status message */
    ) {
        map.setCenter(/* Coordinates */ results[0].geometry.location);

        var marker = new google.maps.Marker(/*Object*/ {
            position: {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
            },
            map: map
        });

        var window = new google.maps.InfoWindow({
            content: "Paloma Blanca"
        } /* Options */);

        window.open(map, marker);
    }
})();
