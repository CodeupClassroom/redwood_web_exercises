/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function () {
    var $everything = $('*');  // caching the selection

    $everything.css('font-weight', 'bold');
    $everything.css('color', 'orange');

    // $ is an alias for jQuery
    // var $ = jQuery = {};
//        var $$ = function (selector) {
//            return $$;
//        };
//        $$.on = function(event, callback) {}
//
//        $$();
//        $$.on();

    $("#highlight").on("click", highlightImportantElementsWithJQuery);

    function highlightImportantElementsWithJQuery() {
        //console.log($(".important").length);
        $(".important").css("background-color", "yellow");
    }

    function bindEventToButtonUsingVanillaJS() {
        var highlightButton = document.getElementById("highlight");

        // Wishful thinking
        highlightButton.addEventListener("click", highlightImportantElements);
    }

    // Imperative
    function highlightImportantElements() {
        var importantElements = document.getElementsByClassName("important");

        for (var i = 0; i < importantElements.length; i++) {
            importantElements[i].style.backgroundColor = "yellow";
        }
    }
})();
