// JavaScript Document
(function () {
    'use strict';

    let url1,url2,url3;
    var btn = document.getElementById("fetch");
    var data = document.getElementById("data")
    //url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
    url1 = "data/1081.json";
    btn.addEventListener("click",function(a){
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            data.innerHTML = JSON.stringify(myJson, null, 4);
            });
    });
    
    var select = document.getElementById("list");
    var data2 = document.getElementById("data2");
    var text = select.options[select.selectedIndex].text;
    url2 = "data/1082.json";
    url3 = "data/1083.json";
        if (text === "1081") {
            fetch("url1")
            . then((response) => {
            return response.json();
            })
        .then((myJson) => {
            data2.innerHTML = JSON.stringify(myJson, null, 4);
            });
        } else if (text === "1082") {
        fetch("url2")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            data2.innerHTML = JSON.stringify(myJson, null, 4);
            });
         } else if (text === "1083") {
            fetch("url3")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            data2.innerHTML = JSON.stringify(myJson, null, 4);
            });
    };

    
    console.log('Sandbox is ready!');
})();

