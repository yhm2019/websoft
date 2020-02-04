// JavaScript Document
'use strict';

(function() {
	var element = document.getElementById("rabbit");
	element.addEventListener("click",function(){
        element.style.left = element.offsetLeft + 20 + "px";
        element.innerHTML = "<p>" + element.offsetLeft + "</p>";

         console.log("element.offsetLeft");
		console.log("Rabbit clicked");
	});

    
	console.log("Rabbit ready");
})();