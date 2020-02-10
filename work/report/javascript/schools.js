// JavaScript Document
(function () {
    'use strict';

    let url;
    var btn = document.getElementById("fetch");
    var data = document.getElementById("data")
    //url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
    url = "data/1081.json";
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
    var index = select.selectedIndex;
    var text = select.options[index].text;
        if (text === "1081") {
            fetch("data/1081.json")
            . then((response) => {
            return response.json();
            })
        .then((myJson) => {
            data2.innerHTML = JSON.stringify(myJson, null, 4);
            });
        } else if (text === "1082") {
        fetch("data/1082.json")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            data2.innerHTML = JSON.stringify(myJson, null, 4);
            });
         } else if (text === "1083") {
            fetch("data/1083.json")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            data2.innerHTML = JSON.stringify(myJson, null, 4);
            });
    };

    
    console.log('Sandbox is ready!');
})();

