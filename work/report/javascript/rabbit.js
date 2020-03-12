// JavaScript Document
'use strict';

(function() {
	var element = document.getElementById("rabbit");
    element.innerHTML = "<p>" + "Rabbit will disappear in 6 seconds" + "</p>";
	element.addEventListener("click",function(){
       //element.offsetLeft : Left margin relative to parent
        element.style.left = element.offsetLeft + 20 + "px";
        
         console.log("element.offsetLeft");
		console.log("Rabbit clicked");
	});

    var time = 6000;
    function disappear() {
        element.style.visibility = "hidden";
    }
    window.setInterval(disappear, time);
	// console.log("Rabbit ready");
})();
