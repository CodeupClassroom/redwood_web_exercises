/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

// Hoisting -> Move all definitions to the top (both variables and functions)
$(document).ready(changeTextOnParagraphAndTitle);

// Signature
function changeTextOnParagraphAndTitle() /*: void (undefined) */ {
    var h1 = document.querySelector("h1");  //null
    h1.innerText = "changed!!!";
    var p = document.querySelector("p");  //null
    p.innerText = "new content!!!";
}
