/*
* SAPHIR - The Coming Soon Template
* Build Date: May 2018
* Last Update: May 2018
* Author: Madeon08
* Copyright (C) 2018-2XXX Madeon08
* This is a premium product available exclusively here : https://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. FullPage init
    3. Animate scroll fade adding
    4. Menu button
    5. Transition for nav & logo position
    6. Text rotator on loading screen
    7. Newsletter init
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).on('load', function () {
    "use strict";

    $('.brand-logo, #fp-nav, .main-content, footer').addClass('before-loading');

    setTimeout(function () {

        $(".loader").addClass('loaded');

    }, 2600);

    setTimeout(function () {

        $("#loading").addClass('loaded');

    }, 2800);

    setTimeout(function () {

        $(".brand-logo").removeClass('before-loading').addClass('loaded');

    }, 3000);

    setTimeout(function () {

        $("#fp-nav, .main-content").removeClass('before-loading').addClass('loaded');

    }, 3200);

    setTimeout(function () {

        $("footer").removeClass('before-loading').addClass('loaded');

    }, 3400);

    setTimeout(function () {

        $("#loading").remove();
        $(".brand-logo, footer").addClass('after-load');

    }, 3600);

    setTimeout(function () {

        $("#fp-nav").addClass('notransition');

    }, 4800);

});

$(document).ready(function () {
    "use strict";
    
});