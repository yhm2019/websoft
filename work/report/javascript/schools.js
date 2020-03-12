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
                //Returns a TableRow representing the newly inserted row.
                //New row will be appended to the end of the table.
                var row = table.insertRow(table.rows.length);
                //Returns a TableCell object representing the newly created and inserted <td> element
                var c1 = row.insertCell(0);
                c1.innerHTML = myJson[i].Skolenhetskod;
                var c2 = row.insertCell(1);
                c2.innerHTML = myJson[i].Skolenhetsnamn;
                var c3 = row.insertCell(2);
                c3.innerHTML = myJson[i].Kommunkod;
                var c4 = row.insertCell(3);
                c4.innerHTML = myJson[i].PeOrgNr;
            }
    
            });
    });
    console.log('Sandbox is ready!');
})();

