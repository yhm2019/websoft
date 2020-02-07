// JavaScript Document
(function () {
    'use strict';

    let url;
    var btn = document.getElementById("fetch");
    var data = document.getElementById("data")
    //url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
    url = "data/1081.json";
    function mySchool(Skolenheter) {
        return Skolenheter.Skolenhetskod === "11842600";
    }

    btn.addEventListener("click",function(a){
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            var school = myJson.Skolenheter.filter(mySchool);
            data.innerHTML = JSON.stringify(school, null, 4);
            });
    });
    
    var select = document.getElementById("list");
    if(select.selectedIndex === "0") {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            var school = myJson.Skolenheter.filter(mySchool);
            data.innerHTML = JSON.stringify(school, null, 4);
            });
    } else if(select.selectedIndex === "1") {
        fetch("data/1082.json")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            var school = myJson.Skolenheter.filter(mySchool);
            data2.innerHTML = JSON.stringify(school, null, 4);
            });
    } else if(select.selectedIndex === "2"){
        fetch("data/1083.json")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            var school = myJson.Skolenheter.filter(mySchool);
            data2.innerHTML = JSON.stringify(school, null, 4);
            });
    }
    console.log('Sandbox is ready!');
})();

