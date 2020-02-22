// JavaScript Document
(function () {
    'use strict';

    let url1,url2,url3;
    var btn = document.getElementById("fetch");
    var data = document.getElementById("data");
    var table = document.getElementById("table");
    // var message;
    // var json_table;
    // var json_tr;
    // var json_th;
    // var key;
    // var th_txt;
    //url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
    url1 = "data/1081.json";
    btn.addEventListener("click",function(a){
    fetch(url1)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            for(var i = 0; i < myJson.length; i ++) {
                var row = table.insertRow(table.rows.length);
                var c1 = row.insertCell(0);
                c1.innerHTML = myJson[i].Skolenhetskod;
                var c2 = row.insertCell(1);
                c1.innerHTML = myJson[i].Skolenhetnamn;
                var c3 = row.insertCell(2);
                c1.innerHTML = myJson[i].Kommunkod;
            }
            // data.innerHTML = JSON.stringify(myJson, null, 4);
            //tansfer string to js object
            // message = JSON.parse(myJson.responseText);
            // //create table element
            // json_table = document.createElement("table");
            // json_tr = document.createdElement("tr");
            // //read numbers of keys and the value of each key
            // for(key in message) {
            //     json_th = document.createdElement("th");
            //     //get key name
            //     th_txt = document.createTextNode(key);
            //     json_th.appendChild(th_txt);
            //     json_tr.appendChild(json_th);
            //     json_table.appendChild(json_tr);
            //     //change form style
            //     json_th.style.border = "1px solid black";
    
            });
    });
    
    // var select = document.getElementById("list");
    // var data2 = document.getElementById("data2");
    // var text = select.options[select.selectedIndex].text;
    // url2 = "data/1082.json";
    // url3 = "data/1083.json";
    //     if (text === "1081") {
    //         fetch(url1)
    //         . then((response) => {
    //         return response.json();
    //         })
    //     .then((myJson) => {
    //         data2.innerHTML = JSON.stringify(myJson, null, 4);
    //         });
    //     } else if (text === "1082") {
    //     fetch(url2)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((myJson) => {
    //         data2.innerHTML = JSON.stringify(myJson, null, 4);
    //         });
    //      } else if (text === "1083") {
    //         fetch(url3)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((myJson) => {
    //         data2.innerHTML = JSON.stringify(myJson, null, 4);
    //         });
    // };

    
    console.log('Sandbox is ready!');
})();

