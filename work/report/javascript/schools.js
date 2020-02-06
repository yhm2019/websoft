// JavaScript Document
(function () {
    'use strict';

    let url;
    var schools;
    var btn = document.getElementById("fetch");
    var element = document.getElementById("data")
    //url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
    url = "data/1081.json";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            schools = myJson;
            console.log(myJson);
            console.log("1");
            });

    btn.addEventListener("click",function(a){
        schools.Skolenheter = schools.Skolenheter.filter(function(a){
            return a.Skolenhetskod === "11842600";
        })
        console.log(schools.Skolenheter);
    });
    console.log = JSON.stringify(schools.Skolenheter,null,2);
    data.innerHTML = JSON.stringify(schools.Skolenheter,null,2);
    console.log('Sandbox is ready!');
})();

