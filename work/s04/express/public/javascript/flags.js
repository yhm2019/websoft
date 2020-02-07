/*
* @Author: Hanmeng Yuan
* @Date:   2020-02-04 16:21:59
* @Last Modified by:   Hanmeng Yuan
* @Last Modified time: 2020-02-04 17:34:36
*/
(function () {
    'use strict';

    //var myContent = document.getElementById('content');
    var flagTarget = document.getElementById('flag');
    var flagElfenbenskusten = document.getElementById('draw-elfenbenskusten');
    var flagItaly=document.getElementById('draw-italy');
    var flagFrance=document.getElementById('draw-france');

    //myContent.innerHTML = '<h3>This is a MEGA template!</h3>';

    function drawFlagElfenbenskusten()  {
        var flagElfenbenskusten = '<div class="flag elfenbenskusten"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        flagTarget.innerHTML = flagElfenbenskusten;
    }


    flagElfenbenskusten.addEventListener("click", function () {
        console.log("Event for clicking link elfenbenskusten.");
        drawFlagElfenbenskusten();
    });

    function drawFlagItaly()  {
        var flagItaly = '<div class="flag italy"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        flagTarget.innerHTML = flagItaly;
    }


    flagItaly.addEventListener("click", function () {
        console.log("Event for clicking link italy.");
        drawFlagItaly();
    });

    function drawFlagFrance()  {
        var flagFrance = '<div class="flag france"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        flagTarget.innerHTML = flagFrance;
    }


    flagFrance.addEventListener("click", function () {
        console.log("Event for clicking link france.");
        drawFlagFrance();
    });


    console.log('Sandbox MEGA is ready!');
})();