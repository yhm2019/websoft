// JavaScript Document
'use strict';
(function () {
    var btn = document.getElementById("fetch");
    var element = document.getElementById("content");
    let url;
	
    url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
   // url = "data/1081.json";
    btn.addEventListener("click",function(){
         fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });
    })
})
   
   
//	url = "https://rem.dbwebb.se/api/users";
//	fetch(url)
//        .then((response) => {
//            return response.json();
//        })
//        .then((myJson) => {
//            console.log(myJson);
//        });
//
//    console.log('Sandbox is ready!');
// 	document.getElementById("content").innerHTML;
// })();
//document.getElemrntById("fetch").addEventListener