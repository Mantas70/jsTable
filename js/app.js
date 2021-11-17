'use strict'
function tableCreate() {
    let table = document.createElement("table");
    let tBody = document.createElement("tableBody");
    let body = document.getElementsByTagName("body")[0];
    for (let i = 0; i < document.querySelector('input[type="text2"]').value; i++) {
        let row = document.createElement("tr");
        for (let i = 0; i < document.querySelector('input[type="text1"]').value; i++) {
            let tData = document.createElement("td");
            let tText = document.createTextNode("Man labai patinka JavaScript")
            row.appendChild(tData);
            tData.appendChild(tText);
            tData.setAttribute("style", "padding: 10px");
        }
        tBody.appendChild(row);
    }
    table.appendChild(tBody);
    body.appendChild(table);
    table.setAttribute("border", "1");
    table.setAttribute("style", "margin: 30px auto");
}